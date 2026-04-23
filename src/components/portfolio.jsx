import React, { Component } from 'react'

export default class Portfolio extends Component {
  render() {
    return (
      		<div>
				<section className="colorlib-work" data-section="projects">
					<div className="colorlib-narrow-content">
						<div className="row">
							<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
								<span className="heading-meta">My Work</span>
								<h2 className="colorlib-heading animate-box">Projects</h2>
							</div>
						</div>
						<div className="row">
						<div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
								<div className="project" style={{backgroundImage: 'url(images/img-5.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Mystery Mirror</a></h3>
											<span>Built as a final project for Software Projects Applied, this received high praise and was shown off at the fall open house.</span>
											<p className="icon">
												<span><a href="https://www.youtube.com/watch?v=4ny0rNwsXyg&feature=youtu.be"><i className="icon-video" />  View Video</a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
								<div className="project" style={{backgroundImage: 'url(images/img-1.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">C++ Gomoku with MVC</a></h3>
											<span>A Gomoku game built in C++ using Model View Controller and the Command pattern. Communicates with the Windows API through a facade layer.</span>
											<p className="icon">
												<span><a href="https://www.youtube.com/watch?v=v8xpK2BQHxE&feature=youtu.be"><i className="icon-video" />  View Video</a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInTop">
								<div className="project" style={{backgroundImage: 'url(images/img-3.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">C++ Paint MVC</a></h3>
											<span>A simple paint application built on the same MVC framework as the Gomoku project, also written in C++ and using the Windows API.</span>
											<p className="icon">
												<span><a href="https://youtu.be/Su29hTfTi9M"><i className="icon-video" /> View Video</a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInBottom">
								<div className="project" style={{backgroundImage: 'url(images/img-4.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">This Website</a></h3>
											<span>Built with React and deployed to GitHub Pages. The layout is based on a Colorlib template, with icons sourced from Flaticon.</span>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInBottom">
								<div className="project" style={{backgroundImage: 'url(images/img-6.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Chat App</a></h3>
											<span>A React chat app where multiple users can join a shared room. Built as a Progressive Web App and optimized for mobile.</span>
											<p className="icon">
												<span><a href="https://twoods-chatroom.herokuapp.com/"><i className="icon-world2" /> Website</a></span>
											</p>
										</div>
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
