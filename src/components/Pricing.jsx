import React from 'react'

const Pricing = () => {
    return (
        <div>
            {/* ======= Pricing Section ======= */}
            <section id="pricing" className="pricing">
                <div className="container">
                    <div className="text-warning mx-auto" style={{ color: '#ef6603', width: "70em", marginBottom: "10em" }}>
                        <hr />
                    </div>
                    <div className="section-title" data-aos="zoom-out">
                        <h2>Pricing</h2>
                        <p className='text-white'>Our Competing Prices</p>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="box" data-aos="zoom-in">
                                <h2 className='text-white mt-2'>Basic Plan</h2>
                                <h4 className='mt-3'><sup>$</sup>240</h4>
                                <h3>IPHONE OR ANDROID BASIC APP</h3>
                                <ul>
                                    <li>2 Operating systems</li>
                                    <li>App Submission</li>
                                    <li className="na">App Icon</li>
                                    <li className="na">Splash Screen</li>
                                    <li className="na">Ad Network Integration</li>
                                    <li className='na'>Include Source Code</li>
                                </ul>
                                <div className="btn-wrap">
                                    <a href="#" className="btn-buy">Buy Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mt-4 mt-md-0">
                            <div className="box featured" data-aos="zoom-in" data-aos-delay={100}>
                                <h2 className='text-white mt-2'>Business Plan</h2>
                                <h4 className='mt-3'><sup>$</sup>660</h4>
                                <h3>IPHONE AND ANDROID STANDARD APP</h3>
                                <ul>
                                    <li>2 Operating systems</li>
                                    <li>App Submission</li>
                                    <li>App Icon</li>
                                    <li>Include Source Code</li>
                                    <li className="na">Splash Screen</li>
                                    <li className="na">Ad Network Integration</li>

                                </ul>
                                <div className="btn-wrap">
                                    <a href="#" className="btn-buy">Buy Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mt-4 mt-lg-0">
                            <div className="box" data-aos="zoom-in" data-aos-delay={200}>
                                <h2 className='text-white mt-2'>Premium Plan</h2>
                                <h4 className='mt-3'><sup>$</sup>995</h4>
                                <h3>IPHONE AND ANDROID PREMIUM APP</h3>
                                <ul>
                                    <li>2 Operating systems</li>
                                    <li>App Submission</li>
                                    <li>App Icon</li>
                                    <li>Splash Screen</li>
                                    <li>Massa ultricies mi</li>
                                    <li>Include Source Code</li>

                                </ul>
                                <div className="btn-wrap">
                                    <a href="#" className="btn-buy">Buy Now</a>
                                </div>
                            </div>
                        </div>
                       
                    </div>
                </div>
            </section>{/* End Pricing Section */}
        </div>
    )
}

export default Pricing