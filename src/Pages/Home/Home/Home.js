import React from 'react';


const Home = () => {
    return (
        <div className="hero min-h-min" style={{ backgroundImage: `url("https://www.google.com/search?q=4k%20resolution%203d%20wallpaper%204k&tbm=isch&hl=en&sa=X&ved=0CCUQrNwCKABqFwoTCMjTlq6fhvwCFQAAAAAdAAAAABAS&biw=1903&bih=912#imgrc=zQsT-Z7Vq6vqjM")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                    <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Home;