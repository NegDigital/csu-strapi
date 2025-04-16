'use strict';

/**
 * job-offer router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = {
  routes: [
    {
      method: 'POST',
      path: '/job-offers/upload-pdf',
      handler: 'job-offer.uploadPdf',
      config: {
        middlewares: [],
      },
    },
    ...createCoreRouter('api::job-offer.job-offer').routes,
  ],
};
