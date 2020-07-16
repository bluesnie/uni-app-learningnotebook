<template>
	<view>
		<view>导航跳转</view>
		<!-- 利用navigateTo进行导航跳转 -->
		<navigator url="/pages/detail/detail?id=5">跳转至详情页</navigator>
		<navigator url="/pages/message/message" open-type="switchTab">跳转至信息页页</navigator>
		<navigator url="/pages/detail/detail" open-type="redirect">跳转至详情页</navigator>
		<!-- 利用编程式导航进行跳转 -->
		<button type="primary" @click="goDetail">跳转至详情页</button>
		<button type="primary" @click="goMessage">跳转至信息页</button>
		<button type="primary" @click="goDetailClose">跳转至信息页并关闭当前页面</button>
	</view>
</template>

<script>
	export default{
		onUnload() {
			console.log("导航页卸载了")
		},
		
		methods:{
			goDetail(){
				uni.navigateTo({
					url: "/pages/detail/detail?id=10&age=23"
				})
			},
			goMessage(){
				uni.switchTab({
					url: "/pages/message/message"
				})
			},
			goDetailClose(){
				uni.redirectTo({
					url: "/pages/detail/detail"
				})
			}
		}
	}
</script>

<style>
</style>
