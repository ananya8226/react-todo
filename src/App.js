import React, { useState } from 'react';
import './App.css';
import Task from './components/Task';
import Textfield from './components/Textfield';
// import Display from './components/Display';

function App() {

  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState([]);
  const [editId, setEditId] = useState(0);

  // const handleInputChange = (event) => {
  //   setInputText(event.target.value);
  // };

  const handleAddWord = (inputText) => {
    if (inputText !== "")
    {
      setOutputText([ ...outputText, {inputText, id: `${inputText}-${Date.now()}`}]);
      console.log(inputText);
      setInputText('');
    }

    if(editId)
    {
      const editItem = outputText.find((item) => item.id === editId);
      const updatedItem = outputText.map((t) => 
      t.id === editItem.id ? t= {id: t.id, inputText} : {id : t.id, inputText: t.inputText}
      )
      setOutputText(updatedItem);
      setEditId(0);
      return;
    }
  };

  const handleDelete = (id) => {
    
    var newList = outputText;
    newList.splice(id, 1);
    setOutputText([...newList]);
  }

  const handleEdit = (id) => {
     const editItem = outputText.find((item)=> item.id === id);
     setInputText(editItem.inputText);
     setEditId(id);
  }

  return (

    <>
    <header className="App-header">
      <h1>To-Do List</h1>
    </header>

    <div className="input-container">
      <Textfield inputText={inputText} setInputText={setInputText} handleAddWord={handleAddWord}/>
      {/* <input
        type="text"
        placeholder="Enter a word"
        value={inputText}
        onChange={handleInputChange}
      />
      <button className="addbtn" onClick={handleAddWord}>Add</button> */}
    </div>

    <div className="words">
       {outputText.map((inputText)=> {
          return  <Task inputText={inputText.inputText} handleDelete={handleDelete} id={inputText.id} handleEdit={handleEdit}/>
          })
       }
        </div>
    </>
  );
}

export default App;






















//// use two components , callbacks, array of obj, update, delete , useref , hooks , useeffect, usememo