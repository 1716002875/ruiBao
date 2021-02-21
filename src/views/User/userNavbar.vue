<template>

<nav-bar class="nav-bar"><p slot="center">个人中心</p></nav-bar>
</template>
<script>
import NavBar from 'components/common/navBar/NavBar.vue'
export default {
  components: { NavBar },
    name : 'userNavbar'
}
</script>
<style scoped>
.nav-bar{
    background-color: var(--color-tint);
    color: #fff;
    font-size: 18px;
}
</style>