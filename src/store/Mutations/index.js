export default {
    addToCart(state,payload) {
        payload.count++
    },
    addToCartNew(state,payload){
        payload.check = false;
        state.shopCart.push(payload)
    },
    addItem(state,payload){
        payload.count += 1
    },
    subItem(state,payload) {
        if(payload.count >1) {
            payload.count--
        }
    }
    
}
