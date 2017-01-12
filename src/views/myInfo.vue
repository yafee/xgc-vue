<template>
<transition name='slide'>
	<div class="content">
		<v-header>
			<span slot="header-left">
				<img src="../assets/imgs/back.png" height="20" width="20">
			</span>
			<span slot="header-middle">我的资料</span>
		</v-header>
		<div class="main fullWidth">
	    <div class="user-pic text-center">
	      <img src="../assets/imgs/defUserPic.png" width="90" height="90">
	    </div>
	    <div class="infoList">
	      <div class="input-group">
	        <span class="input-group-addon bgWhite colorGrey labelTitle">昵称</span>
	        <input type="text" class="form-control" disabled>
	        <span class="input-group-addon bgWhite">
	          <span class="nikeName colorGrey1">会飞的猪</span>
	          <img src="../assets/imgs/next.png" class="next" width="15" height="15">
	        </span>
	      </div>
	      <div class="input-group">
	        <span class="input-group-addon bgWhite colorGrey labelTitle">手机</span>
	        <input type="text" class="form-control" disabled>
	        <span class="input-group-addon bgWhite">
	          <span class="tel colorGrey1">18551664771</span>
	          <img src="../assets/imgs/next.png" class="next" width="15" height="15">
	        </span>
	      </div>
	      <div class="input-group">
	        <span class="input-group-addon bgWhite colorGrey labelTitle">密码修改</span>
	        <input type="text" class="form-control" disabled>
	        <span class="input-group-addon bgWhite">
	          <img src="../assets/imgs/next.png" class="next" width="15" height="15">
	        </span>
	      </div>
	      <div class="input-group">
	        <span class="input-group-addon bgWhite colorGrey labelTitle">地址管理</span>
	        <input type="text" class="form-control" disabled>
	        <span class="input-group-addon bgWhite">
	          <img src="../assets/imgs/next.png" class="next" width="15" height="15">
	        </span>
	      </div>
	    </div>
	  </div>
	</div>
</transition>
</template>
<script>
	import vHeader from '../components/header.vue'
	export default {
		components:{
			vHeader
		}
	}
</script>
<style>
	.user-pic img{
	  border-radius: 50%;
	  border:.1rem solid #3a3a3a;
	  margin: 2rem 0 5rem;
	}
	.infoList{
	  width: 95%;
	  max-width: 50rem;
	  margin: 0 auto;
	}
	.labelTitle{
	  font-size: 1.4rem;
	}
	.tel,
	.nikeName{
	  font-size: 1.2rem;
	}
	.input-group{
	  border-bottom: .1rem solid #e5e5e5;
	  height: 4rem;
	}
	.form-control,
	.input-group-addon{
	  border:none;
	  box-shadow: none;
	  border-radius: 0;
	  height: 4rem;
	  background: #fff;
	}
	.form-control[disabled]{
	  background-color: #fff;
	}
	input.form-control:focus{
	  outline: none;
	  box-shadow: none;
	}
</style>