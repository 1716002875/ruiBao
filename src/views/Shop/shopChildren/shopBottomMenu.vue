<template>
  <div class="shop-bottom-menu">
    <div class="check-all">
      <shop-check-button @click.native="checkAll" :isActive="isCheckAll" ></shop-check-button
      ><span>全选</span>
    </div>
    <div class="sum-cost">
      合计:￥ <span>{{ cost }}</span> <button @click="pay">结算</button>
    </div>
    <!-- <span>合计:{{ cost }}</span> -->
  </div>
</template>
<script>
import shopCheckButton from "./shopCheckButton.vue";
export default {
  components: { shopCheckButton },
  name: "shopBottomMenu",
  data() {
    return {
      shopCart: [],
      length: 0,
    };
  },
  computed: {
    cost() {
      let cost = 0;
      this.shopCart = this.$store.state.shopCart;
      this.length = this.$store.state.shopCart.length;
      for (let i = 0; i < this.length; i++) {
        if (this.shopCart[i].check == true) {
          cost += this.shopCart[i].price * this.shopCart[i].count;
          console.log("success");
        }
      }
      return cost.toFixed(2);
    },
    isCheckAll(){
    // 这两个反选是精髓啊
    // 如果全部item.check都为true，则取两次反，return true
    // 如果其中一个item的check为false,则取两次反，为false
    if(this.shopCart.length === 0) {
      return false;
     
      };
     return !this.shopCart.find(item => !item.check);
    }
  },
  methods: {
    checkAll() {
      if (this.cost > 0) {
        this.shopCart.filter((res) =>{res.check = false});
        
      } else {
        for (let i = 0; i < this.length; i++) {
          this.shopCart[i].check = true;
        }
      }
      this.$store.state.isCheckAll =! this.$store.state.isCheckAll;
      if(this.shopCart.length === 0) {
         this.$toast.show('购物车空空如也~')
      } 
    },
    pay() {
       this.$toast.show('开发中')
    }
  },
};
</script>
<style scoped>
.shop-bottom-menu {
  width: 100vw;
  height: 50px;
  position: absolute;
  bottom: 49px;
  display: flex;
  align-items: center;
  font-size: 16px;
}
.check-all {
  width: 30%;
  height: 100%;
  display: flex;
  display: flex;
  align-items: center;
  margin-left: 10px;
}
.check-all span {
  margin-left: 10px;
}
.sum-cost {
  width: 60%;
  height: 100%;
  display: flex;
  position: relative;
  align-items: center;
}
.sum-cost button {
  position: absolute;
  right: 0;
  top: 5px;
  padding: 10px 30px;
  background-color: orangered;
  color: #fff;
  border-radius: 20px;
  border: none;
}
.sum-cost span {
  color: orange;
  font-size: 14px;
}

</style>