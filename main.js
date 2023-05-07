const d = document;

const $items = d.querySelectorAll(".item-menu");

function activeMenu() {
  $items.forEach((el) => {
    el.classList.remove("active");
    this.classList.add("active");
  });
}

$items.forEach((el) => {
  el.addEventListener("click", activeMenu);
});

d.addEventListener("click", (e) => {
  if (e.target.matches(".social-media > a *")) {
    e.preventDefault();
    d.querySelector(".social-media-visible").classList.toggle("visible");
  }
});
