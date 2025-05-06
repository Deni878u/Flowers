document.addEventListener("DOMContentLoaded", () => {
  const flowers = document.querySelectorAll(".flower");

  // Add a click event to each flower
  flowers.forEach(flower => {
    flower.addEventListener("click", () => {
      // Trigger the blooming animation by adding a class
      flower.classList.toggle("bloom");

      // Optionally, change the flower's color when clicked
      changeFlowerColor(flower);
    });
  });

  // Function to change flower color randomly
  function changeFlowerColor(flower) {
    const colors = [
      "radial-gradient(circle, #f6b93b 0%, #f39c12 100%)", // Sunflower
      "linear-gradient(135deg, #bfa6ff, #a28dff)", // Lavender
      "radial-gradient(circle, #ffb3d9 0%, #ff6699 100%)", // Rose
      "radial-gradient(circle, #f9e1d2 0%, #ec88c3 100%)", // Peony
    ];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    // Apply the random color to the flower head
    flower.querySelector(".head").style.background = randomColor;
  }
});
