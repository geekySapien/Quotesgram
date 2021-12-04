import { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import cover from '../../assets/quotesToRemember.png';
import { MdEdit, MdDelete } from 'react-icons/md';
import './SinglePostComponent.css';
import axios from 'axios';
import { useLocation } from 'react-router';
import { Context } from './../../context/Context';
import { BiWindows } from 'react-icons/bi';
export default function SinglePostComponent() {
    const location = useLocation();
    // console.log(location)
    const path = location.pathname.split('/')[2];
    // console.log(path);
    const [post, setPost] = useState({});
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [updateMode, setUpdateMode] = useState(false);
    useEffect(() => {
        const fetchPost = async () => {
            const res = await axios.get('/api/posts/' + path);
            //console.log(res);
            setPost(res.data.post);
            //console.log(post);
            //console.log(post.title);
            setTitle(res.data.post.title);
            setDesc(res.data.post.desc);

        };

        fetchPost();
    }, [path]);
    const PF = 'http://localhost:5000/images/';
    const { user } = useContext(Context);
    
    const handleDelete = async (e) => {
        e.preventDefault();
        try {
            await axios.delete('/api/posts/' + path, {
                data: { username: user.username },
            });
            //    setTimeout(() => {
            //        console.log('deleted!');
            //    }, 5000);

            window.location.replace('/');
        } catch (err) {
            console.log('Error deleting this post');
        }
    };

    const handleUpdate = async(e)=> {
        e.preventDefault();
        console.log(title);
        console.log(desc);
        try {
            await axios.put(`/api/posts/${post._id}` , {
              username: user.username, title, desc ,
            });
            window.location.reload();
        } catch (err) {
            console.log("Error updasting the post");
        }
    };
    console.log(user.username === post.username);
    return (
        <>
            <div className="mt-16 mr-6 ml-6 flex flex-col ">
                {post.photo && (
                    <div className="w-full h-full  ">
                        <img
                            src={PF + post.photo}
                            className="w-full h-full rounded-lg object-cover"
                        />
                    </div>
                )}
                {!post.photo && (
                    <div className="w-full h-full  ">
                        <img
                            src={cover}
                            className="w-full h-full rounded-lg object-cover"
                        />
                    </div>
                )}
                <div className="flex justify-between">
                    {updateMode ? (
                        <input
                            type="text"
                            value={title}
                            className="text-2xl font-bold mt-4 postTitleInput self-center"
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    ) : (
                        <h1 className="text-2xl font-bold mt-4 postTitle ">
                            {post.title}
                        </h1>
                    )}
                    {post.username === user?.username && (
                        <div className="flex gap-3 icons ">
                            <MdEdit
                                className="mt-4 w-6 h-6 cursor-pointer text-green-600"
                                onClick={() => setUpdateMode(true)}
                            />
                            <MdDelete
                                className="mt-4 w-6 h-6 cursor-pointer text-red-500"
                                onClick={handleDelete}
                            />
                        </div>
                    )}
                </div>
                <div className="flex justify-between mt-3">
                    <p className="text-lg">
                        Author:{' '}
                        <span className="text-lg font-bold">
                            <Link to={`/?user=${post.username}`}>
                                {post.username}
                            </Link>
                        </span>
                    </p>
                    <p className="text-lg italic">
                        {new Date(post.createdAt).toDateString()}
                    </p>
                </div>
                {updateMode ? (
                    <textarea
                        className="postDescriptionInput leading-8 mt-5"
                        value={desc}
                        onChange={(e) => setDesc(e.target.value)}
                    />
                ) : (
                    <div className="postDescription leading-8 mt-5">
                        {post.desc}
                    </div>
                )}
                <button className="mb-8 mt-4 text-white bg-blue-500 p-2 rounded-xl border-none text-lg font-semibold cursor-pointer w-40 text-center self-center" onClick={handleUpdate}>
                    Update
                </button>
            </div>
        </>
    );
}
