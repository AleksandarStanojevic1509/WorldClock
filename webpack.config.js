const path = require ('path')

module.exports = {
    entry: './src/app.js',
    output: {
        filename: 'assets/script/app.js',
        path: path.resolve(__dirname,'./')
    },
    devServer:{
        contentBase:'./'
    }
}