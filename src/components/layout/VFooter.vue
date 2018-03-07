<template>
	<div class="footer">
		<p class="copyright">
			<svg class="icon" aria-hidden="true">
			  <use xlink:href="#icon-social-github"></use>
			</svg>
			<a class="github-link" target="_blank" href="https://github.com/dadaiwei">Written By Dada</a>
		</p>
	</div>
</template>

<script>
	export default{
		name: "VFooter"
	}
</script>

<style scoped>
	.footer{
		height: 30px;
		line-height: 30px;
		background-color: #495060;
	}
	.copyright{
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 12px;
		margin-bottom: 0px ;		
	}
	.icon{
		height: 17px;
		width: 17px;
		margin-right: 7px;
	}
	.github-link{
		color: #2D8CF0;
		text-decoration: none;
	}
	.github-link:hover{
		color: #FFFFFF;
	}
</style>