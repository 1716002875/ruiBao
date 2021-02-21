<template>
  <div class="param-info" v-if="Object.keys(paramInfo).length !== 0">
    <table
      class="info-size"
      v-for="(table, index) in paramInfo.sizes"
      :key="index"
    >
      <tr class="tr" v-for="(tr, indey) in table" :key="indey">
        <td v-for="(td, indez) in tr" :key="indez">{{ td }}</td>
      </tr>
    </table>
    <table class="info-param">
      <tr v-for="(info, index) in paramInfo.infos" :key="index">
        <div class="info-box"><td class="info-param-key">{{ info.key }}</td>
        <td class="param-value">{{ info.value }}</td></div>
      </tr>
    </table>
    <div class="info-img" v-if="paramInfo.image.length !== 0">
      <img :src="paramInfo.image" alt="" />
    </div>
  </div>
</template>
<script>
export default {
  name: "detailGoodsParams",
  props: {
    paramInfo: {
      typr: Object,
      default() {
        return {};
      },
    },
  },
};
</script>
<style scoped>
.info-size {
  width: 100%;
  padding-top: 10px;
  font-size: 16px;
}
.info-size > tr > td {
  padding: 10px;
}
.info-param {
  width: 90%;
  margin: auto;
  font-size: 16px;
  margin-top:20px;
 
}
.info-box{
    margin-top:20px;
    border-bottom:2px solid #e0e0e0;
    padding-bottom:5px ;
   
}
.info-param-key {
  width: 50px;
  text-align: center;
  vertical-align: middle;
  
}
.param-value{
   color: var(--color-tint);
}
.info-img {
  max-width: 100vw;
  height: 50%;
  text-align: center;
  overflow: hidden;
  

}
</style>