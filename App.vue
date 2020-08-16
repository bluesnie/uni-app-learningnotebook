<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
			
			console.log("打开数据库")
			plus.sqlite.openDatabase({
				name: "uni-app-test",
				path: "_doc/test.db",
				success: function(e) {
					console.log("打开数据库成功")
				},
				fail: function(e) {
					console.log("打开数据库失败")
				}
			})
		},
		onHide: function() {
			console.log('App Hide')
			
			let databaseStatus = plus.sqlite.closeDatabase({
				name: "uni-app-test",
				success: function(e) {
					console.log("数据库关闭成功")
				},
				fail: function(e) {
					console.log("数据库关闭失败"+ JSON.stringify(e))
				}
			
			})
		},
		onError: function() {
			console.log("出现异常了")
		}
	}
</script>

<style>
	/*每个页面公共css */
	@import url("./static/fonts/iconfont.css");
	.box1{
		background-color: pink;
	}
	
</style>
