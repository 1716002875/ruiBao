<template>
    <div class="detail-success" v-show="isShow">
        <img src="~assets/img/detail/success.png" alt="">
        <p>{{message}}</p>
    </div>
</template>
<script>
export default {
    name : 'detailSuccess',
    data(){
        return{
            message:'',
            isShow:false
        }
    },
    methods:{
        show(message,delay=1000) {
            this.message = message;
            this.isShow = true;
            setTimeout(() =>{
                this.isShow = false;
            },delay)
        }
    }
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