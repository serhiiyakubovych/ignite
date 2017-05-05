"use strict";

module.exports = {
    entry: {
        "Classwork/lesson-21_classwork_task1/main": "./Classwork/lesson-21_classwork_task1/main.jsx",
        "Classwork/lesson-21_classwork_task2/main": "./Classwork/lesson-21_classwork_task2/main.jsx",
        "Classwork/lesson-21_classwork_task3/main": "./Classwork/lesson-21_classwork_task3/main.jsx",
        "Homework/lesson-21_homework_task1/main": "./Homework/lesson-21_homework_task1/main.jsx",
        "Homework/lesson-21_homework_task2/main": "./Homework/lesson-21_homework_task2/main.jsx",
        "Homework/lesson-21_homework_task3/main": "./Homework/lesson-21_homework_task3/main.jsx"
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