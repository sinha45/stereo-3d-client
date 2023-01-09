import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { FacebookAuthProvider, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';


const Signup = () => {


    const [error, setError] = useState('');

    const { createUser, providerLogin, fbProviderLogin } = useContext(AuthContext);


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
                setError('');
                form.reset();
            })
            .catch(error => {
                console.error(error);
                setError(error.message);
            });

    }

    //google sign in

    const googleProvider = new GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                console.error(error)

            })
    }


    const facebookProvider = new FacebookAuthProvider();

    const handleFacebookSignIn = () => {
        fbProviderLogin(facebookProvider)
            .then(result => {
                const user = user.result;
                console.log(user);
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div>
            <div className="hero mt-4">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Please Sign Up!!!</h1>
                        <p className="py-6 text-center text-gray-500">New here? Please Sign Up.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="name" className="input input-bordered" />
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
                            <div>
                                <p className='text-red-600'>{error}</p>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Sign Up</button>
                            </div>
                            <div >
                                <p className='text-center'>or</p>
                            </div>
                            <div className="btn-group btn-group-vertical">
                                <button onClick={handleGoogleSignIn} className="btn btn-active" ><FaGoogle className='mr-1'></FaGoogle> sign in with google</button>
                                <button onClick={handleFacebookSignIn} className="btn btn-active mt-1"><FaFacebook className='mr-1'></FaFacebook>sign in with facebook</button>

                            </div>
                            <div className='mt-2'>
                                <h3 className='text-center'>Already have an account? <Link to='/login' className='text-primary'>Login</Link></h3>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;