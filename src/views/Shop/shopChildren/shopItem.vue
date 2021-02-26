<template>
  <div class="shop-item">
    <div class="product-title">
      <img :src="shopCart.logo" alt="" /><span>{{ shopCart.name }}</span>
    </div>
    <div class="product-main">
      <shop-check-button
        class="shop-check-button"
        :isActive="shopCart.check"
        @click.native="activeCheck"
      ></shop-check-button>
      <div class="product-img"><img v-lazy="shopCart.image" alt="" /></div>
      <div class="product-desc">
        <span class="title" @click="toDetail">{{ shopCart.title }}</span>
        <p class="param">40英寸;40缺角电箱CH</p>
        <div class="content">
          <span class="price">￥{{ shopCart.price }}</span>
          <span class="count f-count" @click="shopCart.count += 1">+</span
          ><span class="count t-count">x{{shopCart.count}}</span
          ><span class="count" @click="subItem" >-</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ShopCheckButton from "./shopCheckButton.vue";
export default {
  name: "shopItem",
  props: {
    shopCart: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  created() {},
  methods: {
    activeCheck() {
      this.shopCart.check = !this.shopCart.check;
    },
    subItem() {
       this.$store.commit('subItem',this.shopCart)
    },
    toDetail() {
       this.$router.push('/detail/'+this.shopCart.iid)
    }

  },
  components: { ShopCheckButton },
  computed: {
  },
};
</script>
<style scoped>
.shop-item {
  width: 95%;
  height: 180px;
  margin: auto;
  background-color: #fff;
  border-radius: 20px;
  margin-bottom: 10px;
  font-size: 15px;
}
.product-title {
  width: 100%;
  height: 50px;
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
}
.product-title img {
  width: 30px;
  height: 30px;
  margin-left: 30px;
}
.product-title span {
  margin-left: 20px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  line-height: 30px;
}
.product-main {
  width: 100%;
  height: 110px;
  display: flex;
  /* border: 1px solid rebeccapurple; */
}
.product-img {
  width: 40%;
  height: 100%;
  text-align: center;
}
.product-img img {
  width: 100px;
  height: 100px;
  border-radius: 20px;
  margin-top: 5px;
}
.product-desc {
  width: 60%;
  height: 100%;
  margin-right: 5px;
  /* border: 1px solid rebeccapurple; */
}
.title {
  font-size: 14px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  height: 40px;
  line-height: 20px;
}
.param {
  height: 20px;
  border-radius: 5px;
  margin-top: 5px;
  background-color: #f6f6f6;
  font-size: 12px;
  line-height: 20px;
}
.content {
  margin-top: 20px;
}
.price {
  color: orangered;
  margin-top: 20px;
  font-size: 18px;
}
.count {
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  padding: 5px;
}
.f-count {
  margin-left: 50px;
}
.t-count{
  display: inline-block;
  width: 30px;
  height: 30px;
  text-align: center;
}
.shop-check-button {
  margin-left: 5px;
}
</style>