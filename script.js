// -----------------------
// Back to Top ボタン
const btn = document.getElementById('back-to-top');

// スクロールでボタン表示
window.addEventListener('scroll', () => {
    if (window.scrollY > 1) {  
        btn.style.display = 'block';
    } else {
        btn.style.display = 'none';
    }
});

// クリックでトップへスムーズスクロール
btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});


// -----------------------
// 左右泡アニメーション
const leftContainer = document.querySelector('.bubble-left');
const rightContainer = document.querySelector('.bubble-right');

function createBubble(container) {
    const bubble = document.createElement('div');
    const size = Math.random() * 10 + 5; // 泡の大きさ
    bubble.classList.add('bubble');
    bubble.style.width = size + 'px';
    bubble.style.height = size + 'px';
    bubble.style.left = Math.random() * 50 + 'px'; // 左右位置
    bubble.style.transition = 'transform 3s linear, opacity 3s linear';
    container.appendChild(bubble);

    // 少し遅延して上昇開始
    setTimeout(() => {
        bubble.style.transform = `translateY(-${Math.random() * 300 + 200}px)`; // 上昇距離
        bubble.style.opacity = 0;
    }, 50);

    // 3秒後に削除
    setTimeout(() => bubble.remove(), 3000);
}

// 左右で泡生成を繰り返す
setInterval(() => createBubble(leftContainer), 300);
setInterval(() => createBubble(rightContainer), 300);

