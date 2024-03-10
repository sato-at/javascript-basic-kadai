const eventBtn = document.getElementById('btn');
eventBtn.addEventListener('click', () => {
  setTimeout(() => {
    const txt = document.getElementById('text');
    txt.textContent = 'ボタンをクリックしました';
  }, 2000);
});

