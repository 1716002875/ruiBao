import axios from 'axios';
export const request = function(config) {
    const instance = new axios.create({
        baseURL:"http://152.136.185.210:7878/api/m5",
        timeout:5000
    });
    instance(config);
    instance.interceptors.request.use(config =>{
        return config;
        console.log("打印成功！");
    },err => {
        console.log("打印失败！")
    });
    instance.interceptors.response.use(res =>{
        return res.data;
        console.log("响应成功");
    },err =>{
        console.log("响应失败！")
    })
    return instance(config);
}


