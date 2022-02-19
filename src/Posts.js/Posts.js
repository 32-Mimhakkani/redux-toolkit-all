import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../redux/postslice';

const Posts = () => {
    const dispatch = useDispatch();
    const posts_all = useSelector(state=>state.posts.list)
    // console.log(useSelector(state=>state.posts.list));

    
    // useEffect(()=>{
    //     dispatch(getPosts())
    // },[])

    const handleclick =()=>{
      
        dispatch(getPosts())
    }

    return (
        <div>
            <h2>Posts.....</h2>
            {
                posts_all.map(post=><div key={post.id}>
                    <h5>{post.title}</h5>
                    <p>{post.body}</p>
                </div>)
            }


            <button onClick={()=>handleclick()}> See the button Details </button>
        </div>
    );
};

export default Posts;