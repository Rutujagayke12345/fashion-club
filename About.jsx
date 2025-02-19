import React from 'react'
import { NavLink } from 'react-router-dom'

const About = () => {
    return (
        <div>
            <div className="container py-5 my-5">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className="text-primary fw-bold mb-4">About Us</h1>
                        <p className="lead mb-4">
                        Welcome to Fashion Club, your go-to destination for trendy, stylish, and high-quality clothing. We believe fashion is more than just clothing—it's a way to express your personality, confidence, and individuality.

Who We Are
At Fashion Club, we are passionate about bringing you the latest fashion trends while ensuring comfort and elegance. Our collections are carefully curated to cater to different styles, from casual wear to formal attire, ensuring that everyone finds something they love.

Our Mission
                        </p>
                        <NavLink to="/contact" className="btn btn-outline-primary px-3">Contact Us</NavLink>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center">
                        <img src="/assets/images/about2.avif" alt="About Us" height="400px" width="550px" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About