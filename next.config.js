module.exports = {
  target: "serverless",
  experimental: {
    modern: true,
    rewrites() {
      return [
        {
          source: "/feed.xml",
          destination: "/_next/static/feed.xml",
        },
      ];
    },
  },
  webpack: function (config, { isServer, dev }) {
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader",
    });

    if (isServer && !dev) {
      const originalEntry = config.entry;
      config.entry = async () => {
        const entries = { ...(await originalEntry()) };
        // This script imports components from the Next app, so it's transpiled to `.next/server/scripts/build-rss.js`
        entries['./scripts/generate-rss.js'] = './scripts/generate-rss.js';
        return entries;
      };
    }

    return config;
  },
};
