<template>
	<div class="mask">
		<div class="mask1" @click="close"></div>
	    <div class="modal-dialog dialog">
	        <div class="modal-content">
	            <div class="modal-body modal-font">{{message}}</div>
	            <div class="modal-footer">
	                <button type="button" class="btn btn-default btn-sm" data-dismiss="modal" @click="close">取消</button>
	                <button type="button" class="btn btn-primary btn-sm" @click="confirm">确定</button>
	            </div>
	        </div><!-- /.modal-content -->
	    </div><!-- /.modal-dialog -->
	</div>
</template>

<script>
	export default{
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
		methods: {
			close(){
				this.$emit("close");
			},
			confirm(){
				this.$emit("confirm")
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
	.dialog{
		height: 100px;
		width: 200px;
		position: absolute;
		left: 50%;
		top: 50%;
		margin-left: -100px;
		margin-top: -200px;
		z-index: 1002;
		animation: anim 0.3s;
	}
	@keyframes anim
	{
	    0%{ opacity: 0; }
	    50%{opacity: 0.5; }
	    100%{ opacity: 1; }
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