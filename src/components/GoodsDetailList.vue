<template>
	<div class="goods-detail">
		<div class="search-box">	
				<input type="text" v-model="searchValue" class="form-control search-input" @keyup.enter="search(searchValue)" placeholder="请输入商品名称或编码...">
				<button type="button" class="btn btn-info btn-default btn-sm btn-search" @click.enter="search(searchValue)">
					<i class="iconfont icon-sousuo3"></i>
					搜索
				</button>
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
						<td v-show="filterGoodsList.length">
							<button type="button"
								 class="btn btn-default btn-sm btn-see btn-warning"
								 @click="seeGood(good)">
								<i class="iconfont icon-chakan"></i>查看详情
							</button>
						</td>
					</tr>
					<tr v-show="!filterGoodsList.length">
						<td colspan="3" >暂无数据</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>

<script>
	import GoodDetail from './GoodDetail'
	
	export default{
		name: "GoodsDetail",
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
					}
				],
				filterGoodsList: this.$store.state.goods.goods.goodsList.slice(0),
				goodDetail: false
			}
		},
		computed: {
		
		},
		methods:{
			goStorage(){
				this.$router.push({name: "goodsStorage"});
			},
			search(searchValue){
				var goodsList = this.$store.state.goods.goods.goodsList.slice(0);
				if(this.searchValue){
					this.filterGoodsList = goodsList.filter(function(item){
						return ((item.coding.indexOf(searchValue) !== -1) ||
								(item.name.indexOf(searchValue) !== -1))
					})
				}else{
					this.filterGoodsList = goodsList;
				}
			},
			seeGood(good){
				this.$router.push({name: "goodDetail"});
			}
		},
		filters:{
		
		},
		components: {
			GoodDetail
		}
	}
</script>

<style scoped>
	.goods-detail{
		height: 100%;
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
	.btn-search{
		font-size: 15px;
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
	.btn-search{
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
	.btn-see{
		padding: 2px 6px;
	}
</style>