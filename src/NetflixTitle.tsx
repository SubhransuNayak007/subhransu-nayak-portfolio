import { useEffect, useRef, useState } from 'react';
import './NetflixTitle.css';
import netflixSound from './netflix-sound.mp3';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';

const LOADING_TEXTS = [
  'INITIALIZING EXPERIENCE',
  'LOADING DIGITAL ENVIRONMENT',
  'PREPARING INTERFACE',
  'ENTERING SUBHRANSU OS',
];

const NetflixTitle = () => {
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);
  const sLogoRef = useRef<HTMLDivElement>(null);
  const glowRingRef = useRef<HTMLDivElement>(null);
  const wordRef = useRef<HTMLDivElement>(null);
  const loadingBarRef = useRef<HTMLDivElement>(null);
  const loadingFillRef = useRef<HTMLDivElement>(null);
  const loadingTextRef = useRef<HTMLDivElement>(null);
  const scanLineRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);
  const skipRef = useRef<HTMLButtonElement>(null);
  const [loadingText, setLoadingText] = useState(LOADING_TEXTS[0]);
  const [isStarted, setIsStarted] = useState(false);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  
  // Pre-instantiate Audio for robust mobile audio initialization
  const [audio] = useState(() => {
    const aud = new Audio(netflixSound);
    aud.preload = 'auto';
    return aud;
  });
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const goToBrowse = () => {
    if (timelineRef.current) timelineRef.current.kill();
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    gsap.to(containerRef.current, {
      opacity: 0,
      duration: 0.4,
      onComplete: () => navigate('/browse'),
    });
  };

  const handleStartIntro = (e?: React.SyntheticEvent) => {
    if (isStarted) return;
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setIsStarted(true);

    // Play Netflix sound - triggered directly within user interaction context
    audio.volume = 1;
    audio.play().catch(err => console.log('Audio playback blocked: ', err));
    audioRef.current = audio;
  };

  useEffect(() => {
    // Preload audio assets
    audio.load();
  }, [audio]);

  useEffect(() => {
    // Bypass if already played in this session (allows refreshing to see it again, but not page clickbacks)
    const alreadyPlayed = sessionStorage.getItem('introPlayed');
    if (alreadyPlayed) {
      navigate('/browse');
      return;
    }

    if (!isStarted) return;

    sessionStorage.setItem('introPlayed', 'true');

    // Create particle sparks
    const particlesContainer = particlesRef.current;
    if (particlesContainer) {
      particlesContainer.innerHTML = '';
      for (let i = 0; i < 60; i++) {
        const p = document.createElement('div');
        p.className = 'spark';
        const angle = Math.random() * 360;
        const dist = 80 + Math.random() * 120;
        const size = 2 + Math.random() * 3;
        p.style.cssText = `
          width: ${size}px;
          height: ${size}px;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          opacity: 0;
          --angle: ${angle}deg;
          --dist: ${dist}px;
        `;
        particlesContainer.appendChild(p);
      }
    }

    // Create scan-line bars
    const scanEl = scanLineRef.current;
    if (scanEl) {
      scanEl.innerHTML = '';
      for (let i = 0; i < 8; i++) {
        const bar = document.createElement('div');
        bar.className = 'scan-bar';
        bar.style.top = `${(i / 8) * 100}%`;
        scanEl.appendChild(bar);
      }
    }

    // Text cycling
    let textIdx = 0;
    const textInterval = setInterval(() => {
      textIdx = (textIdx + 1) % LOADING_TEXTS.length;
      setLoadingText(LOADING_TEXTS[textIdx]);
    }, 800);

    // GSAP master timeline
    const tl = gsap.timeline();
    timelineRef.current = tl;

    // ─── 0.0s: Start - everything hidden
    gsap.set([sLogoRef.current, glowRingRef.current, wordRef.current, loadingBarRef.current, loadingTextRef.current], {
      opacity: 0,
    });
    // Set scale to 0.1 for 2D safe scaling (avoiding rotateY which can bug on mobile)
    gsap.set(sLogoRef.current, { scale: 0.1 });
    gsap.set(wordRef.current, { scale: 0.01, opacity: 0 });

    // ─── 0.4s: Red "S" appears with glow ring
    tl.to(sLogoRef.current, {
      opacity: 1,
      scale: 1,
      duration: 0.7,
      ease: 'back.out(1.4)',
      delay: 0.4,
    })
      .to(glowRingRef.current, { opacity: 1, scale: 1.15, duration: 0.5, ease: 'power2.out' }, '-=0.3')

      // ─── 1.0s: Spark explosion
      .to('.spark', {
        opacity: 1,
        x: (i) => {
          const sparkElements = document.querySelectorAll('.spark');
          if (!sparkElements[i]) return 0;
          const angle = parseFloat((sparkElements[i] as HTMLElement).style.getPropertyValue('--angle'));
          const dist = parseFloat((sparkElements[i] as HTMLElement).style.getPropertyValue('--dist'));
          return Math.cos((angle * Math.PI) / 180) * dist;
        },
        y: (i) => {
          const sparkElements = document.querySelectorAll('.spark');
          if (!sparkElements[i]) return 0;
          const angle = parseFloat((sparkElements[i] as HTMLElement).style.getPropertyValue('--angle'));
          const dist = parseFloat((sparkElements[i] as HTMLElement).style.getPropertyValue('--dist'));
          return Math.sin((angle * Math.PI) / 180) * dist;
        },
        duration: 0.6,
        stagger: 0.008,
        ease: 'power3.out',
      }, '-=0.1')
      .to('.spark', { opacity: 0, duration: 0.5, ease: 'power2.in' }, '+=0.1')

      // ─── 1.2s: S logo pulses, glitch scan lines flash
      .to(sLogoRef.current, {
        scale: 1.08,
        duration: 0.15,
        yoyo: true,
        repeat: 3,
        ease: 'power1.inOut',
      }, '-=0.3')
      .to(scanLineRef.current, { opacity: 1, duration: 0.1 }, '-=0.2')
      .to('.scan-bar', { scaleX: 1, duration: 0.08, stagger: 0.04, ease: 'none' }, '-=0.1')
      .to(scanLineRef.current, { opacity: 0, duration: 0.2 }, '+=0.15')

      // ─── 2.0s: S stretches horizontally → morphs into "SUBHRANSU"
      .to(sLogoRef.current, {
        scaleX: 18,
        scaleY: 0.85,
        opacity: 0,
        duration: 0.45,
        ease: 'power4.in',
      }, '+=0.2')
      .to(glowRingRef.current, { opacity: 0, scale: 3, duration: 0.3, ease: 'power2.in' }, '-=0.3')

      // ─── 2.3s: SUBHRANSU word expands from center
      .set(wordRef.current, { opacity: 1, scale: 0.01 })
      .to(wordRef.current, {
        scale: 1,
        duration: 0.6,
        ease: 'expo.out',
      })
      .to(wordRef.current, {
        filter: 'drop-shadow(0 0 25px rgba(229,9,20,0.95))',
        duration: 0.4,
        ease: 'power2.out',
      }, '-=0.25')

      // ─── 3.0s: Loading bar activates
      .to(loadingBarRef.current, { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' }, '-=0.1')
      .to(loadingTextRef.current, { opacity: 1, duration: 0.3 }, '-=0.2')
      .to(loadingFillRef.current, { width: '100%', duration: 1.1, ease: 'power1.inOut' }, '-=0.1')

      // ─── 4.2s: Full fade out → navigate
      .to(containerRef.current, {
        opacity: 0,
        duration: 0.5,
        ease: 'power2.inOut',
        onComplete: () => {
          clearInterval(textInterval);
          navigate('/browse');
        },
      }, '+=0.15');

    // Show skip button after 1.5s
    gsap.to(skipRef.current, { opacity: 1, duration: 0.4, delay: 1.5 });

    return () => {
      clearInterval(textInterval);
      tl.kill();
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    };
  }, [navigate, isStarted]);

  return (
    <div className="cinematic-container" ref={containerRef}>
      {!isStarted ? (
        /* Tap to Start / Initialize Screen to enable audio autoplay */
        <div 
          className="initialize-overlay" 
          onClick={() => handleStartIntro()} 
          onTouchStart={() => handleStartIntro()}
        >
          <div className="initialize-glow" />
          <div className="initialize-content">
            <div className="s-logo-static">
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="s-svg-static">
                <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fill="#E50914" className="s-letter-static">S</text>
              </svg>
            </div>
            <p className="initialize-text">TAP TO INITIALIZE EXPERIENCE</p>
            <span className="initialize-subtext">SUBHRANSU OS v1.0.0</span>
          </div>
        </div>
      ) : (
        <>
          {/* Particle field */}
          <div className="particles-field" ref={particlesRef} />

          {/* Scan lines overlay */}
          <div className="scan-lines-overlay" ref={scanLineRef} />

          {/* Glow ring behind S */}
          <div className="glow-ring" ref={glowRingRef} />

          {/* The "S" logo */}
          <div className="s-logo-wrap" ref={sLogoRef}>
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="s-svg">
              <defs>
                <linearGradient id="sGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FF3A3A" />
                  <stop offset="40%" stopColor="#E50914" />
                  <stop offset="100%" stopColor="#8B0000" />
                </linearGradient>
                <filter id="sGlow">
                  <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                <linearGradient id="glassHighlight" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="rgba(255,255,255,0.35)" />
                  <stop offset="50%" stopColor="rgba(255,255,255,0.05)" />
                  <stop offset="100%" stopColor="rgba(0,0,0,0.2)" />
                </linearGradient>
              </defs>
              <text
                x="50%"
                y="55%"
                dominantBaseline="middle"
                textAnchor="middle"
                fill="url(#sGrad)"
                filter="url(#sGlow)"
                className="s-letter-main"
              >S</text>
              <text
                x="50%"
                y="55%"
                dominantBaseline="middle"
                textAnchor="middle"
                fill="url(#glassHighlight)"
                className="s-letter-glass"
              >S</text>
            </svg>
            <div className="neon-strip strip-1" />
            <div className="neon-strip strip-2" />
            <div className="neon-strip strip-3" />
          </div>

          {/* Curved SUBHRANSU full word SVG */}
          <div className="subhransu-word-curved-wrap" ref={wordRef}>
            <svg viewBox="0 0 1000 320" xmlns="http://www.w3.org/2000/svg" className="subhransu-curved-svg">
              <defs>
                <path id="curvePath" d="M 80,240 Q 500,100 920,240" fill="none" />
                <linearGradient id="textGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#FF3A3A" />
                  <stop offset="30%" stopColor="#E50914" />
                  <stop offset="70%" stopColor="#B00000" />
                  <stop offset="100%" stopColor="#660000" />
                </linearGradient>
                <filter id="textGlow">
                  <feGaussianBlur stdDeviation="8" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                <linearGradient id="highlightGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="rgba(255, 255, 255, 0.45)" />
                  <stop offset="50%" stopColor="rgba(255, 255, 255, 0)" />
                </linearGradient>
              </defs>
              <text fill="url(#textGrad)" filter="url(#textGlow)" className="subhransu-svg-text">
                <textPath href="#curvePath" startOffset="50%" textAnchor="middle">
                  SUBHRANSU NAYAK
                </textPath>
              </text>
              <text fill="url(#highlightGrad)" className="subhransu-svg-text-highlight">
                <textPath href="#curvePath" startOffset="50%" textAnchor="middle">
                  SUBHRANSU NAYAK
                </textPath>
              </text>
            </svg>
          </div>

          {/* Loading bar + text */}
          <div className="loading-section" ref={loadingBarRef} style={{ opacity: 0, transform: 'translateY(10px)' }}>
            <div className="loading-text" ref={loadingTextRef} style={{ opacity: 0 }}>
              {loadingText}
            </div>
            <div className="loading-track">
              <div className="loading-fill" ref={loadingFillRef} />
            </div>
          </div>

          {/* Skip button */}
          <button className="skip-btn" ref={skipRef} onClick={goToBrowse} style={{ opacity: 0 }}>
            SKIP INTRO ›
          </button>
        </>
      )}
    </div>
  );
};

export default NetflixTitle;
