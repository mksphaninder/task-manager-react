import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function Logout(props) {
  const [jwt, setJwt] = useState(localStorage.getItem("tm-user"));

  const history = useHistory();
  const handleLogout = () => {
    localStorage.removeItem("tm-user");
    setJwt(null);
    props.doLogout();
    history.push("/");
  };
  return (
    jwt && (
      <button type="button" className="btn btn-danger" onClick={handleLogout}>
        Logout
      </button>
    )
  );
}

export default Logout;
