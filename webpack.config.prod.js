const path = require ('path')

module.exports = {
    // mode: 'development',
    entry: './src/app.js',
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname,'assets', 'script')
    },
    devServer:{
        contentBase:'./'
    },
    devtool:'cheap-source-map'
}