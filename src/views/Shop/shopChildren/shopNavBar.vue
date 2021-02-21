<template>
     <nav-bar class="nav-bar">
         <img src="~assets/img/cart/shopback.png" alt="" slot="left" @click="backTo">
         <p slot="center">购物车({{length}})</p>
         <p class="splice"  slot="right" @click="spliceItem">移出</p>
         </nav-bar>
</template>
<script>
// {mapGetters}是vuex中的一个插件
import {mapGetters} from 'vuex';
import NavBar from 'components/common/navBar/NavBar.vue';
export default {
    name : 'shopNavBar',
    components:{
         NavBar
    },
    computed:{
        ...mapGetters({
            length:'shopCartLength',
            shopCart:'getShopCart'
        })
    },
    methods:{
    backTo() {
      this.$router.back()
    },
    spliceItem() {
      for(let item of this.shopCart) {
        if(item.check == true){
         this.shopCart.splice(item)
        }
      }
    }
  }
}
</script>
<style scoped>
.nav-bar{
  background-image: linear-gradient(#fb7299, #ff69b4);
  box-shadow: 0 1px 1px rgba(100, 100, 100, 0.1);
  color: #fff;
}
.nav-bar img{
  width: 25px;
  height: 25px;
  vertical-align: middle;
}
.splice {
  font-size: 14px;
}
</style>