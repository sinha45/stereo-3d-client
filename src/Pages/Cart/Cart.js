import React from 'react';

const Cart = () => {
    return (
        <div>
            <h2 className='text-4xl font-bold mt-9'>Product Details</h2>
            <div className='grid grid-cols-12 gap-8 mt-20 mb-48'>

                <div className='col-start-3 col-span-5'>
                    <div className="w-5/6 h-96">
                        <figure><img src="https://images.unsplash.com/photo-1634363657957-d91ac22d230a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80" alt="Shoes" /></figure>

                    </div>
                    <h1 className='mr-24 text-xl text-slate-700 font-semibold'>3D wallpaper</h1>
                </div>
                <div className='col-end-11 col-span-3'>
                    <h1 className='text-2xl font-bold text-blue-500 mb-5'>Mercedes car in Blender</h1>
                    <h2 className='font-semibold text-slate-600 mb-2 text-lg'>Price: <span className='me-1'>$<span className='text-emerald-400 ml-1'>12.99</span></span></h2>
                    <button className="btn btn-wide btn-accent">Go to payment</button>
                </div>

            </div>
        </div>
    );
};

export default Cart;