import React from 'react';
import { NavLink } from 'react-router-dom';

const Common = (props) => {
    return (
        <div>
            <section id='header' className='d-flex align-items-center mt-5'>
                <div className='container-fluid nav-bg'>
                    <div className='row'>
                        <div className='col-10 mx-auto'>
                            <div className='row'>
                                <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column'>
                                    <h1>{props.name} <strong id='myName'>Mukul Gaur</strong></h1>
                                    <h4 className='my-3'>We are a team of talented developers</h4>
                                    <div className='mt-3'>
                                        <NavLink to={props.visit} className='btn rounded-pill btn-outline-info'>{props.btnName}</NavLink>
                                    </div>
                                </div>
                                <div className='col-lg-6 order-1 order-lg-2 header-img'>
                                    <img src={props.imgsrc} className='img-fluid' alt='home img' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Common
