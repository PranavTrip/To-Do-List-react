import React, { useState } from "react";

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
    setItems("");
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
            {itemList.map((itemVal) => {
              return <li>{itemVal}</li>;
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default App;
