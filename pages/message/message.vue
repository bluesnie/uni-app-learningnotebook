<template>
	
	<view>
		<view>Hello World,我是message页</view>
		<button type="primary" @click="chooseImg">上传图片</button>
		<image v-for="item in imgArr" :src="item" @click="previewImg(item)" :key="item"></image>
		<!-- #ifdef H5  -->
		<view>我想在H5中显示</view>
		<!-- #endif -->
		<!-- #ifdef MP-WEIXIN  -->
		<view>我想在H5中显示</view>
		<!-- #endif -->
	</view>
	
</template>
	
<script>
	export default{
		data(){
			return {
				imgArr: []
			}
		},
		onLoad() {
			// #ifdef H5
			console.log("H5")
			// #endif
			// #ifdef MP-WEIXIN
			console.log("微信小程序")
			// #endif
		},
		methods:{
			chooseImg(){
				console.log("上传图片")
				uni.chooseImage({
					count:5,  
					success:res=>{
						console.log(res)
						this.imgArr = res.tempFilePaths
					}
					
				})
			},
			
			previewImg(current){
				console.log(current)
				uni.previewImage({
					// current: current, //键和值一样可以缩写
					current,
					urls:this.imgArr,
					indicator: "number",
					loop: true
				})
			}
		}
	}
</script>

<style>
</style>
