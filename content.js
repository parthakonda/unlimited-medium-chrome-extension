console.log("From content script");

var deleteCookie = function(name) {
  document.cookie =
    name + "=;expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/;domain=.medium.com;";
  document.cookie =
    name + "=;expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/;domain=medium.com;";

  var isBlocking =
    document.getElementById("regwall-heading").textContent.length > 0;
  if (isBlocking) {
    document.cookie =
      name +
      "=;expires=Thu, 01 Jan 1970 00:00:01 GMT;path=" +
      location.pathname +
      ";domain=." +
      location.host +
      ";";
    document.cookie =
      name +
      "=;expires=Thu, 01 Jan 1970 00:00:01 GMT;path=" +
      location.pathname +
      ";domain=" +
      location.host +
      ";";
    console.log("Cookies got delete for host " + location.host);
  }
};

function deleteAllCookies() {
  var cookies = document.cookie.split(";");

  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i];
    var eqPos = cookie.indexOf("=");
    var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
    deleteCookie(name);
  }
}
deleteAllCookies();
console.log("All cookies in this got deleted");
