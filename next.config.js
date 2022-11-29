const { withAxiom } = require("next-axiom");
const { withSentryConfig } = require("@sentry/nextjs");

const sentryWebpackPluginOptions = {
  silent: false,
};

module.exports = withSentryConfig(
  withAxiom({
    reactStrictMode: true,
    swcMinify: true,
  }),
  sentryWebpackPluginOptions
);
