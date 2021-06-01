import React, {useState} from 'react';

export default function Post({post}){
        return (
            <div className="post" id={post._id}>
              <h2>{post.title}</h2>
              <h3>by {post.author} on {new Date(post.date).toLocaleString()}</h3>
              <div>{post.body}</div>
        
              <div className="comments">
              </div>
            </div>
          )
        }

