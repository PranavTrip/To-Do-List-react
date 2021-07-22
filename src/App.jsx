import React, { useState } from "react";
import List from "./List";

const App = () => {
  const [items, setItems] = useState();

  const [itemList, setitemList] = useState([]);

  const addItem = (event) => {
    setItems(event.target.value);
  };

  const finalList = () => {
    setitemList((oldValues) => {
      return [...oldValues, items];
    });
    setItems(" ");
  };

  const deleteItem = (id) => {
    setitemList((oldValues) => {
      return oldValues.filter((arrElement, index) => {
        return index !== id;
      });
    });
  };

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <h1 className="heading">To-Do List</h1>
          <input
            type="text"
            placeholder="Click to Add Items"
            onChange={addItem}
          />
          <button className="addBtn" onClick={finalList}>
            {" "}
            +{" "}
          </button>
          <ol>
            {itemList.map((itemVal, index) => {
              return (
                <List
                  key={index}
                  id={index}
                  value={itemVal}
                  onSelect={deleteItem}
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
