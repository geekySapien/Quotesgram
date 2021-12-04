import React from 'react';
import Sidebar from '../../components/SideBar/Sidebar';
import { BiImageAdd } from 'react-icons/bi';
import './Settings.css';
export default function Settings() {
    return (
        <>
            <div className="block md:flex">
                <div className="md:w-9/12 p-12 textStyle">
                    <div className="flex items-center justify-between mb-4">
                        <span className="text-md md:text-xl text-red-400 font-bold cursor-pointer">
                            Update your Account
                        </span>
                        <span className="text-sm md:text-md text-red-500 font-bold cursor-pointer">
                            Delete Account
                        </span>
                    </div>
                    <form className="flex flex-col gap-5">
                        <label
                            for=""
                            className="text-lg text-gray-700  font-semibold"
                        >
                            Profile Picture
                        </label>
                        <div className="flex gap-2">
                            <div className=" w-12 h-12 border-radius-2 ">
                                <img
                                    src="https://images.unsplash.com/photo-1584626063607-b385c9f727cf?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fHF1b3RlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                                    className="object-cover rounded-md w-full h-full"
                                />
                            </div>
                            <label for="fileInput" className="mt-3">
                                <BiImageAdd className="w-8 h-8 text-gray-600 bg-red-100 rounded-full flex items-center justify-center p-0.5" />
                            </label>
                            <input
                                type="file"
                                id="fileInput"
                                style={{ display: 'none' }}
                                className="text-black"
                            />
                        </div>

                        <label className="text-lg text-gray-700  font-semibold">
                            Username
                        </label>
                        <input
                            type="text"
                            placeholder="riya"
                            className="text-black"
                        />
                        <label className="text-lg text-gray-700  font-semibold">
                            Email
                        </label>
                        <input
                            type="email"
                            placeholder="riya1602@gmail.com"
                            className="text-black"
                        />
                        <label className="text-lg text-gray-700  font-semibold">
                            Password
                        </label>
                        <input type="password" className="text-black" />
                        <buton className="text-white bg-blue-500 p-2 rounded-xl border-none text-lg font-semibold cursor-pointer w-40 text-center self-center">
                            Update
                        </buton>
                    </form>
                </div>
                <div className="md:w-3/12">
                    <Sidebar />
                </div>
            </div>
        </>
    );
}
