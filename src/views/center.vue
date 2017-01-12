<template>
	<div class="content">
		<div class="userFace text-center">
    <span class="userPic inline-block">
      <img src="../assets/imgs/defUserPic.png" width="90" height="90">
    </span>
    <span class="block loginState colorWhite">请登录</span>
  </div>
  <div class="main">
    <router-link class="personalItem bgWhite wallet" :to="{name:'myWallet'}">
      <div class="row">
        <div class="col-sm-6 col-xs-6">
          <img src="../assets/imgs/qianbao.png" class="inline-block icon" width="20" height="20">
          <span class="colorGrey">我的钱包</span>
        </div>
        <div class="col-sm-6 col-xs-6 text-right points colorGrey1">
          已有积分60
          <img src="../assets/imgs/next.png" class="next" width="15" height="15">
        </div>
      </div>
    </router-link>
    <div class="personalItem bgWhite">
      <div class="row">
        <div class="col-sm-6 col-xs-6">
          <img src="../assets/imgs/chengshi.png" class="inline-block icon" width="20" height="20">
          <span class="colorGrey">切换城市</span>
        </div>
        <div class="col-sm-6 col-xs-6 text-right city colorGrey1">
          南京
          <img src="../assets/imgs/next.png" class="next" width="15" height="15">
        </div>
      </div>
    </div>
    <router-link class="personalItem bgWhite" :to="{name:'myInfo'}">
      <div class="row">
        <div class="col-sm-6 col-xs-6">
          <img src="../assets/imgs/wodeziliao.png" class="inline-block icon" width="20" height="20">
          <span class="colorGrey">我的资料</span>
        </div>
        <div class="col-sm-6 col-xs-6 text-right">
          <img src="../assets/imgs/next.png" class="next" width="15" height="15">
        </div>
      </div>
    </router-link>
    <div class="personalItem bgWhite">
      <div class="row">
        <div class="col-sm-6 col-xs-6">
          <img src="../assets/imgs/wodedingdan.png" class="inline-block icon" width="20" height="20">
          <span class="colorGrey">我的订单</span>
        </div>
        <div class="col-sm-6 col-xs-6 text-right">
          <img src="../assets/imgs/next.png" class="next" width="15" height="15">
        </div>
      </div>
    </div>
    <div class="personalItem bgWhite">
      <div class="row">
        <div class="col-sm-6 col-xs-6">
          <img src="../assets/imgs/fenxiangyouli.png" class="inline-block icon" width="20" height="20">
          <span class="colorGrey">分享有礼</span>
        </div>
        <div class="col-sm-6 col-xs-6 text-right">
          <img src="../assets/imgs/next.png" class="next" width="15" height="15">
        </div>
      </div>
    </div>
  </div>
	</div>
</template>
<style>
  .inline-block{
  	display: inline-block;
  }
  .block{
  	display: block;
  }
  	.nav {
    left: 0;
    bottom: 0;
    border-top: .1rem solid #b4b4b4;
    padding: .4rem 0;
    font-size: 1.2rem;
  }

  .userFace {
    background-image: url('../assets/imgs/bg.png');
    padding: 5rem 0 2.5rem;
    background-size: cover;
  }

  .userPic {
    border-radius: 50%;
    width: 9rem;
    height: 9rem;
    overflow: hidden;
    background: #e4e9ea;
    border: .4rem solid #fae8ef;
  }

  .userPic img {
    -webkit-transform: translateY(.5rem);
    -ms-transform: translateY(.5rem);
    -o-transform: translateY(.5rem);
    transform: translateY(.5rem);
  }

  .loginState {
    margin-top: .5rem;
    font-size: 1.8rem;
  }

  .main {
    padding: .5rem 1rem;
    overflow: hidden;
  }

  .personalItem {
    display: block;
    font-size: 1.4rem;
    height: 4rem;
    line-height: 4rem;
    border-bottom: .1rem solid #f0f0f0;
  }

  .wallet {
    margin-bottom: 1rem;
  }

  .icon {
    margin: 0 1rem 0 1.5rem;
  }

  .next {
    margin-right: 1rem;
  }

  .city,
  .points {
    font-size: 1rem;
  }
</style>
<script>
  export default {
    data(){
      return {

      }
    }

  }
</script>