import React, { useContext } from 'react';
import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("https://placeimg.com/1000/800/arch")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-lg">
                    <h1 className="mb-5 text-5xl font-bold">Welcome To Learning World</h1>

                    <Link to={"/courses"} className="btn btn-primary">Start Learning</Link>
                </div>
            </div>
        </div>
    );
};

export default Home;