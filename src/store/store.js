import Vue from 'vue'
import Vuex from 'vuex'
import user from './user'
import login from './login'
import person from './person'
import dialog from './dialog'
import goods from './goods'
import shoppingCart from './shoppingCart'
import cashRegister from './cashRegister'

Vue.use(Vuex)

export default new Vuex.Store({
	modules: {
		user,
		login,
		person,
		dialog,
		goods,
		shoppingCart,
		cashRegister
	}
})
