<template>
  <div class="about">
    <navbar-about></navbar-about>
    <scroll class="content"
      ><sidebar-about-list :category="category" @getSubcategory='getSubcategoryChange'></sidebar-about-list
    ></scroll>
    <content-about :subcategory="subcategory[currentIndex]"></content-about>
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
      getCategory().then((res) => {
        // this.category包含全部数据
        this.category = res.data.category.list;
        // this.subcategory数据需要在promise内部then()之后获取category总的值，才能获取自身的值
       this.category&&this.getSub(
          this.category[this.currentIndex].maitKey,
          this.currentIndex
        );
      });
    },
    getSubcategoryChange({maitKey,index}) {
      // 根据侧边栏的改变动态改变currentIndex的值
     this.currentIndex = index;
     this.getSub(maitKey,this.currentIndex)
    },
    getSub(type, index) {
      getSubcategory(type).then((res) => {
        this.subcategory[index] = res.data.list;
      });
      this.$forceUpdate();
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
