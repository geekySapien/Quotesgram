import React from 'react';
import Header from '../../Header/Header';
import Posts from '../../Posts/Posts';
import Sidebar from '../../SideBar/Sidebar';

export default function HomePage() {
    return (
        <>
            <Header />
            <div className="flex">
                <div className="w-9/12">
                    <Posts />
                </div>
                <div>
                    <Sidebar />
                </div>
            </div>
        </>
    );
}
