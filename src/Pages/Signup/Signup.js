import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import { FaFacebook, FaGoogle } from "react-icons/fa";


const Signup = () => {

    const { createUser } = useContext(AuthContext);


    const handleSubmit = event => {
        event.preventDefault();


        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);


        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log('registered user', user);
                form.reset();
            })
            .catch(error => {
                console.error(error);
            })

    }

    return (
        <div>
            <div className="hero mt-10">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Please Sign Up!</h1>
                        <p className="py-6 text-center text-gray-500">New here? Please Sign Up.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />

                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Sign Up</button>
                            </div>
                            <div>
                                <p>or</p>
                            </div>
                            <div className="btn-group btn-group-vertical">
                                <button className="btn btn-active"><FaGoogle className='mr-1'></FaGoogle> sign in with google</button>
                                <button className="btn btn-active mt-1"><FaFacebook className='mr-1'></FaFacebook>sign in with facebook</button>

                            </div>
                            <div className='mt-2'>
                                <h3>Already have an account? <Link to='/login' className='text-primary'>Login</Link></h3>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;