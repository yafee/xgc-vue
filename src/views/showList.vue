<template>
	<div class="contain">
		<v-header>
			<span slot='header-left'>南京</span>
			<span slot='header-middle'>
				<span v-show="!searchFlag">演出</span>
				<input type="text" v-show="searchFlag">
			</span>
			<span slot='header-right'>
				<i class="glyphicon glyphicon-search" v-show="!searchFlag" @click="toggleSearch"></i>
				<span v-show="searchFlag" @click="search">确定</span>
			</span>
		</v-header>
		<div class="row show-nav">
			<router-link class="col-xs-3 col-sm-3" :to="{path:'/show/showList/all'}">全部</router-link>
			<router-link class="col-xs-3 col-sm-3" :to="{path:'/show/showList/music'}">演唱会</router-link>
			<router-link class="col-xs-3 col-sm-3" :to="{path:'/show/showList/opera'}">歌剧</router-link>
			<router-link class="col-xs-3 col-sm-3" :to="{path:'/show/showList/other'}">其它</router-link>
		</div>
		<router-view></router-view>
	</div>
</template>
<style>
	.slide-enter,
	.slide-leave-active{
		-webkit-transform: translateX(10rem);
		-ms-transform: translateX(10rem);
		-o-transform: translateX(10rem);
		transform: translateX(10rem);
		opacity: 0;
	}
	.slide-enter-active,
	.slide-leave{
		-webkit-transition: all .5s;
		-o-transition: all .5s;
		transition: all .5s;
	}
	.show-nav{
		text-align: center;
		height: 3rem;
		line-height: 3rem;
		color: #333;
		background: #f0f0f0;
	}
	.show-nav a{
		color: #333;
		text-decoration: none;
	}
	.show-nav .router-link-active{
		border-bottom: .3rem solid #a10;
	}
</style>
<script>
	import vHeader from '../components/header.vue'
	export default {
		data(){
			return {
				searchFlag : false
			}
		},
		components:{
			vHeader
		},
		methods:{
			toggleSearch:function(){
				this.searchFlag = !this.searchFlag;
			},
			search:function(){
				//serach...
				this.toggleSearch();
			}
		}
	}
</script>