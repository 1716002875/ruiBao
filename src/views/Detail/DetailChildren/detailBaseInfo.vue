<template>
  <div class="base-info" v-if="Object.keys(goods).length !== 0">
    <div class="title">{{ goods.title }}</div>
    <div>
      <span class="newPrice">{{ goods.newPrice }}</span>
      <span class="oldPrice">{{ goods.oldPrice }}</span>
      <span v-if="goods.discount" class="discount">{{ goods.discount }}</span>
    </div>
    <div class="columns">
      <span>{{ goods.columns[0] }}</span>
      <span>{{ goods.columns[1] }}</span>
      <span>{{ goods.services[goods.services.length - 1].name }}</span>
    </div>
    <div>
      <div class="servicebox">
      <span
        class="services"
        v-for="index in goods.services.length - 1"
        :key="index"
      >
        <img :src="goods.services[index].icon" alt="" />
        <span class="servicestext">{{ goods.services[index - 1].name }}</span>
      </span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "detailInfo",
  props: {
    goods: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>
<style scoped>
.base-info {
  font-size: 14px;
}
.title {
  font-size: 16px;
  font-weight: 600;
  line-height: 22px;
  padding-left: 5px;
  margin: 6px;
}
.oldPrice {
  color: var(--color-high-text);
  font-size: 16px;
  padding-left: 10px;
}
.discount {
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 10px;
  color: #fff;
  background-color: var(--color-high-text);
  margin-left: 10px;
}
.columns {
  margin-top: 10px;
  padding-left: 10px;
  padding-right: 10px;
  display: flex;
  flex: 1;
  justify-content: space-between;
  margin-bottom: 15px;
  border-bottom:5px solid #f6f6f6;
  padding-bottom:8px ;

}
.servicebox{
  border-bottom:10px solid #f6f6f6;
  padding-bottom: 10px;
}
.services{
    margin-left:15px;
    height: 30px;
    vertical-align: middle;
    margin-right:8px;
    line-height: 2;
}
.services img {
  width:20px;
  height:20px;
 vertical-align: middle;
}
.servicestext{
    padding-left: 4px;
}
</style>