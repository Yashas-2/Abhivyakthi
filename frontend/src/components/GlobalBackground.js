import React from 'react';

const GlobalBackground = () => {
  return (
    <div className="global-background-canvas" style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      pointerEvents: 'none',
      zIndex: 0,
      overflow: 'hidden',
      background: '#07070a',
      contain: 'strict',
      transform: 'translateZ(0)'
    }}>
      {/* 1. Global Noise Overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.025'/%3E%3C/svg%3E")`,
        opacity: 0.8,
        pointerEvents: 'none'
      }} />

      {/* 2. Top Volumetric Lighting */}
      <div style={{
        position: 'absolute',
        top: '-200px',
        left: '50%',
        transform: 'translateX(-50%) translateZ(0)',
        width: '800px',
        height: '500px',
        borderRadius: '50%',
        background: 'radial-gradient(ellipse at center, rgba(255, 248, 220, 0.04) 0%, rgba(212, 175, 55, 0.02) 45%, transparent 70%)',
        filter: 'blur(70px)',
        willChange: 'transform, opacity'
      }} />

      {/* 3. Mid-Page Accent Lighting */}
      <div style={{
        position: 'absolute',
        top: '30%',
        left: '-150px',
        width: '500px',
        height: '500px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(212, 175, 55, 0.05) 0%, transparent 65%)',
        filter: 'blur(80px)',
        willChange: 'transform, opacity'
      }} />

      <div style={{
        position: 'absolute',
        top: '55%',
        right: '-150px',
        width: '550px',
        height: '550px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(246, 196, 83, 0.06) 0%, transparent 65%)',
        filter: 'blur(80px)',
        willChange: 'transform, opacity'
      }} />

      {/* 4. Bottom Section Ambient Glow */}
      <div style={{
        position: 'absolute',
        bottom: '-100px',
        left: '20%',
        width: '600px',
        height: '450px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(167, 139, 250, 0.06) 0%, transparent 65%)',
        filter: 'blur(80px)',
        willChange: 'transform, opacity'
      }} />

      {/* 5. Continuous Floating Particle Layer */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `
          radial-gradient(circle, rgba(246, 196, 83, 0.4) 1px, transparent 1px),
          radial-gradient(circle, rgba(255, 255, 255, 0.15) 1px, transparent 1px)
        `,
        backgroundSize: '240px 240px, 160px 160px',
        backgroundPosition: '30px 40px, 90px 120px',
        opacity: 0.4,
        pointerEvents: 'none'
      }} />
    </div>
  );
};

export default GlobalBackground;
