<template>
	<div class="header">
		<h5 class="logo">V-SHOP</h5>
		<div class="header-icon">
			<i class="iconfont icon-gouwuche icon" @click="goTo('shoppingCart')"></i>
			<i class="iconfont icon-xiaoxi icon" @click="goTo('messageNotification')"></i>
			<i class="iconfont icon-GitHub icon" @click="goTo('https://github.com/dadaiwei')"></i>
		</div>
	</div>
</template>

<script>
	export default{
		name: "VHeader",
		data(){
			return {
	
			}
		},
		computed: {
		
		},
		methods: {
			goTo(path){
				if(path.indexOf("https") === -1){
					this.$router.push({name: path});
				}else{
					window.open(path);
				}
			}
		}
	}
</script>

<style scoped>
	.header{
		min-width: 600px;
		height: 50px;
		display: flex;
		justify-content: space-between;
		background-color: #1F2D3D;
		align-items: center;
	}
	.logo{
		color: #2D8CF0;
		margin-left: 35px;
		font-size: 20px;
		font-family: helvetica;
		font-weight: bold;
	}
	.header-icon{
		height: 50px;
		line-height: 50px;
		margin-right: 30px;
	}
	.icon{
		height: 20px;
		width: 20px;
		margin: 0px 10px;
		color: #EEEEEE;
		cursor: pointer;
		font-size: 22px;
	}
</style>