import React, { useEffect, useState } from 'react';
import { db } from '../config';
import { collection, getDocs } from 'firebase/firestore';

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [codeInput, setCodeInput] = useState("");

  useEffect(() => { 
    const fetchMessages = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "messages"));
        const messagesData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));
        setMessages(messagesData);
      } catch (e) {
        console.error("Error fetching messages: ", e);
      }
    };

    if (isAuthorized) {
      fetchMessages();
    }
  }, [isAuthorized]);

  const handleCodeSubmit = () => {
    if (codeInput === "Y1") {
      setIsAuthorized(true);
    } else {
      alert("Incorrect code.");
    }
  };

  return (
    <div id="messages" className="relative w-full min-h-screen flex items-center justify-center messages-bg">
      {/* Background content with blur effect */}
      <div className={`${!isAuthorized ? "backdrop-blur-lg bg-black bg-opacity-10" : ""} absolute inset-0 flex items-center justify-center`}>
        {!isAuthorized && (
          <div className="text-center bg-transparent">
            <h1 className="text-2xl mb-4 text-white">To Jhona: Unlock your messages, love!</h1>
            <input
              type="password"
              value={codeInput}
              onChange={(e) => setCodeInput(e.target.value)}
              className="p-2 border border-gray-300 rounded bg-transparent text-white px-8"
              placeholder="Enter code"
            />
            <button
              onClick={handleCodeSubmit}
              className="ml-2 py-2 px-7 save-btn text-white rounded sub-btn"
            >
              Submit
            </button>
          </div>
        )}
      </div>

      {/* Messages content */}
      <div className={`${!isAuthorized ? "blur-sm" : ""} grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-screen-lg h-auto max-h-[80vh] overflow-y-auto p-4 relative`}>
        {messages.map(({ id, nickname, message }) => (
          <div key={id} className="card bg-white rounded-lg p-4 shadow-lg h-80 w-full flex flex-col justify-between">
            <div className="overflow-y-auto flex-grow">
              <p className="text-base">{message}</p>
            </div>
            <h3 className="text-base text-end mt-2">- {nickname}</h3>
          </div>  
        ))}
      </div>
    </div>
  );
};

export default Messages;
