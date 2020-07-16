<template>
	<!-- <view>详情页</view> -->
	<!-- 相当于div -->
	<view>		
		<!-- view组件 -->
		<view>
			<!-- text组件 -->
			<text>唱歌跳舞rap</text>
		</view>
		<view>
			<text selectable="true">唱歌跳舞rap</text>
		</view>
		<view>
			<text selectable="true" space="emsp">唱歌 跳舞rap</text>
		</view>
		<view>
			<text selectable="true" space="ensp">唱歌 跳舞rap</text>
		</view>
		<view>
			<text selectable="true" space="ensp" style="font-size: 25px;">唱歌 跳舞rap</text>
		</view>
		<view>
			<text decode="false">&amp;</text>
		</view>
		<view class="box2" hover-class="box2-active" hover-stay-time="3000">
			<view  class="box" hover-class="box-active" hover-stop-propagation="true" hover-start-time="2000">我是一个盒子</view>
		</view>
		
		<!-- 按钮组件 -->
		<button size="mini" type="primary" plain="true">启用按钮</button>
		<button size="mini" type="primary" plain="true" disabled>禁用按钮</button>
		<button size="mini" type="primary" plain="true" loading></button>
		
		<!-- imgage组件 -->
		<image src="http://destiny001.gitee.io/image/cxk.gif"></image>
		<image src="http://destiny001.gitee.io/image/cxk.gif" mode="aspectFit"></image>
		<image src="http://destiny001.gitee.io/image/cxk.gif" mode="aspectFill"></image>
	</view>

</template>

<script>
	export default{
		onLoad(options) {
			console.log("导航跳转参数", options)
		}
	}
</script>

<style>
	.box {
		width: 100px;
		height: 100px;
		background-color: gray;
	}
	.box2{
		width: 200px;
		height: 200px;
		background-color: #007AFF;
	}
	.box-active{
		background-color: red;
	}
	.box2-active{
		background-color: pink;
	}
</style>
