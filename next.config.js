// eslint-disable-next-line @typescript-eslint/no-var-requires
const { withExpo } = require('@expo/next-adapter');

module.exports = withExpo({
	eslint: {
		ignoreDuringBuilds: true,
	},
	images: {
		domains: [],
	},
	projectRoot: __dirname,
	reactStrictMode: true,
});
