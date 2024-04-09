import React, { useState } from 'react';

import '../App.css';

const AddProduct = () => {
    const [image, setImage] = useState(null);

    // Function to handle image upload
    const handleImageUpload = (event) => {
        const uploadedImage = event.target.files[0];
        // You may want to perform validation on the uploaded image here
        setImage(URL.createObjectURL(uploadedImage));
    };
    return (
        <div className="container">
            <div className="row gutters">
                <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
                    <div className="card h-100">
                        <div className="image-group">
                        <label htmlFor="productImage" style={{ textAlign: 'center' }}>Product Image</label>
                            <div className="product-image-preview">
                                {image && <img src={image} alt="Product Preview" />}
                                <input
                                    type="file"
                                    id="productImage"
                                    name="productImage"
                                    accept="image/*"
                                    onChange={handleImageUpload}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
                    <div className="card h-100">
                        <div className="card-body">
                            <div className="row gutters">
                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                    <h6 className="mb-4 text-primary">Add Product Details</h6>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 mb-3">
                                    <div className="form-group">
                                        <label htmlFor="title">Name of Product</label>
                                        <input type="text" className="form-control" placeholder="Enter product name" />
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 mb-3">
                                    <div className="form-group">
                                        <label htmlFor="title">Long Title of Product</label>
                                        <input type="text" className="form-control" placeholder="Enter long title" />
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 mb-3">
                                    <div className="form-group">
                                        <label htmlFor="price">Price (MRP)</label>
                                        <input type="text" className="form-control" placeholder="Enter MPR price" />
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 mb-3">
                                    <div className="form-group">
                                        <label htmlFor="price">Price (Cost)</label>
                                        <input type="text" className="form-control" placeholder="Enter cost price" />
                                    </div>
                                </div>
                            </div>
                            <div className="row gutters">
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 mb-3">
                                    <div className="form-group">
                                        <label htmlFor="quantity">Quantity</label>
                                        <input type="number" className="form-control" placeholder="Enter quantity" />
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 mb-3">
                                    <div className="form-group">
                                        <label htmlFor="discount">Discount</label>
                                        <input type="text" className="form-control" placeholder="Enter discount" />
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 mb-3">
                                    <div className="form-group">
                                        <label htmlFor="tagline">Tagline</label>
                                        <input type="text" className="form-control" placeholder="Enter tagline" />
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 mb-3">
                                    <div className="form-group">
                                        <label htmlFor="description">Description</label>
                                        <input type="text" className="form-control" placeholder="Enter description" />
                                    </div>
                                </div>
                            </div>
                            <div className="row gutters">
                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                    <div className='text-right'>
                                        <button type="button" id="submit" name="submit" className="btn btn-secondary">Cancel</button>
                                        <button type="button" id="submit" name="submit" className="btn btn-primary ml-3">Update</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddProduct;
