import React from 'react'

const Faq = () => {
    return (
        <div>
            {/* ======= F.A.Q Section ======= */}
            <section id="faq" className="faq">
                <div className="container">
                    <div className="text-warning mx-auto" style={{ color: '#ef6603', width: "70em", marginBottom: "10em" }}>
                        <hr />
                    </div>
                    <div className="section-title" data-aos="zoom-out">
                        <h2 className='text-white'>F.A.Q</h2>
                        <p className='text-white'> Frequently Asked Questions</p>
                    </div>
                    <ul className="faq-list mt-4">
                        <li>
                            <div data-bs-toggle="collapse" className="collapsed question" href="#faq1">When did Alphanites came into exsistence? <i className="bi bi-chevron-down icon-show" /><i className="bi bi-chevron-up icon-close" /></div>
                            <div id="faq1" className="collapse" data-bs-parent=".faq-list">
                                <p className='text-white'>
                                    It came into exsistance in the last month of 2020 and with in Seven months"Alphanites" has delt with more than 40 projects successfully including 99% client satisfaction.
                                </p>
                            </div>
                        </li>
                        <li>
                            <div data-bs-toggle="collapse" href="#faq2" className="collapsed question"> Why client prefer us?<i className="bi bi-chevron-down icon-show" /><i className="bi bi-chevron-up icon-close" /></div>
                            <div id="faq2" className="collapse" data-bs-parent=".faq-list">
                                <p className='text-white'>
                                    Client trust is a reciprocal behavior to what they receive.

                                    Trust comes when you understand your client's needs, respect them, and offer relevant service.

                                    US-Softs provides all these services mentioned above with all the diginity.
                                </p>
                            </div>
                        </li>
                        <li>
                            <div data-bs-toggle="collapse" href="#faq3" className="collapsed question"> Which Services does Alphanites offer?<i className="bi bi-chevron-down icon-show" /><i className="bi bi-chevron-up icon-close" /></div>
                            <div id="faq3" className="collapse" data-bs-parent=".faq-list">
                                <p className='text-white'>
                                    Alphanite develop innovative and creative products and services that provide total communication and information solutions. Among a plethora of services, web design and development, tailor made applications, ERPs, CRMs, e-commerce solutions, business-to-business applications, business-to-client applications, managed hosting and internet portal management are few that we offer. Satisfied clients around the globe bear testimony to the quality of our work.
                                </p>
                            </div>
                        </li>
                        <li>
                            <div data-bs-toggle="collapse" href="#faq5" className="collapsed question">What are professionalties? <i className="bi bi-chevron-down icon-show" /><i className="bi bi-chevron-up icon-close" /></div>
                            <div id="faq5" className="collapse" data-bs-parent=".faq-list">
                                <p className='text-white'>
                                    Custom development of app , web and desktop software solutions also Blockchain development, game development, cloud services, digital marketing using tha most advance technologies.
                                </p>
                            </div>
                        </li>
                        <li>
                            <div data-bs-toggle="collapse" href="#faq4" className="collapsed question">How to contact us? <i className="bi bi-chevron-down icon-show" /><i className="bi bi-chevron-up icon-close" /></div>
                            <div id="faq4" className="collapse" data-bs-parent=".faq-list">
                                <p className='text-white'>
                                    You can directly contact us through the form given at the end also you can reach us directly through the contact at the end
                                </p>
                            </div>
                        </li>

                        {/* <li>
                            <div data-bs-toggle="collapse" href="#faq6" className="collapsed question">Tortor vitae purus faucibus ornare. Varius vel pharetra vel turpis nunc eget lorem dolor? <i className="bi bi-chevron-down icon-show" /><i className="bi bi-chevron-up icon-close" /></div>
                            <div id="faq6" className="collapse" data-bs-parent=".faq-list">
                                <p className='text-white'>
                                    Laoreet sit amet cursus sit amet dictum sit amet justo. Mauris vitae ultricies leo integer malesuada nunc vel. Tincidunt eget nullam non nisi est sit amet. Turpis nunc eget lorem dolor sed. Ut venenatis tellus in metus vulputate eu scelerisque. Pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus. Nibh tellus molestie nunc non blandit massa enim nec.
                                </p>
                            </div>
                        </li> */}
                    </ul>
                </div>
            </section>{/* End F.A.Q Section */}
        </div>
    )
}

export default Faq