<template>
  <div class="detailNavBar">
    <nav-bar>
      <div class="back" slot="left">
        <img src="~assets/img/common/back.svg" alt="" @click="backClick" />
      </div>
      <div class="titles" slot="center" >
        <div
          class="title-item"
          v-for="(item, index) in titles"
          :key="index"
          :class="{ active: index === current }"
          @click="activated(index)"
        >
          {{ item }}
        </div>  
      </div>
    <img class="detailcart"  src="~assets/img/cart/detailcart.png" alt="" slot="img" @click="toShopCart">
    </nav-bar>
  </div>
</template>
<script>
import NavBar from "components/common/navBar/NavBar.vue";
export default {
  name: "detailNavBar",
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      current: 0,
      iid : null,
    };
  },
  components: {
    NavBar,
  },
  methods: {
    backClick() {
      this.$router.back();
    },
    activated(index) {
      this.current = index;
      this.$emit('jumpPosition',index);
    },
    toShopCart() {
      this.$router.push('/shop')
    }
  },
};
</script>
<style scoped>
.detailNavBar {
  width: 100%;
  height: 44px;
}
.back {
  margin-top: 5px;
}
.titles {
  display: flex;
  font-size: 16px;
}
.title-item {
  flex: 1;
}
.active {
  color: var(--color-high-text);
}
.detailcart{
  width:25px;
  height: 25px;
  margin-top: 7px;
  margin-right: 15px;
 
}
</style>