import { useContext , useState} from 'react';
import Sidebar from '../../components/SideBar/Sidebar';
import { BiImageAdd } from 'react-icons/bi';
import './Settings.css';
import { Context } from './../../context/Context';
import axios from 'axios';

export default function Settings() {
      const PF = 'http://localhost:5000/images/';
    const { user, dispatch } = useContext(Context);
    const [file, setFile] = useState(null);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const handleSubmit = async (e) => {
        dispatch({ type: "UPDATE_START" });
        console.log("Inside handleInput");
        e.preventDefault();
        const updatedUser = {
            userId: user._id,
            username,
            email,
            password,
        };
        console.log(updatedUser.userId === user._id)
        if (file) {
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append('name', filename);
            data.append('file', file);
            updatedUser.profilePic = filename;
            try {
                await axios.post('/api/upload', data);
            } catch (err) {
                console.log('Error uploading the profile picture');
            }
        }
        try {
           const res= await axios.put(`/api/users/${user._id}`, updatedUser);
            console.log("Succesfully updated");
            setSuccess(true);
            dispatch({ type: 'UPDATE_SUCCESS' , payload:res.data.user});
        } catch (err) {
            console.log('Error updating your profile');

            alert("Username already exists. Try with a different username");
            dispatch({ type: 'UPDATE_FAILURE' });
        }
    };
    return (
        <>
            <div className="block md:flex">
                <div className="md:w-9/12 p-12 textStyle">
                    <div className="flex items-center justify-between mb-4">
                        <span className="text-md md:text-xl text-red-400 font-bold cursor-pointer">
                            Update your Account
                        </span>
                        <span className="text-sm md:text-md text-red-500 font-bold cursor-pointer">
                            Delete Account
                        </span>
                    </div>
                    <form
                        className="flex flex-col gap-5"
                        onSubmit={handleSubmit}
                    >
                        <label
                            for=""
                            className="text-lg text-gray-700  font-semibold"
                        >
                            Profile Picture
                        </label>
                        <div className="flex gap-2">
                            <div className=" w-12 h-12 border-radius-2 ">
                                <img
                                    src={
                                        file
                                            ? URL.createObjectURL(file)
                                            : PF + user.profilePic
                                    }
                                    className="object-cover rounded-md w-full h-full"
                                />
                            </div>
                            <label for="fileInput" className="mt-3">
                                <BiImageAdd className="w-8 h-8 text-gray-600 bg-red-100 rounded-full flex items-center justify-center p-0.5" />
                            </label>
                            <input
                                type="file"
                                id="fileInput"
                                style={{ display: 'none' }}
                                className="text-black"
                                onChange={(e) => setFile(e.target.files[0])}
                            />
                        </div>

                        <label className="text-lg text-gray-700  font-semibold">
                            Username
                        </label>
                        <input
                            type="text"
                            placeholder={user.username}
                            className="text-black"
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                        <label className="text-lg text-gray-700  font-semibold">
                            Email
                        </label>
                        <input
                            type="email"
                            placeholder={user.email}
                            className="text-black"
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <label className="text-lg text-gray-700  font-semibold">
                            Password
                        </label>
                        <input
                            type="password"
                            className="text-black"
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <button
                            className="text-white bg-blue-500 p-2 rounded-xl border-none text-lg font-semibold cursor-pointer w-40 text-center self-center"
                            type="submit"
                        >
                            Update
                        </button>
                    </form>
                    {success && (
                        <span style={{ color: 'green', marginTop: '3px' }}>
                            Profile has been updated
                        </span>
                    )}
                </div>
                <div className="md:w-3/12">
                    <Sidebar />
                </div>
            </div>
        </>
    );
}

