import React, { useState } from "react";
import ToDoList from "./ToDoList";

const App = () => {
  const [inputList, setinputList] = useState("");
  const [Items, setItems] = useState([]);

  const itemEvent = (event) => {
    setinputList(event.target.value);
  };

  const listofItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setinputList("");
  };

  const deleteItems = (id) => {
    setItems((oldItems) => {
      return oldItems.filter((arrEle, index) => {
        return index !== id;
      });
    });
  };
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>ToDo List</h1>
          <br />

          <input
            type="text"
            placeholder="Add Items"
            onChange={itemEvent}
            value={inputList}
          />
          <button onClick={listofItems}> + </button>

          <ol>
            {Items.map((itemval, index) => {
              return (
                <ToDoList
                  key={index}
                  id={index}
                  text={itemval}
                  onSelect={deleteItems}
                />
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default App;
