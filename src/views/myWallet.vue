<template>
		<div class="content">
			<v-header>
				<span slot="header-left">
					<img src="../assets/imgs/back.png" height="20" width="20">
				</span>
				<span slot='header-middle'>
					我的钱包
				</span>
			</v-header>
			<div class="mian relative">
		    <span class="pointRule absolute">
		      <router-link :to="{name:'pointRule'}"><img src="../assets/imgs/guize.png" width="15" height="15">
		      积分规则</router-link>
		    </span>
		    <div class="hasPoints text-center">
		      60
		    </div>
		    <span class="block colorBlack currencyPoints text-center">当前瓜子积分</span>
		    <div class="pointsDtl fullWidth line-block">
		      <div class="line pull-left"></div>
		      <div class="text-center colorGrey pull-left">瓜子积分明细</div>
		      <div class="line pull-left"></div>
		    </div>
		    <div class="pointDtlItem bgWhite relative fullWidth">
		      <span class="pointFrom colorGrey block">注册成功获取</span>
		      <span class="pointTime colorGrey">2016-9-31 17:00</span>
		      <span class="getPoints absolute">+60</span>
		    </div>
		    <div class="pointDtlItem bgWhite relative fullWidth">
		      <span class="pointFrom colorGrey block">注册成功获取</span>
		      <span class="pointTime colorGrey">2016-9-31 17:00</span>
		      <span class="getPoints absolute">+60</span>
		    </div>
		  </div>
		</div>
</template>
<style>
	.mian{
		margin-top: 2rem;
		position: relative;
	}
	.pointRule{
		right: 2rem;
		top: -1rem;
		position: absolute;
	}
	.hasPoints {
	  width: 10rem;
	  height: 10rem;
	  line-height: 10rem;
	  font-size: 4.5rem;
	  background-image: -moz-linear-gradient( 90deg, rgb(198, 21, 36) 0%, rgb(207, 39, 67) 55%, rgb(215, 56, 98) 99%);
	  background-image: -webkit-linear-gradient( 90deg, rgb(198, 21, 36) 0%, rgb(207, 39, 67) 55%, rgb(215, 56, 98) 99%);
	  background-image: -ms-linear-gradient( 90deg, rgb(198, 21, 36) 0%, rgb(207, 39, 67) 55%, rgb(215, 56, 98) 99%);
	  background-image:linear-gradient( 90deg, rgb(198, 21, 36) 0%, rgb(207, 39, 67) 55%, rgb(215, 56, 98) 99%);
	  margin: 0 auto 1.5rem;
	  border-radius: 50%;
	  color: #fff;
	}
	.currencyPoints{
		font-size: 1.4rem;
	}
	.pointsDtl{
		margin:5rem 0 2.5rem;
		height: 2rem;
		line-height: 2rem;
		padding: 0 1rem;
	}
	.line{
		height: .1rem;
		width: 35%;
		background: #d8d8d8;
		-webkit-transform: translateY(1rem);
		-ms-transform: translateY(1rem);
		-o-transform: translateY(1rem);
		transform: translateY(1rem);
	}
	.pointsDtl>div:nth-of-type(2){
		width: 30%;
		font-size: 1.2rem;
	}
	.pointDtlItem{
		position: relative;
		padding: 1rem;
		border-bottom: .1rem solid #e5e5e5;
	}
	.pointFrom{
		font-size: 1.4rem;
		margin-bottom: .5rem;
	}
	.pointTime{
		font-size: 1.2rem;
		font-weight: lighter;
	}
	.getPoints{
		position: absolute;
		top: 1rem;
		right: 1.5rem;
		font-size: 1.8rem;
		color: #d73862;
	}
</style>
<script>
	import vHeader from '../components/header.vue'
	export default {
		data(){
			return {
				
			}
		},
		components:{
			vHeader
		}
	}
</script>
