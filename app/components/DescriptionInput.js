import React from 'react';

const DescriptionInput = ({ value, onChange }) => {
    return (
        <div className="flex flex-col justify-center">
        <h3 className="text-2xl font-bold mb-2">Description:</h3>
        <input
            type="text"
            name="description"
            value={value}
            onChange={onChange}
            placeholder="Description"
            className=' text-black mt-2 mb-2'
        />
        </div>
    );
};

export default DescriptionInput;