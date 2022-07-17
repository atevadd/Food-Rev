// This function is to create a cookie and set expiring date
export const setCookie = (name, value, days) => {
  let expires = "";
  if (days) {
    let date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie =
    name +
    "=" +
    (value || "") +
    expires +
    "; path=/" +
    "; SameSite=Strict" +
    "; secure";
};

// This function is to retrieve a cookie
export const getCookie = (name) => {
  let nameEQ = name + "=";
  let ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
};

export const checkCookie = (name, value, days) => {
  let user = getCookie(name);
  if (user != "") {
    console.log("Welcome again");
  } else {
    user = prompt("Please enter your name:", "");
    if (user != "" && user != null) {
      setCookie(name, value, days);
    }
  }
};
