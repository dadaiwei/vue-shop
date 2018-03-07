<template>
	<div class="mask">
		<div class="mask1" @click="closeModal"> 	
		</div>
		<div class="add-person">
			<div class="header-text">
				<h4>添加新员工</h4>
				<span class="iconfont icon-iconfontguanbi icon-close" @click="closeModal"></span>
			</div>
			
				<div class="middle-content">	
					<div class="form-group form-center">
						<label class="col-md-4 label-style"><span class="star">*</span>员工姓名</label>
						<div class="col-md-8 input-box">
							<input type="text" class="form-control" maxlength="6" required v-model="person.name" placeholder="请输入员工姓名">
						</div>
					</div>
					<p class="error-tooltip name-erroe" v-show="nameErr">员工姓名只能包含字母，形式为"user"</p>
					<div class="form-group form-center">
						<label class="col-md-4 label-style"><span class="star">*</span>员工编号</label>
						<div class="col-md-8 input-box">
							<input type="number" class="form-control" maxlength="3" required  v-model="person.coding" placeholder="请输入员工编号">
						</div>
					</div>
					<p class="error-tooltip coding-error" v-show="codingErr">员工编号共3位，形式为002</p>
					<div class="form-group form-center">
						<label class="col-md-4 label-style"><span class="star">*</span>员工职位</label>
						<div class="col-md-8 input-box">
							<input type="text" class="form-control" maxlength="6" required  v-model="person.position" placeholder="请输入员工职位">
						</div>
					</div>
					<p class="error-tooltip position-error" v-show="positionErr">员工职位必须为汉子，长度为3-6位</p>
					<div class="form-group form-center">
						<label class="col-md-4 label-style"><span class="star">*</span>登陆密码</label>
						<div class="col-md-8 input-box">
							<input type="password" class="form-control" required  v-model="pwd" placeholder="请输入登陆密码">
						</div>
					</div>
					<div class="form-group form-center">
						<label class="col-md-4 label-style"><span class="star">*</span>确认登陆密码</label>
						<div class="col-md-8 input-box">
							<input type="password" class="form-control" required  v-model="confirmPwd" placeholder="请输入登陆密码">
						</div>
					</div>
					<p class="error-tooltip" v-show="pwdErr">密码必须保持一致</p>
					<div class="form-group form-center">
						<label class="col-md-4 label-style"><span class="star">*</span>权限设置</label>
						<div class="col-md-8 input-box">
							<select class="form-control" v-model="person.jurisdiction" required>
								<option value="一级">一级</option>
								<option value="二级">二级</option>
								<option value="三级">三级</option>
							</select>
						</div>
					</div>
					<div class="form-group form-center">
						<label class="col-md-4 label-style"><span class="star">*</span>联系电话</label>
						<div class="col-md-8 input-box">
							<input type="text" class="form-control" v-model="person.telephone" required placeholder="请输入联系电话">
						</div>
					</div>
					<p class="error-tooltip telephone-error col-md-offset-4" v-show="telpehoneErr">联系电话格式形式为"13989879098"</p>
					<div class="form-group form-center">
						<label class="col-md-4 label-style address-style">家庭住址</label>
						<div class="col-md-8 input-box">
							<input type="text" class="form-control" v-model="person.address" placeholder="请输入家庭住址">
						</div>
					</div>
				</div>
				<div class="modal-footer">
					<button type="submit" :disabled="buttonDisable" class="btn btn-default btn-info btn-sm" @click="confirm">确认</button>
					<button type="button" class="btn btn-default btn-info btn-sm" @click="reset">重置</button>
				</div>
		</div> 
	</div>
	
</template>

<script>
	import {mapActions} from 'vuex'
	
	export default{
		name: "addNewPerson",
		data(){
			return {
				person: {
					name: "",
					coding: "",
					position: "",
					jurisdiction: "一级",
					telephone: "",
					address: ""	
				},
				pwd: "",
				confirmPwd: ""
			}
		},
		computed: {
			nameErr(){
				return this.person.name && !(/^[a-z]{3,6}$/).test(this.person.name);
			},
			codingErr(){
				return this.person.coding && !(/^[0-9]{3}$/).test(this.person.coding);
			},
			positionErr(){
				return this.person.position && !(/^[\u4e00-\u9fa5]{3,6}$/).test(this.person.position);
			},
			pwdErr(){
				return this.pwd !== this.confirmPwd;
			},
			telpehoneErr(){
				return this.person.telephone && !(/^[1]{1}[0-9]{10}$/).test(this.person.telephone);
			},
			buttonDisable(){
				return !this.person.name || !this.person.coding || !this.person.position || 				 		 						!this.person.telephone || this.pwdErr;
			}
		},
		methods: {
			...mapActions(['addNewPerson','deletePerson']),
			closeModal(){
				this.person = {
					name: "",
					coding: "",
					position: "",
					jurisdiction: "一级",
					telephone: "",
					address: ""
				};
				this.$emit("closeModal", false);
			},
			confirm(){
				this.addNewPerson(this.person);
				this.person = {
					name: "",
					coding: "",
					position: "",
					jurisdiction: "一级",
					telephone: "",
					address: ""
				};
				this.$emit("closeModal", false);
			},
			reset(){
				this.person = {
					name: "",
					coding: "",
					position: "",
					jurisdiction: "一级",
					telephone: "",
					address: ""
				};
			}
		}
	}
</script>

<style scoped>
	.mask{
		background: rgba(55, 55, 55, 0.6);
		position: absolute;
		left: 0;
		top: 0;
		height: 100%;
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 1000;
	}
	.mask1{
		position: absolute;
		left: 0;
		top: 0;
		height: 100%;
		width: 100%;
		z-index: 1000;
	}
	.add-person{
		width: 450px;
		height: auto;
		background-color: #FFFFFF;
		z-index: 1002;
		border-radius: 5px;
	}
	.header-text{
		display: flex;
		justify-content: space-between;
		height: 40px;
		line-height: 40px;
		padding:0px 20px;
		border-bottom: 1px solid #EEEEEE;
	}
	.header-text>h4{
		height: 40px;
		line-height: 40px;
		margin: 0px;
		font-size: 13px;
		font-weight: bold;
	}
	.icon-close{
		cursor: pointer;
		font-size: 13px;
		font-weight: bold;
	}
	.middle-content{
		padding: 15px 10px 5px 10px;
	}
	label{
		font-weight: normal;
		font-size: 13px;
		margin-right: -20px;
		margin-top: 5px;
	}
	.star{
		margin-right: 5px;
		font-size: 18px;
		color: red;
		vertical-align: -3px;
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
	.error-tooltip{	
		color: red;
		margin: -10px 0px 8px 0px;
		text-indent: -30px;
		font-size: 13px;
	}
	.name-erroe{
		text-indent: 78px;
	}
	.coding-error{
		text-indent: 20px;
	}
	.position-error{
		text-indent: 65px;
	}
	.telephone-error{
		text-indent: 70px;
	}
</style>