<template>
<div v-if="Object.keys(detailInfo).length  != 0" class="goods-info">
    <div class="info-desc clear-fix">
        <div class="start"></div>
        <div class="desc">{{detailInfo.desc}}</div>
        <div class="end"></div>
    </div>

    <div class="info-key">{{detailInfo.detailImage[0].key}}</div>
    <div class="info-list">
        <img  v-for="(item,index) in detailInfo.detailImage[0].list" :key="index" v-lazy="item" alt="" @load="imgLoad">
    </div>

    </div>    
</template>
<script>
export default {
    name : 'detailInfo',
    data(){
        return{
            detailLength:{
                type:Number
            },
            content:0
        }
    },
    props:{
        detailInfo:{
            type:Object,
            default(){
                return{}
            }
        }
    },
    methods:{
        imgLoad() {
        // 判断图片全部加载完了然后发送请求
           this.detailLength = this.detailInfo.detailImage[0].list.length;
           this.content+=1;
           if(this.content === this.detailLength){
           console.log("++")
            this.$emit('imgLoad')
              }
        }
    }
}
</script>
<style scoped>
.info-desc{
    font-size: 16px;
}
.info-list img{
    width: 100%;
    height: 100%;
    text-align: center;
}
.desc{
  text-indent:25px;
  line-height:25px
}
</style>