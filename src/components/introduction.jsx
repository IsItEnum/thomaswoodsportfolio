import React, { useEffect } from 'react'

export default function Introduction() {
  useEffect(() => {
    const $ = window.jQuery;
    if (!$) return;

    // Re-initialize full height
    $('.js-fullheight').css('height', $(window).height());

    // Destroy and re-initialize flexslider to avoid stale state on re-mount
    const $slider = $('.flexslider');
    if ($slider.length && $.fn.flexslider) {
      try { $slider.flexslider('destroy'); } catch(e) {}
      $slider.flexslider({
        animation: 'fade',
        slideshowSpeed: 5000,
      });
    }

    // Re-run waypoint animations
    if ($.fn.waypoint) {
      $('.animate-box').waypoint(function(direction) {
        if (direction === 'down' && !$(this.element).hasClass('animated')) {
          $(this.element).addClass('fadeInLeft animated');
        }
      }, { offset: '90%' });
    }
  }, []);

  return (
    <div>
      <section id="colorlib-hero" className="js-fullheight" data-section="home">
        <div className="flexslider js-fullheight">
          <ul className="slides">
            <li style={{backgroundImage: 'url(images/img_bg.jpg)'}}>
              <div className="overlay" />
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                    <div className="slider-text-inner js-fullheight">
                      <div className="desc">
                        <h1 style={{color: 'white'}}>Hello <br />I'm Thomas Woods</h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li style={{backgroundImage: 'url(images/img_bg.jpg)'}}>
              <div className="overlay" />
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                    <div className="slider-text-inner">
                      <div className="desc">
                        <h1 style={{color: 'white'}}>Some projects i've made</h1>
                        <p><a style={{color: 'white'}} className="btn btn-primary btn-learn" href="https://github.com/IsItEnum" target="_blank" rel="noopener noreferrer">View Projects <i className="icon-briefcase3" /></a></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}
