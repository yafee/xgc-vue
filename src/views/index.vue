<template>
	<div class="content">
		<router-view></router-view>
		<v-footer></v-footer>
	</div>
</template>
<style></style>
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