import React, { useState } from 'react';
import { db } from '../config';
import { collection, addDoc } from 'firebase/firestore';
import '../index.css';
import { Toaster, toast } from 'react-hot-toast';

const Greet = () => {
    const [nickname, setNickname] = useState("");
    const [message, setMessage] = useState("");
    const [showModal, setShowModal] = useState(false);

    

    const addMessage = async () => {
       
        toast.promise(
            addDoc(collection(db, "messages"), {
                nickname,
                message,
                Timestamp: new Date()
            }).then(() => {
                setNickname("");
                setMessage("");
                setShowModal(false);
            }),
            {
                loading: 'Saving...',
                success: 'Message sent successfully!',
                error: 'Could not save. Please try again.',
            }
        );
    };

    const handleSaveClick = () => {
        if (nickname && message) {
            setShowModal(true);
        } else {
            toast.error("Please fill out all fields."); // Notify if fields are empty
        }
    };

    return (
        <div id="greet" className='w-full min-h-screen flex items-center justify-center greet-bg'>
            <div className='h-auto w-11/12 sm:w-3/4 md:w-1/2 lg:w-1/3 bg-white p-4 sm:p-6 shadow-lg flex flex-col z-20 rounded-lg m-4'>
                <h3 className='text-lg mb-4 text-left'>
                    Hello there! Below is where you're going to input your name/nickname, and your birthday message for Jhona.  Thank you so much!
                </h3>
                <div className='w-full greet-inputs mb-4'>
                    <input 
                        className='border p-2 mb-4 rounded w-full outline-none transition-all duration-300 focus:shadow-lg focus:shadow-md' 
                        type="text" 
                        placeholder="Enter your name/nickname"
                        value={nickname}
                        onChange={(e) => setNickname(e.target.value)}
                    />
                    <textarea 
                        className='border w-full p-2 rounded resize-none mb-4 outline-none transition-all duration-300 focus:shadow-lg focus:shadow-md' 
                        rows="4" 
                        placeholder="Enter your message here"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                </div>

                <div className="flex justify-end w-full mt-4">
                    <button className="text-white font-semibold py-2 px-8 save-btn rounded"
                        onClick={handleSaveClick}
                    >
                        Save
                    </button>
                </div>

                {showModal && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-30">
                        <div className="bg-white p-6 rounded-lg shadow-lg text-center w-full max-w-sm mx-auto">

                            <h1 className="text-lg mb-7">Rest assured that your message will be kept private and will not be displayed publicly; only Jhona will be able to view your message.</h1>
                            
                            <div className="flex justify-center gap-4">
                                <button
                                    className="text-white py-2 px-6 rounded font-semibold confirm-btn"
                                    onClick={addMessage}
                                >
                                    Confirm
                                </button>
                                <button
                                    className="bg-gray-400 text-white py-2 px-6 rounded font-semibold"
                                    onClick={() => setShowModal(false)}
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <Toaster position="bottom-center" reverseOrder={false} />
        </div>
    );
}

export default Greet;
