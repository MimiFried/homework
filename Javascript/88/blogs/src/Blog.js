import react, {useEffect, useState} from 'react';
import Post from './Post';


export default function Blog({blog}) {
    const [posts, setPosts] = useState([]);

    useEffect( () => {
        (async () => {
        try{
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${blog.id}`);
            if (! response.ok){
                throw new Error(`${response.statusCode}`);
            }
            const posts = await response.json();
            setPosts(posts);
            //console.log(posts);
           // let postsArray = [];
            //posts.forEach(post => {
            //    postsArray.push(createPostElem(post));
            //});
           // setPgContent(postsArray);
        } catch(err){
            console.log(err);
        }
    })();
}, [blog]);
    
    
    return (
        <div>
        {posts.map(post => <Post key={post.id} post={post}/>)}
    </div>
    )
  }