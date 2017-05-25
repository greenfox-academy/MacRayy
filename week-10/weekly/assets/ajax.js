'use strict'

const createAjax = function () {
    const ajax = (url, method, callback) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.onreadystatechange = () => {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    const rsp = JSON.parse(xhr.response);
                    callback(rsp);
                    console.log(rsp);
                } else {
                    console.log('error:' + xhr.status);
                }
            }
        };
        xhr.send();
    };

    return {
        ajax
    };
};
