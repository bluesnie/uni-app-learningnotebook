<template>
	<view class="">
		<view>
			数据绑定学习
		</view>
		<view>
			{{ msg }}
		</view>
		<view>{{ "张三" + "你好" }}</view>
		<view>{{ 2 + 1 }}</view>
		<view>{{ flag ? "我是true"  : "我是false"}}</view>
		<image :src="imgUrl"></image>
		<view v-for="item in arr" :key="item.id">
			序号：{{ item.id }}，名字：{{item.name}}，年龄：{{ item.age}}
		</view>
		<button type="primary" @click="clickHandle(5, $event)">按钮</button>
	</view>
</template>

<script>
		export default {
			data() {
				return {
					msg: "hello 有人吗？",
					flag: false,
					imgUrl: "http://destiny001.gitee.io/image/cxk.gif",
					arr: [
						{
							name: "宋小宝",
							age: 20,
							id: 1
						},
						{
							name: "刘能",
							age: 20,
							id: 2
						},
						{
							name: "赵四",
							age: 20,
							id: 3
						},
						{
							name: "小沈阳",
							age: 20,
							id: 4
						}
					]
					}
				},
			methods:{
				clickHandle (num, e) {		//没有传参数的时候，e，就是事件对象，传了的话需要使用$event传递
					console.log("点击了")
					console.log("事件对象：", e)
				}
			}
		}
</script>

<style>
</style>
