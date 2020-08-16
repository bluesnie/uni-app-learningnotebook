// 到时候调用
// myRequest({
// 	url: '/api/.../',
// 	data: {}
// })

// 二次封装请求
export const BASE_URL = "http://127.0.0.1:8000"

// var token
export const myRequest = (options)=>{
	return new Promise((resolve, reject)=>{
		
		let header = null;
		// let token = "";
		
		// uni.getStorage({
		// 	key: 'token',
		// 	success: res => {
		// 		console.log("获取token1", res)
		// 		token = res.data
		// 		console.log("获取token2", token)
		// 	}
		// })
		const userInfo = uni.getStorageSync('userInfo');
		// console.log("获取token2", token)
		
		if(options.header){
			header = options.header
		}else{
			header = {
				"Authorization": "jwt " + userInfo.token,
				"content-type": "application/json"
			}
		}
		
		// console.log("请求时的hearder", header)

		uni.request({
			url: BASE_URL + options.url,
			method: options.method || "GET",
			data: options.data || {},
			header: header,
			success: (res) => {
				console.log(options.url, "数据：", res)
				if(res.statusCode == 401 && res.data.code == 10997){
					// 不是tabbar
					// uni.navigateTo({
					// 	url:"/pages/user/login"
					// })
					//是tabbar
					uni.switchTab({
						url:"/pages/user/login"
					})
					// return uni.showToast({
					// 	title:"请登录"
					// })
				}else if (res.data.code != 10000){
					return uni.showToast({
						title:res.data.errMsg || "请求数据失败"
					})
				}
				resolve(res)
			},
			fail: (err) => {
				uni.showToast({
					title:"请求接口失败"
				})
				reject(err)
			}
		})
	})
}

// 指纹解锁
export const startSoterAuthenticationFinger = () => {
	uni.startSoterAuthentication({
		requestAuthModes: ['fingerPrint'],
		challenge: '123456',
		authContent: '请用指纹解锁',
		success(res) {
			console.log(res);
			uni.setStorageSync("fingerAuthStatus", true)
		},
		fail(err) {
			console.log(err);
			uni.switchTab({
				url:"/pages/financial_management/financial_management.vue"
			})
		},
		complete(res) {
			console.log(res);
		}
	})
}

// sqlite数据库 



