import React from 'react';
import { NavLink } from 'react-router-dom';
import Product from './Product';

const Home = () => {
    return (
        <div>
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="3000">
                        <img src="/assets/images/home/home.jpg" className="d-block w-100" alt="Home Slide 1" height="600px" />
                        <div className="carousel-caption d-none d-md-block">
                            <h2 style={{ fontWeight: "bold" }}>✨ Elevate Your Style, Embrace the Trend ✨</h2>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="3000">
                        <img src="/assets/images/home/home5.webp" className="d-block w-100" alt="Home Slide 2" height="600px" />
                        <div className="carousel-caption d-none d-md-block">
                            <h2 style={{ fontWeight: "bold" }}>👗 Fashion that Speaks, Style that Stands Out 👕</h2>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="3000">
                        <img src="/assets/images/home/home3.png" className="d-block w-100" alt="Home Slide 3" height="600px" />
                        <div className="carousel-caption d-none d-md-block">
                            <h2 style={{ fontWeight: "bold" }}>💖 Be Unique, Be You - Shop Your Way! 🛍️</h2>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="3000">
                        <img src="/assets/images/home/kid12.webp" className="d-block w-100" alt="Home Slide 4" height="600px" />
                        <div className="carousel-caption d-none d-md-block">
                            <h2 style={{ fontWeight: "bold"}}>🌟 Your Fashion, Your Statement! 🌟</h2>
                        </div>
                    </div>
                </div>

                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            <div className="text-center mt-4">
                <h2>Discover Our Latest Collection</h2>
                <p>Find the best fashion trends for men and women</p>
                <NavLink to="/products" className="btn btn-lg" 
                    style={{ background:"red", color: "white", borderColor:"red"}}>
                    Explore Now
                </NavLink>
            </div>

            <Product />
        </div>
    );
};

export default Home;
