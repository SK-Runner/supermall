module.exports = {
	configureWebpack:{
		resolve:{
			alias:{
				//'@':'src', 默认设置，不用再设置
				'assets':'@/assets',
				'common':'@/common',
				'components':'@/components',
				'network':'@/network',
				'views':'@/views'
				// 'router':'@/router'
				// 'store':'@/store'
			}
		}
	}
}