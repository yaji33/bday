import React, { useEffect, useState } from 'react'
import { db } from '../config'
import { collection, getDocs } from 'firebase/firestore'; 


const Messages = () => {
  const [nickname, setNickname] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [messages, setMessages] = React.useState([]);

  useEffect(() => { 
    const fetchMessages = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "messages"));
        const messagesData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));
        console.log(messagesData);
        setMessages(messagesData);
      } catch (e) {
        console.error("Error fetching messages: ", e);
      }
    };

    fetchMessages();
  }, []);

  return (
    <div id="messages" className="w-full min-h-screen flex items-center justify-center messages-bg">
      <div className="grid grid-cols-2 gap-6 w-full max-w-screen-lg h-auto max-h-[80vh] overflow-y-auto">
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
}

export default Messages;