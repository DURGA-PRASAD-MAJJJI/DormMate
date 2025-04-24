import React, { useRef, useEffect } from 'react';
import { CheckCircle, X, Clock, MapPin, Calendar, Users } from 'react-feather';

const Book = ({ bookingDetails, onClose }) => {
    const modalRef = useRef(null);

    // Close modal when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                onClose();
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [onClose]);

    // Close on Escape key press
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };
        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [onClose]);

    // Auto-close after 2 seconds
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, 2000);
        return () => clearTimeout(timer);
    }, [onClose]);

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
            <div 
                ref={modalRef}
                className="relative bg-white rounded-xl shadow-xl max-w-md w-full mx-4 overflow-hidden animate-fade-in"
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
                    aria-label="Close"
                >
                    <X className="w-6 h-6" />
                </button>

                <div className="bg-gradient-to-r from-green-500 to-green-600 p-6 text-center">
                    <div className="flex justify-center mb-4">
                        <CheckCircle className="w-12 h-12 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">Request For Booking!</h2>
                    <p className="text-green-100 mt-1">Your request has been sent to Admin</p>
                </div>

                <div className="p-6 space-y-4">
                    <div className="flex items-start">
                        <div className="bg-green-100 p-2 rounded-lg mr-4">
                            <Users className="w-5 h-5 text-green-600" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-800">Name</h3>
                            <p className="text-gray-600">{bookingDetails?.name || 'John Doe'}</p>
                        </div>
                    </div>

                    <div className="flex items-start">
                        <div className="bg-blue-100 p-2 rounded-lg mr-4">
                            <MapPin className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-800">Location</h3>
                            <p className="text-gray-600">
                                Floor {bookingDetails?.floor || '1'}, Room {bookingDetails?.room || '101'}
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start">
                        <div className="bg-purple-100 p-2 rounded-lg mr-4">
                            <Calendar className="w-5 h-5 text-purple-600" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-800">Date</h3>
                            <p className="text-gray-600">{bookingDetails?.date || '2023-06-15'}</p>
                        </div>
                    </div>

                    <div className="flex items-start">
                        <div className="bg-yellow-100 p-2 rounded-lg mr-4">
                            <Clock className="w-5 h-5 text-yellow-600" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-800">Time Slot</h3>
                            <p className="text-gray-600">
                                {bookingDetails?.startTime || '10:00'} - {bookingDetails?.endTime || '11:00'}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="px-6 pb-6">
                    <button
                        onClick={onClose}
                        className="w-full py-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-lg hover:shadow-md transition-all focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                    >
                        Done
                    </button>
                    <p className="text-center text-sm text-gray-500 mt-4">
                        A confirmation has been sent to your email
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Book;
