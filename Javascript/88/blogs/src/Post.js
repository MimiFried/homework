import React from 'react';

export default function Post({post}) {
    return (
        <div class="postElem"> 
            <div id="postTitle">{post.title}</div>
            <div id="postBody">{post.body}</div>
            <div id="commentsElem"></div>
        </div>
    )
  }