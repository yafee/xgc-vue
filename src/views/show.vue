<template>
	<div class="content">
		<transition name='slide-left'>
			<router-view></router-view>
		</transition>
		<v-footer></v-footer>
	</div>
</template>
<style>
	.slide-left-enter,
	.slide-left-leave-active{
		-webkit-transform: translateX(20rem);
		-ms-transform: translateX(20rem);
		-o-transform: translateX(20rem);
		transform: translateX(20rem);
		opacity: 0;
	}
	.slide-right-enter,
	.slide-right-leave-active{
		-webkit-transform: translateX(-20rem);
		-ms-transform: translateX(-20rem);
		-o-transform: translateX(-20rem);
		transform: translateX(-20rem);
		opacity: 0;
	}
	.slide-right-enter-active,
	.slide-right-leave,
	.slide-left-enter-active,
	.slide-left-leave{
		-webkit-transition: all .5s;
		-o-transition: all .5s;
		transition: all .5s;
	}
</style>
<script>
	import vFooter from '../components/footer.vue'
	export default {
		data(){
			return {

			}
		},
		components:{
			vFooter
		}
	}
</script>