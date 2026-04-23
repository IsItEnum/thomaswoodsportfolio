import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <section id="about" className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <span className="heading-meta">About Me</span>
                    <h2 className="colorlib-heading">Who Am I?</h2>
                    <p>
                        I am a Computer Programming graduate from Fanshawe College. I love exploring new technologies, always looking for a challenge and trying to learn something new. When it comes to programming, I love building things that people will actually use, whether that is automating slow tasks on my PC, sorting a file system, or searching files for a keyword much like Linux's grep.
                        Outside of coding I have a love for history, dating all the way back to the Roman Empire and Alexander's conquests. I enjoy a good challenge and love solving complex problems, whether that means writing code or playing a glorified map-painting game like Europa Universalis 4 or Crusader Kings. Both demand creative problem solving, which is something programming has sharpened in me a great deal.
                    </p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        <section className="colorlib-about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">What I Do</span>
                <h2 className="colorlib-heading">Areas of Expertise</h2>
            </div>
            </div>
            <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                <span className="icon">
                    <i className="icon-bulb" />
                </span>
                <div className="desc">
                    <h3>Software Design Patterns</h3>
                    <p>I have hands-on experience applying patterns such as Model View Controller, Command, and Factory. A strong example is my Gomoku project, which was built entirely around MVC and the Command pattern.</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    <h3>Data Structures and Algorithms</h3>
                    <p>Through Fanshawe's Computer Programming Analyst program, I built a solid understanding of fundamental data structures and algorithms, and have applied them to write fast, efficient database-driven applications.</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3>Web Development</h3>
                    <p>I built this site in React and deploy it via GitHub Pages. During school I designed full-stack web applications using Angular and Java Spring, and have shipped eCommerce sites where users can place and manage orders.</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-2">
                <span className="icon">
                    <i className="icon-npm" />
                </span>
                <div className="desc">
                    <h3>Object Oriented Programming</h3>
                    <p>I have built large-scale projects in C++, Java, and C#, focusing on clean architecture, efficiency, and reusability.</p>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
      </div>
    )
  }
}
