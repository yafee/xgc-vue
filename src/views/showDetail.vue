<template>
  <transition name="slide">
  	<div class="content">
  		<v-header>
  			<span slot='header-left'>
  				<img src="../assets/imgs/back.png" height="20" width="20">
  			</span>
  			<span slot='header-middle'>演出详情</span>
  			<span slot='header-right'>
  				<img src="../assets/imgs/guize.png" height="15" width="15">
  			</span>
  		</v-header>
  		<div class="itemVideo relative">
        <img src="../assets/imgs/img1.png" class="img-responsive videoFace fullWidth">
        <!-- <img src="../assets/imgs/shipinBtn.png" class="playBtn absolute" width="70" height="70"> -->
      </div>
      <div class="itemImg">
        <img src="../assets/imgs/sjkrp_0.png">
        <img src="../assets/imgs/sjkrp_0.png">
        <img src="../assets/imgs/sjkrp_0.png">
      </div>
      <div class="showInfo">
        <span class="showTitle colorBlack">
          某某某音乐会某某某音乐会某某某音乐会某某某音乐会
        </span>
        <span class="showType block colorGrey">
          <i class="glyphicon glyphicon-tag"></i>&nbsp;<span>演唱会</span>
        </span>
        <span class="showAddress block colorGrey">
          <i class="glyphicon glyphicon-map-marker"></i>&nbsp;<span>南京奥体中心体育馆</span>
        </span>
      </div>
      <div class="showPic">
        <img src="../assets/imgs/lrhdetail_1.png" class="img-responsive">
        <img src="../assets/imgs/lrhdetail_1.png" class="img-responsive">
      </div>
      <div class="buy">购票</div>
  	</div>
  </transition>
</template>
<style>
	.content {
    margin-bottom: 5rem;
  }

  .playBtn {
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }
  .itemImg {
    white-space: nowrap;
    overflow-x: auto;
  }

  .itemImg img {
    width: 33.33%;
  }


  /*隐藏滚动条*/

  ::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .showInfo {
    padding: 1.5rem 1.5rem 2.1rem;
  }

  .showTitle {
    font-size: 1.8rem;
  }

  .showType,
  .showAddress {
    font-size: 1.4rem;
    margin-top: .5rem;
  }

  .operate {
    height: 4rem;
    line-height: 4rem;
    left: 0;
    bottom: 0;
    z-index: 1000;
  }

  .operate li {
    width: 33.333%;
    font-size: 1.2rem;
  }

  li.buy {
    background: #d91f42;
    font-size: 1.5rem;
  }


  /**/

  .modal {
    top: auto;
  }

  .modal-title {
    font-size: 1.4rem;
    font-weight: normal;
  }

  .modal-body {
    padding: 1rem 2rem 0;
    max-height: 20rem;
    overflow-y: scroll;
  }

  .modal-dialog {
    padding-bottom: 5rem;
    margin: 0;
  }

  .modal-content {
    border-radius: 0;
    border: none;
    box-shadow: none;
  }

  .userPic {
    padding-right: 0;
  }

  .comments {
    padding-left: 1rem;
  }

  .commentItem {
    border-bottom: .1rem solid #e5e5e5;
    margin-bottom: 1rem;
    padding-bottom: 1rem;
  }

  .commentName {
    font-size: 1.3rem;
  }

  .commentTime {
    font-size: 1.2rem;
    margin-top: .5rem;
  }

  .commentContent {
    margin-top: .8rem;
    font-size: 1.4rem;
  }
  .buy{
    position: fixed;
    left: 0;
    bottom: 0;
    height: 5rem;
    line-height: 5rem;
    background: #a10;
    width: 100%;
    text-align: center;
    font-size: 1.8rem;
    color: #fff;
  }
</style>
<script>
	import vHeader from '../components/header.vue'
	export default {
		data(){
			return {
				id:1,
				detailData:[]
			}
		},
		components:{
			vHeader
		},
		methods:{
      // backOneStep:function(){
      //   window.history.go(-1);
      // }
		},
		created:function(){
			this.id = this.$route.query.id;
			if (this.id === 1) {

			}
		}
	}
</script>