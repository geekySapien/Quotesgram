import React from 'react'
import cover from '../../assets/quotesToRemember.png';
export default function SinglePostComponent() {
    return (
        <>
            <div className="container">
                <div className="w-full h-full imageContainer ">
                    <img src={cover} className="w-full h-full"/>
                </div>
            </div>
        </>
    )
}
