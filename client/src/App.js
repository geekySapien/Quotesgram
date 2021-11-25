import HomePage from './Pages/Home/HomePage';
import Navbar from './components/topbar/Navbar';
import SinglePost from './Pages/SinglePostPage/SinglePost';
import WritePage from './Pages/WritePage/WritePage';
import Settings from './Pages/Settings/Settings';
import RegisterPage from './Pages/LoginRegister/RegisterPage';
import LoginPage from './Pages/LoginRegister/LoginPage';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';


function App() {
    const user = true;
    return (
        <>
            <BrowserRouter>
                <div>
                    <Navbar />
                </div>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route
                        path="/write"
                        element={user ? <WritePage /> : <RegisterPage />}
                    />
                    <Route
                        path="/login"
                        element={user ? <HomePage /> : <LoginPage />}
                    />
                    <Route
                        path="/register"
                        element={user ? <HomePage /> : <RegisterPage />}
                    />
                    <Route
                        path="/setting"
                        element={user ? <Settings /> : <RegisterPage />}
                    />
                    <Route
                        path="/singlePost/:postId"
                        element={user ? <SinglePost /> : <RegisterPage />}
                    />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
