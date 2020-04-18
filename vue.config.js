module.exports = {
	// отключение хэшей в именах файлов
	filenameHashing: false,

	// удаление плагинов webpack связанных с HTML
	chainWebpack: config => {
		config.plugins.delete('html')
		config.plugins.delete('preload')
		config.plugins.delete('prefetch')
	},

	outputDir: 'dist/public'
}