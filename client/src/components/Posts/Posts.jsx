import React from 'react';
import Post from '../Post/Post';

export default function Posts({posts}) {
    return (
        <>
            <div className="flex flex-wrap ">
                {
                    posts.map(p => (
                        <Post post={p}/>
                    ))
                }
          
            </div>
        </>
    );
}
