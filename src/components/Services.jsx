import React from 'react'

const Services = () => {
    return (
        <div>
            {/* ======= Services Section ======= */}
            <section id="services" className="services">
                <div className="container">
                    <div className="section-title" data-aos="zoom-out">
                        <h2>Services</h2>
                        <p className='text-white'>What we do offer</p>
                    </div>
                    <div className="row text-white text-center m-2">
                        <div className="col-lg-3 col-md-6 mb-3">
                            {/* <i class="fa-solid fa-globe"></i> */}
                            <div className="icon-box" data-aos="zoom-in-left">
                                <div className=""><i className="fa-solid fa-display fa-3x " style={{ color: '#ff689b' }} /></div>
                                <h4 className="mt-4"><a href className='text-white'>Web Design</a></h4>
                                <p className="mt-4 description text-white">Build the product you need on time with an experienced team that uses a clear and effective design process. Role of a website is regularly increasing in our routine life and nothing is possible without the help of a website. </p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-3">
                            <div className="icon-box" data-aos="zoom-in-left" data-aos-delay={100}>
                                <div className=""><i className="fa-solid fa-code fa-3x image-fluid" style={{ color: '#e9bf06' }} /></div>
                                <h4 className="mt-4"><a href className='text-white '>Web Application</a></h4>
                                <p className="mt-4 description text-white">US-Softs offers wide-ranging web services. We integrate advanced web technologies for seamless and interactive web Applications. We carry more than just coding skills. Our experience make us stand out from other web developmnent</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-3">
                            <div className="icon-box" data-aos="zoom-in-left" data-aos-delay={200}>
                                <div className=""><i className="fa-solid fa-mobile fa-3x image-fluid" style={{ color: '#3fcdc7' }} /></div>
                                <h4 className="mt-4"><a href className='text-white '>Mobile Application</a></h4>
                                <p className="description mt-4">Alphanites cover end-to-end development of mobile apps, from business analysis and UI/UX design to mobile application testing and deployment. Built your very own applications with robust backends.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-3">
                            <div className="icon-box" data-aos="zoom-in-left" data-aos-delay={300}>
                                <div className=""><i className="fa-solid fa-globe fa-3x image-fluid" style={{ color: '#41cf2e' }} /></div>
                                <h4 className="mt-4"><a href className='text-white'>Digital Marketing</a></h4>
                                <p className="description mt-4">Alphanites provides promotion of brands to connect with potential customers using the internet and other forms of digital communication including email, social media, web-based advertising and marketing channel..</p>
                            </div>
                        </div>
                        {/* <div className="col-lg-4 col-md-6 mt-5">
                            <div className="icon-box" data-aos="zoom-in-left" data-aos-delay={400}>
                                <div className="icon"><i className="bi bi-globe ms-4 image-fluid" style={{ color: '#d6ff22' }} /></div>
                                <h4 className="title"><a href className='text-white ms-4'>Nemo Enim</a></h4>
                                <p className="description ps-4">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mt-5">
                            <div className="icon-box" data-aos="zoom-in-left" data-aos-delay={500}>
                                <div className="icon"><i className="bi bi-clock ms-4 image-fluid" style={{ color: '#4680ff' }} /></div>
                                <h4 className="title"><a href className='text-white ms-4'>Eiusmod Tempor</a></h4>
                                <p className="description ps-4">Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi</p>
                            </div>
                        </div> */}
                    </div>
                </div>
            </section>{/* End Services Section */}
        </div>
    )
}

export default Services