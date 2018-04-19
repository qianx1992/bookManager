import Vue from 'vue'
import Router from 'vue-router'
import Index from "@/components/Index"
import User from "@/components/Setting/User"
import Role from "@/components/Setting/Role"
import addUser from "@/components/Setting/addUser"
import BookMng from "@/components/book/BookMng"
import First from "@/components/First"
import UserIndex from "@/components/userView/UserIndex"
import Login from "@/components/Login"
import initBook from "@/components/book/initBook"

Vue.use(Router);

export default new Router({
  routes: [
  	{
  		path:"/init",
  		name:"init",
  		component: initBook,
  	},
  	{
  		path:"/login",
  		name:"login",
  		component: Login,
  	},
    {
      path: '/',
      name: 'index',
      component: Index,
      children:[
      	{
      		path:'userIndex',
	      	name:"userIndex",
	      	component:UserIndex
      	},
      	{
      		path:'first',
	      	name:"first",
	      	component:First
      	},
      	{
      		path:'user',
	      	name:"user",
	      	component:User
      	},
      	{
      		path:'addUser',
	      	name:"addUser",
	      	component:addUser
      	},
      	{
      		path:'role',
	      	name:"role",
	      	component:Role
      	},
      	{
      		path:'bookMng',
	      	name:"bookMng",
	      	component:BookMng
      	}
      ]
    }
  ]
})
