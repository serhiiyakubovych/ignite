module.exports = {
    entry: "./app/src/main.js",
    output: {
        filename: "./app/build/bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                exlude: /node_modules/,
                query: {
                    presets: ["es2015"]
                }
            }
        ]
    }
};