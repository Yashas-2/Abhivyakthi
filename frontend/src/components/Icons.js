import React from 'react';

// Handcrafted 3D Metallic Hero Icons & UI SVG Icons
export const Icon = ({ name, className = '', size = 24, color = 'currentColor' }) => {
  const props = {
    width: size,
    height: size,
    className: `custom-icon ${className}`
  };

  switch (name) {
    // 1. Handcrafted 3D Electric Guitar (BAND)
    case '3d-guitar':
    case 'band':
      return (
        <svg viewBox="0 0 100 100" fill="none" {...props}>
          <defs>
            <linearGradient id="guitarGold" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFF2B2" />
              <stop offset="35%" stopColor="#F6C453" />
              <stop offset="70%" stopColor="#D4AF37" />
              <stop offset="100%" stopColor="#8A6D1C" />
            </linearGradient>
            <linearGradient id="guitarDark" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#332A15" />
              <stop offset="100%" stopColor="#141108" />
            </linearGradient>
            <filter id="goldGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>
          {/* Outer Aura Glow */}
          <circle cx="50" cy="50" r="42" fill="url(#guitarGold)" opacity="0.08" />
          
          <g transform="rotate(-38 50 50) translate(0, 0)">
            {/* Guitar Body Base & Shadow */}
            <path d="M 40 55 C 32 50 25 58 26 70 C 27 82 38 88 50 88 C 62 88 73 82 74 70 C 75 58 68 50 60 55 C 57 48 57 42 54 38 L 46 38 C 43 42 43 48 40 55 Z" fill="url(#guitarDark)" stroke="url(#guitarGold)" strokeWidth="2.5" />
            {/* Guitar Inner Body Bevel */}
            <path d="M 42 58 C 36 54 30 60 31 70 C 32 79 40 84 50 84 C 60 84 68 79 69 70 C 70 60 64 54 58 58 Z" fill="url(#guitarGold)" opacity="0.2" />
            {/* Pickguard */}
            <path d="M 37 62 C 34 68 38 78 48 78 C 44 74 42 66 37 62 Z" fill="url(#guitarGold)" opacity="0.9" />
            {/* Pickups */}
            <rect x="42" y="60" width="16" height="4" rx="2" fill="#141108" stroke="url(#guitarGold)" strokeWidth="1" />
            <rect x="42" y="68" width="16" height="4" rx="2" fill="#141108" stroke="url(#guitarGold)" strokeWidth="1" />
            {/* Bridge */}
            <rect x="43" y="77" width="14" height="5" rx="1.5" fill="url(#guitarGold)" />
            {/* Volume Knobs */}
            <circle cx="62" cy="72" r="2.5" fill="url(#guitarGold)" />
            <circle cx="58" cy="78" r="2.5" fill="url(#guitarGold)" />
            {/* Guitar Neck */}
            <rect x="47" y="14" width="6" height="26" fill="url(#guitarDark)" stroke="url(#guitarGold)" strokeWidth="1.2" />
            {/* Frets */}
            <line x1="47" y1="18" x2="53" y2="18" stroke="url(#guitarGold)" strokeWidth="0.8" />
            <line x1="47" y1="23" x2="53" y2="23" stroke="url(#guitarGold)" strokeWidth="0.8" />
            <line x1="47" y1="28" x2="53" y2="28" stroke="url(#guitarGold)" strokeWidth="0.8" />
            <line x1="47" y1="33" x2="53" y2="33" stroke="url(#guitarGold)" strokeWidth="0.8" />
            {/* Headstock */}
            <path d="M 46 14 L 44 6 C 44 4 56 4 56 6 L 54 14 Z" fill="url(#guitarGold)" filter="url(#goldGlow)" />
            {/* Tuning Pegs */}
            <circle cx="42" cy="7" r="1.5" fill="url(#guitarGold)" />
            <circle cx="42" cy="10" r="1.5" fill="url(#guitarGold)" />
            <circle cx="42" cy="13" r="1.5" fill="url(#guitarGold)" />
            <circle cx="58" cy="7" r="1.5" fill="url(#guitarGold)" />
            <circle cx="58" cy="10" r="1.5" fill="url(#guitarGold)" />
            <circle cx="58" cy="13" r="1.5" fill="url(#guitarGold)" />
            {/* Strings */}
            <line x1="48" y1="6" x2="48" y2="77" stroke="#FFF2B2" strokeWidth="0.6" opacity="0.9" />
            <line x1="50" y1="6" x2="50" y2="77" stroke="#FFF2B2" strokeWidth="0.6" opacity="0.9" />
            <line x1="52" y1="6" x2="52" y2="77" stroke="#FFF2B2" strokeWidth="0.6" opacity="0.9" />
          </g>
        </svg>
      );

    // 2. Handcrafted 3D Dancer Silhouette (DANCE)
    case '3d-dance':
    case 'dance':
      return (
        <svg viewBox="0 0 100 100" fill="none" {...props}>
          <defs>
            <linearGradient id="danceRose" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFB3B3" />
              <stop offset="40%" stopColor="#FF6B6B" />
              <stop offset="80%" stopColor="#E63946" />
              <stop offset="100%" stopColor="#800020" />
            </linearGradient>
            <filter id="roseGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>
          {/* Background Aura */}
          <circle cx="50" cy="50" r="40" fill="url(#danceRose)" opacity="0.08" />
          
          <g filter="url(#roseGlow)">
            {/* Head */}
            <circle cx="58" cy="22" r="5" fill="url(#danceRose)" />
            {/* Hair Bun */}
            <circle cx="62" cy="20" r="3" fill="url(#danceRose)" opacity="0.8" />
            {/* Torso & Spine Curve */}
            <path d="M 57 27 C 55 35 52 42 50 50 C 47 42 45 35 43 28 Z" fill="url(#danceRose)" />
            {/* Extended Left Arm Upward */}
            <path d="M 55 30 C 65 24 73 17 76 12 C 75 14 66 24 54 32 Z" fill="url(#danceRose)" />
            {/* Extended Right Arm Graceful Curve */}
            <path d="M 45 31 C 35 34 26 38 20 45 C 22 43 32 38 44 34 Z" fill="url(#danceRose)" />
            {/* Ballet Tutu / Skirt Flare */}
            <path d="M 43 47 C 32 46 25 50 30 54 C 40 56 60 56 70 54 C 75 50 68 46 57 47 Z" fill="url(#danceRose)" />
            {/* Supporting Leg (Vertical Extension) */}
            <path d="M 50 54 C 49 66 50 78 50 88 C 51 88 52 66 52 54 Z" fill="url(#danceRose)" />
            {/* Extended Leg (Arabesque Kick) */}
            <path d="M 48 54 C 42 63 34 72 26 80 C 27 79 37 70 50 58 Z" fill="url(#danceRose)" />
            {/* Pointed Ballet Shoes */}
            <circle cx="50" cy="89" r="1.5" fill="#FFB3B3" />
            <circle cx="25" cy="81" r="1.5" fill="#FFB3B3" />
            {/* Motion Swirl Arc */}
            <path d="M 22 65 C 28 80 50 90 70 82 C 82 75 88 58 84 45" stroke="url(#danceRose)" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.6" />
          </g>
        </svg>
      );

    // 3. Handcrafted 3D Camera / Cinema Lens (MEDIA)
    case '3d-camera':
    case '3d-media':
    case 'media':
    case 'digital':
      return (
        <svg viewBox="0 0 100 100" fill="none" {...props}>
          <defs>
            <linearGradient id="cyanGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ADF5FF" />
              <stop offset="40%" stopColor="#33D6FF" />
              <stop offset="80%" stopColor="#00A8E8" />
              <stop offset="100%" stopColor="#005B8A" />
            </linearGradient>
            <linearGradient id="lensGlass" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#33D6FF" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#003D5B" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#051923" />
            </linearGradient>
            <filter id="cyanGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>
          {/* Background Ambient Glow */}
          <circle cx="50" cy="50" r="42" fill="url(#cyanGradient)" opacity="0.08" />

          <g filter="url(#cyanGlow)">
            {/* Main Camera Body Base */}
            <rect x="18" y="32" width="64" height="42" rx="10" fill="#0C141F" stroke="url(#cyanGradient)" strokeWidth="2.5" />
            {/* Camera Top Bump / Viewfinder Box */}
            <path d="M 38 32 L 43 24 L 57 24 L 62 32 Z" fill="#0C141F" stroke="url(#cyanGradient)" strokeWidth="2" />
            {/* Shutter Button & Dial */}
            <rect x="25" y="27" width="8" height="5" rx="1.5" fill="url(#cyanGradient)" />
            <circle cx="70" cy="28" r="3" fill="url(#cyanGradient)" />
            {/* Flash / Sensor Indicator */}
            <circle cx="73" cy="40" r="2.5" fill="url(#cyanGradient)" />
            {/* Leatherette Body Grip Overlay */}
            <rect x="22" y="36" width="14" height="34" rx="4" fill="url(#cyanGradient)" opacity="0.15" />
            {/* Outer Lens Metallic Barrel Ring */}
            <circle cx="50" cy="53" r="21" fill="#070D14" stroke="url(#cyanGradient)" strokeWidth="3" />
            {/* Mid Lens Ring */}
            <circle cx="50" cy="53" r="16" fill="url(#lensGlass)" stroke="url(#cyanGradient)" strokeWidth="1.5" />
            {/* Inner Lens Glass Reflex Aperture */}
            <circle cx="50" cy="53" r="10" fill="#051923" stroke="#ADF5FF" strokeWidth="1" />
            <circle cx="50" cy="53" r="5" fill="url(#cyanGradient)" />
            {/* Lens Reflection Arc Flares */}
            <path d="M 38 43 A 14 14 0 0 1 58 41" stroke="#ADF5FF" strokeWidth="2" strokeLinecap="round" opacity="0.8" />
            <circle cx="44" cy="47" r="1.5" fill="#FFFFFF" opacity="0.9" />
          </g>
        </svg>
      );

    // 4. Handcrafted 3D Dramatic Theater Mask (DRAMA)
    case '3d-drama':
    case 'drama':
      return (
        <svg viewBox="0 0 100 100" fill="none" {...props}>
          <defs>
            <linearGradient id="tealGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#C6F6D5" />
              <stop offset="40%" stopColor="#4ECDC4" />
              <stop offset="80%" stopColor="#269B94" />
              <stop offset="100%" stopColor="#0E4A46" />
            </linearGradient>
            <filter id="tealGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>
          <circle cx="50" cy="50" r="42" fill="url(#tealGradient)" opacity="0.08" />

          <g filter="url(#tealGlow)">
            {/* Main Mask Silhouette Contour */}
            <path d="M 50 18 C 30 18 24 32 25 50 C 26 68 36 82 50 82 C 64 82 74 68 75 50 C 76 32 70 18 50 18 Z" fill="#0B1C1B" stroke="url(#tealGradient)" strokeWidth="2.5" />
            {/* Cheekbone & Brow Highlight Lines */}
            <path d="M 30 30 C 40 25 60 25 70 30" stroke="url(#tealGradient)" strokeWidth="1.5" opacity="0.6" />
            {/* Eye Sockets (Left & Right Cutouts) */}
            <path d="M 32 40 C 37 36 43 40 40 46 C 36 48 30 44 32 40 Z" fill="url(#tealGradient)" />
            <path d="M 68 40 C 63 36 57 40 60 46 C 64 48 70 44 68 40 Z" fill="url(#tealGradient)" />
            {/* Nose Bridge */}
            <path d="M 50 42 L 48 58 L 53 58 Z" stroke="url(#tealGradient)" strokeWidth="1.5" fill="none" />
            {/* Smiling Drama Mouth Arc */}
            <path d="M 36 64 C 44 75 56 75 64 64 C 58 70 42 70 36 64 Z" fill="url(#tealGradient)" />
          </g>
        </svg>
      );

    // 5. Handcrafted 3D Artist Palette & Brush (ART & LITERARY)
    case '3d-art':
    case 'art':
      return (
        <svg viewBox="0 0 100 100" fill="none" {...props}>
          <defs>
            <linearGradient id="purpleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#E9D5FF" />
              <stop offset="40%" stopColor="#A78BFA" />
              <stop offset="80%" stopColor="#7C3AED" />
              <stop offset="100%" stopColor="#4C1D95" />
            </linearGradient>
            <filter id="purpleGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>
          <circle cx="50" cy="50" r="42" fill="url(#purpleGradient)" opacity="0.08" />

          <g filter="url(#purpleGlow)">
            {/* Wooden/Metallic Palette Base */}
            <path d="M 50 20 C 30 20 18 35 20 56 C 22 75 40 82 56 80 C 65 79 72 73 70 65 C 68 58 76 54 82 60 C 86 64 88 50 84 38 C 78 22 65 20 50 20 Z" fill="#140F26" stroke="url(#purpleGradient)" strokeWidth="2.5" />
            {/* Thumb Hole */}
            <ellipse cx="32" cy="62" rx="4" ry="6" fill="#07070A" stroke="url(#purpleGradient)" strokeWidth="1.5" />
            {/* Paint Dollops */}
            <circle cx="34" cy="34" r="4" fill="#FF6B6B" />
            <circle cx="48" cy="28" r="4" fill="#F6C453" />
            <circle cx="64" cy="32" r="4" fill="#33D6FF" />
            <circle cx="74" cy="44" r="4" fill="#4ECDC4" />
            <circle cx="54" cy="70" r="4" fill="url(#purpleGradient)" />
            {/* Paintbrush Crossing */}
            <g transform="rotate(35 60 50)">
              <rect x="58" y="10" width="4" height="65" rx="2" fill="url(#purpleGradient)" />
              <rect x="57" y="24" width="6" height="8" rx="1" fill="#E9D5FF" />
              <path d="M 58 10 C 58 4 62 4 62 10 Z" fill="#A78BFA" />
            </g>
          </g>
        </svg>
      );

    // Navigation and standard UI icons
    case 'home':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
          <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
          <polyline points="9 22 9 12 15 12 15 22"/>
        </svg>
      );
    case 'about':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
          <circle cx="12" cy="12" r="10"/>
          <line x1="12" y1="16" x2="12" y2="12"/>
          <line x1="12" y1="8" x2="12.01" y2="8"/>
        </svg>
      );
    case 'wings':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
        </svg>
      );
    case 'team':
    case 'users':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      );
    case 'events':
    case 'calendar':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
          <line x1="16" y1="2" x2="16" y2="6"/>
          <line x1="8" y1="2" x2="8" y2="6"/>
          <line x1="3" y1="10" x2="21" y2="10"/>
        </svg>
      );
    case 'achievements':
    case 'trophy':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
          <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/>
          <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/>
          <path d="M4 22h16"/>
          <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/>
          <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/>
          <path d="M18 2H6v7a6 6 0 0 0 12 0V2z"/>
        </svg>
      );
    case 'contact':
    case 'phone':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
        </svg>
      );
    case 'email':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
          <rect width="20" height="16" x="2" y="4" rx="2"/>
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
        </svg>
      );
    case 'location':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
          <circle cx="12" cy="10" r="3"/>
        </svg>
      );
    case 'instagram':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
        </svg>
      );
    case 'youtube':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
          <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.56 49.56 0 0 1-16.2 0A2 2 0 0 1 2.5 17z"/>
          <polygon points="10 15 15 12 10 9 10 15" fill="currentColor"/>
        </svg>
      );
    case 'user':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
          <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
          <circle cx="12" cy="7" r="4"/>
        </svg>
      );
    case 'target':
    case 'purpose':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
          <circle cx="12" cy="12" r="10"/>
          <circle cx="12" cy="12" r="6"/>
          <circle cx="12" cy="12" r="2"/>
        </svg>
      );
    case 'impact':
    case 'chart':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
          <line x1="18" y1="20" x2="18" y2="10"/>
          <line x1="12" y1="20" x2="12" y2="4"/>
          <line x1="6" y1="20" x2="6" y2="14"/>
        </svg>
      );
    case 'star':
    case 'sparkle':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" fill="currentColor"/>
        </svg>
      );
    case 'grid-dots':
      return (
        <svg viewBox="0 0 24 24" fill={color} {...props}>
          <circle cx="8" cy="6" r="1.5" />
          <circle cx="16" cy="6" r="1.5" />
          <circle cx="8" cy="12" r="1.5" />
          <circle cx="16" cy="12" r="1.5" />
          <circle cx="8" cy="18" r="1.5" />
          <circle cx="16" cy="18" r="1.5" />
        </svg>
      );
    case 'gallery':
    case 'image':
    case 'photos':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
          <circle cx="8.5" cy="8.5" r="1.5"/>
          <polyline points="21 15 16 10 5 21"/>
        </svg>
      );
    case 'arrow-right':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
          <line x1="5" y1="12" x2="19" y2="12"/>
          <polyline points="12 5 19 12 12 19"/>
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
          <circle cx="12" cy="12" r="10"/>
        </svg>
      );
  }
};

export default Icon;
