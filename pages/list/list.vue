<template>
	<viem>
		<button type="primary" @click="get">发送get请求</button>
		<button type="primary" @click="setStorage">缓存存储数据</button>
		<button type="primary" @click="getStorage">获取缓存数据</button>
		<button type="primary" @click="removeStorage">移除缓存数据</button>
		<view>这是list页</view>
		<view class="box-item" v-for="item in list" :key="item">
			<view>{{ item }}</view>
		</view>
		<!-- <button @click="pullDown">下拉刷新</button> -->
	</viem>
</template>

<script>
	export default {
		data() {
			return {
				list: ['python', 'vue', 'php', 'ui','python', 'vue', 'php', 'ui']
			}
		},
		onPullDownRefresh() {
			console.log("触发下拉刷新")
			
			setTimeout(()=>{
				this.list = ['php', 'ui', 'python', 'vue']
				uni.stopPullDownRefresh()		// 隐藏刷新图标
			}, 2000)					//下拉刷新延迟2s更新数据
		},
		onReachBottom() {
			console.log("页面触底了")
			this.list = [...this.list, ...['php', 'ui', 'python', 'vue', 'a', 'b']]
		},
		methods:{
			pullDown() {
				uni.startPullDownRefresh()
			},
			
			get(){
				uni.request({
					url:"http://127.0.0.1:8000/fund/info/guzhi_index/?format=json",
					success(res) {
						console.log("请求结果", res)
					}
				})
			},
			
			setStorage(){
				// 异步
				// uni.setStorage({
				// 	key: "guzhi_index",
				// 	data: ['php', 'ui', 'python', 'vue'],
				// 	success() {
				// 		console.log("缓存数据存储成功")
				// 	}
				// })
				//同步 (推荐使用)
				uni.setStorageSync('id', 100)
			},
			
			getStorage(){
				// uni.getStorage({
				// 	key:"guzhi_index",
				// 	success(res){
				// 		console.log("获取缓存数据", res)
				// 	}
				// })
				const res = uni.getStorageSync('id')
				console.log("获取数据", res)
			},
			
			removeStorage(){
				// uni.removeStorage({
				// 	key:"guzhi_index",
				// 	success(){
				// 		console.log("移除缓存数据")
				// 	}
				// })
				uni.removeStorageSync('id')
			}
			
		},
		
	}
</script>

<style>
	.box-item{
		height: 100px;
		line-height: 100px;
	}
</style>
