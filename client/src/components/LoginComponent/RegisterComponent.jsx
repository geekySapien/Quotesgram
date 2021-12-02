import {useState} from 'react';
import './LoginComponent.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
export default function RegisterComponent() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    
    const handleSubmit = async (e) => {
        setError(false);
        e.preventDefault();
        try {
            const res = await axios.post("/api/auth/register", {
            username,
            email,
            password
        });
            console.log(res);
            res.data && window.location.replace("/login");
        } catch (err) {
            setError(true);
        }
    }
    return (
        <>
            <div className="flex flex-col items-center justify-center h-screen formContainer ">
                <form className="formInput" onSubmit={handleSubmit}>
                    <div className="flex flex-col justify-center mt-6 textStyle">
                        <label className="font-bold text-white italic text-xl">
                            Username
                        </label>
                        <input
                            type="text"
                            placeholder="riya"
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="flex flex-col justify-center mt-6 textStyle">
                        <label className="font-bold text-white italic text-xl">
                            Email
                        </label>
                        <input
                            type="email"
                            placeholder="riya1602@gmail.com"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="flex flex-col justify-center mt-6">
                        <label className="font-bold text-white italic text-xl textStyle">
                            Password
                        </label>
                        <input
                            type="password"
                            className=""
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="flex justify-around text-white mt-6 ">
                        <button
                            className="font-bold border-2 border-white hover:border-gray-400  p-2 rounded-lg italic text-xl textStyle "
                            type="submit"
                        >
                            Register
                        </button>
                    </div>
                    {error && (
                        <span className="textStyle mt-6 " style={{ marginTop: "10px"}}>
                           
                            Useranme already exisits!!
                            Try with a differnet
                            username.
                        </span>
                    )}
                </form>
                <span className="mt-6 text-white text-xl textStyle ">
                    Already Quotoholic?
                    <button className="ml-4 border-b-2 border-white text-white hover:border-gray-400 text-xl textStyle">
                        <Link to="/login">Login</Link>
                    </button>
                </span>
            </div>
        </>
    );
}
