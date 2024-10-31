const packageJson = require('../../package.json');
//const HOST = 'http://';
const HOST = 'https://zbfra3ts88.execute-api.us-east-1.amazonaws.com/develop/';
export const environment = {
  API_PUBLIC: HOST + '/',
  production: true,
  context: 'develop',
  version: packageJson.version,
  minutesInactive: 15,
  minutesToRefresh: 10,
};
