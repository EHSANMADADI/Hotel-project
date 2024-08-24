const setCookie = (token: string) => {
  document.cookie = `accessToken=Bearer ${token}; max-age=${24 * 60 * 60}`; // One day
};

const getCookie = (cookieName: string) => {
  return document.cookie
    .split(";")
    .find((token) => token.trim().split("=")[0] === cookieName)
    ?.split("=")[1];
};

const clearCookie = () => {
  console.log(document.cookie);
  document.cookie =
    "accessToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path/=;";
  console.log(document.cookie);
};

export { setCookie, getCookie, clearCookie };
