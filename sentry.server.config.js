import * as Sentry from "@sentry/nextjs";

const SENTRY_DSN = process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN;

Sentry.init({
  dsn:
    SENTRY_DSN ||
    "https://aea8546228df44a99572eb0eace2a958@o4504238579974144.ingest.sentry.io/4504238580760576",
  tracesSampleRate: 1.0,
});
