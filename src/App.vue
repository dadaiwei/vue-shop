<template>
  <div id="app">
    	<router-view></router-view>
  </div>
</template>

<script>
import cookie from './js/cookie'
import { mapMutations } from 'vuex' 

export default {
  name: 'App',
  methods: {
  	...mapMutations(['loginUser', 'loginSuccess', 'loginFail'])
  },
  components: {
  	
  },
  beforeMount(){
  	if(!document.cookie){
  		this.$router.push({name: "login"});
  	}else{
  		var username = document.cookie.split("=")[0];
  		this.loginUser(username);
  	}
  },
}
</script>

<style>
html,body{
	padding: 0;
	margin: 0;
	width: 100%;
	height: 100%;
	min-width: 1000px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
  height: 100%;
}
.icon {
   width: 1em; height: 1em;
   vertical-align: -0.15em;
   fill: currentColor;
   overflow: hidden;
}
</style>
