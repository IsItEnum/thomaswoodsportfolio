// Sidebar.jsx (v6)
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CASES } from '../constant/constants';

function scrollTo(id) {
  var el = document.getElementById(id);
  if (el) { el.scrollIntoView({ behavior: 'smooth' }); }
}

function titleFromPath(pathname) {
  const parts = pathname.split('/').filter(Boolean);
  if (parts[0] === 'case-studies' && parts[1]) {
    const slug = parts[1].replace(/-/g, ' ');
    return slug.replace(/\b\w/g, c => c.toUpperCase());
  }
  return null;
}

export default function Sidebar() {
  const location = useLocation();
  const isCaseStudy = location.pathname.includes('/case-studies');
  const currentTitle = titleFromPath(location.pathname);

  return (
    <div>
      <div>
        <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
        <aside id="colorlib-aside" className="border js-fullheight">
          <div className="text-center" style={{ paddingBottom: 20 }}>
            <div className="author-img" style={{ backgroundImage: 'url(../../images/about.jpg)' }} />
            <h1 id="colorlib-logo"><a href="index.html">Thomas Woods</a></h1>
            <span className="email"><i className="icon-mail"></i> thomaswoods12345@gmail.com</span>
            <span className="email"><i className="icon-globe2" style={{fontSize: 15}}></i> London ON, Canada</span>
          </div>

          <nav id="colorlib-main-menu" role="navigation" className="navbar">
            {!isCaseStudy ?
              (
                <div>
                  <div id="navbar" className="collapse">
                    <ul>
                      <li className="active"><a href="#colorlib-hero" onClick={function(e){ e.preventDefault(); scrollTo('colorlib-hero'); }}>Introduction</a></li>
                      <li><a href="#about" onClick={function(e){ e.preventDefault(); scrollTo('about'); }}>About</a></li>
                      <li><a href="#timeline" onClick={function(e){ e.preventDefault(); scrollTo('timeline'); }}>Timeline</a></li>
                      <li><a href="#projects" onClick={function(e){ e.preventDefault(); scrollTo('projects'); }}>Projects</a></li>
                    </ul>
                  </div>
                  <ul>
                    <li><Link to="/case-studies">Case Studies</Link></li>
                  </ul>
                </div>
              )
              : (
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                </ul>
              )}

            {isCaseStudy ?
              (
                <ul>
                  <li className={!currentTitle ? 'active' : ''}>
                    <Link to="/case-studies">Case Studies</Link>
                  </li>
                  {CASES.map(cs => {
                    return (<li className={(currentTitle || '').toLowerCase() === cs.slug.toLowerCase() ? 'active' : ''} key={cs.slug}>
                      <Link to={`/case-studies/${cs.slug}`}>{cs.title}</Link>
                      <div style={{ fontSize: 13, color: '#666' }}>
                      </div>
                    </li>
                    )
                  })}
                </ul>
              ) : null}
          </nav>

          <nav id="colorlib-main-menu">
            <ul>
              <li><a href="https://www.linkedin.com/in/thomas-woods-b97004127/" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2" /></a></li>
              <li><a href="https://github.com/IsItEnum" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i></a></li>
            </ul>
          </nav>

          <div className="colorlib-footer">
            <p><small>Thanks <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer">Colorlib</a> for the template</small></p>
            <p><small>Icons by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> on <a href="https://www.flaticon.com/" title="Flaticon">Flaticon</a></small></p>
          </div>
        </aside>
      </div>
    </div>
  );
}
