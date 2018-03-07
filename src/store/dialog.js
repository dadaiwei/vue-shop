import Vue from 'vue'

export default{
	state: {
		showDialog: false,
		message: ""
	},
	mutations: {
		setDialogVisble(state, message){
			state.showDialog = true;
			state.message = message;
		},
		setDialogInvisible(state){
			state.showDialog = false;
			state.message = "";
		}
	},
	actions: {
		setDialogVisble({commit}, message){
			commit("setDialogVisble", message);
		},
		setDialogInvisible({commit}){
			commit("setDialogInvisible");
		}
	}
}
