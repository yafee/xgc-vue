<template>
	<div class="header row">
			<div class="col-sm-3 col-xs-3" @click="backOneStep">
				<slot name='header-left'></slot>
			</div>
			<div class="col-sm-6 col-xs-6 text-center">
				<slot name='header-middle'>
				</slot>
			</div>
			<div class="col-sm-3 col-xs-3 text-right" name="header-right">
				<slot name='header-right'>
				</slot>
			</div>
	</div>
</template>
<script>
	export default{
		data(){
			return {
				searchFlag:false
			}
		},
		methods:{
			toggleSearch:function(){
				this.searchFlag = !this.searchFlag;
			},
			backOneStep:function(event){
				if(event.currentTarget.innerHTML.indexOf('img') >-1){
					window.history.go(-1);
				} else {
					return false;
				}
			}
		}
	}
</script>
<style>
	.header{
		margin-left: 0;
		margin-right: 0;
		font-size: 1.6rem;
		height: 4rem;
		line-height: 4rem;
		-webkit-box-shadow: .3rem 0 .5rem #ccc;
		box-shadow: .3rem 0 .5rem #ccc;
		background: #fff;
	}
	img{
		margin-right: .5rem;
	}
	input{
		width: 100%;
		height: 2.6rem;
		border-top-left-radius: 1.3rem;
		border-top-right-radius: 1.3rem;
		border-bottom-left-radius: 1.3rem;
		border-bottom-right-radius: 1.3rem;
		border:.1rem solid #000;
	}
</style>
