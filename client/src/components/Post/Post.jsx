import React from 'react';
import { Link } from 'react-router-dom';
import './post.css';
import cover from './../../assets/sunset.jfif';

export default function Post({ post }) {
    const PF = "http://localhost:5000/images/";
   // console.log(PF + post.photo);
    return (
        <>
            <div className=" mt-6 mr-12 ml-12 mb-6 container">
                {post.photo && (
                    <div className=" w-full h-72 ">
                        <img
                            src={PF+post.photo}
                            alt="postImg"
                            className="w-full h-full rounded-lg"
                        />
                    </div>
                )}
                <div className="flex flex-col items-center ">
                    <div className=" text-yellow-300 cursor-pointer text-sm postCategories">
                        {post.categories.map((category) => (
                            <Link to={`/?cat=${category}`}>
                                <span className="pr-4 text-yellow-400 font-semibold">
                                    {category}
                                </span>
                            </Link>
                        ))}
                        <Link to={`/post/${post._id}`}>
                            <h1 className="text-xl font-bold mt-4 cursor-pointer postTitle text-black">
                                {post.title}
                            </h1>
                        </Link>
                    </div>

                    <p className="leading-6 postDesc">{post.desc}</p>
                    <span className="text-gray-500 italic timestamp">
                        {new Date(post.createdAt).toDateString()}
                    </span>
                </div>
            </div>
        </>
    );
}
