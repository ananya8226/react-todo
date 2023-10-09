import React from "react";
// import { useContext } from 'react'

function Textfield({inputText, setInputText,  handleAddWord}){
   return (
    <>
    <div className="input-container">
      <input
        type="text"
        placeholder="Enter a word"
        value={inputText}
        onChange={(event) => setInputText(event.target.value)}
      />
      <button className="addbtn" onClick={()=> handleAddWord(inputText)}>Add</button>
    </div>
    </>
   );
}

export default Textfield;