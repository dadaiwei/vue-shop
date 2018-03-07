export default{
	state: {
		isLogin: false
	},
	mutations: {
		loginSuccess(state){
			state.isLogin = true;
		},
		loginFail(state){
			state.isLogin = false;
		}
	},
	actions: {
		loginSuccess({commit}){
			commit("loginSuccess");
		},
		loginFail({commit}){
			commit("loginFail");
		}
	}
}
