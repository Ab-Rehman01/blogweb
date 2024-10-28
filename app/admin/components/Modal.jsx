// ./app/components/Modal.jsx
import React from 'react';

const Modal = ({ message, onClose }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-5 rounded shadow-lg">
                <h2 className="text-lg font-bold">Alert</h2>
                <p className="mt-2">{message}</p>
                <div className="flex justify-end mt-4">
                    <button
                        onClick={onClose} // This will trigger the close action
                        className="bg-blue-500 text-white px-4 py-2 rounded"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
