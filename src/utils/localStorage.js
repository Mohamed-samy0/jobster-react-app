export const addUserToLocalStorage = (user) => {
  localStorage.setItem("user", JSON.stringify(user));
};

export const removeUserFromLocalStorage = () => {
  localStorage.removeItem("user");
};

export const getUserFromLocalStorage = () => {
  const result = localStorage.getItem("user");
  const user = result ? JSON.parse(result) : null;
  return user;
};

export const getThemeFromLocalStorage = () => {
  const theme = localStorage.getItem("theme") || "light-theme";
  document.documentElement.className = theme;
  return theme;
};
