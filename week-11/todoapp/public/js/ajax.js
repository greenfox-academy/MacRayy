'use strict'

const createAjax = function () {
    const ajax = (url, method, callback, input) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);
        // let message = {
        //     newPlaylist: input
        // };
        xhr.setRequestHeader('Content-Type', 'application/json')
        // console.log(message);
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
        }
        // if (message.newPlaylist !== undefined) {
        //     xhr.send(JSON.stringify(message));
        // } else {
        xhr.send();
        // }
    };

    return {
        ajax
    };
};
