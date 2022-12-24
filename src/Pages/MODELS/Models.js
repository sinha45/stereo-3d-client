import React from 'react';

const Models = () => {
    return (
        <div className='bg-slate-100 rounded-sm'>
            <h2 className='text-inherit text-4xl font-bold'>All Models</h2>
            <div className='mt-20 mr-10 ml-10'>

                <div className='grid grid-cols-4 gap-4 mt-14'>
                    <div className="card w-96 bg-base-100 shadow-xl mb-20">
                        <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                Shoes!
                                <div className="badge badge-secondary">NEW</div>
                            </h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                                <div className="badge badge-outline">Fashion</div>
                                <div className="badge badge-outline">Products</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Models;