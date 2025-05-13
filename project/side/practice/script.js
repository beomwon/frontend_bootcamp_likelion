document.addEventListener("DOMContentLoaded", function () {
  const likeIcon = document.querySelector(".like i");
  const bookmarkIcon = document.querySelector(".bookmark i");

  likeIcon.addEventListener("click", function () {
    this.classList.toggle("fa-regular");
    this.classList.toggle("fa-solid");
  });

  bookmarkIcon.addEventListener("click", function () {
    this.classList.toggle("fa-regular");
    this.classList.toggle("fa-solid");
  });
});
