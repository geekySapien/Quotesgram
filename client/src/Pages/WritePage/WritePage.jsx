import React from 'react';
import { RiImageAddFill } from 'react-icons/ri';
import './WritePage.css';
import cover from './../../assets/quotesToRemember.png';
export default function WritePage() {
    return (
        <>
            <div className="  relative pt-12 ">
                <img src={cover} alt="img" className="ml-36 rounded-lg object-cover  mb-4" />
                <form className=" ">
                    <div className="  flex items-center justify-center gap-5">
                        <label for="fileInput">
                            <RiImageAddFill className="w-9 h-9 rounded-full cursor-pointer " />
                        </label>
                        <input
                            type="file"
                            id="fileInput"
                            className="writeInput"
                            style={{ display: 'none' }}
                        />
                        <input
                            type="text"
                            placeholder="Quote"
                            className=" text-black writeInput"
                            
                        />
                    </div>
                    <div className=" ml-36 mt-4">
                        <textarea
                            placeholder="Tell your story associated with this quote..."
                            type="text"
                            className="writeInput writeText"
                        />
                    </div>
                    <button className=" absolute top-20 right-60 text-white cursor-pointer bg-blue-500 p-2 rounded-xl border-none text-lg font-semibold">
                        Publish
                    </button>
                </form>                                              
            </div>
        </>
    );
}
