import React from 'react';
import './LoginComponent.css';
import { Link } from 'react-router-dom';
import { useRef, useState } from 'react';
import { useContext } from 'react';
import { Context } from './../../context/Context';
import axios from 'axios';
export default function LoginComponent() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { dispatch, user, isFetching } = useContext(Context);
    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch({ type: "LOGIN_START" });
        try {
            const res = await axios.post("/api/auth/login", {
             username, password
            })
            //console.log(res);
            //console.log(res.data.user);
            dispatch({ type: "LOGIN_SUCCESS", payload: res.data.user });
        } catch (err) {
            dispatch({ type: "LOGIN_FAILURE" });
           // console.log("Login failed");
        }
        //console.log(user);
    }
    return (
        <>
            <div
                className="flex flex-col items-center justify-center mt-auto h-screen formContainer "
                onSubmit={handleSubmit}
            >
                <form className="">
                    <div className="flex flex-col justify-center mt-6 textStyle">
                        <label className="font-bold text-white italic text-xl">
                            Username
                        </label>
                        <input
                            type="text"
                            placeholder="riya"
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="flex flex-col justify-center mt-6">
                        <label className="font-bold text-white italic text-xl textStyle">
                            Password
                        </label>
                        <input
                            type="password"
                            className=""
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="flex justify-around text-white mt-6 loginBtn">
                        <button
                            className="font-bold border-2 border-white hover:border-gray-400  p-2 rounded-lg italic text-xl textStyle "
                            type="submit"
                           
                        >
                            Login
                        </button>
                    </div>
                </form>
                <span className="mt-6 text-white text-xl textStyle ">
                    New Quotoholic?
                    <button className="ml-4 border-b-2 border-white text-white hover:border-gray-400 text-xl textStyle">
                        <Link to="/register"> Create Account </Link>
                    </button>
                </span>
            </div>
        </>
    );
}
