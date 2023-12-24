var ifConnected = window.navigator.onLine;
if (ifConnected) {
  document.getElementById("checkConnection").innerHTML = "You are Online";
  document.getElementById("checkConnection").style.color = "white";
  document.getElementById("checkConnection").style.backgroundColor = "green";
} else {
    document.getElementById("checkConnection").innerHTML = "You are Offline";
    document.getElementById("checkConnection").style.color = "white";
    document.getElementById("checkConnection").style.backgroundColor = "red";
}
