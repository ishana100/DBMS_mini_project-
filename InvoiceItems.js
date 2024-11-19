// components/InvoiceItems.js
import React, { useState } from 'react';

const InvoiceItems = () => {
    const [items, setItems] = useState([]);
    const [itemName, setItemName] = useState('');
    const [itemPrice, setItemPrice] = useState('');
    const [itemQuantity, setItemQuantity] = useState('');

    const handleAddItem = (e) => {
        e.preventDefault();
        const newItem = {
            name: itemName,
            price: parseFloat(itemPrice),
            quantity: parseInt(itemQuantity, 10),
        };
        setItems([...items, newItem]);
        setItemName('');
        setItemPrice('');
        setItemQuantity('');
    };

    const handleRemoveItem = (index) => {
        const newItems = items.filter((_, i) => i !== index);
        setItems(newItems);
    };

    const calculateTotal = () => {
        return items.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    };

    return (
        <div>
            <h2>Invoice Items</h2>
            <form onSubmit={handleAddItem}>
                <div>
                    <label>Item Name:</label>
                    <input
                        type="text"
                        value={itemName}
                        onChange={(e) => setItemName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Price:</label>
                    <input
                        type="number"
                        value={itemPrice}
                        onChange={(e) => setItemPrice(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Quantity:</label>
                    <input
                        type="number"
                        value={itemQuantity}
                        onChange={(e) => setItemQuantity(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Add Item</button>
            </form>

            <h3>Items List</h3>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>
                        {item.name} - ${item.price} x {item.quantity} 
                        <button onClick={() => handleRemoveItem(index)}>Remove</button>
                    </li>
                ))}
            </ul>

            <h3>Total: ${calculateTotal()}</h3>
        </div>
    );
};

export default InvoiceItems;