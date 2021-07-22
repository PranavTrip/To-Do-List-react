import React from "react";

const List = (props) => {
  return (
    <>
      <div className="todo_list">
        <button
          onClick={() => {
            props.onSelect(props.id)
          }}
        >
          
          -
        </button>
        <li>{props.value}</li>
      </div>
    </>
  );
};

export default List;
