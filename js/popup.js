var background = document.getElementById("background");
var popup = document.getElementById("popup");
var closeBtn = document.getElementById("close");
var datewrap = document.getElementsByClassName("date")[0];

let today = new Date();

let year = today.getFullYear();
let month = today.getMonth() + 1;
let day = today.getDate();

let dateString = year + "-" + month + "-" + day;

/* X버튼 눌러서 종료 */
closeBtn.addEventListener("click", function () {
  background.style.display = "none";
});

/* esc버튼 눌러서 종료 */
document.addEventListener("keyup", (e) => {
  if (e.keyCode == "27") {
    background.style.display = "none";
  }
});

/* 현재날짜 받아오기 */
document.addEventListener("DOMContentLoaded", function () {
  datewrap.innerHTML = dateString;
});

/* 쿠키 받아와서 오늘 하루 동안 안 보기 */
function setCookie(name, value, expiredays) {
  var today = new Date();

  // console.log(today.getDate())

  today.setDate(today.getDate() + expiredays); // 현재시간에 하루를 더함

  document.cookie =
    name + "=" + escape(value) + "; expires=" + today.toGMTString();
}

function getCookie(name) {
  var cookie = document.cookie;

  if (document.cookie != "") {
    var cookie_array = cookie.split("; ");
    // console.log(cookie_array)
    for (var index in cookie_array) {
      var cookie_name = cookie_array[index].split("=");
      if (cookie_name[0] == "mycookie") {
        return cookie_name[1];
      }
    }
  }
  return;
}

document
  .querySelector(".modal-today-close")
  .addEventListener("click", function () {
    document.querySelector("#background").style.display = "none";
    setCookie("mycookie", "popupEnd", 1);
  });

var checkCookie = getCookie("mycookie");

if (checkCookie == "popupEnd") {
  document.querySelector("#background").style.display = "none";
} else {
  document.querySelector("#background").style.display = "block";
}
