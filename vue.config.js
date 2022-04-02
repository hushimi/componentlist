module.exports = {
	css: {
		loaderOptions: {
			scss: {
				additionalData: '@import "~@/assets/styles/styles.scss";'
			},
		}
	},
	publicPath: '/componentlist',
	outputDir: 'docs',
	configureWebpack: {
		performance: {
			hints: false,
		}
	},
}