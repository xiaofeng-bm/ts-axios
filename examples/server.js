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
regiserErrorRouter();



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
  router.get('/base/get/', function (req, res) {
    res.json({
      msg: 'this is base module'
    })
  });

  router.post('/base/post', function (req, res) {
    res.json(req.body)
  });

  router.post('/base/buffer', function (req, res) {
    let msg = [];
    req.on('data', chunk => {
      msg.push(chunk);
    })
    req.on('end', () => {
      let buffer = Buffer.concat(msg);
      res.json(buffer.toJSON());
    })
  });
}

function regiserErrorRouter() {
  router.get('/error/get', function (req, res) {
    if (Math.random() > 0.5) {
      res.json({
        success: true
      })
    } else {
      res.status(500);
      res.end();
    }
  })

  router.get('/error/timeout', function (req, res) {
    setTimeout(() => {
      res.json({
        success: true
      })
    }, 5000);
  })
}