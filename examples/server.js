const express = require('express')
const bodyParser = require('body-parser')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const WebpackConfig = require('./webpack.config')

const app = express()
const compiler = webpack(WebpackConfig)

app.use(webpackDevMiddleware(compiler, {
  publicPath: '/__build__/',
  stats: {
    colors: true,
    chunks: false
  }
}))

app.use(webpackHotMiddleware(compiler))

app.use(express.static(__dirname))

app.use(bodyParser.json())
// app.use(bodyParser.text())
app.use(bodyParser.urlencoded({ extended: true }))

const router = express.Router()

registerSimpleRouter();
regiserBaseRouter();

app.use(router);

const port = process.env.PORT || 3000;
module.exports = app.listen(port, () => {
  console.log(`alreadt listening to ${port} port`)
})

function registerSimpleRouter() {
  router.get('/simple/get/', function (req, res) {
    res.json({
      msg: 'hello world'
    })
  })
}

function regiserBaseRouter() {
  router.get('/base/get/', function(req, res) {
    res.json({
      msg: 'this is base module'
    })
  })
}