<template>
	<div class="itemList" v-show='show'>
		<router-link class="showItem bgWhite" v-for="item in items" :to="{name:'showDetail',query:{id:item.id}}">
      <div class="row">
        <div class="col-sm-4 col-xs-4 itemPic">
          <img :src="item.src" class="img-responsive">
        </div>
        <div class="col-sm-8 col-xs-8 itemInfo">
          <span class="block colorBlack itemTitle">{{item.title}}</span>
          <span class="block itemPrice">¥ <span>{{item.price}}</span>起</span>
          <span class="block colorGrey itemTime">时间:{{item.time}}</span>
          <span class="block colorGrey itemAddress">地址:{{item.address}}</span>
        </div>
      </div>
    </router-link>
	</div>
</template>
<style>
	.fadeUp-enter,
	.fadeUp-leave-active{
		-webkit-transform: translateY(-3rem);
		-ms-transform: translateY(-3rem);
		-o-transform: translateY(-3rem);
		transform: translateY(-3rem);
		opacity: 0;
	}
	.fadeUp-enter-active,
	.fadeUp-leave{
		-webkit-transition: all .3rem;
		-o-transition: all .3rem;
		transition: all .3rem;
	}
	.itemList{
		background: #f0f0f0;
	}
	.showItem{
		display: block;
		margin-bottom: 1rem;
		padding: 1rem;
		background: #fff;
	}
	.itemInfo{
		padding-left: 0rem;
	}
	.itemInfo>span{
		display: block;
	}
	.itemTitle{
		font-size: 1.8rem;
	}
	.itemPic{
		padding-right: 1rem;
	}
	.itemPrice{
		color: #c61524;
		font-size: 1.4rem;
	}
	.itemPrice span{
		font-size: 2rem;
	}
</style>
<script>
	export default{
		data(){
			return {
				show:false,
				type:'',
				items:[
						{
							src:require('../assets/imgs/sjkrp_0.png'),
							title:'狂人',
							id:1,
							price:'298',
							time:'2016-10-29 12:00',
							address:'南京大数据产业基地'
						},{
							src:require('../assets/imgs/sjkrp_0.png'),
							title:'狂人',
							id:2,
							price:'298',
							time:'2016-10-29 12:00',
							address:'南京大数据产业基地'
						},{
							src:require('../assets/imgs/sjkrp_0.png'),
							title:'狂人',
							id:3,
							price:'298',
							time:'2016-10-29 12:00',
							address:'南京大数据产业基地'
						}
					]
			}
		},
		mounted:function(){
			
		},
		watch:{
			$route(){
				// console.log(this.$route.params.id)
				this.type = this.$route.params.id;
				if(this.type == 'all'){
					this.items = [
						{
							src:require('../assets/imgs/sjkrp_0.png'),
							title:'狂人',
							id:1,
							price:'298',
							time:'2016-10-29 12:00',
							address:'南京大数据产业基地'
						},{
							src:require('../assets/imgs/sjkrp_0.png'),
							title:'狂人',
							price:'298',
							id:2,
							time:'2016-10-29 12:00',
							address:'南京大数据产业基地'
						},{
							src:require('../assets/imgs/sjkrp_0.png'),
							title:'狂人',
							id:3,
							price:'298',
							time:'2016-10-29 12:00',
							address:'南京大数据产业基地'
						}
					]
				} else {
					this.items = [
						{
							src:require('../assets/imgs/sjkrp_0.png'),
							title:'狂人日记',
							price:'28',
							time:'2016-11-29 12:00',
							address:'南京大数据产业基地'
						},{
							src:require('../assets/imgs/sjkrp_0.png'),
							title:'狂人日记',
							price:'28',
							time:'2016-11-29 12:00',
							address:'南京大数据产业基地'
						}
					]
				}
			}
		},
		created:function(){
			this.show = !this.show;
		}
	}
</script>