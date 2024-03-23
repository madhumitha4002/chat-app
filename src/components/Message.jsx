import React, { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
import Translate from "../img/translate.png";
import { useCountry } from '../context/CountryContext';
import { detect } from 'tinyld';


const Message = ({ message }) => {
  const { selectedCountry } = useCountry();
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const [translatedText, setTranslatedText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [detectedLanguage, setDetectedLanguage] = useState("");

  const ref = useRef();
  console.log(selectedCountry)
  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message, selectedCountry]);

 


  const translateLang = async () => {
    setIsLoading(true);
    try {
      const language = detect(message.text);
      setDetectedLanguage(language);
      console.log(language);
      const response = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(message.text)}&langpair=${language}|${selectedCountry}`);
      if (response.status === 429) { 
        // If rate limited, wait for 5 seconds and retry
        await new Promise(resolve => setTimeout(resolve, 5000));
        return translateLang(); // Retry translation
      }
      const data = await response.json();
      if (data.responseStatus === 200) {
        setTranslatedText(data.responseData.translatedText);
      } else {
        console.error('Translation failed:', data.responseStatus);
      }
    } catch (error) {
      console.error('Translation error:', error);
    }
    setIsLoading(false);
  };
  



  return (
    <div
      ref={ref}
      className={`message ${message.senderId === currentUser.uid && "owner"}`}
    >
      <div className="messageInfo">
        <img
          src={
            message.senderId === currentUser.uid
              ? currentUser.photoURL
              : data.user.photoURL
          }
          alt=""
        />
        <span>{message.date.toDate().toLocaleTimeString()}</span>
      </div>
      <div className="messageContent">
        <p>
        {message.img && <img src={message.img} alt="" />}
          {message.text}
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <button 
           className="btn"
           onClick={() => translateLang(selectedCountry)}>
            <img src={Translate} alt="" />
          </button>

        )}

        
        
        </p>
        {translatedText && <p>Translated Text: {translatedText}</p>}
        {/* {message.img && <img src={message.img} alt="" />} */}
       
      </div>
    </div>
  );
};


export default Message;

