import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
const Contact = () => {
    const form = useRef();

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_70nw18x', 'template_g42b28l', form.current, 'NbMy8bMofFrc03H6T')
            .then((result) => {
                console.log(result.text);
                alert('Successfully mailed')
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    }

    return (
        <div>
            {/* ======= Contact Section ======= */}
            <section id="contact" className="contact">
                <div className="container">
                    <div className="section-title" data-aos="zoom-out">
                        <h2>Contact</h2>
                        <p className='text-white'>Contact Us</p>
                    </div>
                    <div className="row mt-5 ">
                        <div className="col-lg-4" data-aos="fade-right">
                            <div className="info">
                                <div className="address">
                                    <i className="bi bi-geo-alt" />
                                    <h4 className='text-white'>Location:</h4>
                                    <p className='text-white'>Office#28-29, Heaven Mall Zarrar Shaheed Road, Al-Faisal Town, Lahore Punjab Pakistan</p>
                                </div>
                                <div className="email">
                                    <i className="bi bi-envelope" />
                                    <h4 className='text-white'>Email:</h4>
                                    <p className='text-white'>contact@ussoftprovider.com</p>
                                </div>
                                <div className="phone">
                                    <i className="bi bi-phone" />
                                    <h4 className='text-white'>Call:</h4>
                                    <p className='text-white'> +92 343 453 3851</p>

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8 mt-5 mt-lg-0" data-aos="fade-left">
                            <form ref={form} onSubmit={sendEmail} method="post" role="form" className="php-email-form">
                                <div className="row">
                                    <div className="col-md-6 form-group">
                                        <input type="text " name="name" style={{ backgroundColor: '#2a2c39', borderColor: '#ef6603', borderRadius: "5px" }} className="form-control text-white" id="name" placeholder="Your Name" required />
                                    </div>
                                    <div className="col-md-6 form-group mt-3 mt-md-0">
                                        <input type="email" className="form-control text-white" style={{ backgroundColor: '#2a2c39', borderColor: '#ef6603', borderRadius: "5px" }} name="email" id="email" placeholder="Your Email" required />
                                    </div>
                                </div>
                                <div className="form-group mt-3">
                                    <input type="text" className="form-control text-white" style={{ backgroundColor: '#2a2c39', borderColor: '#ef6603', borderRadius: "5px" }} name="subject" id="subject" placeholder="Subject" required />
                                </div>
                                <div className="form-group mt-3">
                                    <textarea className="form-control text-white" style={{ backgroundColor: '#2a2c39', borderColor: '#ef6603', borderRadius: "5px" }} name="message" rows={5} placeholder="Message" required defaultValue={""} />
                                </div>
                                <div className="my-3">
                                    <div className="loading">Loading</div>
                                    <div className="error-message" />
                                    <div className="sent-message">Your message has been sent. Thank you!</div>
                                </div>
                                <div className="text-center"><button type="submit">Send Message</button></div>
                            </form>
                        </div>
                    </div>
                    <div className='row mt-4'>
                        <div className='col-lg-12'>
                            <iframe src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Heaven mall&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" frameBorder={0} style={{ border: 0, width: '100%', height: 290 }} allowFullScreen />

                        </div>
                    </div>

                </div>
            </section>{/* End Contact Section */}
        </div>
    )
}

export default Contact