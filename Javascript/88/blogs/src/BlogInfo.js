import React from 'react';
import './BlogInfo.css';


export default function BlogInfo({blog, handleBlogSelected}) {
    return (
        <div className="blogElem" onClick={() => handleBlogSelected(blog)}>
            <div id="name">{blog.name}</div>
            <div id="site">{blog.website}</div>
            <div id="companyName">{blog.company.name}</div>
            <div id="companycs">{blog.company.catchPhrase}</div>
            <div id="companybs">{blog.company.bs}</div>
        </div>
    )
  }