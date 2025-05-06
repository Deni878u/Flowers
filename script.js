document.querySelectorAll('.head').forEach(head => {
  const delay = Math.random() * 2;
  head.style.animationDelay = `${delay}s`;
});
