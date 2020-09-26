import React from "react";
import { Link } from "react-router-dom";

function ListItems({ linkAddress, title }) {
  return (
    <div>
      <li className="list-group-item" key={title}>
        <Link to={linkAddress}>{title}</Link>
      </li>
    </div>
  );
}

export default ListItems;
