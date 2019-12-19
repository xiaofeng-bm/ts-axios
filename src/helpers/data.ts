import { isPlainObject } from './utils'

export function transformRequest(data: any): any {
  // 将data对象转换为JSON字符串
  if(isPlainObject(data)) {
    return JSON.stringify(data);
  }
  return data
}

// 在我们不设置responseType时，服务端返回的data数据是JSON字符串类型，需要装换成JSON对象
export function parseData(data: any): any {
  if(typeof data === 'string') {
    try {
      data = JSON.parse(data);
    } catch (error) {
      // T错误处理
    }
  }

  return data;
}