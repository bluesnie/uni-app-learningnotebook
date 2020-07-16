<template>
	<view> 
		这是a组件：<button type="primary" @click="addNum">修改b组件数据</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		
		methods:{
			addNum(){
				uni.$emit('updateNum', 5)
			}
		}
	}
</script>

<style>

</style>
