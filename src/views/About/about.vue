<template>
  <div class="about">
    <navbar-about></navbar-about>
    <scroll class="content"
      v-bind:probeType="3"
      v-bind:isPullingUp="true"
      ><sidebar-about-list :category="category" @getSubcategory='getSubcategoryChange' ></sidebar-about-list
    ></scroll>
    <content-about :subcategory="subcategory"></content-about>
  </div>
</template>

<script>
import {
  getCategory,
  getSubcategory,
  getCategoryDetail,
} from "network/about.js";
import navbarAbout from "./childrenAbout/navbarAbout.vue";
import SidebarAboutList from "./childrenAbout/sidebarAboutList.vue";
import Scroll from "../../components/content/Scroll/scroll.vue";
import ContentAbout from './childrenAbout/contentAbout.vue';
export default {
  components: { navbarAbout, SidebarAboutList, Scroll, ContentAbout },
  name: "about",
  data() {
    return {
      category: [],
      currentIndex: 0,
      subcategory: [],
    };
  },
  created() {
    this.categoryAll();
  },
  methods: {
    categoryAll() {
      getCategory().then(res => {
        // this.category包含全部数据
        this.category = res.data.category.list;
       // this.subcategory数据需要在promise内部then()之后获取category总的值，才能获取自身的值
        this.$nextTick(() =>{
          this.getSub(
          this.category[0].maitKey,
        );
        });
       
      });
    },
    getSubcategoryChange({maitKey,index}) {
    // 改变类型maitKey
    if(this.currentIndex === index) {
      console.log("会");
      return;
    }
    this.currentIndex = index;
     this.getSub(maitKey);
    },
    getSub(type) {
      getSubcategory(type).then(res => {
        // e6的扩展运算符...
        this.subcategory = [...res.data.list];
      });
     
    },
  },
};
</script>

<style scoped>
.about {
  height: 100vh;
}
.content {
  width: 100%;
  height: calc(100% - 96px);
}
</style>
