import React from 'react'
import SinglePostComponent from '../../components/SinglePost/SinglePostComponent';
import Sidebar from '../../components/SideBar/Sidebar'

export default function SinglePost() {
    return (
        <>
            <div className=" md:flex ">
                <div className="w-9/12">
                    <SinglePostComponent/>
                </div>
                <div className="w-3/12">
                    <Sidebar/>
                </div>
            </div>
        </>
    );
}
