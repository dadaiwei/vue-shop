<template>
	<div class="goods-storage">
		<h4>新商品入库</h4>
		<div class="storage-form">
			<form>
				<div class="middle-content">	
					<div class="form-group form-center">
						<label class="col-md-4 label-style"><span class="star">*</span>商品编码</label>
						<div class="col-md-10 input-box">
							<input type="text" class="form-control" v-model="newGoods.coding" maxlength="6" required placeholder="请输入商品编码">
						</div>
					</div>
					<p class="error-tooltip" v-show="codingErr">商品编码必须为数字，长度为1-4位。</p>
					<div class="form-group form-center">
						<label class="col-md-4 label-style"><span class="star">*</span>商品名称</label>
						<div class="col-md-10 input-box">
							<input type="text" class="form-control" v-model="newGoods.name" maxlength="6" required placeholder="请输入商品名称">
						</div>
					</div>
					<p class="error-tooltip name-error" v-show="nameErr">商品名称必须为数字或者汉子，长度至少为1位。</p>
					<div class="form-group form-center">
						<label class="col-md-4 label-style"><span class="star">*</span>商品单价</label>
						<div class="col-md-10 input-box">
							<input type="number" class="form-control" v-model="newGoods.price" maxlength="6" required placeholder="请输入商品单价">
						</div>
					</div>
					<div class="form-group form-center">
						<label class="col-md-4 label-style"><span class="star">*</span>商品数量</label>
						<div class="col-md-10 input-box">
							<input type="number" class="form-control" v-model="newGoods.number" maxlength="6" required placeholder="请输入商品数量">
						</div>
					</div>
					<div class="form-group form-center">
						<label class="col-md-4 label-style"><span class="star">*</span>商品分类</label>
						<div class="col-md-10 input-box">
							<select class="form-control" v-model="newGoods.category">
								<option v-for="c in categories" :value="c">{{c}}</option>
							</select>
						</div>
					</div>
					<div class="form-group form-center">
						<label class="col-md-4 label-style"><span class="star">*</span>选择保质期</label>
						<div class="col-md-10 input-box">
							<input type="date" class="form-control form_datetime" required v-model="newGoods.date" placeholder="请选择日期">
						</div>
					</div>	
				</div>
				<div class="storage-footer">
					<button type="button" :disabled="buttonDisabled"  class="btn btn-default btn-info btn-sm btn-confirm" @click="confirm">确认</button>
					<button type="button" class="btn btn-default btn-info btn-sm" @click="reset">重置</button>
				</div>
			</form>
		</div>
		<v-warning :message="warningMessage" @closeWarningModal="closeWarning" v-show="showWarning"></v-warning>
		<v-success :message="successMessage" @closeSuccessModal="closeSuccess" v-show="showSuccess"></v-success>"
	</div>
</template>

<script>
	import {mapMutations} from 'vuex'
	import VWarning from './modal/VWarning'
	import VSuccess from './modal/VSuccess'
	
	export default{
		name: "GoodsStorage",
		data(){
			return {
				newGoods: {
					coding: '', 
	                name: '', 
	                price: '', 
	                number: '', 
	                category: '休闲零食', 
	                date: '', 
	                sales: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
				},
				categories: ["休闲零食", "酒水饮料", "粮油副食", "生鲜水果", "日常洗护", "厨卫用品", "其它品类"],
				showWarning: false,
				warningMessage: "商品编码重复，请重新输入",
				showSuccess: false,
				successMessage: "商品入库成功"
			}
		},
		computed: {
			codingErr(){
				return this.newGoods.coding && !(/^[0-9]{1,4}$/).test(this.newGoods.coding);
			},
			nameErr(){
				return this.newGoods.name && !(/^[a-zA-Z\u4e00-\u9fa5]{1,}$/).test(this.newGoods.name);
			},
			buttonDisabled(){
				return !this.newGoods.coding || !this.newGoods.name || !this.newGoods.price 
						|| !this.newGoods.date;
			}
		},
		methods: {
			...mapMutations(['addNewGoods']),
			confirm(){
				var goodsList = this.$store.state.goods.goods.goodsList;
				var flag = true;
				for(var i = 0; i < goodsList.length; i++){
					if(this.newGoods.coding === goodsList[i].coding){
						flag = false;
						break;
					}
				}
				if(flag){
					this.showSuccess = true;
					this.addNewGoods(this.newGoods);
				}else{
					this.showWarning = true;
				}
			},
			reset(){
				this.newGoods = {
					coding: '', 
	                name: '', 
	                price: '', 
	                number: '', 
	                category: '休闲零食', 
	                date: '', 
	                image: '',
	                sales: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
				}
			},
			closeWarning(){
				this.showWarning = false;
			},
			closeSuccess(){
				this.showSuccess = false;
				this.$router.push({name: "goodsDetail"});
			}
		},
		components: {
			VWarning,
			VSuccess
		}
	}
	
	
	
</script>

<style scoped>
	.goods-storage{
		width: 100%;
		height: 100%;
		padding: 10px 20px;
	}
	.goods-storage>h4{
		width: 100%;
		text-align: left;
		font-weight: bold;
		font-size: 17px;
		padding:0px 0px 10px 10px;
		border-bottom: 1px solid #ccc;
	}
	.storage-form{
		height: calc(100% - 100px);
		width: 600px;
		margin: 0 250px;
		padding: 10px 20px;
	}
	.form-center{
		margin: 20px 0px;
	}
	.form-center:first-child{
		margin: 30px 0px 20px 0px;
	}
	.form-center:last-child{
		margin-bottom: 25px;
	}
	.error-tooltip{	
		color: red;
		margin: -10px 0px -10px 0px;
		text-indent: -30px;
		font-size: 13px;
	}
	.name-error{
		text-indent: 40px;
	}
	label{
		height: 34px;
		line-height: 34px;
		margin:3px -40px 0px 0px;
		font-weight: normal;
		font-size: 13px;
	}
	.star{
		margin-right: 5px;
		font-size: 18px;
		color: red;
		vertical-align: -6px;
	}
	.input-box{
		display: inline-block;
	}
	.form-center{
		display: flex;
		align-items: center;
	}
	.address-style{
		text-indent: 11px;
	}
	.storage-footer{
		display: flex;
		padding-right: 20px;
		justify-content: flex-end;
	}
	.btn-confirm{
		margin-right: 10px;
	}

</style>