import axios, { AxiosError } from '../../src/index';

// axios({
//   method: 'get',
//   url: '/error/get1',
// }).then(response => {
//   console.log('成功=', response);
// }).catch(e => {
//   console.log('失败=', e)
// })

axios({
  method: 'get',
  url: '/error/get',
}).then(response => {
  console.log('成功=', response);
}).catch((e: AxiosError) => {
  console.log('失败=', e)
})

// axios({
//   method: 'get',
//   url: '/error/timeout',
//   timeout: 3000
// }).then(response => {
//   console.log('成功=', response);
// }).catch(e => {
//   console.log('失败=', e)
// })