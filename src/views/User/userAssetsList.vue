<template>
    <div class="user-assets-list">
        <user-assets-item v-for="(item,index) in text" :key="index" :assets="item"></user-assets-item>
    </div>
</template>
<script>
import userAssetsItem from './userAssetsItem.vue'
export default {
  components: { userAssetsItem },
    name : 'userAssetsList',
    data(){
        return{
            text:[
                {unit:'元',message:"我的余额"},
                {unit:'个',message:'我的优惠'},
                {unit:'分',message:'我的积分'}
            ]
        }
    }
}
</script>
<style scoped>
.user-assets-list{
    display: flex;
}
</style>