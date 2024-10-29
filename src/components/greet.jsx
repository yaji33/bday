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
            <div className='h-auto w-1/3 bg-white p-6 shadow-lg flex flex-col z-20'>
                <h3>
                    If you know Jhona personally, it would be lovely if you leave her a birthday message below. 
                    Rest assured that your message will be kept private and will not be displayed publicly; only 
                    Jhona is able to view your message. You may enter the nickname that Jhona knows you by. 
                    Your message is deeply appreciated.
                    Thank you!
                </h3>
                <div className='w-full'>
                    
                <input 
                    className='border p-2 mb-4 rounded w-full mt-14' 
                    type="text" 
                    placeholder="Enter your nickname"
                    value={nickname}
                    onChange={(e) => setNickname(e.target.value)}
                />
                <textarea 
                    className='border w-full p-2 rounded resize-none mb-4' 
                    rows="4" 
                    placeholder="Enter your message here"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                ></textarea>
                </div>
                <div className="flex justify-end w-full mt-20">
                    <button className="bg-transparent hover:bg-black text-black font-semibold hover:text-white py-1 px-8 border border-black hover:border-transparent"
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