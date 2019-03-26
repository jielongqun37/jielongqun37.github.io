// let myHeading = document.querySelector('h1');
// myHeading.textContent = 'Hello World!';
// 图片切换代码
let myImage = document.querySelector("img");
myImage.onclick = function() {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/firefox-icon.png") {
    myImage.setAttribute("src", "images/firefox2.png");
  } else {
    myImage.setAttribute("src", "images/firefox-icon.png");
  }
};

// 个性化欢迎信息
function setHeading(name) {
  let myHeading = document.querySelector("h1");
  myHeading.textContent = "Mozilla 酷毙了， " + name + "! ";
}
function setUsername() {
  let myName = prompt("请输入你的名字：");
  localStorage.setItem("name", myName);
  setHeading(myName);
}

let storedName = localStorage.getItem("name");
if (!storedName) {
  setUsername();
} else {
  setHeading(storedName);
}
let myButton = document.querySelector("button");
myButton.onclick = setUsername;
