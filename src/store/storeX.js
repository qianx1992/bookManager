import Vue from "vue";
import Vuex from "vuex";
import http from "axios";

Vue.use(Vuex);
const userStore={
	state:{
		userList:[]
	},
	getters:{
		userList(state){
			return state.userList;
		}
	},
	mutations:{
		updateUserList(state,data){
			state.userList=data;
		}
	},
	actions:{
		getUserList(context){
			return http({
				method: 'POST',
				url:"/api/employee/findAll"
			}).then(response=>{
				 // 通过mutations改
                /*store.commit('updateUserList', response.data.data);*/
               context.commit('updateUserList', response.data.object);
			});
		}
	}
};
const bookStore={
	state:{
		bookMngList:[]
	},
	getters:{
		bookMngList(state){
			return state.bookMngList;
		}
	},
	mutations:{
		updateBookMngList(state,data){
			state.bookMngList=data.list;
		}
	},
	actions:{
		getBookMngList(context){
			return http({
				method: 'POST',
				url:"/api/book/queryAllBook",
				data:{
					pageNum:1,
					pageMaxRows:10
				},
				/*requestHeader:{'Content-Type':'application/x-www-form-urlencoded'}*/
			}).then(response=>{
               context.commit('updateBookMngList', response.data.object);
			});
		}
	}
};
export default new Vuex.Store({
	modules: {
    	userStore,
    	bookStore
    }
});
