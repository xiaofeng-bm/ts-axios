import axios from '../../src/index'

axios({
  url: '/extend/post',
  method: 'post',
  data: {
    msg: 'this is extend post request'
  }
})

// axios.get('/extend/get', {
//   params: {
//     a: 10,
//     b: 20
//   }
// })

// axios.post('/extend/post', {
//   a: 20,
//   b: 30
// })

axios('/extend/get', {
  method: 'get',
  params: {
    foo: 'bar'
  }
})