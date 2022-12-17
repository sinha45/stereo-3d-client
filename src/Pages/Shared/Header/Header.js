import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/UserContext';
// btn btn-ghost normal-case text-2xl

const Header = () => {

    const { user, logOut } = useContext(AuthContext);
    // console.log('context', user);


    return (
        <div className="navbar bg-accent-focus">
            <div className="flex-1">
                <Link to='/' className="ml-14"><button className='text-2xl'><span className='text-orange-600'>Ste</span><span className='text-white'>reo</span><span>3D</span></button></Link>
            </div>
            <div className="flex-none mr-14">
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                            <span className="badge badge-sm indicator-item">8</span>
                        </div>
                    </label>
                    <div tabIndex={0} className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
                        <div className="card-body">
                            <span className="font-bold text-lg">8 Items</span>
                            <span className="text-info">Subtotal: $999</span>
                            <div className="card-actions">
                                <button className="btn btn-primary btn-block">View cart</button>
                            </div>
                        </div>
                    </div>
                </div>
                {
                    user?.uid ?
                        <div className='ml-8'>
                            <button onClick={logOut} className='text-white font-semibold'><Link to='/login'>Log out</Link></button>
                        </div>
                        :
                        <>
                            <div className='ml-8'>
                                <button className='text-white'><Link to='/login'>Login</Link></button>
                            </div>
                            <div className='ml-4'>
                                <p className='text-slate-300'>or</p>
                            </div>
                            <div className='ml-4'>
                                <button className='btn btn-outline rounded-md'><Link to='/signup'>Sign up</Link></button>
                            </div>

                        </>
                }

            </div>


        </div >
    );
};

export default Header;