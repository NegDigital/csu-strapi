'use strict';

/**
 * document-upload router
 */

module.exports = {
  routes: [
    {
      method: 'POST',
      path: '/document-upload/upload-pdf',
      handler: 'document-upload.uploadPdf',
      config: {
        auth: false,
        middlewares: []
      }
    }
  ]
};