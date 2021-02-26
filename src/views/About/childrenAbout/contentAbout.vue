<template>
  <div class="content-about">
    <scroll class="content">
      <div class="wrapper">
        <div class="itembox" v-for="(item, index) in subcategory" :key="index">
          <img :src="item.image" alt=""/>
          <p>{{ item.title }}</p>
        </div>
      </div>
      <div></div>
    </scroll>
  </div>
</template>
<script>
import scroll from "components/content/Scroll/scroll.vue";
export default {
  components: { scroll },
  name: "contentAbout",
  props: {
    subcategory: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>
<style scoped>
.content-about {
  width: 75%;
  height: 100vh;
  position: absolute;
  top: 44px;
  right: 0;
}
.content {
  width: 100%;
  height: calc(100% - 96px);
}
.wrapper {
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  flex-grow: 1;
}

.itembox {
  width: 33.3%;
  height: 90px;
  font-size: 16px;
}
.itembox img {
  width: 50px;
  height: 50px;
  margin-top:10px;
}
</style>