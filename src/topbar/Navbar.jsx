import React from 'react';
import './Navbar.css';
import { BsInstagram, BsTwitter, BsPinterest, BsSearch } from 'react-icons/bs';

export default function Navbar() {
    return (
        <div className="h-12 sticky top-0 flex items-center top">
            <div className="left w-4/12">
                <div className="flex justify-center gap-3">
                    <BsInstagram className="w-6 h-6 text-instagramPink"  />
                    <BsTwitter className="w-6 h-6 text-twitterBlue" />
                    <BsPinterest className="w-6 h-6 text-pinterestRed" />
                </div>
            </div>
            <div className="center w-8/12 ">
                <div className="flex justify-center gap-3 text-gray-500 font-medium">
                    <div>HOME</div>
                    <div>ABOUT</div>
                    <div>CONTACT</div>
                    <div>WRITE</div>
                    <div>LOGOUT</div>
                </div>
            </div>
            <div className="right w-4/12">
                <div className="flex items-center justify-center gap-3">
                    <div className="w-12 h-12 ">
                        <img
                            src="https://images.unsplash.com/photo-1584626063607-b385c9f727cf?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fHF1b3RlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                            alt=""
                            className="w-full h-full rounded-full object-cover "
                        />
                    </div>
                    <BsSearch className="w-6 h-6 text-gray-600 cursor-pointer" />
                </div>
            </div>
        </div>
    );
}
