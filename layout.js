document.addEventListener("DOMContentLoaded", function () {
  const imageSelectors = document.querySelectorAll(".image-selector");

  imageSelectors.forEach(function (selector) {
    selector.addEventListener("click", function () {
      const selectedImage = selector.querySelector("img");
      const featuredImage = document.querySelector(".featured-image");

      document
        .querySelector(".image-selector.selected")
        .classList.remove("selected");

      selector.classList.add("selected");

      featuredImage.src = selectedImage.src;

      featuredImage.style.display = "block";
    });
  });
});

// buutons 
document.addEventListener("DOMContentLoaded", function() {
  const quantityInput = document.querySelector('input[name="quantity"]');
  const quantityButtons = document.querySelectorAll('.quantity-button');
  let quantity = 1; 
  const updateQuantity = () => {
      quantityInput.value = quantity;
  };
  updateQuantity(); 
  quantityButtons[0].addEventListener('click', () => {
      quantity = Math.max(1, quantity - 1);
      updateQuantity();
  });
  quantityButtons[1].addEventListener('click', () => {
      quantity++;
      updateQuantity();
  });
  quantityInput.addEventListener('change', () => {
      quantity = parseInt(quantityInput.value) || 1;
      updateQuantity();
  });
});


