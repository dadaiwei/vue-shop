import Vue from 'vue'

export default{
	state: {
		username: ""
	},
	mutations: {
		loginUser(state, user){
			state.username = user;
		}
	},
	actions: {
		loginUser({commit}, user){
			commit("loginUser", user);
		}
	}
}
