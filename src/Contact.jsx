import React, { useState } from 'react'

const Contact = () => {

    const [data, setData] = useState({
        fullname: '',
        phone: '',
        email: '',
        msg: ''
    });

    const formSubmit = (e) => {
        e.preventDefault();
        alert(`Thank you for contacting us "${data.fullname}" we will get in touch with you soon!`)
    };

    const inputEvent = (event) => {
        const {name, value} = event.target;

        setData((preVal) =>{
            return {
                ...preVal,
                [name]: value
            };
        });
    };

    return (
        <div>
            <div className='my-3'>
                <h1 className='text-center'>Contact Us</h1>
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6 col-10 mx-auto mb-5'>
                        <form onSubmit={formSubmit}>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Full Name</label>
                                <input type="text" className="form-control" id="exampleFormControlInput1" name="fullname" value={data.fullname} onChange={inputEvent} placeholder="Enter your name" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Phone</label>
                                <input type="text" className="form-control" id="exampleFormControlInput1" name="phone" value={data.phone} onChange={inputEvent} placeholder="Enter your phone number" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1" name="email" value={data.email} onChange={inputEvent} placeholder="name@example.com" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" name="msg" value={data.msg} onChange={inputEvent} placeholder='message' rows="3"></textarea>
                            </div>
                            <input className='btn btn-outline-primary rounded-pill' type="submit" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
