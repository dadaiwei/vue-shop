<template>
	<div class="shopping-cart">
		<h4>购物车</h4>
		<div class="cart-container">
			<table class="table table-hover table-striped table-bordered shopping-table">
				<thead>
					<tr>
						<th>
							<input type="checkbox" class="cart-checkbox" v-model="allSelect">
						</th>
						<th v-for="(header, index) in headers">
							{{header.title}}
						</th>
						<th>商品金额</th>
						<th>操作</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="(good,index) in shoppingList" :key="'good'+index">
						<td>
							<input type="checkbox" class="cart-checkbox"  v-model="good.select">
						</td>
						<td>{{good.name}}</td>
						<td>{{good.price}}</td>
						<td class="td-number">
							<input type="number" min="1" step="1" :max="good.number" class="form-control input-number" v-model="good.selectNumber">
						</td>
						<td>{{parseInt(good.price) * parseInt(good.selectNumber)}}</td>
						<td>
							<button type="button" 
								class="btn btn-default btn-danger btn-sm btn-delete"
								@click="deleteGood(index)">
								<i class="iconfont icon-shanchu"></i>删除
							</button>
						</td>
					</tr>
					<tr v-show="!shoppingList.length">
						<td colspan="6">暂无数据</td>
					</tr>
				</tbody>
			</table>	
		</div>
		<div class="cart-footer">
			<div class="count">
				<span>共:</span> {{count}} 件
			</div>
			<div class="sum">
				<span>合计:</span> {{sum}} 元
			</div>
			<button type="button" class="btn btn-default btn-sm btn-danger btn-sum">确认结算</button>
		</div>
	</div>
</template>

<script>
	export default{
		name: "ShoppingCart",
		data(){
			return {
				headers: [
					{title: "商品名称", field: "name"},
					{title: "商品单价", field: "price"},
					{title: "商品数量", field: "number"}
				],
				allSelect: false,
				count: 0,
				sum: 0,
				lists: this.$store.state.shoppingCart.shoppingCart.shoppingCartList
			}
		},
		computed: {
			shoppingList(){
				 var lists = this.$store.state.shoppingCart.shoppingCart.shoppingCartList;
				  for(var i = 0; i < lists.length; i++){
				  	lists[i].select = this.allSelect;
				  	
				  }
				  return lists;
			}
		},
		methods: {
			deleteGood(index){
				this.$store.commit("deleteShoppingCart", index);
			}
		},
		watch: {
			lists:{
				handler: function(newValue, oldValue){
					this.sum = 0;
					this.count = 0;
					for(var i = 0; i < newValue.length; i++){
						if(newValue[i].select){
							this.sum += parseInt(newValue[i].price) * parseInt(newValue[i].selectNumber);
							this.count += parseInt(newValue[i].selectNumber);
						}	
					}
				},
				deep: true
			} 
		}
	}
</script>

<style scoped>
	.shopping-cart{
		width: 100%;
		height: 100%;
		padding: 10px 20px;
	}
	.shopping-cart>h4{
		width: 100%;
		text-align: left;
		font-weight: bold;
		font-size: 17px;
		padding:0px 0px 10px 10px;
		border-bottom: 1px solid #ccc;
	}
	.cart-container{
		width: 95%;
		max-height: 350px;
		overflow: auto;
		position: relative;
		padding: 5px 10px;
		margin: 20px auto 0px;
	}
	.shopping-table{
		table-layout: fixed;
	}
	.shopping-table thead{
		background-color: #E0E0E0;
	}
	.shopping-table th,.goods-table td{
		text-align: center;
	}
	.shopping-table td{
		height: 35px;
		line-height: 35px;  
	}
	.input-number{
		width: 100px;
		margin-left: 30px;
	}
	.cart-footer{
		display: flex;
		justify-content: flex-end;
		align-items: center;
		width: 94%;
		height: 60px;
		padding: 5px 10px;
		margin: 40px auto 0px;
		border: 1px solid #CCCCCC;
		background: #EEEEEE;
	}
	.count, .sum{
		font-size: 15px;
		font-weight: bold;
	}
	.count{
		margin-right: 120px;
	}
	.sum{
		margin-right: 100px;
	}
	.btn-sum{
		margin-right: 60px;
	}
</style>