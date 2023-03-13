import React from "react";
import { useState } from "react";
import sendLogo from "../img/send-sharp.svg";
import supabase from "../config/superbaseClient";
import { useNavigate } from "react-router-dom"

const SendMessage = () => {
    const [sendMessage, setSendMessage] = useState('')
    const [formError, setFormError] = useState(null)
    
    const submitHandler = async(e) => {
        e.preventDefault()

        if (!sendMessage) {
            setFormError('Please fill in the fields correctly.')
            return
        }
        if(sendMessage) {
            setFormError(null)
        }

        const {data, error} = await supabase
        .from('chat')
        .insert([{messages: sendMessage}])
        setSendMessage('')

        if (error) {
            setFormError('Could not connect')
        }
    }
  return (
    <>
      <div className="bg-gray-200 fixed bottom-0 right-0 w-full p-2 md:p-5 shadow-lg lg:px-16">
      <label className="text-gray-700 text-lg">{formError}</label>
        <form className="px-2 flex" onSubmit={submitHandler}>
          <input
            value={sendMessage}
            onChange={(e) => setSendMessage(e.target.value)}
            className="input w-full focus:outline-none bg-gray-200 rounded-r-none text-lg "
            type="text" 
            placeholder="Message"
          />
          <button>
            <img src={sendLogo} alt="sendLogo" className="w-6 md:w-7"/> 
          </button>
        </form>
      </div>
    </>
  );
};

export default SendMessage;
