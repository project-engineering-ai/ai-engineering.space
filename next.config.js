module.exports = {
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        and: [/\.(js|ts)x?$/],
      },
      use: [{ loader: '@svgr/webpack' }, { loader: 'url-loader' }],
    });

    return config;
  },
};
