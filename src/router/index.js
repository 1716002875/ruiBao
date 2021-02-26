import Vue from 'vue';
import VueRouter from 'vue-router';
const About = () => import('views/About/about.vue');
const Home = () => import('views/Home/home.vue');
const Shop = () => import('views/Shop/shop.vue');
const User = () => import('views/User/user.vue');
const Detail = () => import('views/Detail/detail.vue');
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}
Vue.use(VueRouter);
const routes = [
	{
		path: '',
		redirect: "/home"
	},
	{
		path: "/home",
		component: Home,
		// meta:{title:"首页"}
		meta: {
			showTab: true
		}
	},
	{
		path: "/about",
		component: About,
		// meta:{title:"关于"}
		meta: {
			showTab: true
		},
	},
	{
		path: "/user",
		component: User,
		// meta:{title:"用户"}
		meta: {
			showTab: true
		}
	},
	{
		path: "/shop",
		component: Shop,
		// meta:{title:"购物车"}
		meta: {
			showTab: true
		}
	},
	{
		path: "/detail/:iid",
		component: Detail,
		meta: {
			showTab: false
		},
		// meta:{title:"详情"}
	}
];
const router = new VueRouter({
	routes,
	mode: "history",
	linkActiveClass: "active"
});
// router.beforeEach((to,from,next) =>{
// 	document.title=to.matched[0].meta.title;
// 	next()
// });

export default router;