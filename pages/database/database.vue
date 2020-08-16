<template>
	<view>sqlite学习
		<button type="primary" @click="openDatabase">打开数据库</button>
		<button type="primary" @click="isOpenDatabase">判断数据库是否打开</button>
		<button type="primary" @click="closeDatabase">关闭数据库</button>
		<button type="primary" @click="droptable">删除表</button>


		<!-- -->
		<view style="margin: 10rpx;">
			标题：<input type="text" name="" id="title" v-model="title" style="background-color:#C0C0C0">
			内容：<input type="text" name="" id="content" v-model="content" style="background-color:#C0C0C0">
		</view>
		<button type="primary" @click="addNote">添加</button>

		<view style="margin: 20rpx;">
			<view v-for="(item, key) in data" :key="key" style="border-bottom: black solid;">
				<text>标题：{{item.title}}</text><br>
				<text>内容：{{item.content}}</text>
				<button type="default" @click="deleteData(item.id)">删除</button>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: '',
				content: '',
				data: [
					/*{
						title: "测试",
						content: "测试内容"
					}*/
				]
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
						title: "数据库已关闭" + +JSON.stringify(databaseStatus)
					})
				}
			},

			// 关闭数据库
			closeDatabase() {
				let databaseStatus = plus.sqlite.closeDatabase({
					name: "uni-app-test",
					success: function(e) {
						uni.showToast({
							title: "数据库关闭成功"
						})
					},
					fail: function(e) {
						uni.showToast({
							title: "数据库关闭失败" + JSON.stringify(e)
						})
					}

				})

			},

			// 执行查询的SQL语句-开始需要判断是否创建表
			selectSql() {

				plus.sqlite.executeSql({
					name: "uni-app-test",
					// primary key：插入时填null会自增
					sql: "create table if not exists note('id' INTEGER PRIMARY KEY, 'title' CHAR(255), 'content' CHAR(255))",
					success: ()=> {
						console.log("创建表成功或者表已存在")
						plus.sqlite.selectSql({
							name: 'uni-app-test',
							sql: 'select * from note',
							success: (data)=> {
								console.log('selectSql success: ');
								for (var i in data) {
									console.log(data[i]);
								}
								this.data = data
							},
							fail: function(e) {
								console.log('selectSql failed: ' + JSON.stringify(e));
							}
						});
					},
					fail: function(e) {
						console.log('executeSql failed: ' + JSON.stringify(e));
					}
				})


			},
			
			//删除表
			droptable(){

				plus.sqlite.executeSql({
					name: "uni-app-test",
					sql: "drop table note",
					success: ()=> {
						console.log("表删除成功")
						this.selectSql()
					},
					fail: function(e) {
						console.log('executeSql failed: ' + JSON.stringify(e));
					}
				})
			},

			//添加数据
			addNote() {

				console.log("标题：", this.title, "内容：", this.content)
				plus.sqlite.executeSql({
					name: "uni-app-test",
					sql: "insert into note values(null," + JSON.stringify(this.title) + "," + JSON.stringify(this.content ) + ")",
					success: ()=> {
						console.log("插入数据成功")
						this.selectSql()
						this.title = ''
						this.content = ''
					},
					fail: function(e) {
						console.log('executeSql failed: ' + JSON.stringify(e));
					}
				})

			},
			
			// 删除数据
			deleteData(id) {
				plus.sqlite.executeSql({
					name: "uni-app-test",
					sql: `delete from note where id=${id}`,
					success: ()=> {
						console.log("删除数据成功")
						this.selectSql()
					},
					fail: function(e) {
						console.log('executeSql failed: ' + JSON.stringify(e));
					}
				})
			}

		},

		onShow() {
			this.selectSql()
		}


	}
</script>

<style>
</style>
