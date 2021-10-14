"use strict";

function unhideItemOne() {
  document.getElementById("hiddenOne").style.display = "block";
  document.getElementById("unhideBtn").style.display = "none";
  document.getElementById("hideBtn").style.display = "block";
  document.getElementById("arrow").style.transform = "rotate(90deg)";
}
function hideItemOne() {
  document.getElementById("hiddenOne").style.display = "none";
  document.getElementById("unhideBtn").style.display = "block";
  document.getElementById("hideBtn").style.display = "none";
  document.getElementById("arrow").style.transform = "rotate(0deg)";
}

// second dropdown
function unhideItemTwo() {
  document.getElementById("hiddenTwo").style.display = "block";
  document.getElementById("unhideBtnTwo").style.display = "none";
  document.getElementById("hideBtnTwo").style.display = "block";
  document.getElementById("arrowTwo").style.transform = "rotate(90deg)";
}
function hideItemTwo() {
  document.getElementById("hiddenTwo").style.display = "none";
  document.getElementById("unhideBtnTwo").style.display = "block";
  document.getElementById("hideBtnTwo").style.display = "none";
  document.getElementById("arrowTwo").style.transform = "rotate(0deg)";
}

// third dropdown
function unhideItemThird() {
  document.getElementById("hideenThird").style.display = "block";
  document.getElementById("unhideBtnThird").style.display = "none";
  document.getElementById("hideBtnThird").style.display = "block";
  document.getElementById("arrowThird").style.transform = "rotate(90deg)";
}
function hideItemThird() {
  document.getElementById("hideenThird").style.display = "none";
  document.getElementById("unhideBtnThird").style.display = "block";
  document.getElementById("hideBtnThird").style.display = "none";
  document.getElementById("arrowThird").style.transform = "rotate(0deg)";
}

// third dropdown
function unhideItemFourth() {
  document.getElementById("hideenFourth").style.display = "block";
  document.getElementById("unhideBtnFourth").style.display = "none";
  document.getElementById("hideBtnFourth").style.display = "block";
  document.getElementById("arrowFourth").style.transform = "rotate(90deg)";
}
function hideItemFourth() {
  document.getElementById("hideenFourth").style.display = "none";
  document.getElementById("unhideBtnFourth").style.display = "block";
  document.getElementById("hideBtnFourth").style.display = "none";
  document.getElementById("arrowFourth").style.transform = "rotate(0deg)";
}
