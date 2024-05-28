export const validEmail = (email) => {
  const regx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regx.test(email);
};

export const getInitials = (name) => {
  if (!name) return "";
  let initials = "";

  const words = name.trim().split(/\s+/);
  for (let i = 0; i < Math.min(words.length, 2); i++) {
    initials += words[i][0].toUpperCase();
  }
  return initials;
};
