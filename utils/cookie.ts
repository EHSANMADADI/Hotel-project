const setCookie = (token: string) => {
  document.cookie = `accessToken=Bearer ${token}; max-age=${24 * 60 * 60}`; // One day
};

const getCookie = (cookieName: string) => {
  return document.cookie
    .split(";")
    .find((token) => token.trim().split("=")[0] === cookieName)
    ?.split("=")[1];
};

export { setCookie, getCookie };
