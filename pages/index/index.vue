<template>
	<view class="content">
		<!-- <image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view> -->
		<test v-if="flag" :title="title" @myEven="getNum"></test>
		<button type="primary" @click="checkFlag">切换组件显示</button>
		<view>这是子组件传的值{{num}}</view>
		<test-a></test-a>
		<test-b></test-b>
		
		<view>
		<uni-calendar 
		:insert="true"
		:lunar="true" 
		:start-date="'2019-3-2'"
		:end-date="'2019-5-20'"
		@change="change"
		 />
		</view>
	</view>
</template>

<script>
	import test from '../../components/test.vue'
	import testA from '../../components/a.vue'
	import testB from '../../components/b.vue'
	import uniCalendar from '@/components/uni-calendar/uni-calendar.vue'
	export default {
		data() {
			return {
				title: 'Hello',
				flag: true,
				num: null
			}
		},
		onLoad(options) {
			console.log("index页面加载了", options)
		},
		onShow() {
			console.log("index页面显示了")
		},
		onReady() {
			console.log("index页面初始化完成")
		},
		onHide() {
			console.log("index页面隐藏了")
		},
		methods: {
			checkFlag(){
				this.flag = !this.flag
			},
			getNum(num){
				console.log("获取子组件传的值", num)
				this.num = num
			},
			change(e){
				console.log("日期改变了", e)
			}
		},
		
		//注册组件
		components:{
			test: test ,
			"test-a": testA,
			"test-b": testB,
			uniCalendar
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200upx;
		width: 200upx;
		margin-top: 200upx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50upx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36upx;
		color: #8f8f94;
	}
</style>
