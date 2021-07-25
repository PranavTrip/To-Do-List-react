import React from "react";
import Button from "@material-ui/core/Button";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";

import { useState } from "react";

const List = (props) => {
  const [line, setLine] = useState(false);

  const strikeThrough = () => {
    setLine(true);
  };
  return (
    <>
      <div className="list_div">
        <span onClick={strikeThrough}>
          <RemoveCircleIcon />
        </span>
        <li style={{ textDecoration: line ? "line-through" : "none" }}>
          {props.value}
        </li>
      </div>
    </>
  );
};

export default List;
