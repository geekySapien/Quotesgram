import {useContext} from 'react';
import './Navbar.css';
import { BsInstagram, BsTwitter, BsPinterest, BsSearch } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';
export default function Navbar() {
    const PF="http://localhost:5000/images/"
    const { user , dispatch} = useContext(Context);

    const handleLogout = async (e) => {
        dispatch({ type: "LOGOUT" });
    }
    return (
        <div className="h-12 fixed w-full top-0 flex items-center top">
            <div className="hidden md:block  w-4/12">
                <div className="hidden md:flex justify-center gap-3 ">
                    <BsInstagram className="w-8 h-8 text-instagramPink" />
                    <BsTwitter className="w-8 h-8 text-twitterBlue" />
                    <BsPinterest className="w-8 h-8 text-pinterestRed" />
                </div>
            </div>
            <div className=" w-full md:w-8/12  ">
                <div className="flex justify-center  gap-2 md:gap-5  text-xs md:text-lg">
                    <div className="text-gray-500">
                        <Link to="/">HOME</Link>
                    </div>
                    <div className="text-gray-500">
                        <Link to="/setting">ABOUT</Link>
                    </div>
                    <div className="text-gray-500">
                        <Link to="/">CONTACT</Link>
                    </div>
                    <div className="text-gray-500">
                        <Link to="/write">WRITE</Link>
                    </div>
                    <div className="text-gray-500" onClick={handleLogout}>
                        <Link to="/">{user && 'LOGOUT'}</Link>
                    </div>
                </div>
            </div>
            <div className=" w-4/12">
                <div className="flex items-center justify-center gap-3 text-xs md:text-lg">
                    {user ? (
                        <>
                            
                            <Link to="/setting">
                                <div className="w-10 h-10 ">
                                    <img
                                        src={PF+user.profilePic}
                                        alt=""
                                        className="w-full h-full rounded-full object-cover cursor-pointer"
                                    />
                                </div>
                            </Link>
                           
                        </>
                    ) : (
                        <>
                            <div className="text-gray-500">
                                <Link to="/login">LOGIN</Link>
                            </div>
                            <div className="text-gray-500">
                                <Link to="/register">REGISTER </Link>
                            </div>
                        </>
                    )}
                    {/*<BsSearch className="w-6 h-6 ml-3 text-gray-500 cursor-pointer" />*/}
                </div>
            </div>
        </div>
    );
}
