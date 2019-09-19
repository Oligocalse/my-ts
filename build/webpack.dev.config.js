module.exports = {
    devtool: 'cheap-module-eval-source-map'
}

// cheap => sourceMap 会忽略文件的列信息
// module => 会定位到ts源码
// eval-source-map => 会将source-map以data-url的形式打包到文件中，有很快的重编译速度
