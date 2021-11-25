import React from 'react';
import './Sidebar.css';
export default function Sidebar() {
    return (
        <>
            <div className="flex flex-col mt-8 gap-3">
                <div className="flex flex-col gap-5 items-center">
                    <h1 className="text-2xl font-bold textStyle text-gray-700">
                        About Me
                    </h1>
                    <div className="w-full h-auto">
                        <img
                            src="https://images.unsplash.com/photo-1573495611823-5397efa4fac7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHNvZnR3YXJlJTIwZW5naW5lZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                            alt="My Image"
                            className="w-full h-full "
                        />
                    </div>
                    <p className="text-base textStyle text-gray-600">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Perspiciatis eius accusamus odit ad deleniti velit dolor
                        explicabo itaque, illum sapiente dignissimos. Ad
                        accusamus sunt temporibus sapiente. Dolores inventore
                        expedita odio.
                    </p>
                </div>
                <div className="flex flex-col gap-5  ">
                    <h2 className="py-2 text-lg font-semibold text-gray-600 text-center border-t-2 border-b-2 border-gray-200">
                        Categories
                    </h2>
                    <ul className="listItems cursor-pointer">
                        <li className="inline-block w-1/2 py-2 px-3">
                            Programming
                        </li>
                        <li className="inline-block w-1/2 py-2 px-3">Tech</li>
                        <li className="inline-block w-1/2 py-2 px-3">Life</li>
                        <li className="inline-block w-1/2 py-2 px-3">
                            Finance
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}
