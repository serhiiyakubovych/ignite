module.exports = {
    context: __dirname + "/app/src/",
    entry: "./main.jsx",
    output: {
        path: __dirname + "/app/build/",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                loader: "babel-loader",
                exclude: /node_modules/,
                query: {
                    presets: ["es2015", "react"]
                }
            }
        ]
    }
};