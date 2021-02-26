<template>
  <div class="sidebar-about" >
    <div
      class="sidebar-title-item"
      v-for="(item, index) in category"
      :key="index"
      @click="getSubcategory(index,item.maitKey)"
    >
      {{ item.title }}
    </div>
  </div>
</template>
<script>
export default {
  name: "sidebarAboutList",
  props: {
    category: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    getSubcategory(index,maitKey) {
      const obj = {
        maitKey ,
        index
      }
      this.$emit("getSubcategory",obj);
      setTimeout(() =>{
        this.$emit("getSubcategory",obj);
      },300)
    },
  },
};
</script>
<style scoped>
.sidebar-about {
  width: 100px;
  height: 100vh;
  background: #f6f6f6;
  position: relative;
  font-size: 14px;
  top: 44px;
}
.sidebar-title-item {
  width: 100px;
  height: 50px;
  border-bottom: 2px solid #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>