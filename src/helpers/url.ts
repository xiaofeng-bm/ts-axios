
import { isDate, isPlainObject } from './utils';

function encode(val: string): string {
  return encodeURIComponent(val).
    replace(/%40/gi, '@').
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

export function buildURL(url: string, params?: any): string {
  if(!params) {
    return url;
  }

  const parts: string[] = [];
  Object.keys(params).forEach(key => {
    let val = params[key];

    let values:string[];
    if(Array.isArray(val)) {
      values = val;
      key += '[]';
    } else {
      values = [val];
    }
    values.forEach(val => {
      if(isDate(val)) {
        // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString
        val = val.toISOString();
      } else if(isPlainObject(val)) {
        val = JSON.stringify(val);
      }
      parts.push(`${encode(key)}=${encode(val)}`)
    })
  })

  let serializedParams = parts.join('&');

  if(serializedParams) {
    // 处理锚点#
    const markIndex = url.indexOf('#');

    if(markIndex !== -1) {
      url = url.slice(0, markIndex);
    }
    // url拼接
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }
  return url
}

