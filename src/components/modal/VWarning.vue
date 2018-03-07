<template>
	<div class="mask">
		<div class="mask1"  @click="closeWarning">
			
		</div>
		<div class="modal-dialog dialog-warning">
	        <div class="modal-content warning-content">
	            <div class="modal-body modal-font text-warning">{{message}}</div>
	             <button type="button" class="btn btn-default btn-sm btn-warning" @click="closeWarning">确定</button>
	        </div>
	    </div>     
	</div>	
</template>

<script>
 	export default{
		name: "VWarning",
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
			closeWarning(){
				this.$emit("closeWarningModal");
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
	.dialog-warning{
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
	.warning-content{
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