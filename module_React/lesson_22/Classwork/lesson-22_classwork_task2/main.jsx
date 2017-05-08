/**
 * Lesson 22, Classwork, Serhii Yakubovych
 */
/**
 * ### Задача 2
 * Используя Promise, асинхронно загрузите на страницу файл image.jpg,
 * находящийся в папке Classwork рядом с файлом с задачами.
 */

"use strict";

function downloadImage(imageUrl) {
    return new Promise(function(resolve, reject) {
        let xhr = new XMLHttpRequest();
        xhr.responseType = 'blob';

        xhr.open("GET", imageUrl);

        xhr.onload = function() {
            if (this.status === 200) {
                resolve(this.response);
            } else {
                let error = new Error(this.statusText);
                error.code = this.status;
                reject(error)
            }
        };

        xhr.onerror = function() {
            reject(new Error("Network error."));
        };

        xhr.send();
    });
}

function insertImage(blob) {
    let img = document.createElement('img');
    img.onload = function(e) {
        window.URL.revokeObjectURL(img.src); // Clean up after yourself.
    };
    img.src = window.URL.createObjectURL(blob);
    document.getElementById("output").appendChild(img);
}

downloadImage("../image.jpg")
    .then((imageBlob) => {
        insertImage(imageBlob);
    })
    .catch((err) => {
        console.log(err);
    });