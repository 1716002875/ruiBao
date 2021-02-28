<template>
  <div class="sidebar-about" >
    <div
      class="sidebar-title-item"
      v-for="(item, index) in category"
      :key="index"
      @click="getSubcategory(index,item.maitKey)"
      :class="{active: index === currentIndex}"
    >
      {{ item.title }}
    </div>
  </div>
</template>
<script>
export default {
  name: "sidebarAboutList",
  data(){
    return{
      currentIndex:0
    }
  },
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
      };
      this.$emit("getSubcategory",obj);
      this.currentIndex = index;
    },
  }
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
.active{
  background-color: #fff;
  color: var(--color-tint);
  border-left:3px solid var(--color-tint) ;
}
</style>