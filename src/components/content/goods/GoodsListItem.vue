<template>
  <div class="GoodsListItem" v-on:click="getDetail">
    <img v-lazy="itemgoods.show.img" v-on:load="imgLoading"/>
    <div class="itemText">
      <p>{{ itemgoods.title }}</p>
      <span class="spanPrice">{{ itemgoods.price }}￥</span>
      <span>{{ itemgoods.cfav }}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "GoodsListItem",
  props: {
    // itemgoods内存储着商品的全部信息
    itemgoods: {
      type: Object,
      default() {
        return {};
      },
    }
  },
  methods:{
    imgLoading() {
      this.$bus.$emit('imgLoading')
    },
    getDetail() {
      this.$router.push('/detail/'+this.itemgoods.iid)
    }
  }
};
</script>
<style scoped>
.GoodsListItem {
  margin-top: 10px;
  width: 47%;
  font-size: var(--font-size);
  text-align: center;
}
.GoodsListItem img {
  width: 100%;
  min-height: 90%;
  border-radius: 5px;
}
.itemText p {
  padding-top: 5px;
  margin: auto;
  width: 95%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
 font-size: 12px;
}
.spanPrice {
  color: var(--color-tint);
  padding-right:8px;
}
</style>