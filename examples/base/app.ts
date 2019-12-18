import axios from '../../src/index';

// axios({
//   method: 'get',
//   url: '/base/get',
//   params: {
//     a: '11',
//     b: '22'
//   }
// })

// axios({
//   method: 'get',
//   url: '/base/get',
//   params: {
//     foo: ['111', '222']
//   }
// })

// const date = new Date();

// axios({
//   method: 'get',
//   url: '/base/get',
//   params: {
//     date
//   }
// })

// axios({
//   method: 'get',
//   url: '/base/get',
//   params: {
//     foo: {
//       bar: '222'
//     }
//   }
// })

axios({
  method: 'post',
  url: '/base/post',
  data: {
    a: '11',
    b: '22'
  }
})

const arr = new Int32Array([11, 22]);
axios({
  method: 'post',
  url: '/base/buffer',
  data: arr
})