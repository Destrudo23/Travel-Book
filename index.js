// Import stylesheets
import './style.css';

const plusBtn = document.getElementById("plus-btn");
const mapBtn = document.getElementById("map-btn");
const guideBtn = document.getElementById("guide-btn");
const menuBtn = document.getElementById("menu-btn");
const modal = document.getElementById("modal");

plusBtn.addEventListener("click", openSubmitForm)
  function openSubmitForm() {
    console.log("click")
    modal.style.display = "inline"
  }

mapBtn.addEventListener("click", openMap)
  function openMap() {
    console.log("click")
  }

guideBtn.addEventListener("click", openGuide)
  function openGuide() {
    console.log("click")
  }

menuBtn.addEventListener("click", openMenu)
  function openMenu() {
    console.log("click")
  }
