<template>
    <div class="navbar-about">
        <nav-bar><p slot="center">商品分类</p></nav-bar>
    </div>
</template>
<script>
import NavBar from 'components/common/navBar/NavBar.vue'
export default {
  components: { NavBar },
    name : 'navbarAbout'
}
</script>
<style scoped>
.navbar-about{
width: 100vw;
background-color: var(--color-tint);
color: #fff;
position: fixed;
top: 0;
font-size: 16px;
z-index: 10;
}
</style>