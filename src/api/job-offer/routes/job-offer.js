'use strict';

/**
 * job-offer router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

const router = createCoreRouter('api::job-offer.job-offer');

router.routes.push({
  method: 'POST',
  path: '/job-offers/upload-pdf',
  handler: 'job-offer.uploadPdf',
  config: {
    middlewares: [],
  },
});

module.exports = router;
