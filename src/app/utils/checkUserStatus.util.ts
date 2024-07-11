export const checkUserStatus = (): boolean => {
  const isLoggedIn: string | null = localStorage.getItem('loggedin');
  return isLoggedIn ? true : false;
};
