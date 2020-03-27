const SentryWebpackPlugin = require("@sentry/webpack-plugin");

const webPackConfig = {
    webpack: (config, {isServer, webpack, buildId}) => {
        // this is from the with-sentry-simple example.
        //     config.resolve.alias['@sentry/node'] = '@sentry/browser';
        // Sentry webpack plugin
        // Will upload sourcemaps on build
        config.plugins.push(
            new SentryWebpackPlugin({
                release: buildId,
                include: '.next',
                configFile: '.sentryclirc',
                debug: true,
                silent: false,
            })
        );

        return config;
    }
};



module.exports = {
    ...webPackConfig,
};