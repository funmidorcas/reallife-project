document.addEventListener('DOMContentLoaded', function () {
  let showMore = document.querySelectorAll(".show");
  let more = document.querySelector(".js-work");
  let message = document.querySelector("#message");

  showMore.forEach(function (btn) {
    btn.addEventListener('click', function () {
      message.textContent = more.textContent;
    });
  });
});
