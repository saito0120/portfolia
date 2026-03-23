//topボタン常に出す処理
const btn = document.getElementById('back-to-top');

btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

