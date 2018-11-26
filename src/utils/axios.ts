import axios, { AxiosRequestConfig } from 'axios';
import hash from 'js-md5';
import { Message } from 'element-ui';
import NProgress from 'nprogress';

interface RequestPending {
  tag: string;
  fn: () => void;
}

// 根据请求地址和方法生成 hash tag
const getHash = (config: AxiosRequestConfig) => hash(`${config.url}${config.method}`);

const pending: Array<RequestPending> = [];
const { CancelToken } = axios;
const removePending = (config: AxiosRequestConfig) => {
  const tag = getHash(config);
  pending.forEach((p, i) => {
    if (tag === p.tag) {
      p.fn();
      pending.splice(i, 1);
    }
  });
};

const BASE_API = process.env.NODE_ENV === 'production' ? '' : '/mock';

const $http = axios.create({
  baseURL: BASE_API,
  timeout: 30000,
  withCredentials: true,
});

// 请求拦截
$http.interceptors.request.use(
  (config) => {
    NProgress.start();
    removePending(config);
    const tag = getHash(config);
    // eslint-disable-next-line
    config.cancelToken = new CancelToken(fn => pending.push({ tag, fn }));
    // eslint-disable-next-line
    config.headers['Content-type'] = 'application/json';
    return config;
  },
  (err) => {
    Message.error('请求超时!');
    return Promise.reject(err);
  },
);

// 响应拦截
$http.interceptors.response.use(
  (response) => {
    NProgress.done();
    removePending(response.config);
    return response.data;
  },
  (err) => {
    NProgress.done();
    const { status, statusText } = err.response;
    const msg = `${status} ${statusText}`;
    Message.error(msg);
    return Promise.reject(msg);
  },
);

export const get = async (url: string, params?: any) => {
  const res = await $http({ method: 'get', url, params });
  return res;
};

export const post = async (url: string, data?: any) => {
  const res = await $http({ method: 'post', url, data });
  return res;
};

export const del = async (url: string, params?: any) => {
  const res = await $http({ method: 'delete', url, params });
  return res;
};

export const put = async (url: string, data?: any) => {
  const res = await $http({ method: 'put', url, data });
  return res;
};

export default {
  get,
  post,
  del,
  put,
};
