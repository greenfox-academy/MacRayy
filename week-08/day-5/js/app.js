'use strict'
console.log('start');

const body = document.querySelector('body');

let ajax = function(url, callback) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.setRequestHeader('Accept', 'application/json')
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                let rsp = JSON.parse(xhr.response);
                callback(rsp);
                console.log(rsp);
            } else {
                console.log(xhr.status);
            }
        }
    }
    xhr.send();
}

let getData = function() {
    let endpoint = 'https://time-radish.glitch.me/posts';
    ajax(endpoint, function(response) {
        console.log('cool');
        // displayNYTData(response);
    });

}

getData();
