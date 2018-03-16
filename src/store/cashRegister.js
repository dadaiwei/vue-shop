import Vue  from 'vue'

export default{
	state: {
		cashRegister: {
			name: "cashRegister",
			cashRegisterList: []
		}
	},
	mutations: {
		addCashRegister(state, cashRegister){
			state.cashRegister.cashRegisterList.push(cashRegister);
		}
	},
	actions: {
		addCashRegister({commit}, cashRegister){
			commit("addCashRegister", cashRegister);
		}
	}
}
