import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { Message } from "element-ui";

export interface ResponseData {
    code: number;
    data?: any;
    message: string;
}

// 创建 axios 实例
let service: AxiosInstance;
service = axios.create({
    baseURL: process.env.NODE_ENV === "development" ? "/api" : "http://152.136.138.161:7000", // api 的 base_url
    timeout: 50000 // 请求超时时间
})

service.defaults.headers.post["Content-Type"] = "application/json;charset=UTF-8";
service.defaults.headers["X-Requested-With"] = "XMLHttpRequest";
service.defaults.headers["Cache-Control"] = "no-cache";
service.defaults.headers["pragma"] = "no-cache";

// request 拦截器 axios 的一些配置
service.interceptors.request.use(
    (config: AxiosRequestConfig) => {
        const token = localStorage.getItem("authorization");
        if (token) {
            config.headers['Authorization'] = token;
        }
        return config;
    },
    (error: any) => {
        // Do something with request error
        console.error("request error:", error); // for debug
        Promise.reject(error);
    }
);

// respone 拦截器 axios 的一些配置
service.interceptors.response.use(
    (res: AxiosResponse) => {
        // Some example codes here:
        // code == 0: success
        if (res.status === 200 || res.status === 201) {
            const data: ResponseData = res.data
            if (data.code === 200) {
                return data.data;
            } else {
                Message({
                    message: data.message,
                    type: "error"
                });
            }
        } else {
            Message({
                message: "网络错误!",
                type: "error"
            });
            return Promise.reject(new Error(res.data.message || "Error"));
        }
    },
    (error: any) => {
        Message({
            message: "网络错误!",
            type: "error"
        });
        return Promise.reject(error)
    }
);

export default service;
