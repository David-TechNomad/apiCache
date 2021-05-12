import axios from 'axios';

// 创建axios实例
var instance = axios.create({
  timeout: 1000 * 12,
  baseURL: process.env.VUE_APP_BASE_API,
});

// 设置post请求头
instance.defaults.headers.post['Content-Type'] =
  'application/x-www-form-urlencoded';

/**
 * 请求拦截器
 * 每次请求前，如果存在token则在请求头中携带token
 */
instance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => Promise.error(error)
);

// 响应拦截器
instance.interceptors.response.use(
  // 请求成功
  (res) => (res.status === 200 ? Promise.resolve(res) : Promise.reject(res)),
  // 请求失败
  (error) => {
    const { response } = error;
    // if (response) {
    //   // 请求已发出，但是不在2xx的范围
    // } else {
    // }
  }
);

export default instance;
