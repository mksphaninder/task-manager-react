import React, { useState, useEffect } from "react";
import { getJwtAndUserId } from "./helpers/jwt";
import { useHistory } from "react-router-dom";

import Axios from "axios";

function AuthenticatedComponent(props) {
  const [user, setuser] = useState(undefined);
  let history = useHistory();

  useEffect(() => {
    const { token, userId } = getJwtAndUserId();
    if (!token) {
      history.push("/");
    }

    const isAuthorized = async () => {
      const response = await Axios.get(
        "http://localhost:5050/auth/is-authorized",
        {
          headers: {
            Authorization: `bearer ${token}`,
          },
        }
      ).catch((err) => console.log(err.message));

      if (response?.status === 200) {
        setuser(userId);
      } else if (response?.status === 500) {
        setuser(undefined);
        localStorage.removeItem("tm-user");
      }
    };
    isAuthorized();

    return () => {
      history.push("/");
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <>{user && props.children}</>;
}

export default AuthenticatedComponent;
