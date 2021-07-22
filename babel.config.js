module.exports = (api) => {
	api.cache(true);
	return {
		plugins: [
			[
				'module-resolver',
				{
					alias: {
						'$assets': './assets',
						'$components': './components',
						'$constants': './constants',
						'$hooks': './hooks',
						'$navigation': './navigation',
						'$screens': './screens',
						'\\$': './',
					},
					cwd: 'packagejson',
					extensions: [
						'.tsx',
						'.ts',
						'.d.ts',
						'.jsx',
						'.js',
						'.mjs',
						'.cjs',
						'.fx.js',
						'.ios.js',
						'.android.js',
						'.json',
					],
				},
			],
			'react-native-reanimated/plugin',
		],
		presets: ['babel-preset-expo'],
	};
};
