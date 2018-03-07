<template>
	<div class="aside">
		<div class="user-info">
				<svg class="icon icon-user" aria-hidden="true">
				  <use xlink:href="#icon-user-copy"></use>
				</svg>
				<span class="icon-user-style">{{username}}</span>
				<div class="login-out" @click="loginOut">
					<button type="button" class="btn btn-default btn-info" @click="loginOut">退出</button>
				</div>
		</div>
		<ul class="nav nav-pills nav-stacked nva-ul">
			<li v-for="(item, index) in list" 
				:key="'list'+index"
				 :class="{'active': item.active, 'nav-sub-items': index === 1}">
				<span class="nav-item"  :class="{'sub-nav':index === 1}" @click="changeLi(item, index)">
					<i class="iconfont icon-style" :class="item.icon"></i>{{item.title}}
					<i v-if="index === 1" class="iconfont  icon-arrow" :class="arrow?'icon-jiantoushang':'icon-icon_arrow_bottom'"></i>
				</span>
				 <transition name="collapse">
					<ul v-show="!item.collapse" class="nav-ul">
						<li class="nav-item" v-for="(list,index) in item.children" 
							:key="index"
							:class="{'sub-active':list.active}"
							@click="changeSubLi(list, index)">
							<i class="iconfont icon-style" :class="list.icon"></i>{{list.title}} 
						</li>
					</ul>
				</transition>
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		name:"VAside",
		data(){
			return {
				arrow: false,
				list:[
					{
						title: "商品列表",
						icon: "icon-yewubaobiao",
						active: true,
						path: "goodsList"
					},
					{
						title: "商品操作",
						icon: "icon-caozuo",
						children: [
							{
								title: "商品入库",
								icon: "icon-shangchuanmoban",
								path: "goodsStorage",
								active: false
							},
							{
								title: "详细信息",
								icon: "icon-xiangqing6",
								path: "goodsDetailList",
								active: false
							}
						],
						collapse: true,
						active: false
					},
					{
						title: "收银记录",
						icon: "icon-19",
						path: "cashRecord",
						active: false
					},
					{
						title: "消息通知",
						icon: "icon-xiaoxi",
						path: "messageNotification",
						active: false
					},
					{
						title: "数据统计",
						icon: "icon-tongji",
						path: "dataStatistics",
						active: false
					},
					{
						title: "人员管理",
						icon: "icon-renyuanxiaozu",
						path: "personManagement",
						active: false
					},
					{
						title: "待办事项",
						icon: "icon-naozhong",
						path: "taskManagement",
						active: false
					}
				]
			}
		},
		computed: {
			username(){
				return this.$store.state.user.username;
			}
		},
		methods: {
			loginOut(){
				this.$emit("loginOut", {
					showDialog: true,
					message: "确定退出吗?"
				});
			},
			changeLi(item, index){
				this.$router.push({name: item.path});
				for(var i = 0; i < this.list.length; i++){
					this.list[i].active = false;
				}
				for(var j = 0; j < this.list[1].children.length; j++){
					this.list[1].children[j].active = false;
				}
				item.active = true;
				if(index === 1){
					item.collapse = !item.collapse;
					this.arrow = !this.arrow;
				}
			},
			changeSubLi(item, index){
				this.$router.push({name: item.path});
				for(var i = 0; i < this.list.length; i++){
					this.list[i].active = false;
				}
				for(var i = 0; i < this.list[1].children.length; i++){
					this.list[1].children[i].active = false;
				}
				item.active = true;
			}
		}
	}
</script>

<style scoped>
	.aside{
		width: 200px;
		height: 100%;
		background-color: #495060;
	}
	.user-info{
		height: 60px;
		line-height: 60px;
		width: 100%;
		position: relative;
	}
	.user-info:hover .login-out{
		display: block;
	}
	.icon-user{
		font-size: 35px;
		font-weight: bold;
		margin-right: 5px;
		width: 25px;
		height: 25px;
	}
	.icon-user-style{
		height: 60px;
		line-height: 60px;
		color: rgba(255,255,255,0.7);
	}
	.login-out{
		display: none;
		position: absolute;
		background: rgba(255,255,255,0.3);
		height: 100%;
		width: 100%;
		left: 0;
		top: 0;
	}
	.nav-ul{
		width: 200px;
	}
	.nav-item{
		display: block;
		box-sizing: border-box;
		padding: 14px 24px;
		margin: 0px;
		font-size: 15px;
		color: rgba(255,255,255,0.7);
		cursor: pointer;
	}
	.nav-item span{
		display: block;
		width: 100%;
	}
	.nav-item:hover{
		color: rgba(255,255,255, 1);
	}
	.active{
		margin-top: 0px;
		color: #2D8CF0;
		background-color: rgb(54, 62, 79);
	}
	.active>.nav-item{
		color: #2D8CF0;
	}
	.active:hover{
		color: #2D8CF0;
	}
	.nav-sub-items{
		padding: 0px;
	}
	.nav-ul{
		padding: 0px;
		height: auto;
		background-color: rgb(54, 62, 79);
	}
	.nav-ul li{
		padding-left:60px;
	}
	.sub-nav{
		display: block;
		padding: 14px 24px;
	}
	.sub-active{
		background-color: #2D8CF0;
	}
	.collapse-leave-active,.collapse-enter-active{
            transition: height 0.2s linear; 
      }
    .collapse-leave-to,.collapse-enter{
        height:0px !important;
    }
    .collapse-leave,.collapse-enter-active{
        height: 96px;
    }
    .icon-style{
    	font-size: 16px;
    	margin-right: 5px;
    }
    .icon-tongji{
    	margin-top: 4px;
    	font-size: 20px;
    }
    .icon-arrow{
    	font-size: 14px;
    	position: absolute;
    	right: 35px;
    	top: 17px;
    }
</style>