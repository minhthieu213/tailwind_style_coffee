const { getDataConnect, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'default',
  service: 'tailwindcss_coffee',
  location: 'us-central1'
};
exports.connectorConfig = connectorConfig;

