const HTMLPlugin = require('html-webpack-plugin')

module.exports = {
    entry: ['./src/function.js'],
    output:{
        path:__dirname + '/dist',
        filename: 'bundle.js'
    },
    devServer:{
        static: __dirname + '/dist'
    },
    plugins:[
        new HTMLPlugin ({
            filename: 'index.html',
            template: './src/index.html'
        })
    ],
    resolve: {
        extensions: ['.js']
    }
}