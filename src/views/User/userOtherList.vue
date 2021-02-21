<template>
  <div class="user-other-list">
    <user-other class="user-other"
      ><img src="~assets/img/profile/vip.svg" alt="" slot="img" /><span
        slot="text"
      >我的消息</span
    ></user-other>

    <user-other class="user-other"
      ><img src="~assets/img/profile/shopping.svg" alt="" slot="img" /><span
        slot="text"
      >积分商城</span
    ></user-other>

    <user-other class="user-other"
      ><img src="~assets/img/profile/pointer.svg" alt="" slot="img" /><span
        slot="text"
      >会员卡</span
    ></user-other>

    <user-other class="user-other"
      ><img src="~assets/img/profile/message.svg" alt="" slot="img" /><span
        slot="text"
      >我的购物车</span
    ></user-other>
  </div>
</template>
<script>
import userOther from "./userOther.vue";
export default {
  components: { userOther },
  name: "userOtherList",
};
</script>
<style scoped>
.user-other-list img {
  width: 30px;
  height: 30px;
  padding-right: 5px;
}
.user-other {
  width: 90vw;
  height: 55px;
  display: flex;
  margin: auto;
  border-bottom: 1px solid #e0e0e0;
  align-items: center;
  font-size: 16px;
}
</style>