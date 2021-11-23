import React from 'react'
import SinglePostComponent from '../../components/SinglePost/SinglePostComponent';
import Sidebar from '../../components/SideBar/Sidebar'

export default function SinglePost() {
    return (
        <>
            <div className="block md:flex ">
                <div className="md:w-9/12">
                    <SinglePostComponent/>
                </div>
                <div className="md:w-3/12">
                    <Sidebar/>
                </div>
            </div>
        </>
    );
}
