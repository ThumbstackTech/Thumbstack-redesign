import type { Schema, Struct } from '@strapi/strapi';

export interface ElementsCapabilityCard extends Struct.ComponentSchema {
  collectionName: 'components_elements_capability_cards';
  info: {
    description: 'Individual capability card for the capabilities section';
    displayName: 'Capability Card';
    icon: 'layout';
  };
  attributes: {
    buttonLink: Schema.Attribute.String & Schema.Attribute.DefaultTo<'#'>;
    buttonText: Schema.Attribute.String & Schema.Attribute.Required;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    iconType: Schema.Attribute.Enumeration<
      [
        'server-stack',
        'globe',
        'ai-brain',
        'mobile',
        'code-xml',
        'computer-programming',
        'web-design',
        'shopify',
        'shopping-cart',
        'user-group',
        'mentoring',
      ]
    > &
      Schema.Attribute.DefaultTo<'server-stack'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsCapabilityItem extends Struct.ComponentSchema {
  collectionName: 'components_elements_capability_items';
  info: {
    description: 'An item inside the Capabilities Listing section without mandatory images.';
    displayName: 'Capability Item';
    icon: 'list';
  };
  attributes: {
    description: Schema.Attribute.Text;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    link: Schema.Attribute.String & Schema.Attribute.DefaultTo<'#'>;
    linkText: Schema.Attribute.String;
    tags: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsFaqItem extends Struct.ComponentSchema {
  collectionName: 'components_elements_faq_items';
  info: {
    description: 'A single question and answer pair';
    displayName: 'FAQ Item';
    icon: 'info';
  };
  attributes: {
    answer: Schema.Attribute.Text & Schema.Attribute.Required;
    question: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsFeatureGroup extends Struct.ComponentSchema {
  collectionName: 'components_elements_feature_groups';
  info: {
    description: 'A group of features with a title';
    displayName: 'Feature Group';
    icon: 'layer-group';
  };
  attributes: {
    items: Schema.Attribute.Component<'elements.feature-item', true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsFeatureItem extends Struct.ComponentSchema {
  collectionName: 'components_elements_feature_items';
  info: {
    description: 'A single item in a feature group';
    displayName: 'Feature Item';
    icon: 'list';
  };
  attributes: {
    text: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsGridItem extends Struct.ComponentSchema {
  collectionName: 'components_elements_grid_items';
  info: {
    description: 'An item in a grid with icon, title, description, and link';
    displayName: 'Grid Item';
    icon: 'box';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images'>;
    linkText: Schema.Attribute.String;
    linkUrl: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsListItem extends Struct.ComponentSchema {
  collectionName: 'components_elements_list_items';
  info: {
    description: 'An item in an interactive list with an image reveal';
    displayName: 'List Item';
    icon: 'list';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    link: Schema.Attribute.String & Schema.Attribute.DefaultTo<'#'>;
    tags: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsNavLink extends Struct.ComponentSchema {
  collectionName: 'components_elements_nav_links';
  info: {
    description: 'A navigation link with a label and URL';
    displayName: 'Nav Link';
    icon: 'link';
  };
  attributes: {
    label: Schema.Attribute.String;
    page: Schema.Attribute.Relation<'oneToOne', 'api::page.page'>;
    url: Schema.Attribute.String;
  };
}

export interface ElementsOfficeItem extends Struct.ComponentSchema {
  collectionName: 'components_elements_office_items';
  info: {
    description: 'A single office location with contact details';
    displayName: 'Office Item';
    icon: 'map-pin';
  };
  attributes: {
    address: Schema.Attribute.Text;
    city: Schema.Attribute.String;
    email: Schema.Attribute.String;
    phone: Schema.Attribute.String;
  };
}

export interface ElementsProcessStage extends Struct.ComponentSchema {
  collectionName: 'components_elements_process_stages';
  info: {
    description: "An individual stage inside the 'How we work' process section.";
    displayName: 'Process Stage';
    icon: 'step-forward';
  };
  attributes: {
    description: Schema.Attribute.Text;
    features: Schema.Attribute.Text;
    icon: Schema.Attribute.Enumeration<
      ['lightbulb', 'paintroller', 'code-circle', 'sparkle']
    > &
      Schema.Attribute.DefaultTo<'lightbulb'>;
    link: Schema.Attribute.String & Schema.Attribute.DefaultTo<'#'>;
    linkText: Schema.Attribute.String;
    tagline: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsServiceInfoItem extends Struct.ComponentSchema {
  collectionName: 'components_elements_service_info_items';
  info: {
    description: 'An item inside the Service Info section containing title, description, tags and outcomes.';
    displayName: 'Service Info Item';
    icon: 'list';
  };
  attributes: {
    description: Schema.Attribute.Text;
    outcomeDescription: Schema.Attribute.Text;
    outcomeTitle: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Outcome'>;
    tags: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsStackCard extends Struct.ComponentSchema {
  collectionName: 'components_elements_stack_cards';
  info: {
    description: "An individual card inside the 'From The Stack' carousel";
    displayName: 'Stack Card';
    icon: 'list';
  };
  attributes: {
    case_study: Schema.Attribute.Relation<
      'oneToOne',
      'api::case-study.case-study'
    >;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    link: Schema.Attribute.String;
    logo: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    news_detailed: Schema.Attribute.Relation<
      'oneToOne',
      'api::news-detailed.news-detailed'
    >;
    tag: Schema.Attribute.Enumeration<
      ['Blog', 'Article', 'Case Study', 'News', 'Tutorial']
    > &
      Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsStackColumn extends Struct.ComponentSchema {
  collectionName: 'components_elements_stack_columns';
  info: {
    description: 'A column containing a list of stack items';
    displayName: 'Stack Column';
    icon: 'list';
  };
  attributes: {
    items: Schema.Attribute.Component<'elements.feature-item', true>;
  };
}

export interface ElementsTeamMember extends Struct.ComponentSchema {
  collectionName: 'components_elements_team_members';
  info: {
    description: 'Individual team member';
    displayName: 'Team Member';
    icon: 'user';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    role: Schema.Attribute.String;
  };
}

export interface SharedAboutHero extends Struct.ComponentSchema {
  collectionName: 'components_shared_about_heroes';
  info: {
    description: 'Hero section for the About page with 3 high-quality dynamic images';
    displayName: 'About Hero';
    icon: 'user';
  };
  attributes: {
    bgColor: Schema.Attribute.String & Schema.Attribute.DefaultTo<'#FFFFFF'>;
    heading: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'A tight team, doing deliberate work.'>;
    image1: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    image2: Schema.Attribute.Media<'images'>;
    image3: Schema.Attribute.Media<'images'>;
    subheading: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<"We're a design and technology studio from India, working closely with teams around the world to build thoughtful digital products.">;
    textColor: Schema.Attribute.String & Schema.Attribute.DefaultTo<'#0F1D07'>;
  };
}

export interface SharedBestFit extends Struct.ComponentSchema {
  collectionName: 'components_shared_best_fits';
  info: {
    description: 'Best Fit section listing customizable scenario lines';
    displayName: 'Best Fit';
    icon: 'thumbs-up';
  };
  attributes: {
    bgColor: Schema.Attribute.String & Schema.Attribute.DefaultTo<'#95E7D3'>;
    description: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'This is best suited for businesses that need a website to carry serious brand, content, SEO, lead generation, or operational value.'>;
    heading: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Best fit for businesses that need more than a basic website.'>;
    scenarios: Schema.Attribute.Text;
    textColor: Schema.Attribute.String & Schema.Attribute.DefaultTo<'#0F1D07'>;
  };
}

export interface SharedBuildYourStack extends Struct.ComponentSchema {
  collectionName: 'components_shared_build_your_stacks';
  info: {
    description: 'Fun little interactive budget/stack estimator component';
    displayName: 'Build Your Stack Estimator';
    icon: 'chart-pie';
  };
  attributes: {
    description: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<"A fun little estimator to help you imagine what it'll take to bring your idea to life. One block at a time.">;
    logo: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Build Your Stack.'>;
  };
}

export interface SharedCapabilities extends Struct.ComponentSchema {
  collectionName: 'components_shared_capabilities';
  info: {
    description: 'Interactive horizontal scrolling capabilities showcase with glow hover effects';
    displayName: 'Capabilities';
    icon: 'grid';
  };
  attributes: {
    capabilities: Schema.Attribute.Component<'elements.capability-card', true>;
    enableSection: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
  };
}

export interface SharedCapabilitiesFeatures extends Struct.ComponentSchema {
  collectionName: 'components_shared_capabilities_features';
  info: {
    description: 'Grid of capability groups and features';
    displayName: 'Capabilities Features';
    icon: 'layout';
  };
  attributes: {
    description: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'A custom website needs more than pages. It needs the right structure, content system, technical foundation, and support path.'>;
    groups: Schema.Attribute.Component<'elements.feature-group', true>;
    title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Custom Website Design, Development, CMS, And Support.'>;
  };
}

export interface SharedCapabilitiesHero extends Struct.ComponentSchema {
  collectionName: 'components_shared_capabilities_heroes';
  info: {
    description: 'Hero section for the capabilities page';
    displayName: 'Capabilities Hero';
    icon: 'star';
  };
  attributes: {
    ctaLink: Schema.Attribute.String;
    ctaText: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    label: Schema.Attribute.String;
    title: Schema.Attribute.Text;
    viewWorkLink: Schema.Attribute.String;
    viewWorkText: Schema.Attribute.String;
  };
}

export interface SharedCapabilitiesHeroDetail extends Struct.ComponentSchema {
  collectionName: 'components_shared_capabilities_hero_details';
  info: {
    description: 'Hero section with heading details and an interactive form card on the right.';
    displayName: 'Capabilities Hero Detail';
    icon: 'heading';
  };
  attributes: {
    description: Schema.Attribute.Text;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    primaryCtaLink: Schema.Attribute.String & Schema.Attribute.DefaultTo<'#'>;
    primaryCtaText: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Start A Website Project'>;
    secondaryCtaLink: Schema.Attribute.String & Schema.Attribute.DefaultTo<'#'>;
    secondaryCtaText: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'View Our Work'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedCapabilitiesInfo extends Struct.ComponentSchema {
  collectionName: 'components_shared_capabilities_infos';
  info: {
    description: 'Information section with headline and descriptive paragraphs';
    displayName: 'Capabilities Info';
    icon: 'lightbulb';
  };
  attributes: {
    accentColor: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'#3145DD'>;
    backgroundColor: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'#95E7D3'>;
    headingLine1: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'A Good Website Is'>;
    headingLine2: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Not Just Designed.'>;
    headingLine3: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'It Is Structured Properly.'>;
    paragraphs: Schema.Attribute.Component<'elements.feature-item', true>;
  };
}

export interface SharedCapabilitiesListing extends Struct.ComponentSchema {
  collectionName: 'components_shared_capabilities_listings';
  info: {
    description: 'Redesigned capabilities section with two-column layout and tag pills.';
    displayName: 'Capabilities Listing';
    icon: 'list-ul';
  };
  attributes: {
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    items: Schema.Attribute.Component<'elements.capability-item', true>;
    subheading: Schema.Attribute.Text;
  };
}

export interface SharedCtaSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_cta_sections';
  info: {
    description: 'Call-to-action section with subtitle, heading, and buttons';
    displayName: 'CTA Section';
    icon: 'share-alt';
  };
  attributes: {
    mainHeading: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'Want Deeper Insights Or Want To Build Something With Us?'>;
    primaryButtonLink: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'/contact'>;
    primaryButtonText: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Get In Touch'>;
    secondaryButtonLink: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'/build'>;
    secondaryButtonText: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<"Let's Build Together">;
    subtitle: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<"Let's chat about your idea, your product, or your next launch.">;
  };
}

export interface SharedFaqSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_faq_sections';
  info: {
    description: 'Frequently Asked Questions';
    displayName: 'FAQ Section';
    icon: 'question';
  };
  attributes: {
    faqs: Schema.Attribute.Component<'elements.faq-item', true>;
    heading: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Frequently Asked Questions'>;
  };
}

export interface SharedFooter extends Struct.ComponentSchema {
  collectionName: 'components_shared_footers';
  info: {
    description: 'Global site footer with contact info, social links and quick links';
    displayName: 'Footer';
    icon: 'layout-bottom';
  };
  attributes: {
    newsletterLabel: Schema.Attribute.String;
    offices: Schema.Attribute.Component<'elements.office-item', true>;
    privacyLabel: Schema.Attribute.String;
    privacyUrl: Schema.Attribute.String;
    quickLinks: Schema.Attribute.Component<'elements.nav-link', true>;
    subTagline: Schema.Attribute.String;
    tagline: Schema.Attribute.String;
    termsLabel: Schema.Attribute.String;
    termsUrl: Schema.Attribute.String;
  };
}

export interface SharedHero extends Struct.ComponentSchema {
  collectionName: 'components_shared_heroes';
  info: {
    description: 'Main landing page hero section';
    displayName: 'Hero';
    icon: 'layout';
  };
  attributes: {
    ctaLink: Schema.Attribute.String & Schema.Attribute.DefaultTo<'#work'>;
    ctaText: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'View Our Work'>;
    mainHeadingLine1: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'meaningful digital'>;
    mainHeadingLine2: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'experiences'>;
    subtext1: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'We Build The Remarkable, Not The Routine.'>;
    subtext2: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Thoughtfully Crafted. Bold In Execution.'>;
    titleMiddle: Schema.Attribute.String & Schema.Attribute.DefaultTo<'and'>;
    titlePrefix: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Designing'>;
    titleSuffix: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'building'>;
  };
}

export interface SharedHeroWork extends Struct.ComponentSchema {
  collectionName: 'components_shared_hero_works';
  info: {
    description: 'Dynamic Hero Work section with customizable images, backgrounds, and badges';
    displayName: 'Hero Work';
    icon: 'briefcase';
  };
  attributes: {
    bgColor: Schema.Attribute.String & Schema.Attribute.DefaultTo<'#3145DD'>;
    card1BadgeSubtext: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Read'>;
    card1BadgeText: Schema.Attribute.String & Schema.Attribute.DefaultTo<'BFT'>;
    card1BgColor: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'#7FABA2'>;
    card1Image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    card2BgColor: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'#9EA3F1'>;
    card2Image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    ctaLink: Schema.Attribute.String & Schema.Attribute.DefaultTo<'#'>;
    ctaText: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<"Let's Build Together">;
    description: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<"A curated collection of digital products, brand systems, and platforms we've built across real estate, e-commerce, enterprise systems, and emerging startups.">;
    headingLine1: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Work That Moves'>;
    headingLine2: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Businesses Forward'>;
    textColor: Schema.Attribute.String & Schema.Attribute.DefaultTo<'#FFFFFF'>;
  };
}

export interface SharedHowWeWork extends Struct.ComponentSchema {
  collectionName: 'components_shared_how_we_works';
  info: {
    description: 'How We Work (Four Stages. One Connected Process) process section.';
    displayName: 'How We Work';
    icon: 'sync';
  };
  attributes: {
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    stages: Schema.Attribute.Component<'elements.process-stage', true>;
    subheading: Schema.Attribute.Text;
  };
}

export interface SharedInfo extends Struct.ComponentSchema {
  collectionName: 'components_shared_infos';
  info: {
    description: 'Blue info banner with a tagline, heading, and optional decorative image';
    displayName: 'Info Banner';
    icon: 'information';
  };
  attributes: {
    decorativeImage: Schema.Attribute.Media<'images'>;
    heading: Schema.Attribute.Text;
    tagline: Schema.Attribute.String;
  };
}

export interface SharedInteractiveList extends Struct.ComponentSchema {
  collectionName: 'components_shared_interactive_lists';
  info: {
    description: 'A section with a list of items that reveal images on hover';
    displayName: 'Interactive List';
    icon: 'list-ul';
  };
  attributes: {
    ctaLink: Schema.Attribute.String & Schema.Attribute.DefaultTo<'/contact'>;
    ctaText: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<"Let's Build Together">;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    items: Schema.Attribute.Component<'elements.list-item', true>;
    subheading: Schema.Attribute.String;
  };
}

export interface SharedLetsTalk extends Struct.ComponentSchema {
  collectionName: 'components_shared_lets_talks';
  info: {
    description: 'Contact form section with background image and tagline';
    displayName: "Let's Talk Form";
    icon: 'mail';
  };
  attributes: {
    bgImage: Schema.Attribute.Media<'images'>;
    description: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<"Great products begin with simple conversations. Tell us what you're envisioning \u2014 the goals, the gaps, the sparks \u2014 and we'll come back with ideas, clarity, and a way forward that actually moves the needle.">;
    tagline: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Get in touch'>;
    title: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Lets Create'>;
  };
}

export interface SharedNewsAndInsightsGrid extends Struct.ComponentSchema {
  collectionName: 'components_shared_news_and_insights_grids';
  info: {
    description: 'Dynamic grid component that displays news articles';
    displayName: 'News and Insights Grid';
    icon: 'grid';
  };
  attributes: {
    ctaLink: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'/news-and-insights'>;
    ctaText: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'View All Stories'>;
    limit: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<-1>;
    news_detaileds: Schema.Attribute.Relation<
      'oneToMany',
      'api::news-detailed.news-detailed'
    >;
    showFilters: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.DefaultTo<'All Stories'>;
  };
}

export interface SharedNewsHero extends Struct.ComponentSchema {
  collectionName: 'components_shared_news_heroes';
  info: {
    description: 'Hero section for the News & Insights page';
    displayName: 'News Hero';
    icon: 'bullhorn';
  };
  attributes: {
    bgColor: Schema.Attribute.String & Schema.Attribute.DefaultTo<'#3145DD'>;
    ctaLink: Schema.Attribute.String & Schema.Attribute.DefaultTo<'#'>;
    ctaText: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<"Let's Build Together">;
    description: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'We document what we learn \u2014 from design sprints to engineering breakthroughs, new project launches, experiments, and small discoveries that move our work forward.'>;
    heading: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Ideas, News & Notes From The Studio.'>;
    textColor: Schema.Attribute.String & Schema.Attribute.DefaultTo<'#FFFFFF'>;
  };
}

export interface SharedPartnerBrands extends Struct.ComponentSchema {
  collectionName: 'components_shared_partner_brands';
  info: {
    description: 'A grid of partner brand logos';
    displayName: 'Partner Brands';
    icon: 'grid';
  };
  attributes: {
    heading: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Partnered Brands.'>;
    logos: Schema.Attribute.Media<'images', true> & Schema.Attribute.Required;
  };
}

export interface SharedPrinciples extends Struct.ComponentSchema {
  collectionName: 'components_shared_principles';
  info: {
    description: 'Our process principles with icons and descriptions';
    displayName: 'Principles (Our Process)';
    icon: 'sync';
  };
  attributes: {
    ctaLink: Schema.Attribute.String & Schema.Attribute.DefaultTo<'#'>;
    ctaText: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Explore Our Services'>;
    description: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'Whether we are building a Shopify store, a custom website, a CMS platform, or a mobile app ecosystem, the process stays connected.'>;
    heading: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Every Capability Runs Through The Same System.'>;
    items: Schema.Attribute.Component<'elements.grid-item', true>;
    marqueeItems: Schema.Attribute.String;
  };
}

export interface SharedProductDriven extends Struct.ComponentSchema {
  collectionName: 'components_shared_product_drivens';
  info: {
    description: 'Premium dynamic floating product-driven / tech tools section';
    displayName: 'Product Driven';
    icon: 'cog';
  };
  attributes: {
    bgColor: Schema.Attribute.String & Schema.Attribute.DefaultTo<'#FFFFFF'>;
    headingLine1: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Product-Smart.'>;
    headingLine2: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Progress-Driven.'>;
    logos: Schema.Attribute.Media<'images', true>;
  };
}

export interface SharedProjectsSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_projects_sections';
  info: {
    description: 'A dynamic portfolio projects showcase section';
    displayName: 'Projects Section';
    icon: 'briefcase';
  };
  attributes: {
    heading: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Selected Work.'>;
  };
}

export interface SharedRightStack extends Struct.ComponentSchema {
  collectionName: 'components_shared_right_stacks';
  info: {
    description: 'Built on the right stack section with dynamic column lists';
    displayName: 'Right Stack';
    icon: 'layer-group';
  };
  attributes: {
    columns: Schema.Attribute.Component<'elements.stack-column', true>;
    description: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'We choose the technology based on the project. A simple marketing website, a content heavy website, and a multi region CMS website do not need the same build approach.'>;
    title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Built on the right stack for the website.'>;
  };
}

export interface SharedServiceHero extends Struct.ComponentSchema {
  collectionName: 'components_shared_service_heroes';
  info: {
    description: 'Service page hero section with heading, description, and CTA buttons';
    displayName: 'Service Hero';
    icon: 'heading';
  };
  attributes: {
    description: Schema.Attribute.RichText &
      Schema.Attribute.DefaultTo<'We help brands, founders, and teams turn digital ideas into clear, usable, and scalable products. From websites and e-commerce platforms to mobile apps, CMS systems, AI led tools, and long term support, we work across the full lifecycle of digital experience.'>;
    mainHeading: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'Strategise. Design. Build. Grow.'>;
    primaryButtonLink: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'/contact'>;
    primaryButtonText: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Start building'>;
    secondaryButtonLink: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'/our-work'>;
    secondaryButtonText: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'View Our Work'>;
  };
}

export interface SharedServiceHeroDetail extends Struct.ComponentSchema {
  collectionName: 'components_shared_service_hero_details';
  info: {
    description: 'Hero section for service details with tagline, title, description and buttons.';
    displayName: 'Service Hero Detail';
    icon: 'align-left';
  };
  attributes: {
    description: Schema.Attribute.Text;
    primaryCtaLink: Schema.Attribute.String & Schema.Attribute.DefaultTo<'#'>;
    primaryCtaText: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Start With Strategy'>;
    secondaryCtaLink: Schema.Attribute.String & Schema.Attribute.DefaultTo<'#'>;
    secondaryCtaText: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'View Our Work'>;
    tagline: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Strategise'>;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface SharedServiceInfo extends Struct.ComponentSchema {
  collectionName: 'components_shared_service_infos';
  info: {
    description: 'Information block for services with customizable items, tags, and outcomes.';
    displayName: 'Service Info';
    icon: 'align-justify';
  };
  attributes: {
    items: Schema.Attribute.Component<'elements.service-info-item', true>;
    tagline: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'What we help with'>;
  };
}

export interface SharedSidebar extends Struct.ComponentSchema {
  collectionName: 'components_shared_sidebars';
  info: {
    description: 'Dynamic sidebar navigation overlay with custom links, logo and email';
    displayName: 'Sidebar Menu';
    icon: 'menu';
  };
  attributes: {
    email: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'hey@thumbstack.co'>;
    links: Schema.Attribute.Component<'elements.nav-link', true>;
    logoText: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Thumbstack.'>;
  };
}

export interface SharedStackItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_stack_items';
  info: {
    description: "Blog/news carousel section 'From The Stack'";
    displayName: 'From The Stack';
    icon: 'list';
  };
  attributes: {
    ctaLink: Schema.Attribute.String & Schema.Attribute.DefaultTo<'#'>;
    ctaText: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Explore More'>;
    heading: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'From The Stack'>;
    items: Schema.Attribute.Component<'elements.stack-card', true>;
    subheading: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<"Our latest launches, experiments, and thoughts on what's shaping design and technology.">;
  };
}

export interface SharedTag extends Struct.ComponentSchema {
  collectionName: 'components_shared_tags';
  info: {
    description: 'A reusable text tag component';
    displayName: 'Tag';
    icon: 'tag';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedTeamSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_team_sections';
  info: {
    description: 'Our Team';
    displayName: 'Team Section';
    icon: 'users';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String & Schema.Attribute.DefaultTo<'The Team'>;
    members: Schema.Attribute.Component<'elements.team-member', true>;
  };
}

export interface SharedWhatWeBuild extends Struct.ComponentSchema {
  collectionName: 'components_shared_what_we_builds';
  info: {
    description: 'Tag-cloud section listing the types of websites/products built';
    displayName: 'What We Build';
    icon: 'puzzle-piece';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    tags: Schema.Attribute.JSON;
  };
}

export interface SharedWorkInteractiveList extends Struct.ComponentSchema {
  collectionName: 'components_shared_work_interactive_lists';
  info: {
    description: 'A list with full-width dark green background on hover, image overlay, and custom view cursor';
    displayName: 'Work Interactive List';
    icon: 'list-ul';
  };
  attributes: {
    ctaLink: Schema.Attribute.String & Schema.Attribute.DefaultTo<'/our-work'>;
    ctaText: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Explore More'>;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    items: Schema.Attribute.Component<'elements.list-item', true>;
    subheading: Schema.Attribute.String;
  };
}

export interface SharedWorkItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_work_items';
  info: {
    description: 'Case study showcase item for work/portfolio section';
    displayName: 'Work Item';
    icon: 'briefcase';
  };
  attributes: {
    clientCompany: Schema.Attribute.String & Schema.Attribute.Required;
    clientName: Schema.Attribute.String & Schema.Attribute.Required;
    clientTitle: Schema.Attribute.String & Schema.Attribute.Required;
    companyLogo: Schema.Attribute.String & Schema.Attribute.Required;
    companyLogoColor: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'#D9443E'>;
    ctaLink: Schema.Attribute.String & Schema.Attribute.DefaultTo<'/contact'>;
    ctaText: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Start your story'>;
    featuredImage: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    playButtonColor: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'#FDEBEB'>;
    quote: Schema.Attribute.Text & Schema.Attribute.Required;
    slug: Schema.Attribute.UID<'title'>;
    subtitle: Schema.Attribute.Text & Schema.Attribute.Required;
    tags: Schema.Attribute.Component<'shared.tag', true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    video: Schema.Attribute.Media<'files' | 'images' | 'videos'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'elements.capability-card': ElementsCapabilityCard;
      'elements.capability-item': ElementsCapabilityItem;
      'elements.faq-item': ElementsFaqItem;
      'elements.feature-group': ElementsFeatureGroup;
      'elements.feature-item': ElementsFeatureItem;
      'elements.grid-item': ElementsGridItem;
      'elements.list-item': ElementsListItem;
      'elements.nav-link': ElementsNavLink;
      'elements.office-item': ElementsOfficeItem;
      'elements.process-stage': ElementsProcessStage;
      'elements.service-info-item': ElementsServiceInfoItem;
      'elements.stack-card': ElementsStackCard;
      'elements.stack-column': ElementsStackColumn;
      'elements.team-member': ElementsTeamMember;
      'shared.about-hero': SharedAboutHero;
      'shared.best-fit': SharedBestFit;
      'shared.build-your-stack': SharedBuildYourStack;
      'shared.capabilities': SharedCapabilities;
      'shared.capabilities-features': SharedCapabilitiesFeatures;
      'shared.capabilities-hero': SharedCapabilitiesHero;
      'shared.capabilities-hero-detail': SharedCapabilitiesHeroDetail;
      'shared.capabilities-info': SharedCapabilitiesInfo;
      'shared.capabilities-listing': SharedCapabilitiesListing;
      'shared.cta-section': SharedCtaSection;
      'shared.faq-section': SharedFaqSection;
      'shared.footer': SharedFooter;
      'shared.hero': SharedHero;
      'shared.hero-work': SharedHeroWork;
      'shared.how-we-work': SharedHowWeWork;
      'shared.info': SharedInfo;
      'shared.interactive-list': SharedInteractiveList;
      'shared.lets-talk': SharedLetsTalk;
      'shared.news-and-insights-grid': SharedNewsAndInsightsGrid;
      'shared.news-hero': SharedNewsHero;
      'shared.partner-brands': SharedPartnerBrands;
      'shared.principles': SharedPrinciples;
      'shared.product-driven': SharedProductDriven;
      'shared.projects-section': SharedProjectsSection;
      'shared.right-stack': SharedRightStack;
      'shared.service-hero': SharedServiceHero;
      'shared.service-hero-detail': SharedServiceHeroDetail;
      'shared.service-info': SharedServiceInfo;
      'shared.sidebar': SharedSidebar;
      'shared.stack-item': SharedStackItem;
      'shared.tag': SharedTag;
      'shared.team-section': SharedTeamSection;
      'shared.what-we-build': SharedWhatWeBuild;
      'shared.work-interactive-list': SharedWorkInteractiveList;
      'shared.work-item': SharedWorkItem;
    }
  }
}
