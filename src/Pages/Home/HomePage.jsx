import React from 'react';
import Header from '../../Header/Header';
import Posts from '../../Posts/Posts';
import Sidebar from '../../SideBar/Sidebar';

export default function HomePage() {
    return (
        <>
            <Header />
            <div className="block md:flex">
                <div className="md:w-9/12">
                    <Posts />
                </div>
                <div className="md:w-3/12">
                    <Sidebar />
                </div>
            </div>
        </>
    );
}
