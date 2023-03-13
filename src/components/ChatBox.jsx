import React from "react";
import { useState, useEffect } from "react";
import profile from "../img/blank-profile-picture-g9c6c9d7cd_640.png";
import supabase from "../config/superbaseClient";
import { useRef } from "react";


const ChatBox = () => {

  const [messageText, setMessageText] = useState([]);
  const messageRef = useRef(null)
  const scrollToBottom = ()=> {
    if (messageRef.current) {
        messageRef.current.scrollIntoView(
          {
            behavior: 'smooth',
          })
      }
  }
  
  console.log(messageRef)
  const fetchMessages = async () => {
    const { data, error } = await supabase.from("chat").select("*");

    if (error) {
      setMessageText("Could not connect");
    }
    if (data) {
      setMessageText(data);
    }
  };

  useEffect(() => {
    fetchMessages();
    scrollToBottom()
  }, [messageText]);
  return(
    <>
        <div className="mb-10">
          {messageText.map((i) => {
            return (
              <div className="w-full mt-3 bg-gray-100 shadow rounded-md p-2 flex align-middle" id="message" key={i.id} ref={messageRef}>
                <img
                  src={profile}
                  alt="profile"
                  className="w-6 md:w-8 rounded-full"
                />
                <h4 className="ml-3 text-base md:text-lg text-gray-800">{i.messages}</h4>
              </div>
            );
          })}
        </div>
    </>
  )
};

export default ChatBox;
