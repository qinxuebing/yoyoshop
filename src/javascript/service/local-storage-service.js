/*global window*/

define([], function () {
    'use strict';

    return function () {

        this.setImg = function (id, element) {
            var imgData = this._getBase64Image(element);
            window.localStorage.setItem(id, imgData);
        };
        this.getImg = function (id) {
            return window.localStorage.getItem(id);
        };

        this._getBase64Image = function (img) {
            var canvas = document.createElement("canvas");
            canvas.width = img.width;
            canvas.height = img.height;

            var ctx = canvas.getContext("2d");
            ctx.drawImage(img, 0, 0,canvas.width,canvas.height);

            var dataURL = canvas.toDataURL("image/png");

            return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
        };
    }
});