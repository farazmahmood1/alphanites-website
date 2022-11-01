import React from 'react'

const About = () => {
  return (
    <div>
        {/* ======= About Section ======= */}
        <section id="about" className="about">
                    <div className="container">
                        <div className="section-title" data-aos="zoom-out">
                            <h2>About</h2>
                            <p>Who we are</p>
                        </div>
                        <div className="row content" data-aos="fade-up">
                            <div className="col-lg-6">
                                <p>
                                More than ever before, consumers demand insight and choice as the rise of smartphone technology enables it. 
                                </p>
                                <ul>
                                    <li><i className="ri-check-double-line" /> Our experience and industry leadership meets and exceeds our customers’ expectations, this allows our team to consistently deliver high-value benefits for our customers.</li>
                                    <li><i className="ri-check-double-line" /> Innovative solutions permeate all we do as we go about applying technological advances to improve the lives of our customers. </li>
                                    <li><i className="ri-check-double-line" />We’ll work closely with you to evaluate your needs, identify the best solutions to meet those needs, and realize your full potential.</li>
                                </ul>
                            </div>
                            <div className="col-lg-6 pt-4 pt-lg-0">
                                <p>
                                    <b> "Alpanites "</b> is a dedicated resource of business professionals, who have pooled their acknowledged experience & expertise in business consulting & enterprise solutions, for utmost satisfaction of our clients.
                                </p>
                                <a href="/" className="btn-learn-more">Learn More</a>
                            </div>
                        </div>
                    </div>
                </section>{/* End About Section */}
    </div>
  )
}

export default About