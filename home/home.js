const buttons = document.querySelectorAll(".product-card button");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    alert("Added to cart!");
  });
});
