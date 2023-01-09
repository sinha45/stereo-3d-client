import React from 'react';

const Cart = () => {
    return (
        <div>
            <h2 className='text-4xl font-bold mt-9'>Product Details</h2>
            <div className='grid grid-cols-12 gap-8 mt-20 mb-48'>

                <div className='col-start-3 col-span-5'>
                    <div className="w-5/6 h-96">
                        <figure><div class="sketchfab-embed-wrapper"> <iframe width="700px" height="500px" title="Korean Bakery" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/2095d18b9602473c8f717377fdffe017/embed"></iframe></div></figure>

                    </div>
                    <div className='ml-10 mt-32'>
                        <h1 className='mr-24 text-2xl text-blue-700 font-semibold'>Wooden Dining Table Set</h1>
                    </div>
                </div>
                <div className='col-end-11 col-span-3'>

                    <h2 className='font-semibold text-slate-600 mb-2 text-2xl'>Price: <span className='me-1'>$<span className='text-emerald-400 ml-1'>12.99</span></span></h2>
                    <button className="btn btn-wide btn-accent">Go to payment</button>

                    <div className="overflow-x-auto mt-8 ml-10">
                        <table className="table w-full">


                            <tbody>


                                <tr className="hover">

                                    <td>Files</td>

                                    <td>max, fbx</td>
                                </tr>
                                <tr className="hover">

                                    <td>Vertices</td>

                                    <td>126k</td>
                                </tr>
                                <tr className="hover">

                                    <td>Textures</td>

                                    <td>2</td>
                                </tr>
                                <tr className="hover">

                                    <td>Materials</td>

                                    <td>14</td>
                                </tr>
                                <tr className="hover">

                                    <td>UV Layers</td>

                                    <td>yes</td>
                                </tr>
                                <tr className="hover">

                                    <td>Download size</td>

                                    <td>230 mb</td>
                                </tr>
                                <tr className="hover">

                                    <td>Rigged geometries</td>

                                    <td>No</td>
                                </tr>


                            </tbody>
                        </table>
                    </div>

                </div>
            </div>


        </div>
    );
};

export default Cart;