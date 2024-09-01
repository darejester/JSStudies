import {getData} from  './health_article_module.js'

// xhr object
var xhr = new XMLHttpRequest();
//json path/url
var url = './health_article.json';
//response type 
xhr.responseType = 'json';
//request type
xhr.open('GET', url, true);

//action to do when xhr loads
xhr.onload = function() {   
    if (xhr.status === 200) { // Check for successful response (status code 200)
        getData(xhr);
    } else {
        console.error("Failed to load data:", xhr.statusText);
    }
}

//send request
xhr.send();





