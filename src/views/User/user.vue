<template>
  <div class="user">
    <user-navbar></user-navbar>
    <user-message></user-message>
    <user-assets-list></user-assets-list>
    <user-other-list></user-other-list>
  </div>
</template>

<script>
import UserAssetsList from './userAssetsList.vue';
import UserMessage from './userMessage.vue';
import userNavbar from "./userNavbar.vue";
import UserOtherList from './userOtherList.vue';
export default {
  name: "user",
  components: {
    userNavbar,
    UserMessage,
    UserAssetsList,
    UserOtherList,
  },
};
</script scoped>

<style>
</style>
