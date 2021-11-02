import React from 'react';
import './Navbar.css';
import { BsInstagram, BsTwitter, BsPinterest,BsSearch } from 'react-icons/bs';

export default function Navbar() {
    return (
        <div className="h-12 sticky top-0 flex items-center top">
            <div className="left w-4/12">
                <div className="flex justify-center gap-3">
                    <BsInstagram className="w-6 h-6" />
                    <BsTwitter className="w-6 h-6" />
                    <BsPinterest className="w-6 h-6" />
                </div>
            </div>
            <div className="center w-8/12 ">
                <div className="flex justify-center gap-3">
                    <div>HOME</div>
                    <div>ABOUT</div>
                    <div>CONTACT</div>
                    <div>WRITE</div>
                    <div>LOGOUT</div>
                </div>
            </div>
            <div className="right w-4/12">
                <BsSearch className="w-6 h-6"/>
            </div>
        </div>
    );
}
