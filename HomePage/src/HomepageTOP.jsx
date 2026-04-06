import React, { useEffect, useRef } from 'react';
import './HomepageTOP.css';
import suisouImg from './Images/suisou.png';
import favicon from './portfolioICONS/favicon.png';
import PrimaryMathStudyicon from './portfolioICONS/PrimaryMathStudyicon.png';

const HomepageTOP = () => {
  const backToTopRef = useRef(null);
  const leftBubbleRef = useRef(null);
  const rightBubbleRef = useRef(null);

  useEffect(() => {
    // -----------------------
    // Back to Top
    const btn = backToTopRef.current;
    const handleScroll = () => {
      if (btn) btn.style.display = window.scrollY > 1 ? 'block' : 'none';
    };
    window.addEventListener('scroll', handleScroll);
    btn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // -----------------------
    // 左右泡アニメーション
    const createBubble = (container) => {
      if (!container) return;
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
    };

    const leftInterval = setInterval(() => createBubble(leftBubbleRef.current), 300);
    const rightInterval = setInterval(() => createBubble(rightBubbleRef.current), 300);

    // クリーンアップ
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(leftInterval);
      clearInterval(rightInterval);
    };
  }, []);

  return (
    <div>
      {/* header */}
      <header>
        <div className="header-top">
          <img src={suisouImg} className="fade-photo" alt="水槽イメージ" />
          <div className="nav-slide">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#works">Works</a>
            <a href="#contact">Contact</a>
            <a href="#Portfolio">Portfolio</a>
          </div>
          <h1>Daigo Saito</h1>
          <nav className="nav-small">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#works">Works</a>
            <a href="#contact">Contact</a>
            <a href="#Portfolio">Portfolio</a>
          </nav>
        </div>
      </header>

      {/* 左右泡コンテナ */}
      <div className="bubble-left" ref={leftBubbleRef}></div>
      <div className="bubble-right" ref={rightBubbleRef}></div>

      {/* 本文ブロック */}
      <div className="body-container">
        <div className="body-part" id="about">
          <h2>About</h2>
          <p>仙台デザイン&テクノロジー専門学校でWeb技術を学んでいます。</p>
          <p>VulnHubの仮想環境を利用して脆弱性の仕組みを理解しながら、</p>
          <p>セキュリティ分野にも興味を持って学習しています。</p>
        </div>
        <div className="body-part" id="skills">
          <h2>Skills</h2>
          <p>HTML / CSS：基本的なWebページ制作</p>
          <p>JavaScript：簡単な動きのあるUIの実装</p>
          <p>PHP：フォーム処理</p>
          <p>Laravel：データベース保存</p>
          <p>AWS：クラウド環境の基礎学習</p>
        </div>
        <div className="body-part" id="works">
          <h2>Works</h2>
          <h3>家庭菜園用AIチャット支援アプリ</h3>
          <p>Reactを使用し、家庭菜園の相談ができるAIチャット形式の診断アプリを制作。</p>
        </div>
      </div>

      <section id="contact">
        <div className="body-part">
          <h2>Contact</h2>
          <p>Email: wjpajm@email.com</p>
        </div>
      </section>

      <section id="Portfolio">
        <div className="body-part">
          <h2>Portfolio</h2>

            <div className="app-list">

                <div className="app-item">
                    <a href="https://saito0120.github.io/React-App-Login-Lab/" target="_blank" rel="noopener noreferrer">
                        <img src={favicon} alt="ログインアプリ" width="100" />
                        <p>Hash Learning</p>
                    </a>
                </div>

                <div className="app-item">
                    <a href="https://saito0120.github.io/PrimarySchool-MathStudy/" target="_blank" rel="noopener noreferrer">
                        <img src={PrimaryMathStudyicon} alt="小学算数" width="100" />
                        <p>PrimaryMathStudy</p>
                    </a>
                </div>
            
            </div>
        </div>
      </section>

      <button id="back-to-top" ref={backToTopRef}>↑ Top</button>
    </div>
  );
};

export default HomepageTOP;