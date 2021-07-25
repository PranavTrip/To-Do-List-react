import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";
import "./index.css";
import List from "./List";

const App = () => {
  const [items, setItems] = useState("");
  const [itemList, setItemList] = useState([]);

  const updatedItems = (event) => {
    setItems(event.target.value);
  };

  const updatedListOfItems = () => {
    setItemList((previousValues) => {
      return [...previousValues, items];
    });
    setItems("");
  };

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>To-Do List</h1>
          <br />
          <br />
          <input
            type="text"
            placeholder="Click to Add Items"
            onChange={updatedItems}
            value={items}
          />
          <Button onClick={updatedListOfItems}>
            <AddIcon />
          </Button>
          <br />
          <ol>
            {itemList.map((val, index) => {
              return <List key={index} value={val} />;
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default App;
