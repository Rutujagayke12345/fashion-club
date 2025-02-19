import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import DATA from '../Data';

const Product = () => {
    const [filter, setFilter] = useState(DATA);

    
    const filterProduct = (category) => {
        const updatedList = DATA.filter((item) => item.category && item.category.toLowerCase() === category.toLowerCase());
        setFilter(updatedList);
    };

    const showAllProducts = () => {
        setFilter(DATA);
    };

    const cardItem = (item) => {
        return (
            <div className="card my-5 py-4" key={item.id} style={{ width: "18rem" }}>
                <img src={item.img} className="card-img-top" alt={item.title} />
                <div className="card-body text-center">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="lead">
                        {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(item.price)}
                    </p>
                    <NavLink to={`/products/${item.id}`} className="btn btn-outline-primary">Buy Now</NavLink>
                </div>
            </div>
        );
    };

    return (
        <div>
            <div className="container py-5">
                <div className="row">
                    <div className="col-12 text-center">
                        <h1>Products</h1>
                        <hr />
                    </div>
                    <div className="buttons d-flex justify-content-center mb-5 pb-5">
                        <button className="btn btn-outline-dark me-2" onClick={showAllProducts}>All</button>
                        <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("men's clothing")}>Men's Clothing</button>
                        <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("women's clothing")}>Women's Clothing</button>
                        <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("kid's clothing")}>Kid's Clothing</button>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row justify-content-around">
                    {filter.length > 0 ? filter.map(cardItem) : <h3 className="text-center">No products found</h3>}
                </div>
            </div>
        </div>
    );
};

export default Product;
