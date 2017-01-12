<template>
	<div class="footer row text-center">
		<router-link class="col-sm-6 col-xs-6 footer-nav" :to="{path:'/show/showList'}">
			<img src="../assets/imgs/yanchuhong-.png" height="30" width="25">
		</router-link>
		<router-link class="col-sm-6 col-xs-6 footer-nav" :to="{path:'/show/center'}">
			<img src="../assets/imgs/wodehong.png" height="30" width="25">
		</router-link>
	</div>
</template>
<style>
	.footer img{
		-webkit-filter: contrast(0%);
		-o-filter: contrast(0%);
		filter: contrast(0%);
	}
	.footer{
		position: absolute;
		width: 100%;
		left: 0;
		bottom: 0;
		height: 4rem;
		line-height: 4rem;
		-webkit-box-shadow: -.3rem 0 .5rem #ccc;
		box-shadow: -.3rem 0 .5rem #ccc;
		background: #fff;
	}
	a.router-link-active img{
		-webkit-filter: contrast(100%);
		-o-filter: contrast(100%);
		filter: contrast(100%);
	}
</style>
<script>
	export default{
		
	}
</script>