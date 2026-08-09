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
      background: '#07070a'
    }}>
      {/* 1. Global Noise Overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.025'/%3E%3C/svg%3E")`,
        opacity: 0.8
      }} />

      {/* 2. Top Volumetric Lighting (Soft Neutral Warm Bloom) */}
      <div style={{
        position: 'absolute',
        top: '-250px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '1000px',
        height: '600px',
        borderRadius: '50%',
        background: 'radial-gradient(ellipse at center, rgba(255, 248, 220, 0.03) 0%, rgba(212, 175, 55, 0.015) 45%, transparent 70%)',
        filter: 'blur(140px)',
        animation: 'glowBreathe 10s ease-in-out infinite'
      }} />

      {/* 3. Mid-Page Accent Lighting (Warm Amber & Gold Atmospheric Fog) */}
      <div style={{
        position: 'absolute',
        top: '30%',
        left: '-150px',
        width: '700px',
        height: '700px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(212, 175, 55, 0.07) 0%, transparent 65%)',
        filter: 'blur(160px)',
        animation: 'glowBreathe 14s ease-in-out infinite'
      }} />

      <div style={{
        position: 'absolute',
        top: '55%',
        right: '-150px',
        width: '750px',
        height: '750px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(246, 196, 83, 0.08) 0%, transparent 65%)',
        filter: 'blur(160px)',
        animation: 'glowBreathe 12s ease-in-out infinite reverse'
      }} />

      {/* 4. Bottom Section Ambient Glow (Violet/Amber Flare) */}
      <div style={{
        position: 'absolute',
        bottom: '-150px',
        left: '20%',
        width: '800px',
        height: '600px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(167, 139, 250, 0.09) 0%, transparent 65%)',
        filter: 'blur(150px)',
        animation: 'glowBreathe 16s ease-in-out infinite'
      }} />

      {/* 5. Continuous Floating Particle Layer */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `
          radial-gradient(circle, rgba(246, 196, 83, 0.45) 1px, transparent 1px),
          radial-gradient(circle, rgba(51, 214, 255, 0.25) 1px, transparent 1px),
          radial-gradient(circle, rgba(255, 255, 255, 0.15) 1px, transparent 1px)
        `,
        backgroundSize: '240px 240px, 180px 180px, 120px 120px',
        backgroundPosition: '30px 40px, 90px 120px, 150px 60px',
        opacity: 0.5,
        animation: 'ambientFloat 25s ease-in-out infinite'
      }} />
    </div>
  );
};

export default GlobalBackground;
