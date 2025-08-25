const categorySelect = document.getElementById("category");
const products = document.querySelectorAll(".product");

categorySelect.addEventListener("change", () => {
  const selected = categorySelect.value;

  products.forEach(product => {
    if (selected === "all" || product.dataset.category === selected) {
      product.classList.remove("hidden");
    } else {
      product.classList.add("hidden");
    }
  });
});
