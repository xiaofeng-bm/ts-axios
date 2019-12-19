import { isPlainObject } from './utils';

function normalizeHeadersName(headers: any, normalizeName: string) {
  if (!headers) {
    return
  }
  Object.keys(headers).forEach(name => {
    if (name !== normalizeName && name.toUpperCase() === normalizeName.toUpperCase()) {
      headers[normalizeName] = headers[name];
      delete headers[name];
    }
  })
}

export function precessHeaders(headers: any, data: any): any {
  // 规范属性名
  normalizeHeadersName(headers, 'Content-Type');
  if (isPlainObject(data)) {
    if (headers && !headers['Content-Type']) {
      headers['Content-Type'] = 'application/json;charset=utf-8';
    }
  }
  return headers;
}


export function parseHeaders(headers: string): object {
  let parsed = Object.create(null);     // 创建一个纯净的对象（https://juejin.im/post/5acd8ced6fb9a028d444ee4e）;

  headers.split('\r\n').forEach(line => {
    let [key, val] = line.split(':');
    
    if(!key) {
      return
    }
    if(val) {
      val = val.trim();
    }
    parsed[key] = val;
  })
  return parsed;
}

