import React from 'react'

export default function Introduction() {
  return (
    <section
      id="colorlib-hero"
      data-section="home"
      style={{
        minHeight: '100vh',
        background: '#1a1a2e',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '60px 40px',
      }}
    >
      <div style={{ textAlign: 'center', maxWidth: 700 }}>
        <p style={{
          color: '#7ec8e3',
          fontSize: '0.95rem',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          marginBottom: '1rem',
          fontFamily: 'Quicksand, sans-serif',
        }}>
          Welcome
        </p>
        <h1 style={{
          color: '#ffffff',
          fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
          fontWeight: 700,
          lineHeight: 1.15,
          margin: '0 0 1rem',
          fontFamily: 'Quicksand, sans-serif',
        }}>
          Thomas Woods
        </h1>
        <p style={{
          color: '#a0aec0',
          fontSize: 'clamp(1rem, 2.5vw, 1.35rem)',
          letterSpacing: '0.05em',
          textTransform: 'uppercase',
          margin: '0 0 2.5rem',
          fontFamily: 'Quicksand, sans-serif',
        }}>
          Software Developer
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a
            href="https://github.com/IsItEnum"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-learn"
            style={{ minWidth: 160 }}
          >
            View Projects <i className="icon-briefcase3" />
          </a>
          <a
            href="#about"
            className="btn btn-learn"
            style={{
              minWidth: 160,
              background: 'transparent',
              border: '2px solid #7ec8e3',
              color: '#7ec8e3',
            }}
          >
            About Me <i className="icon-arrow-down3" />
          </a>
        </div>
      </div>
    </section>
  )
}
