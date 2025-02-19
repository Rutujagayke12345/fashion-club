import React, { useState } from 'react';
import { useParams } from 'react-router-dom'; // Ensure correct import
import DATA from '../Data';
import { useDispatch } from 'react-redux';
import { addItem, delItem } from '../redux/actions/index';

const ProductDetail = () => {
    const [cartBtn, setCartBtn] = useState("Add to Cart");
    const { id } = useParams();
    const dispatch = useDispatch();

    const productId = Number(id); // Convert id to number if needed
    const product = DATA.find((item) => item.id === productId);

    // Debugging logs
    console.log("Product ID from URL:", id);
    console.log("Converted Product ID:", productId);
    console.log("Matching Product:", product);

    // Handle case where product is not found
    if (!product) {
        return <h2 className="text-center my-5 text-danger">Product Not Found</h2>;
    }

    const handleCart = () => {
        if (cartBtn === "Add to Cart") {
            dispatch(addItem(product));
            setCartBtn("Remove from Cart");
        } else {
            dispatch(delItem(product));
            setCartBtn("Add to Cart");
        }
    };

    return (
        <div className="container my-5 py-3">
            <div className="row">
                <div className="col-md-6 d-flex justify-content-center mx-auto product">
                    <img src={product?.img} alt={product?.title} height="400px" />
                </div>
                <div className="col-md-6 d-flex flex-column justify-content-center">
                    <h1 className="display-5 fw-bold">{product?.title}</h1>
                    <hr />
                    <h2 className="my-4">
                        {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(product?.price)}
                    </h2>
                    <p className="lead">{product?.desc}</p>
                    <button onClick={handleCart} className="btn btn-outline-primary my-5">
                        {cartBtn}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
