import { useEffect, useState} from 'react';

import cover from '../../assets/quotesToRemember.png';
import { MdEdit, MdDelete } from 'react-icons/md';
import './SinglePostComponent.css';
import axios from 'axios';
import { useLocation } from 'react-router';
export default function SinglePostComponent() {
    const location = useLocation();
    // console.log(location)
    const path = location.pathname.split("/")[2];
   // console.log(path);
    const [post, setPost] = useState({});
    useEffect(() => {
        const fetchPost = async () => {
            const res = await axios.get('/api/posts/' + path);
            console.log(res);
            setPost(res.data.post);
            console.log(post);
            //console.log(post.title);
        }
       
        fetchPost();
    },[path])
    return (
        <>
            <div className="mt-2 mr-6 ml-6 ">
                {post.photo && (
                    <div className="w-full h-full  ">
                        <img
                            src={post.photo}
                            className="w-full h-full rounded-lg object-cover"
                        />
                    </div>
                )}
                <div className="flex justify-between mt-12">
                    <h1 className="text-2xl font-bold mt-4 postTitle ">
                        {post.title}
                    </h1>
                    <div className="flex gap-3 icons ">
                        <MdEdit className="mt-4 w-6 h-6 cursor-pointer text-green-600" />
                        <MdDelete className="mt-4 w-6 h-6 cursor-pointer text-red-500" />
                    </div>
                </div>
                <div className="flex justify-between mt-3">
                    <p className="text-lg">
                        Author: <span className="text-lg font-bold">{post.username}</span>
                    </p>
                    <p className="text-lg italic">{ new Date(post.createdAt).toDateString()}</p>
                </div>
                <div className="postDescription leading-8 mt-5">
                    {post.desc}
                </div>
            </div>
        </>
    );
}
