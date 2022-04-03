module.exports = {
	css: {
		loaderOptions: {
			scss: {
				additionalData: '@import "~@/assets/styles/styles.scss";'
			},
		}
	},
	publicPath: process.env.NODE_ENV === 'production' ? '/componentlist/' : '/',
	outputDir: 'docs',
	configureWebpack: {
		performance: {
			hints: false,
		}
	},
}