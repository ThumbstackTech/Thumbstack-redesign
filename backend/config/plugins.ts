import type { Core } from '@strapi/strapi';

const config = ({ env }: Core.Config.Shared.ConfigParams): Core.Config.Plugin => {
  const apiKey = env('RESEND_API_KEY');
  if (!apiKey) {
    return {};
  }
  
  return {
    email: {
      config: {
        provider: 'strapi-provider-email-resend',
        providerOptions: {
          apiKey,
        },
        settings: {
          defaultFrom: env('RESEND_DEFAULT_EMAIL', 'onboarding@resend.dev'),
          defaultReplyTo: env('RESEND_DEFAULT_EMAIL', 'onboarding@resend.dev'),
        },
      },
    },
  };
};

export default config;
