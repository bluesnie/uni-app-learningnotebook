<template>
	<view id='my-view'>
		这是test组件{{num}}
		<view>这是父组件传递过来的数据{{title}}</view>
		<button type="primary" @click="sendNum">给父组件传值</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				num: 5,
				iniId: null		// 定时器id
			};
		},
		
		props: ['title'],
		
		methods: {
			sendNum(){
				console.log("给父组件传值")
				this.$emit('myEven', this.num)
			}
		},
		
		beforeCreate() {
			console.log("实例初始化完成")
			console.log("num", this.num)
		},
		created() {
			console.log("created", this.num)
			this.iniId = setInterval(()=>{
				console.log("执行定时器")
			}, 1000)
		},
		beforeMount() {
			console.log("beforeMount", document.getElementById("my-view"))
		},
		mounted() {
			console.log("mounted", document.getElementById("my-view"))
		},
		destroyed(){
			console.log("组件销毁了")
			clearInterval(this.iniId)  // 清除定时器
		}
	}
</script>

<style>

</style>
