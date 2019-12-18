import { AxiosRequestConfig } from './types/index';

function xhr(config: AxiosRequestConfig) {
    const { data=null, url, method='get', headers } = config;

    const request = new XMLHttpRequest();

    request.open(method.toUpperCase(), url, true);

    // https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest/setRequestHeader
    // 注：必须在open和send之间调用
    Object.keys(headers).forEach(name => {
      request.setRequestHeader(name, headers[name]);
    })
    request.send(data);
}

export default xhr;