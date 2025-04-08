module.exports = ({ env }) => ({
  auth: {
    secret: process.env.ADMIN_JWT_SECRET || 'd144992dc02ecaafcc178d8bccf4637c',
  },
});
