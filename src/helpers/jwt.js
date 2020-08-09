export function getJwtAndUserId() {
  const localToken = JSON.parse(localStorage.getItem("tm-user")) || {
    token: null,
    userId: null,
  };
  return localToken;
}
