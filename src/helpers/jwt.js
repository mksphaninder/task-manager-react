export function getJwtAndUserId() {
  const userDetails = localStorage.getItem("tm-user");
  const localToken = JSON.parse(userDetails) || {
    token: null,
    userId: null,
  };
  return localToken;
}
