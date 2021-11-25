import React from 'react';
import Header from '../../components/Header/Header';
import Posts from '../../components/Posts/Posts';
import Sidebar from '../../components/SideBar/Sidebar';
import './HomePage.css';


export default function HomePage() {
    return (
        <>
            <Header/>
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
