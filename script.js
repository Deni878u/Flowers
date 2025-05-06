for (let i = 0; i < 5; i++) {
  const cloud = document.createElement('div');
  cloud.classList.add('cloud');
  cloud.style.top = `${Math.random() * 30 + 10}%`;
  cloud.style.animationDelay = `${Math.random() * 10}s`;
  document.body.appendChild(cloud);
}
