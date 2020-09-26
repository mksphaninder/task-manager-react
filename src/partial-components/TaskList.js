import React, { useState, useEffect, useContext } from "react";
import { getProject } from "../services/TaskService";
import { LoginContext } from "../context/LoginContext";
function TaskList() {
  const { jwt, userId } = useContext(LoginContext);
  // Get the list of projects from the node.js.
  // Store the list into a useState Hook.
  // update in the useEffect hook.
  const [projects, setProjects] = useState([]);

  useEffect(async () => {
    // update the State here.
    await getProject(userId, jwt)
      .then((proj) => {
        console.log("proj", proj);
        setProjects((prevState) => {
          prevState.push(...proj);
        });
      })
      .catch((err) => console.log(err));
  }, []);
  // console.log(projects);
  console.log("jwt", jwt);
  console.log("userId", userId);
  return (
    <div>
      {projects && (
        <ul className="list-group">
          {projects.map((p) => (
            <li className="list-group-item">{p}</li>
          ))}{" "}
        </ul>
      )}
    </div>
  );
}

export default TaskList;
