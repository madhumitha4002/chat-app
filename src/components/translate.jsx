import Add from "../img/add.png";
import Language from "../img/language.png"
import More from "../img/more.png";
import React, { useState } from 'react';
import { useCountry } from '../context/CountryContext';




 

  const LanguageSelector = () => {
   
   const { selectedCountry, setSelectedCountry } = useCountry();

     const handleCountryChange = (event) => {
     setSelectedCountry(event.target.value); 
    };


return(
  <div className="drop_down">
      <select className="select"   onChange={handleCountryChange}  value={selectedCountry}>
        <option value=""> </option>
          <option value="am-ET">amharic</option>
          <option value="ar-SA">arabic</option> 
          <option value="be-BY">bialarus</option> 
          <option value="bem-ZM">bemba</option>    
          <option value="bi-VU">bislam</option>  
          <option value="en-GB">English</option>
          <option value="es-ES" >Spanish </option>
          <option value="de-DE" > German</option>
          <option value="el-GR" >Greek </option>
          <option value="fr-FR">French</option>
          <option value= "hi-IN" >Hindi</option>
          <option value= "id-ID" >Indonesian</option>
          <option value= "is-IS">Icelandic </option>
          <option value="it-IT" > Italian</option>
          <option value="ja-JP" > Japanese</option>
          <option value="ne-NP" > Nepali</option>
          <option value= "kn-IN">Kannada </option>
          <option value= "ko">Korean </option>
          <option value= "la-VA">Latin </option>
          <option value="ur-PK" >Pakistani </option>
          <option value= "pa-IN"> Panjabi</option>
          <option value= "pt-PT">Portuguese  </option>
          <option value= "ru-RU">Russian  </option>
          <option value= "ta" >Tamil </option>
          <option value= "te-IN" > Telugu </option>
          <option value=  "th-TH"> Thai </option>
          <option value=  "to-TO" >Tongan  </option>
          <option value= "tr-TR" >Turkish  </option>
          <option value=  "vi-VN" >Vietnamese  </option>
      </select>
    <img src={Add} alt="" />
    <img src={More} alt="" />
</div>
 
);
      
};


export default LanguageSelector;


