const webpack = require('webpack');
const webpackConfig = require('./webpack.development.config');
const webpackDevServer = require('webpack-dev-server');

module.exports = (port, proxyPort) => {

  new webpackDevServer(webpack(webpackConfig), {
     hot: true,
     inline: true,
     progress: true,
     historyApiFallback: true,
     proxy: {
       "*": `http://localhost:${port}`
     }
  }).listen(proxyPort, 'localhost', err => {
     if (err) { console.log(err); }
     console.log(`Listening on port ${proxyPort}`);
  });

}
