<template>
    <div class="detail-bottom-bar">
        <div class="left-box">
                <div class="left-mini-box">
                    <img src="~assets/img/detail/keFu.png" alt="">
                    <p>客服</p>
                </div>
                <div class="left-mini-box">
                    <img src="~assets/img/detail/dianPu.png" alt="">
                    <p>店铺</p>
                </div>
                <div class="left-mini-box">
                    <img src="~assets/img/detail/shouCang.png" alt="">
                    <p>收藏</p>
                </div>
        </div>
        <div class="right-box">
                <div class="cart-button sell" @click="addCart">加入购物车</div>
                <div class="sell-button sell">立即购买</div>
        </div>
    </div>
</template>
<script>
export default {
    name : 'detailBottomBar',
    methods:{
        addCart() {
            this.$emit('addCart')
        }
    }
}
</script>
<style scoped>
.detail-bottom-bar{
    width: 100%;
    height:50px;
    position:absolute;
    bottom: 0;
    font-size: 10px;
    background-color: #fafafa;
    display: flex;
    border-top:1px solid #f6f6f6 ;
}
.left-box{
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    flex: 1;
    text-align: center;
}
.left-mini-box{
    width: 150px;
}
.left-box img{
padding-top: 3px;
width: 25px;
height: 25px;
}
.right-box{
    width: 50%;
    height: 100% ;
    display: flex;
}
.sell{
     width: 50%;
    height: 100%;
    text-align: center;
    line-height: 50px;
}
.cart-button{
    background-color: #ffe814;
    color: #000;
    border-radius:100px 0 0 100px ;
}
.sell-button{
    background-color: var(--color-tint);
    color: #fff;
     border-radius:0 100px 100px 0 ;
}
</style>