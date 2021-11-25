import React from 'react';
import './post.css';
import cover from './../../assets/sunset.jfif';

export default function Post() {
    return (
        <>
            <div className=" mt-6 mr-12 ml-12 mb-6 container">
                <div className=" w-full ">
                    <img
                        src={cover}
                        alt="postImg"
                        className="w-full h-full rounded-lg"
                    />
                </div>
                <div className="flex flex-col items-center ">
                    <div className=" text-yellow-300 cursor-pointer text-sm postCategories">
                        <span className="pr-4 ">Life</span>
                        <span className="pr-4 ">Finance</span>
                    </div>
                    <h1 className="text-xl font-bold mt-4 postTitle">
                        Lorem ipsum dolor sit amet
                    </h1>
                    <p className="leading-6 postDesc">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Pariatur harum alias minus delectus placeat voluptatum
                        accusantium provident iusto nostrum cumque in expedita
                        cum quam tenetur, nisi eos, officiis excepturi at.Lorem
                        ipsum dolor sit amet consectetur adipisicing elit.
                        Pariatur harum alias minus delectus placeat voluptatum
                        accusantium provident iusto nostrum cumque in expedita
                        cum quam tenetur, nisi eos, officiis excepturi at.Lorem
                        ipsum dolor sit amet consectetur adipisicing elit.
                        Pariatur harum alias minus delectus placeat voluptatum
                        accusantium provident iusto nostrum cumque in expedita
                        cum quam tenetur, nisi eos, officiis excepturi at.
                    </p>
                    <span className="text-gray-300 italic timestamp">
                        1 hour ago
                    </span>
                </div>
            </div>
        </>
    );
}
