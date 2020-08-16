<template>
	<view>联系我们
		<button type="primary" @click="openDatabase">打开数据库</button>
		<button type="primary" @click="isOpenDatabase">判断数据库是否打开</button>
		<button type="primary" @click="closeDatabase">关闭数据库</button>


	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},

		methods: {
			// sqlite只能在app上使用
			// 打开数据库
			openDatabase() {

				plus.sqlite.openDatabase({
					name: "uni-app-test",
					path: "_doc/test.db",
					success: function(e) {
						uni.showToast({
							title: "打开数据库成功" + JSON.stringify(e)
							
						})
					},
					fail: function(e) {
						uni.showToast({
							title: "打开数据库失败" + JSON.stringify(e)
						})
					}
				})
			},
			
			// 判断数据库是否打开
			isOpenDatabase() {
				let databaseStatus = plus.sqlite.isOpenDatabase({
						name: "uni-app-test",
						path: "_doc/test.db",
					})

				if (databaseStatus) {
					uni.showToast({
						title: "数据库已打开" + JSON.stringify(databaseStatus)
					})
				} else {
					uni.showToast({
						title: "数据库已关闭" +  + JSON.stringify(databaseStatus)
					})
				}
			},
			
			// 关闭数据库
			closeDatabase() {
				let databaseStatus = plus.sqlite.closeDatabase({
						name: "uni-app-test",
						success: function(e){
							uni.showToast({
								title: "数据库关闭成功"
							})
						},
						fail: function(e){
							uni.showToast({
								title: "数据库关闭失败"  + JSON.stringify(e)
							})
						}
						
					})
		
			},
			
			// 执行增删改等操作的SQL语句
			executeSql(){
				plus.sqlite.executeSql({
					name: "uni-app-test",
					sql: "create table if not exists test_database('title' CHAR(255), 'content' CHAR(255))",
					success: function(){
						console.log("创建表成功或者表已存在")
						plus.sqlite.executeSql({
							
						})
					}
				})
			}

		},


	}
</script>

<style>
</style>
