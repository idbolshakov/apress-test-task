module.exports = {

    entry: './src/main/app.es6.js',

    output: {

        path: './src/tmp',
        filename: 'bundle.js'

    },

    module: {

        loaders: [

            {
                test: /\.es6.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    }
};
