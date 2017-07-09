'use strict'

const createAjax = function () {
    const ajax = (url, method, callback, input) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);
        let message = {
            newTodo: input
        };
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.onreadystatechange = () => {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    const rsp = JSON.parse(xhr.response);
                    callback(rsp);
                    console.info(rsp);
                } else {
                    console.error('error:' + xhr.status);
                }
            }
        }
        if (message.newTodo !== undefined) {
            xhr.send(JSON.stringify(message));
        } else {
            xhr.send();
        }
    };

    return {
        ajax
    };
};
