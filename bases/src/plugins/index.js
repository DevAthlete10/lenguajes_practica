const { getId } = require('./get-id.plugin');
const { httpClientPlugin } = require('./http-client.plugin');
const buidLogger = require('./logger.plugin');

module.exports = {
    getId,
    httpClientPlugin,
    buidLogger
}