// Import stylesheets
import './style.css';

const plusBtn = document.getElementById("plus-btn");
const mapBtn = document.getElementById("map-btn");
const guideBtn = document.getElementById("guide-btn");
const menuBtn = document.getElementById("menu-btn");
const modal = document.getElementById("modal");
const modalCloseBtn = document.getElementById("modal-close-btn")



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

plusBtn.addEventListener("click", openSubmitForm)
  function openSubmitForm() {
    modal.style.display = "inline"
  }

modalCloseBtn.addEventListener("click", closeModal)
  function closeModal() {
    modal.style.display = "none"
  }
