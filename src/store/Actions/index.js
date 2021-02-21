export default {
    addToCart(context,payload) {
        let oldProduct = null;
        let shopCart = context.state.shopCart;
        for(let item of shopCart){
            if(item.iid === payload.iid){
                oldProduct = item
            }
        }
        if(oldProduct){
            context.commit('addToCart',oldProduct)
        }else{
            // shopCart.push(payload)
            // 标识数量count
            // 此时payload经过判定后，payload是新商品
            payload.count =1;
            context.commit('addToCartNew',payload);
        }
    }
}
// export default{
//     addToCart(context,payload) {
//         return new Promise((resolve,reject) =>{
//             // 箭头函数() =>{item.iid === payload.iid}  -------{}内部是不加return,是不返回的
//             //() => item.iid === payload.iid           ------没有{}时自身内部自带返回值return
//             let oldProduct = context.state.shopCart.find(item =>item.iid === payload.iid);
//             if(oldProduct) {
//                 context.commit('addToCart',oldProduct );
//                 resolve('购物车已有商品，数量加1')
//             }else{
//                 context.commit('addToCartNew',payload);
//                 payload.count =1;
//                 resolve("添加商品成功！")
//             }
//         })
//     }
// }