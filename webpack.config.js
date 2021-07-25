import createExpoWebpackConfigAsync from '@expo/webpack-config';

export default async (env, argv) =>
	createExpoWebpackConfigAsync(
		{
			...env,
			offline: true, // enable offline support
		},
		argv
	);
