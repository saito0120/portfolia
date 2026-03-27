// -----------------------
// Back to Top
const btn = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
    btn.style.display = window.scrollY > 1 ? 'block' : 'none';
});
btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// -----------------------
// 左右泡アニメーション
const leftContainer = document.querySelector('.bubble-left');
const rightContainer = document.querySelector('.bubble-right');

function createBubble(container) {
    const bubble = document.createElement('div');
    const size = Math.random() * 50 + 5;
    bubble.classList.add('bubble');
    bubble.style.width = size + 'px';
    bubble.style.height = size + 'px';
    bubble.style.left = Math.random() * 50 + 'px';
    const duration = 2000 + size * 50; // 大きいほど遅い
    bubble.style.transition = `transform ${duration}ms linear, opacity ${duration}ms linear`;
    container.appendChild(bubble);

    setTimeout(() => {
        bubble.style.transform = `translateY(-${Math.random() * 300 + 200}px)`;
        bubble.style.opacity = 0;
    }, 50);

    setTimeout(() => bubble.remove(), 3000);
}

setInterval(() => createBubble(leftContainer), 300);
setInterval(() => createBubble(rightContainer), 300);