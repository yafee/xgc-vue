<template>
	<!-- <transition name='slide-left'> -->
	<div class="content">
		<v-header>
			<span slot="header-left">
				<img src="../assets/imgs/back.png" height="20" width="20">
			</span>
			<span slot='header-middle'>积分规则</span>
		</v-header>
		<div class="questionList">
	    <div class="questionItem">
	      <div class="row questionTitle">
	        <div class="col-sm-2 col-xs-2 text-center questionIcon">
	          <img src="../assets/imgs/q.png" width="30" height="30">
	        </div>
	        <div class="col-sm-10 col-xs-10 questionContent">
	          什么是瓜子币？
	        </div>
	      </div>
	      <div class="row questionAnswer">
	        <div class="col-sm-2 col-xs-2 text-center questionIcon">
	          <img src="../assets/imgs/a.png" width="30" height="30">
	        </div>
	        <div class="col-sm-10 col-xs-10 answerContent">
	          瓜子币是在西瓜虫微信上的消费返点。是西瓜虫为了感谢虫友们的支持与厚爱，而推出的回馈计划。您在西瓜虫微信上购得正价票品后，按照购票终极页说明获得一定比例积分返还。
	        </div>
	      </div>
	    </div>
	    <div class="questionItem">
	      <div class="row questionTitle">
	        <div class="col-sm-2 col-xs-2 text-center questionIcon">
	          <img src="../assets/imgs/q.png" width="30" height="30">
	        </div>
	        <div class="col-sm-10 col-xs-10 questionContent">
	          如何获得瓜子币？
	        </div>
	      </div>
	      <div class="row questionAnswer">
	        <div class="col-sm-2 col-xs-2 text-center questionIcon">
	          <img src="../assets/imgs/a.png" width="30" height="30">
	        </div>
	        <div class="col-sm-10 col-xs-10 answerContent">
	          在西瓜虫微信参与购买，送积分。满50元送10积分，可累计。 注册就送50积分生成自己的链接，其他好友点击关注西瓜虫公众号并注册，即可收获10积分，上不封顶。
	        </div>
	      </div>
	    </div>
	    <div class="questionItem">
	      <div class="row questionTitle">
	        <div class="col-sm-2 col-xs-2 text-center questionIcon">
	          <img src="../assets/imgs/q.png" width="30" height="30">
	        </div>
	        <div class="col-sm-10 col-xs-10 questionContent">
	          瓜子币有什么用？
	        </div>
	      </div>
	      <div class="row questionAnswer">
	        <div class="col-sm-2 col-xs-2 text-center questionIcon">
	          <img src="../assets/imgs/a.png" width="30" height="30">
	        </div>
	        <div class="col-sm-10 col-xs-10 answerContent">
	          瓜子币可以用来在购票时抵现金使用，1瓜子币可以抵扣0.1元(瓜子币只能抵现，不能提现）
	        </div>
	      </div>
	    </div>
	  </div>
	</div>
	<!-- </transition> -->
</template>
<style>
	.questionList{
		background: #f0f0f0;
	}
	.questionItem {
	  margin-bottom: .5rem;
	  overflow-x:hidden;
	  background: #fff;
	}

	.questionTitle {
	  height: 4rem;
	  line-height: 4rem;
	  border-bottom: .1rem dashed #e5e5e5;
	  padding: 0 .5rem;
	}
	.questionAnswer {
	  padding: 1rem .5rem;
	}

	.questionIcon {
	  padding-right: .5rem;
	}

	.questionContent {
	  font-size: 1.4rem;
	  color: #6a6a6a;
	}

	.answerContent {
	  color: #3a3a3a;
	  font-size: 1.2rem;
	}

	.answerContent,
	.questionContent {
	  padding-left: 0;
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
