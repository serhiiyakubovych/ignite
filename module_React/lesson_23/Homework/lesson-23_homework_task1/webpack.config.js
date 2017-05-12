module.exports = {
    context: __dirname + "/app/src/",
    entry: "./usersList.jsx",
    output: {
        path: __dirname + "/app/build/",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.jsx/,
                loader: "babel-loader",
                query: {
                    presets: ["es2015", "react"]
                }
            }
        ]
    }
};