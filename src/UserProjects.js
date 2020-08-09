import React, { useState, useEffect } from "react";
import { getJwtAndUserId } from "./helpers/jwt";
import Axios from "axios";
import { useHistory, Link } from "react-router-dom";

function UserProjects() {
  const [user, setuser] = useState(undefined);
  const [projects, setprojects] = useState([]);
  const [jwtToken, setjwtToken] = useState(undefined);

  let history = useHistory();

  useEffect(() => {
    const { token, userId } = getJwtAndUserId();
    setuser(userId);
    setjwtToken(token);

    console.log("token -->", jwtToken, "user id -->", user);
    const response = Axios.get(`http://localhost:5050/users/${user}/projects`, {
      headers: {
        Authorization: `bearer ${jwtToken}`,
      },
    });

    response
      .then((result) => {
        console.log(result.data);
        setprojects(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [user]);

  return (
    <div>
      <h1>Welcome user</h1>

      <ul>
        {projects &&
          projects.map((p) => (
            <li>
              <Link to="">{p?.project}</Link>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default UserProjects;
