import React, { useEffect, useState } from 'react';
import { db } from '../config';
import { collection, getDocs, doc, getDoc } from 'firebase/firestore';
import { Toaster, toast } from 'react-hot-toast';

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [codeInput, setCodeInput] = useState("");
  const [accessCode, setAccessCode] = useState("");

  useEffect(() => { 
    // Fetch access code from Firestore
    const fetchAccessCode = async () => {
      try {
        const docRef = doc(db, "accessCodes", "accessCodeDoc"); 
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setAccessCode(docSnap.data().code);
        } else {
          console.error("No access code found!");
        }
      } catch (e) {
        console.error("Error fetching access code: ", e);
      }
    };

    // Fetch messages if authorized
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

    fetchAccessCode(); // Fetch access code on mount

    if (isAuthorized) {
      fetchMessages();
    }
  }, [isAuthorized]);

  const handleCodeSubmit = () => {
    if (codeInput.trim() === "") {
      toast.error("Please enter a code.");
      return;
    }
  
    if (codeInput === accessCode) {
      setIsAuthorized(true);
    } else {
      toast.error("Incorrect code! Please try again.");
    }
  };
  

  return (
    <div id="messages" className="relative w-full min-h-screen flex items-center justify-center messages-bg">
      {/* Background content with blur effect */}
      <div className={`${!isAuthorized ? "backdrop-blur-lg bg-black bg-opacity-10" : ""} absolute inset-0 flex items-center justify-center`}>
        {!isAuthorized && (
          <div className="text-center bg-transparent">
            <h1 className="text-2xl mb-4 text-white">For the birthday girl only.</h1>
            <input
              type="password"
              value={codeInput}
              onChange={(e) => setCodeInput(e.target.value)}
              className="p-2 border border-gray-300 rounded bg-transparent text-white mb-3"
              placeholder="Enter code"
            />
            <button
              onClick={handleCodeSubmit}
              className="ml-2 py-2 px-5 save-btn text-white rounded sub-btn"
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
      <Toaster position="bottom-center" reverseOrder={false} />
    </div>
  );
};

export default Messages;
