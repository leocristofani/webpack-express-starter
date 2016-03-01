const config = require('./config');
const server = require('./server');
const mongoose = require('mongoose');

// start server
server.listen(config.port, () => {
  console.log(`Listening on port ${config.port}`);
});

// start dev server
if(config.environment === 'development') {
  require('./webpack.development.server')(config.port, config.proxyPort);
}
