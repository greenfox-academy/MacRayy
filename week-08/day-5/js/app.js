'use strict'
console.log('start');

const body = document.querySelector('body');
const page = document.querySelector('.page')
const post = document.querySelector('.container__main');


const ajax = function(url, callback) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.setRequestHeader('Accept', 'application/json')
    xhr.onreadystatechange = function() {
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
    xhr.send();
}

const getData = function() {
    // const endpoint = 'https://time-radish.glitch.me/posts';
    // let endpointRamin = 'http://10.27.99.43:8080/posts';
    const endpoint = 'http://localhost:3000/redditmain'
    ajax(endpoint, function(response) {
        console.log('inGetData');
        displayPost(response);
    });

}

const displayPost = function(redditData) {
    let postsData = redditData.posts;
    postsData.forEach((redditpost) => {
        let postClone = post.cloneNode(true);
        page.appendChild(postClone)

        let postContentClone = postClone.querySelector('.container__main--post');
        let postTitle = postClone.querySelector('.post-content');
        let postData = postClone.querySelector('.post-data');
        let up = postClone.querySelector('.up');
        let down = postClone.querySelector('.down');

        postTitle.setAttribute('href', redditpost.href);

        postTitle.innerHTML = redditpost.title;
        postData.innerHTML = 'submittet time ago by ' + redditpost.owner;

        up.addEventListener('click', upvote);

    })
    post.style.display = 'none'
}

const upvote = function() {

}

getData();
