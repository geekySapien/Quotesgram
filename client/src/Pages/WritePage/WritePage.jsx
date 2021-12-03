import { useState, useEffect, useContext } from 'react';
import { RiImageAddFill } from 'react-icons/ri';
import './WritePage.css';
import { Context } from '../../context/Context';
import cover from './../../assets/quotesToRemember.png';
import axios from 'axios';

export default function WritePage() {
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [file, setFile] = useState(null);

    const { user } = useContext(Context);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newPost = {
            username: user.username,
            title,
            desc,
            photo:""
        };
        if (file) {
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append('name', filename);
            data.append('file', file);
            newPost.photo = filename;
            try {
                await axios.post('/api/upload', data);
            } catch (err) {}
        }
        try {
            const res = await axios.post('/api/posts', newPost);
              console.log(res);
            window.location.replace("/post/" + res.data.post._id);
          
        } catch (err) {}
    };

    return (
        <>
            <div className="  relative pt-12 ">
                {file && (
                    <img
                        src={URL.createObjectURL(file)}
                        alt="img"
                        className="ml-12 md:ml-36  mt-8 rounded-lg object-cover  mb-4 writeImg"
                    />
                )}
                {!file && (
                    <img
                        src={cover}
                        alt="img"
                        className="ml-12 md:ml-36 mt-8 rounded-lg object-cover  mb-4 writeImg"
                    />
                )}
                <form className=" " onSubmit={handleSubmit}>
                    <div className="  flex items-center justify-center gap-5">
                        <label for="fileInput">
                            <RiImageAddFill className="w-9 h-9 rounded-full cursor-pointer " />
                        </label>
                        <input
                            type="file"
                            id="fileInput"
                            className="writeInput"
                            style={{ display: 'none' }}
                            onChange={(e) => setFile(e.target.files[0])}
                        />
                        <input
                            type="text"
                            placeholder="Quote"
                            className=" text-black writeInput"
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    <div className=" ml-12 md:ml-36 mt-4">
                        <textarea
                            placeholder="Tell your story associated with this quote..."
                            type="text"
                            className="writeInput writeText"
                            onChange={(e) => setDesc(e.target.value)}
                        />
                    </div>
                    <button className=" absolute right-2 top-24 md:right-60 text-white cursor-pointer bg-blue-500 p-2 rounded-xl border-none text-lg font-semibold">
                        Publish
                    </button>
                </form>
            </div>
        </>
    );
}
