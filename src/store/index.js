import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './Mutations/index.js'
import actions from './Actions/index.js'
import getters from './Getters/index.js'
Vue.use(Vuex);
const state = {
        screenPosition:null,
        // 购物车内容
        shopCart:[],
        // 是否全选
        isCheckAll:false
};
const store = new Vuex.Store({
    state,
    mutations,
    actions,
    getters
    
});
export default store;
