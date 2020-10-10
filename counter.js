const count = document.getElementById("count");
const upbtn = document.getElementById("up");
const downbtn = document.getElementById("down");
const resetbtn = document.getElementById("reset");

upbtn.addEventListener("click", function () {
  count.textContent = parseInt(count.innerHTML) + 1;
});
downbtn.addEventListener("click", function () {
  count.textContent = parseInt(count.innerHTML) - 1;
});
resetbtn.addEventListener("click", function () {
  count.textContent = 0;
});
