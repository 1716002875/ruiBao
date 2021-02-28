<template>
  <div class="goods-style">
    {{subcategory[0]}}
  </div>
</template>
<script>
import {
  getCategory,
  getSubcategory,
  getCategoryDetail,
} from "network/about.js";
export default {
  name: "goodsStyle",
  data() {
    return {
      category: [],
      subcategory: [],
      currentIndex: 0,
    };
  },
  created() {
    this.getCategoryAll();
  },
  methods: {
    getCategoryAll() {
      getCategory().then((res) => {
        this.category = res.data.category.list;
        this.getSubcategory(this.category[this.currentIndex].maitKey);
      });
    },
    getSubcategory(type) {
      getSubcategory(type).then((res) => {
        this.subcategory[this.currentIndex] = [...res.data.list];
        this.$forceUpdate();
      });
    },
  },
};
</script>
<style scoped>
.goods-style {
  width: 100vw;
  height: 80vh;
  background-color: #fff;
  border: 1px solid var(--color-tint);
  border-radius: 10px 10px 0 0;
  position: absolute;
  bottom: 0;
  z-index: 99;
}
</style>