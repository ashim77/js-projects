"use strict";
/////////////////////////////////// JS Screen /////////////////////////
let myWindow;

// select dom element
const windowWidth = document.getElementById("windowWidth");
const windowHeight = document.getElementById("windowHeight");

// show window object properites
windowWidth.innerHTML = "Window inner width is:" + window.innerWidth;
windowHeight.innerHTML = "Window inner height is:" + window.innerHeight;

//Open Window & Close Window
function openWindow(){
      myWindow = window.open("https://google.com");
}
function closeWindow(){
      myWindow = window.close(); 
}

/////////////////////////////////// JS Window /////////////////////////
//dom element
const width = document.getElementById("width");
const height = document.getElementById("height");
const availWidth = document.getElementById("availWidth");
const availHeight = document.getElementById("availHeight");
const colorDepth = document.getElementById("colorDepth");
const pixelDepth = document.getElementById("pixelDepth");

//show window
width.innerHTML = "Screen width:" + screen.width;
height.innerHTML = "Screen height:" + screen.height;
availWidth.innerHTML = "Screen availWidth:" + screen.availWidth;
availHeight.innerHTML = "Screen availHeight:" + screen.availHeight;
colorDepth.innerHTML = "Screen colorDepth:" + screen.colorDepth;
pixelDepth.innerHTML = "Screen pixelDepth:" + screen.pixelDepth;

/////////////////////////////////// JS Location /////////////////////////
//dom element
const href = document.getElementById("href");
const hostname = document.getElementById("hostname");
const pathname = document.getElementById("hostname");
const protocol = document.getElementById("protocol");
const port = document.getElementById("port");

//show window.location object property values
href.innerHTML = "Window href: " + location.href;
hostname.innerHTML = "Window href: " + location.hostname;
pathname.innerHTML = "Window href: " + location.pathname;
protocol.innerHTML = "Window href: " + location.protocol;
port.innerHTML = "Window href: " + location.port;

function loadw3s(){
      window.location.assign("https://www.w3schools.com");
}