import React from 'react';

const Contact = () => {
    return (

        <div className='mt-14 mb-56 inline-block w-1/3'>

            <div className="form-control">
                <label className="label text-slate-700 font-semibold mb-2 mt-3">
                    Full Name
                </label>
                <input type="text" placeholder="Your Full Name here" className="input input-bordered" />
            </div>
            <div className="form-control">
                <label className="label text-slate-700 font-semibold mb-2 mt-3">
                    Email Address
                </label>
                <input type="email" placeholder="Your email here" className="input input-bordered" />

            </div>
            <div className="form-control">
                <label className="label float-left text-slate-700 font-semibold mb-2 mt-3">Message</label>
                <textarea className="textarea textarea-bordered h-24" placeholder="Write your message in here"></textarea>

            </div>
            <div className='float-right mt-6'>
                <button className="btn">send message</button>
            </div>
        </div>

    );
};

export default Contact;