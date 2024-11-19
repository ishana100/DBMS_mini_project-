// components/CustomerDetails.js
import React, { useState } from 'react';

const CustomerDetails = ({ customer }) => {
    const [formData, setFormData] = useState({
        name: customer.name || '',
        email: customer.email || '',
        address: customer.address || '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here (e.g., update customer details)
        console.log('Updated Customer Details:', formData);
    };

    return (
        <div>
            <h2>Customer Details</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Address:</label>
                    <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Update</button>
            </form>
        </div>
    );
};

export default CustomerDetails;