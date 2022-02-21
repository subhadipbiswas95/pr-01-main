import React from 'react'

import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            {/* <nav class="navbar sticky-top navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Sticky top</a>
                </div>
            </nav> */}
            <nav className="navbar sticky-top navbar-light bg-light">
                <div className="container-fluid">
                    <div className='row '>
                        <div className="col-md-3">
                            <Link className='flex items center' to='/'>
                                <img src="/img/logo.png" alt="logo" style={{ height: 45 }} />
                            </Link>
                        </div>
                        <div className="col-md-3 nav-item">
                            <Link to="/" className="nav-link ">Home</Link>

                        </div>
                        <div className="col-md-3 nav-item">
                            <Link to="/About" className="nav-link">About Us</Link>
                        </div>
                        <div className="col-md-3 nav-item">
                            <Link to="/Contact" className="nav-link">Contact Us</Link>

                        </div>


                    </div>



                </div>
            </nav>
        </>
    )
}



export default Navbar
