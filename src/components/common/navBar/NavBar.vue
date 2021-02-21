<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
    <slot name="img"></slot>
  </div>
</template>
<script>
export default {
  name: "NavBar",
};
</script>
<style scoped>
.nav-bar {
  width: 100%;
  display: flex;
  height: 44px;
  line-height: 44px;
  text-align: center;
  box-shadow: 0 2px 2px #e0e0e0;
}
.left,
.right {
  width: 80px;
  
}
.center {
  flex: 1;
  
}
</style>