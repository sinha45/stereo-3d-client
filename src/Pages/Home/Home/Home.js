import React from 'react';
import Card from '../../Card/Card';



const Home = () => {
    return (
        <>
            <div className="w-full h-96 bg-no-repeat bg-cover" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1638727764647-e97c166c62cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80")`, height: "600px" }}>




                <div className='flex flex-col justify-center items-center'>
                    <div className='mt-52'>
                        <h1 className='text-3xl font-semibold text-white'>The Best Platform For 3D Content Enthusiasts</h1>
                    </div>

                    <div className="form-control mt-6">
                        <div className="input-group">

                            <input type="text" placeholder="Search…" className="input input-bordered" />
                            <button className="btn btn-square">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                            </button>

                        </div>


                    </div>
                </div>

            </div>

            <Card></Card>
        </>

    );
};

export default Home;