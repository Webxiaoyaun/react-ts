/* eslint-disable no-throw-literal */
/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import {API_SERVER_HOST} from '../const';

// 创建统一的请求client
const instance = axios.create({
    baseURL: API_SERVER_HOST,
    headers: {
        'Content-Type': 'application/json'
    }
});

export interface RequestResultCommon {
    status: 'failed'|'success';
}

/**
 * 请求正常响应消息
 */
export interface RequestSuccessResult<T> extends RequestResultCommon {
    data: T;
}

/**
 * 异常消息类型
 */
export interface RequestFailedResult extends RequestResultCommon {
    errCode: string;
    errMsg: string;
}

/**
 * 返回结果
 */
type RequestResult<T = any> = RequestSuccessResult<T> & RequestFailedResult;


/**
 * 处理相应数据
 * @param response 请求响应数据
 */
export function transformResponse<T = any>(response: AxiosResponse<RequestResult<T>>): T{
    // 获取响应值
    const {data:result} = response;
    // 判断是否存在errcode
    if ('errCode' in result) {
        throw (result as RequestFailedResult);
    }else {
        return (result as RequestSuccessResult<T>).data;
    }
}


export async function request<T = any>(config: AxiosRequestConfig): Promise<T> {
    
    return await instance.request<RequestResult<T>>(config).then((response)=> transformResponse(response));
    
}

export async function get<T = any>(url: string,config?: AxiosRequestConfig): Promise<T> {
    
    return await instance.get<RequestResult<T>>(url,config).then((response)=> transformResponse(response));
    
}


export async function del<T = any>(url: string,config?: AxiosRequestConfig): Promise<T> {
    
    return await instance.delete<RequestResult<T>>(url,config).then((response)=> transformResponse(response));
    
}

export async function post<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    
    return await instance.post<RequestResult<T>>(url,data,config).then((response)=> transformResponse(response));
    
}

export async function put<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    
    return await instance.post<RequestResult<T>>(url,data,config).then((response)=> transformResponse(response));
    
}

// 导出instance
export default {
    instance,
    get,
    post,
    put,
    request,
    delete:del,
};
