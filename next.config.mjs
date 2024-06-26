import { withSentryConfig } from '@sentry/nextjs';
/** @type {import('next').NextConfig} */

const isDev = process.env.NODE_ENV === 'development';
const imageOptimizer = {
    webpack: (config, { isServer }) => {
        if (!isDev) {
            config.module.rules.push({
                test: /\.(png|jpe?g|gif|svg|webp)$/i, // Added ico to the pattern
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[path][name].[hash].[ext]',
                            publicPath: '/_next/static/images',
                            outputPath: 'static/images',
                            esModule: false
                        }
                    },
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: {
                                progressive: true,
                                quality: 75
                            },
                            optipng: {
                                enabled: true
                            },
                            pngquant: {
                                quality: [0.65, 0.9],
                                speed: 4
                            },
                            gifsicle: {
                                interlaced: false
                            },
                            webp: {
                                quality: 75
                            },
                            svgo: {
                                plugins: [
                                    {
                                        name: 'removeViewBox',
                                        active: false
                                    },
                                    {
                                        name: 'cleanupIDs',
                                        active: true
                                    },
                                    {
                                        name: 'removeComments',
                                        active: true
                                    },
                                    {
                                        name: 'removeMetadata',
                                        active: true
                                    },
                                    {
                                        name: 'minifyStyles',
                                        active: true
                                    }
                                ]
                            }
                        }
                    }
                ]
            });
        }
        return config;
    }
};

const web3NetConfig = {
    webpack: (config) => {
        config.externals.push('pino-pretty', 'lokijs', 'encoding');
        return config;
    }
};
const nextConfig = {
    ...imageOptimizer,
    ...web3NetConfig,
    reactStrictMode: true,
    compress: true,
    swcMinify: true,
    images: {
        minimumCacheTTL: 60
    },
    compiler: {
        removeConsole: !isDev // Remove console.log in production
    }
};

export default withSentryConfig(nextConfig, {
    // For all available options, see:
    // https://github.com/getsentry/sentry-webpack-plugin#options

    org: 'nill-developers',
    project: 'dex-nextjs',

    // Only print logs for uploading source maps in CI
    silent: !process.env.CI,

    // For all available options, see:
    // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

    // Upload a larger set of source maps for prettier stack traces (increases build time)
    widenClientFileUpload: true,

    // Uncomment to route browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers.
    // This can increase your server load as well as your hosting bill.
    // Note: Check that the configured route will not match with your Next.js middleware, otherwise reporting of client-
    // side errors will fail.
    // tunnelRoute: "/monitoring",

    // Hides source maps from generated client bundles
    hideSourceMaps: true,

    // Automatically tree-shake Sentry logger statements to reduce bundle size
    disableLogger: true,

    // Enables automatic instrumentation of Vercel Cron Monitors. (Does not yet work with App Router route handlers.)
    // See the following for more information:
    // https://docs.sentry.io/product/crons/
    // https://vercel.com/docs/cron-jobs
    automaticVercelMonitors: true
});
