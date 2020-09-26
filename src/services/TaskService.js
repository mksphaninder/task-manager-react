import Axios from "axios";

/**
 * Will return the user details
 */
export function getUser(userId, token) {
  return Axios.get(`http://localhost:5050/auth/users/${userId}/`, {
    headers: {
      Authorization: `bearer ${token}`,
    },
  });
}
/**
 * Will return list of projects
 * @param {number} userId
 * @param {String} token
 */
export function getProject(userId, token) {
  return Axios.get(`http://localhost:5050/users/${userId}/projects`, {
    headers: {
      Authorization: `bearer ${token}`,
    },
  });
}

/**
 * Will return the tasks for the project
 * @param {*} userId
 * @param {*} projectId
 * @param {*} token
 */
export function getTasks(userId, projectId, token) {
  return Axios.get(
    `http://localhost:5050/auth/users/${userId}/projects/${projectId}`,
    {
      headers: {
        Authorization: `bearer ${token}`,
      },
    }
  );
}
