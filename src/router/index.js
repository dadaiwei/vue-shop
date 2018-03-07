import Vue from 'vue'
import Router from 'vue-router'
import VHome from '../components/layout/VHome'
import Login from '../components/Login'
import GoodsList from '../components/GoodsList'
import GoodsStorage from '../components/GoodsStorage'
import GoodsDetailList from '../components/GoodsDetailList'
import CashRecord from '../components/CashRecord'
import MessageNotification from "../components/MessageNotification"
import DataStatistics from "../components/DataStatistics"
import PersonManagement from "../components/PersonManagement"
import TaskManagenent from "../components/TaskManagement"
import ShoppingCart from "../components/ShoppingCart"
import GoodDetail from "../components/GoodDetail"

Vue.use(Router)

export default new Router({
	mode: "history",
    routes: [
  	    {
			path: "/login",
			name: "login",
			component: Login
		},
		{
			path: "/",
			name: "home",
			component: VHome,
			redirect: {name: "goodsList"},
			children: [
				{
					path: "goodsList",
					name: "goodsList",
					component: GoodsList
				},
				{
					path: "goodsStorage",
					name:"goodsStorage",
					component: GoodsStorage
				},
				{
					path: "goodDetail",
					name: "goodDetail",
					component: GoodDetail
				},
				{
					path: "goodsDetailList",
					name: "goodsDetailList",
					component: GoodsDetailList
				},
				{
					path: "cashRecord",
					name: "cashRecord",
					component: CashRecord
				},
				{
					path: "messageNotification",
					name: "messageNotification",
					component: MessageNotification
				},
				{
					path: "dataStatistics",
					name: "dataStatistics",
					component: DataStatistics
				},
				{
					path: "personManagement",
					name: "personManagement",
					component: PersonManagement
				},
				{
					path: "taskManagement",
					name: "taskManagement",
					component: TaskManagenent
				},
				{
					path: "shoppingCart",
					name: "shoppingCart",
					component: ShoppingCart
				},
				{
					path: "*",
					redirect: {name: "goodsList"}
				}
			]
		}
  ]
});


