const path = require('path');

module.exports = {
    devtool: '#sourcemap',
    entry: './src/bootstrap.jsx',
    module: {
        rules: [
            {
                test: /\.jsx$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            'react',
                            'es2015'
                        ]
                    }
                }
            }
        ]
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'react-clock.js'
    }
};
