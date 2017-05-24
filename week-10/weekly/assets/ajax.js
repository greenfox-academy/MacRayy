'use strict'



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

const getPlaylists = () => {
    const endpoint = 'http://localhost:3000/playlists';
    ajax(endpoint, 'GET', (response) => {
        console.log('I got the data');
        // display(response);
    });
};

getPlaylists();
