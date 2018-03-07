<template>
	<div class="login">
		<div class="login-form">
			<div class="login-header">
				<p>欢迎登陆</p>
			</div>
			<div class="login-content">
				<div class="input-group login-input">
					 <span class="input-group-addon">
					 	<svg class="icon icon-login" aria-hidden="true">
						  <use xlink:href="#icon-yonghuguanli6"></use>
						</svg>
					 </span>
           			 <input type="text" name="user" maxlength="6" required v-model="username" class="form-control" placeholder="请输入用户名">
				</div>
				<div class="input-group login-input">
					 <span class="input-group-addon">
					 	<svg class="icon icon-login" aria-hidden="true">
						  <use xlink:href="#icon-xiugaimima3"></use>
						</svg>
					 </span>
           			 <input type="password" name="password" maxlength="6" required v-model="pwd" class="form-control" placeholder="请输入密码">
				</div>
				<p class="text-danger login-text login-err" v-show="loginErr">请检查用户名及密码是否正确</p>
				<p class="text-muted login-text">注：第一次登陆包含注册过程，
					登陆成功之后会保存该用户名与密码</p>
			</div>
			<div class="login-footer">
				<button type="button" class="btn btn-info btn-sm btn-login" @click="loginIn">登陆</button>
			</div>
		</div>
	</div>
</template>

<script>
	import { mapActions } from 'vuex'
	import cookie from '../js/cookie'
	
	export default{
		name: "Login",
		data(){
			return {
				username: "",
				pwd: "",
				loginErr: false
			}
		},
		methods: {
			...mapActions(['loginUser', 'loginSuccess', 'loginFail']),
			loginIn(){
				if(!cookie.getCookie(this.username)){
					cookie.removeAllCookies();
					cookie.setCookie(this.username, this.pwd);
					this.loginUser(this.username);
					this.loginSuccess();
					this.$router.push({name: "home"});
				}else{
					if(cookie.getCookie(this.username) != this.pwd){
						this.loginErr = true;
						this.loginFail();
					}else{
						cookie.setCookie(this.username, this.pwd);
						this.loginSuccess();
						this.loginUser(this.username);
						this.$router.push({name: "home"});
					}
				}
			}
		}
	}
</script>

<style>
	
	.login{
		height: 100%;
		width: 100%;
		background: url("../assets/imgs/login-bg.jpg") no-repeat center fixed;
	}
	.login-form{
		height: 288px;
		width: 300px;
		margin-left: -144px;
		margin-top: -190px;
		border-radius: 6px;
		position: absolute;
		left: 50%;
		top: 50%;
		background: #FFFFFF;
		
	}
	.login-header{
		border-bottom: 1px solid #E0E0E0;
	}
	.login-header>p{
		height: 50px;
		line-height: 50px;
		padding-left: 20px;
		margin-bottom: 0px;
		text-align: left;
		font-size: 14px;
		font-weight: bold;
	}
	.login-content{
		height: calc(100% - 110px);
		padding: 20px 30px;
	}
	.login-footer{
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 10px;
		border-top:1px solid #E0E0E0;
	}
	.btn-login{
		display: block;
		width: calc(100% - 40px);
		font-size: 14px;
		font-weight: bold;
	}
	.icon-login{
		font-size: 20px;
	}
	.login-input{
		margin-bottom:20px;
	}
	.login-text{
		text-align: left;
		font-size:12px;
	}
	.login-err{
		margin: -10px 0px 0px 0px;
	}
</style>