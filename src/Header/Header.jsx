import React from 'react';
import cover from './../assets/quotesToRemember.png';
import './Header.css';
export default function Header() {
    return (
        <>
            <div className="mt-8 ">
                <div className="flex flex-col items-center justify-center headline text-white relative">
                    <span className="text-3xl absolute top-10">
                        Feel, Heal, Express, Embrace
                    </span>
                    <span className="text-5xl absolute top-20">
                        Quote it up
                    </span>
                </div>
            </div>
            <div className="w-full headerImg">
                <img
                    src={cover}
                    className="w-full h-full "
                    alt="headerImage"
                />
            </div>
        </>
    );
}
