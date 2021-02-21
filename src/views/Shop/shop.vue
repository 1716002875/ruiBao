<template>
  <div class="shop-list">
   <shop-nav-bar></shop-nav-bar>
    <scroll class="content" ref="scroll">
      <shop-item-list></shop-item-list>
    </scroll>
    <shop-bottom-menu></shop-bottom-menu>
  </div>
</template>
<script>
import Scroll from 'components/content/Scroll/scroll.vue';
import ShopItemList from './shopChildren/shopItemList.vue';
import ShopNavBar from './shopChildren/shopNavBar.vue';
import ShopBottomMenu from './shopChildren/shopBottomMenu.vue';
export default {
 
  name: "shop",
  data() {
    return {};
  },
  components: {Scroll,ShopItemList, ShopNavBar, ShopBottomMenu },
  computed:{
  },
  // 路由活跃的时候会重新计算一下页面，对活跃路由的监听
  activated() {
   this.$refs.scroll&&this.$refs.scroll.refresh();
   console.log("activated当前路由活跃时，会refresh()----------views/Shop/shop.vue");
  }
  // mounted(){
  //  this.$nextTick(() =>{
  //    this.scroll&&this.$refs.scroll.refresh();
  //    console.log("nextTick")
  //  })
  // }
};
</script >

<style scoped>
.shop-list{
  width: 100%;
  height: calc(100% - 44px);
  background-color: #fafafa;
}
.content{
  height: calc(90% - 70px);
  overflow: hidden;
}


</style>
