'use strict'

const createAjax = function () {
    const ajax = (url, method, callback, input) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);
        let message = {
            newPlaylist: input
        };
        xhr.onreadystatechange = () => {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    if (method === 'GET') {
                        const rsp = JSON.parse(xhr.response);
                        callback(rsp);
                        console.log(rsp);
                    } else if (method === 'POST') {
                        const rsp = JSON.stringify(message);
                    }
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
