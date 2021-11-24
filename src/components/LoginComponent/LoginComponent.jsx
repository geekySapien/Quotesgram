import React from 'react';
import './LoginComponent.css';
import { Link } from 'react-router-dom';
export default function LoginComponent() {
    return (
        <>
            <div className="flex flex-col items-center justify-center mt-auto h-screen formContainer ">
                <form className="">
                    <div className="flex flex-col justify-center mt-6 textStyle">
                        <label className="font-bold text-white italic text-xl">
                            Email
                        </label>
                        <input type="email" placeholder="riya1602@gmail.com" />
                    </div>
                    <div className="flex flex-col justify-center mt-6">
                        <label className="font-bold text-white italic text-xl textStyle">
                            Password
                        </label>
                        <input type="password" className="" />
                    </div>
                    <div className="flex justify-around text-white mt-6 ">
                        <button className="font-bold border-2 border-white hover:border-gray-400  p-2 rounded-lg italic text-xl textStyle ">
                            Login
                        </button>
                    </div>
                </form>
                <span className="mt-6 text-white text-xl textStyle ">
                    New Quotoholic?
                    <button className="ml-4 border-b-2 border-white text-white hover:border-gray-400 text-xl textStyle">
                      <Link to="/register">   Create Account </Link>
                    </button>
                </span>
            </div>
        </>
    );
}
