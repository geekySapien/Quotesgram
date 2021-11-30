import React from 'react';
import './post.css';
import cover from './../../assets/sunset.jfif';
import { Link } from 'react-router-dom';
export default function Post({post}) {
    return (
        <>
            <div className=" mt-6 mr-12 ml-12 mb-6 container">
                {post.photo && (
                    <div className=" w-full h-72 ">
                        <img
                            src={post.photo}
                            alt="postImg"
                            className="w-full h-full rounded-lg"
                        />
                    </div>
                )}
                <div className="flex flex-col items-center ">
                    <div className=" text-yellow-300 cursor-pointer text-sm postCategories">
                        {post.categories.map((category) => (
                            <span className="pr-4 ">{category}</span>
                        ))}
                        <Link to={`/post/${post._id}`}>
                            <h1 className="text-xl font-bold mt-4 cursor-pointer postTitle">
                                {post.title}
                            </h1>
                        </Link>
                    </div>

                    <p className="leading-6 postDesc">{post.desc}</p>
                    <span className="text-gray-300 italic timestamp">
                        {new Date(post.createdAt).toDateString()}
                    </span>
                </div>
            </div>
        </>
    );
}
