import React, { useState } from 'react'
import { db } from '../config'
import { collection, addDoc, Timestamp } from 'firebase/firestore'; 
import '../index.css';

const Greet = () => {
    const [nickname, setNickname] = React.useState("");
    const [message, setMessage] = React.useState("");

    const addMessage = async () => {
        if (nickname && message) {
            try {
                await addDoc(collection(db, "messages"), {
                    nickname,
                    message,
                    Timestamp: new Date()
                });
                setNickname("");
                setMessage("");
                alert("Message sent successfully");
            } catch (e) {
                console.error("Error adding document: ", e);
                alert("An error occurred. Please try again.");
            }   
        } else {
            alert("Please fill out all fields.");
        }
    };


    return (
        <div id="greet" className='w-full min-h-screen flex items-center justify-center greet-bg'>
            <div className='h-auto w-1/3 bg-white p-6 shadow-lg flex flex-col z-20 rounded-lg'>
                <h3 className='text-lg'>
                    Hello there! You know why you're here. Below is where you're going to input your name/nickname, and your birthday message for Jhona. Rest assured that your message will be kept private and will not be displayed publicly; only Jhona will able to view your message. Thank you so much!
                </h3>
                <div className='w-full greet-inputs'>
                    <input 
                        className='border p-2 mb-4 rounded w-full mt-14 outline-none transition-all duration-300 focus:shadow-lg focus:shadow-md' 
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

                <div className="flex justify-end w-full mt-20">
                    <button className="text-white font-semibold py-1 px-12 save-btn"
                        onClick={addMessage}
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Greet;