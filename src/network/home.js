import {request} from './request.js';
export function getHomeMultidata() {
    return request({
        url:"/home/multidata"
    })
}
// export function getHomeGoods(type,page){
//     return request({
//         url:"/home/data",
//         params:{
//             type:type,
//             page:page
//         }
//     })
// }
export function getHomeGoods(type,page){
    return request({
        url:"/home/data",
        params:{
            type:type,
            page:page
        }
    })
}

