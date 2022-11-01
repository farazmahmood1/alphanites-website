import React from 'react'

const Hero = () => {
  return (
    <div>
         {/* ======= Hero Section ======= */}
  <section id="hero" className="d-flex flex-column justify-content-end align-items-center">
    <div id="heroCarousel" data-bs-interval={5000} className="container carousel carousel-fade" data-bs-ride="carousel">
      {/* Slide 1 */}
      <div className="carousel-item active">
        <div className="carousel-container">
          <h2 className="animate__animated animate__fadeInDown">Welcome to <span>Alphanites</span></h2>
          <p className="animate__animated fanimate__adeInUp">Transform your ideas to great products and services. We design & build digital experiences that deliver results. As a company, we are committed to providing our clients with the most cost-effective, user-friendly, and creative technological solutions possible. </p>
          <a href="#about" className="btn-get-started animate__animated animate__fadeInUp scrollto">Read More</a>
        </div>
      </div>
      {/* Slide 2 */}
      <div className="carousel-item">
        <div className="carousel-container">
          <h2 className="animate__animated animate__fadeInDown">Custom Dveleopment</h2>
          <p className="animate__animated animate__fadeInUp">We deliver high-fidelity software solutions for web, mobile, and desktops mapped onto your unique business processes. We build, modernize, optimize and scale your business apps using the latest SDLC tools and cross-platform technologies.</p>
          <a href="#about" className="btn-get-started animate__animated animate__fadeInUp scrollto">Read More</a>
        </div>
      </div>
      {/* Slide 3 */}
      <div className="carousel-item">
        <div className="carousel-container">
          <h2 className="animate__animated animate__fadeInDown">Enterprise Solutions</h2>
          <p className="animate__animated animate__fadeInUp">We help businesses leverage decentralized networks and software solutions built on blockchain technology and introduce a whole new level of efficiency, transparency, immutability, and automation into their processes.</p>
          <a href="#about" className="btn-get-started animate__animated animate__fadeInUp scrollto">Read More</a>
        </div>
      </div>
      <a className="carousel-control-prev" href="#heroCarousel" role="button" data-bs-slide="prev">
        <span className="carousel-control-prev-icon bx bx-chevron-left" aria-hidden="true" />
      </a>
      <a className="carousel-control-next" href="#heroCarousel" role="button" data-bs-slide="next">
        <span className="carousel-control-next-icon bx bx-chevron-right" aria-hidden="true" />
      </a>
    </div>
    <svg className="hero-waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28 " preserveAspectRatio="none">
      <defs>
        <path id="wave-path" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z">
        </path></defs>
      <g className="wave1">
        <use xlinkHref="#wave-path" x={50} y={3} fill="rgba(255,255,255, .1)">
        </use></g>
      <g className="wave2">
        <use xlinkHref="#wave-path" x={50} y={0} fill="rgba(255,255,255, .2)">
        </use></g>
      <g className="wave3">
        <use xlinkHref="#wave-path" x={50} y={9} fill="#fff">
        </use></g>
    </svg>
  </section>{/* End Hero */}
    </div>
  )
}

export default Hero