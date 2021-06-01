import React, {useEffect, useState} from 'react';
import Post from './Post';
export default function Posts(){
    const [posts, setPosts] = useState([]);
    useEffect(()=>{
        (async ()=>{
            try{
            const response = fetch('http://localhost/');
            const thePosts = await (await response).json();
            setPosts(thePosts);
            }catch (err){
                console.error(err);
            }
        })();
    },[]);
    return(
        <div>
            {posts.map(p => <Post key={p._id} post={p}></Post>)}
        </div>
    )
}