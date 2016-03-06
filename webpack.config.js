/**
 * Created by jane on 3/5/16.
 */

module.exports = {

    entry:  __dirname + '/src',



    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: ['babel'],
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
};


