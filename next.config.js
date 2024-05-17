const { withClerk } = require('@clerk/nextjs/api');

module.exports = withClerk({
  reactStrictMode: true,
  // other configurations
});