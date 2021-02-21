<template>
    <div class="user-message">
            <div class="left-box">
                <img src="~assets/img/profile/avatar.svg" alt="">
            </div>
            <div class="right-box">
                <span>登录/</span>
                <span>注册</span>
                <p><img src="~assets/img/profile/phone.svg" alt=""><span class="phone-text">暂未绑定手机号</span></p>
            </div>
    </div>
</template>
<script>
export default {
    name : 'userMessage'
}
</script>
<style scoped>
.user-message {
    width: 100vw;
    height: 90px;
    background-color: var(--color-tint);
    display: flex;
}
.left-box{
    width: 30%;
    height: 100%;
    text-align: center;
}
.left-box img{
    width: 60px;
    height: 60px;
    margin-top: 10px;
}
.right-box{
    width: 70%;
    height: 100%;
    font-size: 16px;
    color: #fff;
    line-height: 28px;
    margin-left: 5px;
    margin-top: 15px;
}
.right-box img{
    width: 20px;
    height: 20px;
    vertical-align: middle;
   
}
.phone-text{
    font-size: 13px;
}
</style>