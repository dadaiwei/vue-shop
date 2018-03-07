<template>
	<div class="home">
		 <v-header></v-header>
	   	 <div class="main">
	   	 	 	<v-aside  @loginOut="loginOut"></v-aside>
	   	 	 	<div class="content">
	   	 	 		<router-view ></router-view>
	   	 	 	</div>
	   	 </div>
	   	 <v-footer></v-footer>
	   	 <v-confirm v-show="showDialog" :message="message" @close="close" @confirm="confirm"></v-confirm>
	</div>
</template>

<script>
	import VHeader from './VHeader'
	import VAside from './VAside'
	import VFooter from './VFooter' 
	import VConfirm from '../modal/VConfirm'
	import AddPerson from '../addNewPerson'
	import cookie from '../../js/cookie'
	import { mapMutations } from 'vuex'
	
	export default {
	  name: 'VHome',
	  data(){
	  	  return {
	  	  	message: '',
	  	  	showDialog: false
	  	  }
	  },
	  computed: {
	  
	  },
	  components: {
	  	VHeader,
	  	VAside,
	  	VFooter,
	  	VConfirm
	  },
	  methods: {
	  	...mapMutations(['loginUser', 'loginSuccess', 'loginFail']),
	  	loginOut(args){
	  		this.showDialog = args.showDialog;
	  		this.message = args.message;
	  	},
	  	close(){
	  		this.showDialog = false;
	  	},
	  	confirm(){
	  		cookie.removeAllCookies();
	  		this.loginFail();
	  		this.$router.push({name: "login"});
	  	}
	  }
	}
</script>

<style>
	.home{
		height: 100%;
		position: relative;
	}
	.main{
		display: flex;
		height: calc(100% - 80px);
		width: 100%;
	}
	.content{
		height: 100%;
		width: calc(100% - 200px);
		background-color:#F8F8F9;
	}
	.mask{
		height: 100%;
		width: 100%;
		background-color: rgba(255,255,255,0.6);
		position: absolute;
		left: 0;
		top: 0;
	}
</style>