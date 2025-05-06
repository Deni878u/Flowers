document.querySelectorAll('.flower').forEach(flower => {
    const delay = Math.random() * 3;
    flower.style.animationDelay = `${delay}s`;
  });
  