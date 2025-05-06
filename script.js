document.addEventListener("DOMContentLoaded", () => {
  const flowers = document.querySelectorAll(".flower");

  flowers.forEach(flower => {
    flower.addEventListener("click", () => {
      flower.classList.toggle("bloom");
      changeFlowerColor(flower);
    });
  });

  function changeFlowerColor(flower) {
    const colors = [
      "radial-gradient(circle, #f6b93b 0%, #f39c12 100%)",
      "linear-gradient(135deg, #bfa6ff, #a28dff)",
      "radial-gradient(circle, #ffb3d9 0%, #ff6699 100%)",
      "radial-gradient(circle, #f9e1d2 0%, #ec88c3 100%)",
    ];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    const head = flower.querySelector(".head");
    if (head) {
      head.style.background = randomColor;
    }
