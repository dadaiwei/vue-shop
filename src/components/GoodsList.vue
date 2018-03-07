<template>
	<div class="goods-list">
		<div class="search-box">
			<input type="text" v-model="searchValue" class="form-control search-input" placeholder="请输入商品名称或编码...">
			<button type="button" class="btn btn-info btn-default btn-cart btn-sm" @click="goCart">
				<i class="iconfont icon-gouwuche  icon-cart"></i>
				购物车
			</button>
		</div>
		<div class="category">
				<button type="button" 
						class="btn btn-default btn-sm" 
						v-for="(category,index) in categories" 
						:key="'category'+index"
						@click="categoryGoods(category)">{{category}}</button>
			</div>
		<div class="goods-container">
			<table class="table table-hover table-bordered table-striped goods-table">
				<thead>
					<tr>
						<th v-for="(header,index) in headers" :key="'header'+index">{{header.title}}</th>
						<th>商品操作</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="(good,index) in filterGoodsList">
						<td v-for="h in headers">
							{{good[h.field]}}
						</td>
						<td>
							<button type="button" 
								class="btn btn-default btn-warning btn-add"
								@click="addShoppingCart(good)">
								<i class="iconfont icon-gouwuche"></i>
								购物车
							</button>
						</td>
					</tr>
					<tr v-show="!filterGoodsList.length">
						<td colspan="7">
							暂无数据
						</td>
					</tr>
				</tbody>
			</table>
			<p v-show="!goodsList.length">当前没有商品，请去<a @click="goStorage" class="link">商品操作 / 新商品入库</a>添加商品</p>
		</div>
		<v-warning :message="warningMessage" @closeWarningModal="closeWarning" v-show="showWarning"></v-warning>
		<v-success :message="successMessage" @closeSuccessModal="closeSuccess" v-show="showSuccess"></v-success>"
	</div>
</template>

<script>
	import VWarning from './modal/VWarning'
	import VSuccess from './modal/VSuccess'
	
	export default{
		name: "goodsList",
		data(){
			return {
				searchValue: "",
				headers: [
					{
						title: "商品编码",
						field: "coding"
					},
					{
						title: "商品名称",
						field: "name"
					},
					{
						title: "商品价格",
						field: "price"
					},
					{
						title: "商品数量",
						field: "number"
					},
					{
						title: "商品分类",
						field: "category"
					},
					{
						title: "保质期",
						field: "date"
					}
				],
				goodsList: this.$store.state.goods.goods.goodsList,
				category: "全部商品",
				categories: ["全部商品","休闲零食", "酒水饮料", "粮油副食", 
								"生鲜水果", "日常洗护", "厨卫用品", "其它品类"],
				showWarning: false,
				warningMessage: "该商品已加入购物车，请重新选择",
				showSuccess: false,
				successMessage: "加入购物车成功"
			}
		},
		computed: {
			filterGoodsList(){
				var goodsList = this.$store.state.goods.goods.goodsList;
				var items = [];
				var self = this;
				if(this.searchValue){
					if(this.category === "全部商品"){
						items = goodsList.filter(function(item){
						return ((item.coding.indexOf(self.searchValue) !== -1) ||
								(item.name.indexOf(self.searchValue) !== -1))
						})
					}else{
						items = goodsList.filter(function(item){
						return (((item.coding.indexOf(self.searchValue) !== -1) ||
								(item.name.indexOf(self.searchValue) !== -1)) &&
								item.category.indexOf(self.category) !== -1)
						})
					}
				}else{
					if(this.category === "全部商品"){
						items = goodsList;
					}else{
						items = goodsList.filter(function(item){
							return item.category.indexOf(self.category) !== -1;
						});
					}
				}
				return items;
			}
		},
		methods:{
			goStorage(){
				this.$router.push({name: "goodsList"});
			},
			goCart(){
				this.$router.push({name: "shoppingCart"});
			},
			categoryGoods(category){
				this.category = category;
			},
			addShoppingCart(good){
				var shoppingCartList = this.$store.state.shoppingCart.shoppingCart.shoppingCartList;
				var flag = true;
				for(var i = 0; i < shoppingCartList.length; i++){
					if(shoppingCartList[i].coding === good.coding){
						flag = false;
					}
				}
				if(flag){
					this.showSuccess = true;
					this.$store.commit("addShoppingCart", good);
				}else{
					this.showWarning = true;
				}
			},
			closeWarning(){
				this.showWarning = false;
			},
			closeSuccess(){
				this.showSuccess = false;
			}
		},
		components: {
			VWarning,
			VSuccess
		},
		filters:{
		
		}
	}
</script>

<style scoped>
	.goods-list{
		width: 100%;
		padding: 30px 10px;
	}
	.search-box{
		display: flex;
		width: 600px;
		margin: 0 auto;
	}
	.search-input{
		margin-right: 10px;
	}
	.btn-cart{
		color: #FFFFFF;
		font-size: 13px;
	}
	.icon-cart{
		font-size: 15px;
	}
	.category{
		margin: 10px;
	}
	.category>button{
		margin: 0px 5px;
	}
	.goods-container{
		width: 95%;
		max-height: 600px;
		overflow: auto;
		margin: 20px auto 0px;
	}
	.goods-table{
		table-layout: fixed;
	}
	.goods-table thead{
		background-color: #E0E0E0;
	}
	.goods-table th,.goods-table td{
		text-align: center;
	}
	.goods-table td{
		height: 30px;
		line-height: 30px;  
	}
	.btn-add{
		height: 32px;
	}
	.link{
		color: #2D8CF0;
		cursor: pointer;
		text-decoration: none;
	}
	.link:hover{
		color: #00BFFF;
	}
</style>