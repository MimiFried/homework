import React, { useState, useEffect } from 'react';
import BlogInfo from './BlogInfo';

const BlogList = ({handleBlogSelected}) => {
    const [blogList, setBlogList] = useState([]);

    useEffect( () => {
        (async () => {
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (! response.ok){
            throw new Error(`${response.statusCode}`);
        }
        const blogList = await response.json();
        setBlogList(blogList);
        //console.log(blogInfo);
        //let blogArray = [];
        //blogInfo.forEach(blog => {
           // blogArray.push(createBlogElem(blog));
       // });
        //setPgContent(blogArray);
    } catch(err){
        console.log(err);
    }
    })();
    }, [blogList]);

return (
    <div>
        {blogList.map(blog => <BlogInfo blog={blog} handleBlogSelected={handleBlogSelected}/>)}
    </div>
)

}
    export default BlogList;