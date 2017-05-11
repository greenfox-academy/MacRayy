'use strict'
// Search interesting articles on: http://developer.nytimes.com/
//
// Ask your local mentor for the API key or request your own. Use localhost as the website.
//
// Use the Article Search API
// Find articles about the moon landing by Apollo 11
// Display the following fields in a list
// Headline
// Snippet
// Publication date
// Create a permalink to that article

let ajax = function (url, callback) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                let rsp = JSON.parse(xhr.response);
                callback(rsp);
                console.log(rsp);
            }
        } else {
            console.log(xhr.status);
        }
    }
    xhr.send()
}

let getNYTData = function() {
    const endpont = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=star+wars&api_key=2cccf4def763418d933793e8a1f01630';
    ajax(endpont, function(response) {
        // displayNYTData(response)
    });
}

getNYTData();
