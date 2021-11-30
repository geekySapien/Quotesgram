import {useState, useEffect} from 'react';
import Header from '../../components/Header/Header';
import Posts from '../../components/Posts/Posts';
import Sidebar from '../../components/SideBar/Sidebar';
import './HomePage.css';
import axios from 'axios';

export default function HomePage() {
    const [posts, setPosts] = useState([]);
    
    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get('/api/posts');
            // console.log(res);
            setPosts(res.data.posts);
            //console.log(posts);
           
        }
        fetchPosts()
    },[])

    return (
        <>
            <Header />
            <div className="block md:flex">
                <div className="md:w-9/12">
                    <Posts posts={ posts}/>
                </div>
                <div className="md:w-3/12">
                    <Sidebar />
                </div>
            </div>
        </>
    );
}
