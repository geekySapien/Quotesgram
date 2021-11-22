import React from 'react';
import Post from '../Post/Post';

export default function Posts() {
    return (
        <>
            <div className="flex flex-wrap ">
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
            </div>
        </>
    );
}
