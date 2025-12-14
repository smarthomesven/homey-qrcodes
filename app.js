'use strict';

const Homey = require('homey');

module.exports = class QRCodesApp extends Homey.App {

  /**
   * onInit is called when the app is initialized.
   */
  async onInit() {
    this.log('QR Codes app has been initialized');
  }

};
