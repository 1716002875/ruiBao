// import Toast from './toast.vue';
// const obj={}
// obj.install = function(Vue) {
// // 1.先创建组件构造器
// // Vue.extend({
// //     data...
// //     template...
// //     methods...
// // })
// const toastContrustor = Vue.extend(Toast);
// // 2.构造器实例化
// const toast = new toastContrustor();
// // 3.需要将toast组件挂载到一个DOM节点上，首先创建一个DOM节点
// toast.$mount(document.createElement('div'));
// // 4,将此DOM节点挂载到body页面中
// document.body.appendChild(toast.$el);

// Vue.prototype.$toast = toast;
// }
// export default obj;

// import Toast from './toast.vue';
// const obj={};
// obj.install = function(Vue){
//     const  toastContrustor = Vue.extend(Toast);
//     const toast = new toastContrustor();
//     toast.$mount(document.createElement('div'));
//     document.body.appendChild(toast.$el);
//     Vue.prototype.$toast = toast;
// }
// export default obj;
import Toast from './toast.vue';
const obj = {};
obj.install = function(Vue){
    const toastContrustor = Vue.extend(Toast);
    const toast = new toastContrustor();
    toast.$mount(document.createElement('div'));
    document.body.appendChild(toast.$el);
    Vue.prototype.$toast = toast;
}
export default obj;