'use strict'
console.log('start');

const body = document.querySelector('body');
const page = document.querySelector('.page')
let post = document.querySelector('.container__main');


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
                console.log('error:' + xhr.status);
            }
        }
    }
    xhr.send();
}

let getData = function() {
    let endpoint = 'https://time-radish.glitch.me/posts';
    // let endpointRamin = 'http://10.27.99.43:8080/posts';
    ajax(endpoint, function(response) {
        console.log('inGetData');
        displayPost(response);
    });

}

let displayPost = function(relatedData) {
    let postsData = relatedData.posts;
    postsData.forEach(function(redditpost) {
        let postClone = post.cloneNode(true);
        page.appendChild(postClone)

        let postContentClone = postClone.querySelector('.container__main--post');
        let postTitle = postClone.querySelector('.post-content');

        postTitle.innerHTML = redditpost.title;

    })
    post.style.display = 'none'
}

getData();
