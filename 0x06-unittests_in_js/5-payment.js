const Utils = require('./utils');

const sendPaymentRequestToApi = (totalAmount, totalShipping) => {
  const sum = Utils.calculateNumber('SUM', totalAmount, totalShipping);
  val = 'The total is: '.concat(sum);
  console.log(val);
};

module.exports = sendPaymentRequestToApi;
