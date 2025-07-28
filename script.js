const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const response = document.getElementById('response');

noBtn.addEventListener('mouseover', () => {
  const i = Math.floor(Math.random() * 300);
  const j = Math.floor(Math.random() * 300);
  noBtn.style.position = 'absolute';
  noBtn.style.top = i + 'px';
  noBtn.style.left = j + 'px';
});

yesBtn.addEventListener('click', () => {
  response.innerHTML = `
    <h2>I knew you would say yes! 😘</h2>
    <p>And maybe... you'll get one too. 😉</p>
  `;
});
