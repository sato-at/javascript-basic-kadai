const eventBtn = document.getElementById('btn');
eventBtn.addEventListener('click', () => {
  const txt = document.getElementById('text');
  txt.textContent = 'ボタンをクリックしました';
});