'use strict';

/**
 *  job-offer controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::job-offer.job-offer', ({ strapi }) => ({
  async uploadPdf(ctx) {
    try {
      if (!ctx.request.files || !ctx.request.files.pdf) {
        return ctx.badRequest('No PDF file uploaded');
      }

      const uploadedFile = await strapi.plugins.upload.services.upload.upload({
        files: ctx.request.files.pdf,
        data: {
          fileInfo: {
            folder: 'pdf-uploads'
          }
        }
      });

      return ctx.send({
        message: 'PDF uploaded successfully',
        url: uploadedFile[0].url,
        data: uploadedFile
      });
    } catch (err) {
      return ctx.internalServerError(`Error uploading PDF: ${err.message}`);
    }
  }
}));
