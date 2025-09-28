document.addEventListener("DOMContentLoaded", () => {
  const productsContainer = document.getElementById("products");

  const user = JSON.parse(localStorage.getItem("activeUser"));
  if (!user || !user.token) {
    console.error("Token tapılmadı! Zəhmət olmasa login olun.");
    return;
  }

  fetch("http://195.26.245.5:9505/api/products", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${user.token}`
    }
  })
    .then(res => {
      if (!res.ok) {
        throw new Error("Məhsullar yüklənmədi!");
      }
      return res.json();
    })
    .then(products => {
      productsContainer.innerHTML = "";

      products.forEach(product => {
        const card = document.createElement("div");
        card.classList.add("product-card");

        card.innerHTML = `
          <img src="${product.imageUrl}" alt="${product.name}">
          <h4>${product.name}</h4>
          <p class="price">$${product.price}</p>
          <p>${"⭐".repeat(product.rating)} (${product.reviews})</p>
          <button class="btn">Add to Cart</button>
        `;

        card.querySelector("button").addEventListener("click", () => {
          addToCart(product);
        });

        productsContainer.appendChild(card);
      });
    })
    .catch(err => console.error(err));
});

function addToCart(product) {
  let cart = JSON.parse(localStorage.getItem("cart") || "[]");
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${product.name} səbətə əlavə olundu!`);
}