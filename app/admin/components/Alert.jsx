// ./app/components/Alert.jsx
import React from 'react';

const Alert = ({ message, type = 'info', onClose }) => {
    const alertStyles = {
        info: 'bg-blue-100 text-blue-700',
        warning: 'bg-yellow-100 text-yellow-700',
        error: 'bg-red-100 text-red-700',
    };

    return (
        <div className={`p-4 mb-4 rounded ${alertStyles[type]}`}>
            <div className="flex justify-between items-center">
                <span>{message}</span>
                <button onClick={onClose} className="text-xl font-bold">
                    &times;
                </button>
            </div>
        </div>
    );
};

export default Alert;
