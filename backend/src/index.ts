import type { Core } from '@strapi/strapi';
import fs from 'fs';
import path from 'path';

export default {
  register({ strapi }: { strapi: Core.Strapi }) {},

  async bootstrap({ strapi }: { strapi: Core.Strapi }) {
    // 1. Set Permissions for Public Role
    try {
      const publicRole = await strapi.db.query('plugin::users-permissions.role').findOne({
        where: { type: 'public' },
      });

      if (publicRole) {
        const permissions = [
          { action: 'api::brand.brand.find', role: publicRole.id },
          { action: 'api::brand.brand.findOne', role: publicRole.id },
          { action: 'api::tech-stack.tech-stack.find', role: publicRole.id },
          { action: 'api::tech-stack.tech-stack.findOne', role: publicRole.id },
        ];

        for (const permission of permissions) {
          const existing = await strapi.db.query('plugin::users-permissions.permission').findOne({
            where: {
              action: permission.action,
              role: permission.role,
            },
          });

          if (!existing) {
            await strapi.db.query('plugin::users-permissions.permission').create({
              data: permission,
            });
          }
        }
        strapi.log.info('Public permissions for brands and tech-stack configured');
      }
    } catch (error) {
      strapi.log.error('Failed to configure public permissions: ' + error.message);
    }

    // 2. Seed Brands Data
    try {
      const brandsPath = path.join(process.cwd(), '../frontend/app/data/brands.json');
      if (fs.existsSync(brandsPath)) {
        const brandsData = JSON.parse(fs.readFileSync(brandsPath, 'utf8'));
        
        // Check for broken brands (legacy from schema mistake)
        const allBrands = await strapi.db.query('api::brand.brand').findMany();
        if (allBrands.length > 0 && allBrands.some(b => !b.name)) {
          strapi.log.info('Wiping broken brands...');
          for (const b of allBrands) {
            await strapi.db.query('api::brand.brand').delete({ where: { id: b.id } });
          }
        }

        for (const brand of brandsData) {
          const existing = await strapi.db.query('api::brand.brand').findOne({
            where: { name: brand.name },
          });

          if (!existing) {
            await strapi.db.query('api::brand.brand').create({
              data: {
                name: brand.name,
                publishedAt: new Date(),
              },
            });
          }
        }
        strapi.log.info('Brands data synced');
      }
    } catch (error) {
      strapi.log.error('Failed to seed brands data: ' + error.message);
    }

    // 3. Seed Tech Stack Data
    try {
      const count = await strapi.db.query('api::tech-stack.tech-stack').count();
      if (count === 0) {
        const techStack = [
          "Shopify", "Figma", "Flutter", "Meta", "Android", "Python", 
          "Chrome", "Apple", "React", "Next.js", "Node.js", "PostgreSQL",
          "Reach", "Swift", "Kotlin", "Go"
        ];
        for (const tech of techStack) {
          await strapi.db.query('api::tech-stack.tech-stack').create({
            data: {
              name: tech,
              publishedAt: new Date(),
            },
          });
        }
        strapi.log.info(`Seeded ${techStack.length} tech stack items`);
      }
    } catch (error) {
      strapi.log.error('Failed to seed tech stack data: ' + error.message);
    }
  },
};
