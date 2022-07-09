const shareButtons = document.querySelector(".share__buttons");
const mobileShareButton1 = document.querySelector(".mobile__share1");
const mobileShareButton2 = document.querySelector(".mobile__share2");
const desktopShareButton = document.querySelector(".desktop__shareButton");
const desktopShare = document.querySelector(".desktop__share");

mobileShareButton1.addEventListener("click", handleMobileShareToggle);
mobileShareButton2.addEventListener("click", handleMobileShareToggle);
desktopShareButton.addEventListener("click", handleMobileShareToggle);

function handleMobileShareToggle() {
  shareButtons.classList.toggle("active");
}

function handleMobileShareToggle() {
  desktopShare.classList.toggle("active");
}
