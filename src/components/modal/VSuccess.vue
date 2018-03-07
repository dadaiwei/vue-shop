<template>
	<div class="mask">
		<div class="mask1"  @click="closeSuccess">
			
		</div>
		<div class="modal-dialog dialog-success">
	        <div class="modal-content success-content">
	            <div class="modal-body modal-font text-success">{{message}}</div>
	             <button type="button" class="btn btn-default btn-sm btn-success" @click="closeSuccess">确定</button>
	        </div>
	    </div>     
	</div>	
</template>

<script>
 	export default{
		name: "VSuccess",
		props: {
			message: {
				type: String,
				required: true
			}
		},
		data(){
			return {
				
			}
		},
		computed: {
			
		},
		methods: {
			closeSuccess(){
				this.$emit("closeSuccessModal");
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
		z-index: 1000;
	}
	.mask1{
		position: absolute;
		left: 0;
		top: 0;
		height: 100%;
		width: 100%;
		z-index: 1001;
	}
	.dialog-success{
		height: 100px;
		width: 260px;
		position: absolute;
		left: 50%;
		top: 50%;
		background: #FFFFFF;
		margin-left: -130px;
		margin-top: -150px;
		border-radius: 8px;
		z-index: 1002;
		animation: anim 0.3s;
	}
	@keyframes anim
	{
	    0%{ opacity: 0; }
	    50%{opacity: 0.5; }
	    100%{ opacity: 1; }
	}
	.success-content{
		height: 100px;
	}
	.modal-font{
		font-size: 15px;
		font-weight: bold;
	}
	.modal-footer{
		border-top: none;
		padding-top: 0px;
	}
</style>