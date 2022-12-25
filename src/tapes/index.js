const topMenu = document.querySelector(".top .menu");
const topDialog = document.querySelector(".top .dialog");

topMenu.addEventListener("click", () => {
  topDialog.showModal();
});

topDialog.addEventListener("click", (event) => {
  if (["A", "DIALOG"].includes(event.target.nodeName)) {
    topDialog.close();
  }
});
