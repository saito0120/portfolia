//topボタン常に出す処理
const btn = document.getElementById('back-to-top');

// スクロールでボタン表示
window.addEventListener('scroll', () => {
    if (window.scrollY > 1) {  // 200px以上スクロールしたら表示
        btn.style.display = 'block';
    } else {
        btn.style.display = 'none';
    }
});

// クリックでトップへスムーズスクロール
btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

