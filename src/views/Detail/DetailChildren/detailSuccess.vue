<template>
    <div class="detail-success">
        <img src="~assets/img/detail/success.png" alt="">
        <p>添加成功在购物车等你哦~</p>
    </div>
</template>
<script>
export default {
    name : 'detailSuccess'
}
</script>
<style scoped>
.detail-success{
    width: 200px;
    height: 80px;
    background-color: rgba(0, 0, 0, .5);
    text-align: center;
    vertical-align: middle;
    position: absolute;
    bottom: 20%;
    left: 80px;
    font-size: 14px;
    color: #fff;
    border-radius:8px ;
}
.detail-success img{
width: 40px;
height: 40px;
}
</style>