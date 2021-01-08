import './index.css'; 
import $ from 'jquery';

$('#blogList').on('click', (e) => {
    e.preventDefault();
    fetchBlogInfo();
});

async function fetchBlogInfo() {
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (! response.ok){
            throw new Error(`${response.statusCode}`);
        }
        const blogInfo = await response.json();
        console.log(blogInfo);
        let blogArray = [];
        blogInfo.forEach(blog => {
            blogArray.push(createBlogElem(blog));
        });
        setPgContent(blogArray);
    } catch(err){
        console.log(err);
    }
}
fetchBlogInfo();

function setPgContent(pgContent){
    const contentElem = $('#content');
    contentElem.empty().append(pgContent);
}

function createBlogElem(blog){
    return $(`<div class="blogElem" id=${blog.id}>
    <div id="name">${blog.name}</div>
    <div id="site">${blog.website}</div>
    <div id="companyName">${blog.company.name}</div>
    <div id="companycs">${blog.company.catchPhrase}</div>
    <div id="companybs">${blog.company.bs}</div>
            </div>`).on('click', () => showPosts(blog));
}

async function showPosts(blog){
    try{
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${blog.id}`);
        if (! response.ok){
            throw new Error(`${response.statusCode}`);
        }
        const posts = await response.json();
        console.log(posts);
        let postsArray = [];
        posts.forEach(post => {
            postsArray.push(createPostElem(post));
        });
        setPgContent(postsArray);
    } catch(err){
        console.log(err);
    }
}

let commentsShown = false;
function createPostElem(post){
    return $(`<div class="postElem"> 
    <div id="postTitle">${post.title}</div>
    <div id="postBody">${post.body}</div>
    <div id="commentsElem"></div>
            </div>`).append(`<button id="showCommentsBtn">Show Comments</button>`)
            .on('click',() => test(post.id));
}

function test(postId){
        console.log(postId);
        if(!commentsShown) {
            commentsShown = true;
            showComments(postId);
            $('#showCommentsBtn').text('Hide Comments');
        }
        else{
            commentsShown = false;
            $('#commentsElem').text('');
            $('#showComments').text('Show Comments');
        }
}
async function showComments(postId){
    try{
        const response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
        if (! response.ok){
            throw new Error(`${response.statusCode}`);
        }
        const comments = await response.json();
        console.log(comments);
        const commentsElem = $('#commentsElem');
        comments.forEach(comment => {
            $(`<div id="comment">${comment.body}<span id="commentName">${comment.name}</span></div>`).appendTo(commentsElem);
        });
    } catch(err){
        console.log(err);
    }
}