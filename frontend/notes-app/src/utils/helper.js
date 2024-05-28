export const validEmail = (email) => {
  const regx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regx.test(email);
};
