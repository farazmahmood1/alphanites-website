import React from 'react'
import sarib from '../portfolio/Sarib.png'
import usama from '../portfolio/usama.png'
import waleed from '../portfolio/waleed.png'
import iqra from '../portfolio/Group.png'
import Ayesha from '../portfolio/ayeshaBukhari.png'
import Affan from '../portfolio/affan.png'
import Faraz from '../portfolio/Faraz.png'
import Daniyal from '../portfolio/Daniyal.png'
const Team = () => {
    return (
        <div>
            {/* ======= Team Section ======= */}
            <section id="team" className="team">
                <div className="container">
                    <div className="text-warning mx-auto" style={{ color: '#ef6603', width: "70em", marginBottom: "10em" }}>
                        <hr />
                    </div>
                    <div className="section-title" data-aos="zoom-out">
                        <h2>Team</h2>
                        <p className='text-white'>Our Hardworking Team</p>
                    </div>
                    <div className="row">
                    <div className="col-lg-3 col-md-6 ">
                            <div className="member " data-aos="fade-up" data-aos-delay={100} style={{marginBottom:""}}>
                                <div className="member-img member-img-usama">
                                    <img src={usama} className="img-fluid" alt=''/>
                                    <div className="social">
                                        <a href><i className="bi bi-twitter" /></a>
                                        <a href='https://www.facebook.com/usama425' target='_blank'><i className="bi bi-facebook" /></a>
                                        <a href='https://www.instagram.com/_usama.abdullah/' target='_blank'><i className="bi bi-instagram" /></a>
                                        <a href='https://www.linkedin.com/in/usama-abdullah-412164188/' target='_blank'><i className="bi bi-linkedin" /></a>
                                    </div>
                                </div>
                                <div className="member-info">
                                    <h4>Usama Abdullah</h4>
                                    <span>Director</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 ">
                            <div className="member" data-aos="fade-up">
                                <div className="member-img">
                                    <img src={sarib} className="img-fluid" alt />
                                    <div className="social">
                                        <a href='' ><i className="bi bi-twitter" /></a>
                                        <a href='https://www.facebook.com/people/Sarib-Arshad/100013306247594/' target='_blank'><i className="bi bi-facebook" /></a>
                                        <a href='https://www.instagram.com/saribkhannn/' target='_blank'><i className="bi bi-instagram" /></a>
                                        <a href='https://www.linkedin.com/in/sarib-khan-195215119/' target='_blank'><i className="bi bi-linkedin" /></a>
                                    </div>
                                </div>
                                <div className="member-info">
                                    <h4>Sarib Arshad Khan</h4>
                                    <span>Chief Executive Officer</span>
                                </div>
                            </div>
                        </div>
                       
                        <div className="col-lg-3 col-md-6 d-flex align-items-stretch" >
                            <div className="member" data-aos="fade-up" data-aos-delay={200}>
                                <div className="member-img">
                                    <img src={iqra} className="img-fluid" alt />
                                    <div className="social">
                                        <a href><i className="bi bi-twitter" /></a>
                                        <a href='https://www.facebook.com/iqra.rshd' target='_blank'><i className="bi bi-facebook" /></a>
                                        <a href='https://www.instagram.com/iqrarasheeed/' target='_blank'><i className="bi bi-instagram" /></a>
                                        <a href='#'><i className="bi bi-linkedin" target='_blank' /></a>
                                    </div>
                                </div>
                                <div className="member-info">
                                    <h4>Iqra Rasheed</h4>
                                    <span>Regional Operations Manager</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                            <div className="member" data-aos="fade-up" data-aos-delay={300}>
                                <div className="member-img">
                                    <img src={waleed} className="img-fluid" alt />
                                    <div className="social">
                                        <a href=''><i className="bi bi-twitter" /></a>
                                        <a href='https://www.facebook.com/waleed.khan.98871' target='_blank'><i className="bi bi-facebook" /></a>
                                        <a href='https://www.instagram.com/waleed.khan.96/' target='_blank'><i className="bi bi-instagram" /></a>
                                        <a href='https://www.linkedin.com/in/waleed-khan-2157aa16a/' target='_blank'><i className="bi bi-linkedin" /></a>
                                    </div>
                                </div>
                                <div className="member-info">
                                    <h4>Waleed Ilyas Khan</h4>
                                    <span>Network Engineer/Full Stack Developer</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                            <div className="member" data-aos="fade-up" data-aos-delay={300}>
                                <div className="member-img">
                                    <img src={Ayesha} className="img-fluid" alt />
                                    <div className="social">
                                        <a href='#'><i className="bi bi-twitter" /></a>
                                        <a href='#' target='_blank'><i className="bi bi-facebook" /></a>
                                        <a href='#' target='_blank'><i className="bi bi-instagram" /></a>
                                        <a href='https://www.linkedin.com/in/waleed-khan-2157aa16a/' target='_blank'><i className="bi bi-linkedin" /></a>
                                    </div>
                                </div>
                                <div className="member-info">
                                    <h4>Ayesha Bukhari</h4>
                                    <span>Human Resource</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                            <div className="member" data-aos="fade-up" data-aos-delay={300}>
                                <div className="member-img">
                                    <img src={Affan} className="img-fluid" alt />
                                    <div className="social">
                                        <a href=''><i className="bi bi-twitter" /></a>
                                        <a href='https://www.facebook.com/affan.ahmed.984349' target='_blank'><i className="bi bi-facebook" /></a>
                                        <a href='https://www.instagram.com/affan_a7/' target='_blank'><i className="bi bi-instagram" /></a>
                                        <a href='' target='_blank'><i className="bi bi-linkedin" /></a>
                                    </div>
                                </div>
                                <div className="member-info">
                                    <h4>Affan Sheikh</h4>
                                    <span>Full Stack Developer</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                            <div className="member" data-aos="fade-up" data-aos-delay={300}>
                                <div className="member-img">
                                    <img src={Faraz} className="img-fluid" alt />
                                    <div className="social">
                                        <a href='https://twitter.com/farazmahmood19'><i className="bi bi-twitter" /></a>
                                        <a href='https://www.facebook.com/faraz.mahmood.19' target='_blank'><i className="bi bi-facebook" /></a>
                                        <a href='https://www.instagram.com/faraz.mahmood.1/' target='_blank'><i className="bi bi-instagram" /></a>
                                        <a href='https://www.linkedin.com/in/faraz-mahmood-0701b0208/' target='_blank'><i className="bi bi-linkedin" /></a>
                                    </div>
                                </div>
                                <div className="member-info">
                                    <h4>Faraz Mahmood</h4>
                                    <span>Full Stack Developer</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                            <div className="member" data-aos="fade-up" data-aos-delay={300}>
                                <div className="member-img">
                                    <img src={Daniyal} className="img-fluid" alt />
                                    <div className="social">
                                        <a href='#'><i className="bi bi-twitter" /></a>
                                        <a href='#' target='_blank'><i className="bi bi-facebook" /></a>
                                        <a href='#' target='_blank'><i className="bi bi-instagram" /></a>
                                        <a href='#' target='_blank'><i className="bi bi-linkedin" /></a>
                                    </div>
                                </div>
                                <div className="member-info">
                                    <h4>Daniyal Saleem</h4>
                                    <span>React Native Developer</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>{/* End Team Section */}
        </div>
    )
}

export default Team