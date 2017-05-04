"use strict";

module.exports = {
    entry: {
        "Classwork/lesson-19_classwork_task1/bundle": "./Classwork/lesson-19_classwork_task1/main.jsx",
        "Classwork/lesson-19_classwork_task2/bundle": "./Classwork/lesson-19_classwork_task2/main.jsx",
        "Classwork/lesson-19_classwork_task3/bundle": "./Classwork/lesson-19_classwork_task3/main.jsx",
        "Homework/lesson-19_homework_task1/bundle": "./Homework/lesson-19_homework_task1/main.jsx",
        "Homework/lesson-19_homework_task2/bundle": "./Homework/lesson-19_homework_task2/main.jsx",
        "Homework/lesson-19_homework_task3/bundle": "./Homework/lesson-19_homework_task3/main.jsx"
    },
    output: {
        filename: "[name].js"
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: "babel-loader",
                query: {
                    presets: ['react']
                }
            }
        ]
    }
};