module.exports = {
	root: true,
	extends: '@react-native-community',
	rules: {
		'prettier/prettier': [
			'error',
			{
				endOfLine: 'auto',
				useTabs: true,
				tabWidth: 2,
			},
		],
	},
};
