const datetimeHTML = document.querySelector("#datetime");
let datetime = new Date();
datetimeHTML.innerHTML =
  datetime.toLocaleDateString("vi-VN") + " " + datetime.toLocaleTimeString("vi-VN");
setInterval(() => {
  datetime = new Date();
  datetimeHTML.innerHTML =
    datetime.toLocaleDateString("vi-VN") + " " + datetime.toLocaleTimeString("vi-VN");
}, 1000);
