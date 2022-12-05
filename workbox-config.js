module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{html,css,js,eot,svg,ttf,woff,woff2,jpg,gif,JPG,png,json}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};