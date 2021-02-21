<template>
  <div class="detailShopInfo" v-if="Object.keys(item).length !== 0">
    <div class="shopImg">
      <img :src="item.logo" alt="" />
      <span>{{ item.name }}</span>
      <span class="itemFans">粉丝量:{{ numberFormat(item.fans) }}</span>
    </div>

    <div class="shopDesc">
      <div class="itemSells">
        <div class="itemSells-box">
          <p>{{ numberFormat(item.sells) }}</p>
          <!-- <p>{{ item.sells }}</p> -->
          <p>总销量</p>
        </div>
        <div class="itemSells-box">
          <!-- <p>{{ item.goodsCount }}</p> -->
          <p>{{ numberFormat(item.goodsCount) }}</p>
          <p>全部宝贝</p>
        </div>
      </div>

      <div class="itemScore">
        <div  class="itemBox" v-for="(score, index) in item.score" :key="index">
          <span>{{ score.name }}</span
          ><span class="spanscore" :class="{ superscore: score.score >= 4.7 }">{{
            score.score
          }}</span
          ><span class="spanisbetter" :class="{superisbetter:score.isBetter}">{{ score.isBetter? '高' : '低' }}</span>
        </div>
      </div>
    </div>
    <div class="clickshop" @click="route"><button>进店逛逛</button></div>
  </div>
</template>
<script>
import { numberFormat } from "common/utils.js";
export default {
  name: "detailShopInfo",
  data() {
    return {};
  },
  props: {
    item: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    //   引用numberFormat函数，初始化
    numberFormat(type) {
      return numberFormat(type);
    },
    route(){
        this.$router.push('/shop')
    }
  },
};
</script>
<style scoped>
.detailShopInfo {
  font-size: 16px;
}
.shopImg {
  width: 100%;
  height: 95px;
  border-bottom: 10px solid #f6f6f6;
  vertical-align: middle;
  display: flex;
  align-items: center;

}
.shopImg img {
  widows: 40px;
  height: 40px;
  vertical-align: middle;
  margin: 10px;
}
.itemFans {
  margin-left: 45px;
}
.shopDesc {
  width: 100%;
  height: 140px;
  display: flex;
  font-size: 14px;
}

.itemSells {
  width: 50%;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
}
.itemSells-box {
  width: 40%;
  font-weight: 800;
  line-height: 20px;
}
.itemSells-box:nth-child(2) {
  padding-right: 15px;
}
.itemScore {
  width: 50%;
  vertical-align: middle;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 15px;
  margin-right:10px ;
}
.itemScore span {
  line-height: 25px;
  margin-right:10px ;
}
.itemBox{
    margin-top: 6px;
    display: flex;
    justify-content: space-between;
}
.spanscore {
  color: green;
}
.superscore{
  color: red;
}
.spanisbetter{
    color: 12px;
    float: right;
    text-align: center;
    background-color:green;
    color: #fff;
    border-radius:2px;
    padding-left: 2px;
    padding-right: 2px;
}
.superisbetter{
    background-color:red
}
.clickshop{
    width: 100%;
    text-align: center;
   height: 60px;
    border-bottom: 10px solid #f6f6f6;
}
.clickshop button{
  padding: 8px 40px 8px 40px;
  border-radius:5px;
  color:#000;
  border: none;
}
</style>