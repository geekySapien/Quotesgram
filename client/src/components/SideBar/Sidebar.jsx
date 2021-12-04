import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import axios from 'axios'
export default function Sidebar() {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        const fetchCategories = async () => {
            const res = await axios.get('/api/categories');
            //console.log(res);
            setCategories(res.data.categories);
            //console.log(categories)
        }
        fetchCategories();
    }, [])
    return (
        <>
            <div className="flex flex-col mt-8 gap-3">
                <div className="flex flex-col gap-5 items-center textStyle">
                    <h1 className="text-2xl font-bold text-gray-900 ">About Me</h1>
                    <div className="w-full h-auto">
                        <img
                            src="https://images.unsplash.com/photo-1573495611823-5397efa4fac7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHNvZnR3YXJlJTIwZW5naW5lZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                            alt="My Image"
                            className="w-full h-full "
                        />
                    </div>
                    <p className="text-gray-700  ">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Perspiciatis eius accusamus odit ad deleniti velit dolor
                        explicabo itaque, illum sapiente dignissimos. Ad
                        accusamus sunt temporibus sapiente. Dolores inventore
                        expedita odio.
                    </p>
                </div>
                <div className="flex flex-col gap-5  ">
                    <h2 className="py-2 text-lg font-semibold text-gray-700 text-center border-t-2 border-b-2 border-gray-200">
                        Categories
                    </h2>
                    <ul className="listItems cursor-pointer">
                        {categories.map((category) => (
                            <Link to={`/?cat=${category.name}`}>
                                <li className="inline-block w-1/2 py-2 px-3">
                                    {category.name}
                                </li>
                            </Link>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
}
