import React from 'react'
import { useSelector } from 'react-redux'

const Checkout = () => {
    const state = useSelector((state) => state.addItem)

    let total = 0;
    const itemList = (item) => {
        total = total + item.price;
        return (
            <li className="list-group-item d-flex justify-content-between lh-sm" key={item.id}>
                <div>
                    <h6 className="my-0">{item.title}</h6>
                </div>
                <span className="text-muted">
                    {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(item.price)}
                </span>
            </li>
        );
    }

    return (
        <>
            <div className="container my-5">
                <div className="row g-5">
                    <div className="col-md-5 col-lg-4 order-md-last">
                        <h4 className="d-flex justify-content-between align-items-center mb-3">
                            <span className="text-primary">Your cart</span>
                            <span className="badge bg-primary rounded-pill">{state.length}</span>
                        </h4>
                        <ul className="list-group mb-3">
                            {state.map(itemList)}

                            <li className="list-group-item d-flex justify-content-between">
                                <span>Total (INR)</span>
                                <strong>
                                    {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(total)}
                                </strong>
                            </li>
                        </ul>

                        <form className="card p-2">
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Promo code" />
                                <button type="submit" className="btn btn-secondary">Redeem</button>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-7 col-lg-8">
                        <h4 className="mb-3">Billing address</h4>
                        <form className="needs-validation" noValidate>
                            {/* Billing Address Form Fields */}
                            <hr className="my-4" />
                            <h4 className="mb-3">Payment</h4>
                            <button className="w-100 btn btn-primary btn-lg" type="submit">
                                Continue to checkout
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Checkout;
