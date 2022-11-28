const { withSentryConfig } = require("@sentry/nextjs");

const sentryWebpackPluginOptions = {
  silent: false,
};

module.exports = withSentryConfig(
  {
    reactStrictMode: true,
    swcMinify: true,
  },
  sentryWebpackPluginOptions
);
