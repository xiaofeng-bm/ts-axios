import { isPlainObject } from './utils'

export function transformRequest(data: any): any {
  // 将data对象转换为JSON字符串
  if(isPlainObject(data)) {
    return JSON.stringify(data);
  }
  return data
}