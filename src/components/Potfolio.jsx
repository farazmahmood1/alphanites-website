import React, { useState } from 'react'
import image1 from '../portfolio/portfolio-image-1.jpg';
import image2 from '../portfolio/portfolio-image-2.jpg';
import image3 from '../portfolio/portfolio-image-3.jpg';
import image4 from '../portfolio/portfolio-image-4.jpg';
import image5 from '../portfolio/portfolio-image-5.jpg';
import image6 from '../portfolio/portfolio-image-6.jpg';
import image7 from '../portfolio/portfolio-image-7.jpg';
import image8 from '../portfolio/portfolio-image-8.jpg';
import image9 from '../portfolio/portfolio-image-9.jpg';
import image10 from '../portfolio/alphaWeb24.png'
import image11 from '../portfolio/alphaWeb2.png'
import image12 from '../portfolio/alphaWeb3.png'
import image13 from '../portfolio/alphaWeb4.png'
import image14 from '../portfolio/alphaWeb5.png'
import image15 from '../portfolio/alphaWeb6.png'
import image16 from '../portfolio/alphaWeb7.png'
import image17 from '../portfolio/alphaWeb8.png'
import image18 from '../portfolio/alphaWeb9.png'
import image19 from '../portfolio/alphaWeb10.png'
import image20 from '../portfolio/alphaWeb11.png'
import image21 from '../portfolio/alphaWeb12.png'
import image22 from '../portfolio/alphaWeb13.png'
import image23 from '../portfolio/alphaWeb14.png'
import image24 from '../portfolio/alphaWeb15.png'
import image25 from '../portfolio/alphaWeb16.png'
import image26 from '../portfolio/alphaWeb17.png'
import image27 from '../portfolio/alphaWeb18.png'
import image28 from '../portfolio/alphaWeb19.png'
import image29 from '../portfolio/alphaWeb20.png'
import image30 from '../portfolio/alphaWeb21.png'
import image31 from '../portfolio/alphaWeb22.png'
import image32 from '../portfolio/alphaWeb23.png'
import image33 from '../portfolio/alphaWeb24.png'
import image34 from '../portfolio/alphaWeb25.png'
import image35 from '../portfolio/alphaWeb26.png'
import image36 from '../portfolio/alphaWeb27.png'
import image37 from '../portfolio/alphaWeb28.png'
import image38 from '../portfolio/alphaWeb29.png'
import image39 from '../portfolio/alphaWeb30.png'
import image40 from '../portfolio/alphaWeb31.png'
import image41 from '../portfolio/alphaWeb32.png'
import image42 from '../portfolio/alphaWeb33.png'
import image43 from '../portfolio/alphaWeb34.png'
import image44 from '../portfolio/alphaWeb35.png'
import image45 from '../portfolio/alphaWeb36.png'
import image46 from '../portfolio/alphaWeb37.png'
import image47 from '../portfolio/alphaWeb38.png'
import image48 from '../portfolio/alphaWeb39.png'
import image49 from '../portfolio/alphaWeb40.png'
import image50 from '../portfolio/alphaWeb41.png'
import image51 from '../portfolio/alphaWeb42.png'
import image52 from '../portfolio/alphaWeb43.png'
import image53 from '../portfolio/alphaWeb44.png'
import image54 from '../portfolio/alphaWeb45.png'
import image55 from '../portfolio/alphaWeb46.png'

const Potfolio = () => {
    const [index, setIndex] = useState(1)

    const returnData = () => {

        if (index === 1) {
            return (<>
                <div className="col-lg-4 col-sm-6">
                    <div className="project">
                        <img src={image1} alt='' width={350} height={250} />
                        <div className="overlay">
                            <div>
                                <h4 className="text-dark">Make a cake</h4>
                                <h6 className="text-dark"><span className='text-secondary'> category: </span> Application</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                    <div className="project">
                        <img src={image25} alt width={350} height={250} />
                        <div className="overlay">
                            <div>
                                <h4 className="text-dark">Essay on Demand</h4>
                                <h6 className="text-dark"><span className='text-secondary'> category: </span> Website</h6>                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                    <div className="project">
                        <img src={image26} alt width={350} height={250} />
                        <div className="overlay">
                            <div>
                                <h4 className="text-dark">Essay on Demand</h4>
                                <h6 className="text-dark"><span className='text-secondary'> category: </span> Application</h6>                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                    <div className="project">
                        <img src={image19} alt width={350} height={250} />
                        <div className="overlay">
                            <div>
                                <h4 className="text-dark">Essay on Demand</h4>
                                <h6 className="text-dark"><span className='text-secondary'> category: </span> Dashboard</h6>                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                    <div className="project">
                        <img src={image21} alt width={350} height={250} />
                        <div className="overlay">
                            <div>
                                <h4 className="text-dark">Essay on Demand</h4>
                                <h6 className="text-dark"><span className='text-secondary'> category: </span> Dashboard</h6>                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                    <div className="project">
                        <img src={image55} alt width={350} height={250} />
                        <div className="overlay">
                            <div>
                                <h4 className="text-white">Live Streamer</h4>
                                <h6 className="text-dark"><span className='text-secondary'> category: </span>website</h6>                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                    <div className="project">
                        <img src={image7} alt width={350} height={250} />
                        <div className="overlay">
                            <div>
                                <h4 className="text-white">Tousrism</h4>
                                <h6 className="text-dark"><span className='text-secondary'> category: </span> Application</h6>                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                    <div className="project">
                        <img src={image14} alt width={350} height={250} />
                        <div className="overlay">
                            <div>
                                <h4 className="text-dark">Gym Panel</h4>
                                <h6 className="text-dark"><span className='text-secondary'> category: </span> Dashboard</h6>                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                    <div className="project">
                        <img src={image53} alt width={350} height={250} />
                        <div className="overlay">
                            <div>
                                <h4 className="text-dark">Portfolio</h4>
                                <h6 className="text-dark"><span className='text-white'> category: </span> website</h6>                             </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                    <div className="project">
                        <img src={image2} alt width={350} height={250} />
                        <div className="overlay">
                            <div>
                                <h4 className="text-white">Real Estate App</h4>
                                <h6 className="text-dark"><span className='text-secondary'> category: </span> Application</h6>                             </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                    <div className="project">
                        <img src={image11} alt width={350} height={250} />
                        <div className="overlay">
                            <div>
                                <h4 className="text-white">Essay on Demand</h4>
                                <h6 className="text-dark"><span className='text-secondary'> category: </span> website</h6>                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                    <div className="project">
                        <img src={image51} alt width={350} height={250} />
                        <div className="overlay">
                            <div>
                                <h4 className="text-dark">Khan Burger Dashboard</h4>
                                <h6 className="text-white"><span className='text-white'> category: </span> Dashboard</h6>                             </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                    <div className="project">
                        <img src={image12} alt width={350} height={250} />
                        <div className="overlay">
                            <div>
                                <h4 className="text-dark">Essay on Demand</h4>
                                <h6 className="text-white"><span className='text-secondary'> category: </span> website</h6>                              </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                    <div className="project">
                        <img src={image3} alt width={350} height={250} />
                        <div className="overlay">
                            <div>
                                <h4 className="text-white">Let's Love Quran</h4>
                                <h6 className="text-white"><span className='text-secondary'> category: </span> Application</h6>                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                    <div className="project">
                        <img src={image10} alt width={350} height={250} />
                        <div className="overlay">
                            <div>
                                <h4 className="text-white">Gym Panel</h4>
                                <h6 className="text-white"><span className='text-secondary'> category: </span> Dashboard</h6>                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                    <div className="project">
                        <img src={image4} alt width={350} height={250} />
                        <div className="overlay">
                            <div>
                                <h4 className="text-dark">Customer Support App</h4>
                                <h6 className="text-dark"><span className='text-secondary'> category: </span> Application</h6>                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                    <div className="project">
                        <img src={image16} alt width={350} height={250} />
                        <div className="overlay">
                            <div>
                                <h4 className="text-dark">Chat Room</h4>
                                <h6 className="text-white"><span className='text-white'> category: </span> Website</h6>                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                    <div className="project">
                        <img src={image18} alt width={350} height={250} />
                        <div className="overlay">
                            <div>
                                <h4 className="text-dark">Essay On Demand</h4>
                                <h6 className="text-white"><span className='text-white'> category: </span> Website</h6>                              </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-sm-6">
                    <div className="project">
                        <img src={image49} alt width={350} height={250} />
                        <div className="overlay">
                            <div>
                                <h4 className="text-dark">Khan Burger Dashboard</h4>
                                <h6 className="text-white"><span className='text-white'> category: </span> Website</h6>                              </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                    <div className="project">
                        <img src={image8} alt width={350} height={250} />
                        <div className="overlay">
                            <div>
                                <h4 className="text-dark">Real Time Location</h4>
                                <h6 className="text-dark"><span className='text-secondary'> category: </span> Application</h6>                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                    <div className="project">
                        <img src={image22} alt width={350} height={250} />
                        <div className="overlay">
                            <div>
                                <h4 className="text-dark">Content Writing</h4>
                                <h6 className="text-dark"><span className='text-secondary'> category: </span> Website</h6>                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-sm-6">
                    <div className="project">
                        <img src={image5} alt width={350} height={250} />
                        <div className="overlay">
                            <div>
                                <h4 className="text-white">Mobile Safe</h4>
                                <h6 className="text-dark"><span className='text-secondary'> category: </span> Application</h6>                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                    <div className="project">
                        <img src={image24} alt width={350} height={250} />
                        <div className="overlay">
                            <div>
                                <h4 className="text-dark">Essay in Demand</h4>
                                <h6 className="text-white"><span className='text-white'> category: </span> Website</h6>                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                    <div className="project">
                        <img src={image6} alt width={350} height={250} />
                        <div className="overlay">
                            <div>
                                <h4 className="text-dark">Bakers App</h4>
                                <h6 className="text-dark"><span className='text-secondary'> category: </span> Application</h6>                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                    <div className="project">
                        <img src={image47} alt width={350} height={250} />
                        <div className="overlay">
                            <div>
                                <h4 className="text-dark">Gymanisum</h4>
                                <h6 className="text-dark"><span className='text-secondary'> category: </span> Website</h6>                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                    <div className="project">
                        <img src={image9} alt width={350} height={250} />
                        <div className="overlay">
                            <div>
                                <h4 className="text-dark">Cash Cab</h4>
                                <h6 className="text-dark"><span className='text-secondary'> category: </span> Application</h6>                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-sm-6">
                    <div className="project">
                        <img src={image45} alt width={350} height={250} />
                        <div className="overlay">
                            <div>
                                <h4 className="text-dark">Khan Burger</h4>
                                <h6 className="text-dark"><span className='text-secondary'> category: </span> Application</h6>                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-sm-6">
                    <div className="project">
                        <img src={image43} alt width={350} height={250} />
                        <div className="overlay">
                            <div>
                                <h4 className="text-dark">Gym Dashboard</h4>
                                <h6 className="text-white"><span className='text-secondary'> category: </span> Application</h6>                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-sm-6">
                    <div className="project">
                        <img src={image41} alt width={350} height={250} />
                        <div className="overlay">
                            <div>
                                <h4 className="text-white">Gym Web</h4>
                                <h6 className="text-white"><span className='text-secondary'> category: </span> Application</h6>                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-sm-6">
                    <div className="project">
                        <img src={image39} alt width={350} height={250} />
                        <div className="overlay">
                            <div>
                                <h4 className="text-white">Gym Web</h4>
                                <h6 className="text-white"><span className='text-secondary'> category: </span> Application</h6>                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-sm-6">
                    <div className="project">
                        <img src={image37} alt width={350} height={250} />
                        <div className="overlay">
                            <div>
                                <h4 className="text-dark">Gym Dashboard</h4>
                                <h6 className="text-dark"><span className='text-secondary'> category: </span> Application</h6>                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-sm-6">
                    <div className="project">
                        <img src={image35} alt width={350} height={250} />
                        <div className="overlay">
                            <div>
                                <h4 className="text-dark">Gym Dashboard</h4>
                                <h6 className="text-white"><span className='text-secondary'> category: </span> Application</h6>                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-sm-6">
                    <div className="project">
                        <img src={image31} alt width={350} height={250} />
                        <div className="overlay">
                            <div>
                                <h4 className="text-dark">Content Writing</h4>
                                <h6 className="text-white"><span className='text-secondary'> category: </span> Application</h6>                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-sm-6">
                    <div className="project">
                        <img src={image29} alt width={350} height={250} />
                        <div className="overlay">
                            <div>
                                <h4 className="text-dark">Essay Dashboard</h4>
                                <h6 className="text-white"><span className='text-secondary'> category: </span> Application</h6>                            </div>
                        </div>
                    </div>
                </div>


            </>)
        }
        else if (index === 2) {
            return (
                <>
                    <div className="col-lg-4 col-sm-6">
                        <div className="project">
                            <img src={image1} alt width={350} height={250} />
                            <div className="overlay">
                                <div>
                                    <h4 className="text-dark">Make a cake</h4>
                                    <h6 className="text-dark"><span className='text-secondary'> category: </span> Application</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <div className="project">
                            <img src={image2} alt width={350} height={250} />
                            <div className="overlay">
                                <div>
                                    <h4 className="text-white">Real Estate App</h4>
                                    <h6 className="text-dark"><span className='text-secondary'> category: </span> Application</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <div className="project">
                            <img src={image3} alt width={350} height={250} />
                            <div className="overlay">
                                <div>
                                    <h4 className="text-dark">Let's Love Quran</h4>
                                    <h6 className="text-dark"><span className='text-secondary'> category: </span> Application</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <div className="project">
                            <img src={image4} alt width={350} height={250} />
                            <div className="overlay">
                                <div>
                                    <h4 className="text-dark">Customer Support App</h4>
                                    <h6 className="text-dark"><span className='text-secondary'> category: </span> Application</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <div className="project">
                            <img src={image5} alt width={350} height={250} />
                            <div className="overlay">
                                <div>
                                    <h4 className="text-white">Mobile Safe</h4>
                                    <h6 className="text-dark"><span className='text-secondary'> category: </span> Application</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <div className="project">
                            <img src={image6} alt width={350} height={250} />
                            <div className="overlay">
                                <div>
                                    <h4 className="text-dark">Bakers App</h4>
                                    <h6 className="text-dark"><span className='text-secondary'> category: </span> Application</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <div className="project">
                            <img src={image7} alt width={350} height={250} />
                            <div className="overlay">
                                <div>
                                    <h4 className="text-white">Tousrism</h4>
                                    <h6 className="text-dark"><span className='text-secondary'> category: </span> Application</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <div className="project">
                            <img src={image8} alt width={350} height={250} />
                            <div className="overlay">
                                <div>
                                    <h4 className="text-dark">Real Time Location</h4>
                                    <h6 className="text-dark"><span className='text-secondary'> category: </span> Application</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <div className="project">
                            <img src={image9} alt width={350} height={250} />
                            <div className="overlay">
                                <div>
                                    <h4 className="text-dark">Cash Cab</h4>
                                    <h6 className="text-dark"><span className='text-secondary'> category: </span> Application</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )
        }
        else if (index === 3) {
            return (<>

                <div className="col-lg-4 col-sm-6">
                    <div className="project">
                        <img src={image25} alt width={350} height={250} />
                        <div className="overlay">
                            <div>
                                <h4 className="text-dark">Essay on Demand</h4>
                                <h6 className="text-dark"><span className='text-secondary'> category: </span> Website</h6>                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                    <div className="project">
                        <img src={image26} alt width={350} height={250} />
                        <div className="overlay">
                            <div>
                                <h4 className="text-dark">Essay on Demand</h4>
                                <h6 className="text-dark"><span className='text-secondary'> category: </span> Application</h6>                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                    <div className="project">
                        <img src={image19} alt width={350} height={250} />
                        <div className="overlay">
                            <div>
                                <h4 className="text-dark">Essay on Demand</h4>
                                <h6 className="text-dark"><span className='text-secondary'> category: </span> Dashboard</h6>                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                    <div className="project">
                        <img src={image21} alt width={350} height={250} />
                        <div className="overlay">
                            <div>
                                <h4 className="text-dark">Essay on Demand</h4>
                                <h6 className="text-dark"><span className='text-secondary'> category: </span> Dashboard</h6>                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                    <div className="project">
                        <img src={image55} alt width={350} height={250} />
                        <div className="overlay">
                            <div>
                                <h4 className="text-white">Live Streamer</h4>
                                <h6 className="text-dark"><span className='text-secondary'> category: </span>website</h6>                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-sm-6">
                    <div className="project">
                        <img src={image14} alt width={350} height={250} />
                        <div className="overlay">
                            <div>
                                <h4 className="text-dark">Gym Panel</h4>
                                <h6 className="text-dark"><span className='text-secondary'> category: </span> Dashboard</h6>                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                    <div className="project">
                        <img src={image53} alt width={350} height={250} />
                        <div className="overlay">
                            <div>
                                <h4 className="text-dark">Portfolio</h4>
                                <h6 className="text-dark"><span className='text-white'> category: </span> website</h6>                             </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-sm-6">
                    <div className="project">
                        <img src={image11} alt width={350} height={250} />
                        <div className="overlay">
                            <div>
                                <h4 className="text-white">Essay on Demand</h4>
                                <h6 className="text-dark"><span className='text-secondary'> category: </span> website</h6>                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                    <div className="project">
                        <img src={image51} alt width={350} height={250} />
                        <div className="overlay">
                            <div>
                                <h4 className="text-dark">Khan Burger Dashboard</h4>
                                <h6 className="text-white"><span className='text-white'> category: </span> Dashboard</h6>                             </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                    <div className="project">
                        <img src={image12} alt width={350} height={250} />
                        <div className="overlay">
                            <div>
                                <h4 className="text-dark">Essay on Demand</h4>
                                <h6 className="text-white"><span className='text-secondary'> category: </span> website</h6>                              </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-sm-6">
                    <div className="project">
                        <img src={image10} alt width={350} height={250} />
                        <div className="overlay">
                            <div>
                                <h4 className="text-white">Gym Panel</h4>
                                <h6 className="text-white"><span className='text-secondary'> category: </span> Dashboard</h6>                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-sm-6">
                    <div className="project">
                        <img src={image16} alt width={350} height={250} />
                        <div className="overlay">
                            <div>
                                <h4 className="text-dark">Chat Room</h4>
                                <h6 className="text-white"><span className='text-white'> category: </span> Website</h6>                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                    <div className="project">
                        <img src={image18} alt width={350} height={250} />
                        <div className="overlay">
                            <div>
                                <h4 className="text-dark">Essay On Demand</h4>
                                <h6 className="text-white"><span className='text-white'> category: </span> Website</h6>                              </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-sm-6">
                    <div className="project">
                        <img src={image49} alt width={350} height={250} />
                        <div className="overlay">
                            <div>
                                <h4 className="text-dark">Khan Burger Dashboard</h4>
                                <h6 className="text-white"><span className='text-white'> category: </span> Website</h6>                              </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-sm-6">
                    <div className="project">
                        <img src={image22} alt width={350} height={250} />
                        <div className="overlay">
                            <div>
                                <h4 className="text-dark">Content Writing</h4>
                                <h6 className="text-dark"><span className='text-secondary'> category: </span> Website</h6>                            </div>
                        </div>
                    </div>
                </div>


                <div className="col-lg-4 col-sm-6">
                    <div className="project">
                        <img src={image24} alt width={350} height={250} />
                        <div className="overlay">
                            <div>
                                <h4 className="text-dark">Essay on Demand</h4>
                                <h6 className="text-white"><span className='text-white'> category: </span> Website</h6>                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-sm-6">
                    <div className="project">
                        <img src={image47} alt width={350} height={250} />
                        <div className="overlay">
                            <div>
                                <h4 className="text-white">Gymanisum</h4>
                                <h6 className="text-white"><span className='text-secondary'> category: </span> Website</h6>                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-sm-6">
                    <div className="project">
                        <img src={image45} alt width={350} height={250} />
                        <div className="overlay">
                            <div>
                                <h4 className="text-dark">Khan Burger</h4>
                                <h6 className="text-dark"><span className='text-secondary'> category: </span> dashboard</h6>                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-sm-6">
                    <div className="project">
                        <img src={image43} alt width={350} height={250} />
                        <div className="overlay">
                            <div>
                                <h4 className="text-dark">Gym Dashboard</h4>
                                <h6 className="text-white"><span className='text-secondary'> category: </span>dashboard</h6>                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-sm-6">
                    <div className="project">
                        <img src={image41} alt width={350} height={250} />
                        <div className="overlay">
                            <div>
                                <h4 className="text-white">Gym Web</h4>
                                <h6 className="text-white"><span className='text-secondary'> category: </span>website</h6>                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-sm-6">
                    <div className="project">
                        <img src={image39} alt width={350} height={250} />
                        <div className="overlay">
                            <div>
                                <h4 className="text-white">Gym Web</h4>
                                <h6 className="text-white"><span className='text-secondary'> category: </span>website</h6>                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-sm-6">
                    <div className="project">
                        <img src={image37} alt width={350} height={250} />
                        <div className="overlay">
                            <div>
                                <h4 className="text-dark">Gym Dashboard</h4>
                                <h6 className="text-dark"><span className='text-secondary'> category: </span> Dashboard</h6>                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-sm-6">
                    <div className="project">
                        <img src={image35} alt width={350} height={250} />
                        <div className="overlay">
                            <div>
                                <h4 className="text-dark">Gym Dashboard</h4>
                                <h6 className="text-white"><span className='text-secondary'> category: </span> Dashboard</h6>                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-sm-6">
                    <div className="project">
                        <img src={image31} alt width={350} height={250} />
                        <div className="overlay">
                            <div>
                                <h4 className="text-dark">Content Writing</h4>
                                <h6 className="text-white"><span className='text-secondary'> category: </span> Website</h6>                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-sm-6">
                    <div className="project">
                        <img src={image29} alt width={350} height={250} />
                        <div className="overlay">
                            <div>
                                <h4 className="text-dark">Essay Dashboard</h4>
                                <h6 className="text-white"><span className='text-secondary'> category: </span> Dashboard</h6>                            </div>
                        </div>
                    </div>
                </div>


            </>)
        }
        else if (index === 4) {
            return (<>
                <div className="col-lg-4 col-sm-6">
                    <div className="project">
                        <img src={image55} alt width={350} height={250} />
                        <div className="overlay">
                            <div>
                                <h4 className="text-white">Live Streamer</h4>
                                <h6 className="text-dark"><span className='text-secondary'> category: </span>website</h6>                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-sm-6">
                    <div className="project">
                        <img src={image49} alt width={350} height={250} />
                        <div className="overlay">
                            <div>
                                <h4 className="text-dark">Khan Burger Dashboard</h4>
                                <h6 className="text-white"><span className='text-white'> category: </span>Dashboard</h6>                              </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-sm-6">
                    <div className="project">
                        <img src={image24} alt width={350} height={250} />
                        <div className="overlay">
                            <div>
                                <h4 className="text-dark">Essay on Demand</h4>
                                <h6 className="text-white"><span className='text-white'> category: </span> Website</h6>                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-sm-6">
                    <div className="project">
                        <img src={image37} alt width={350} height={250} />
                        <div className="overlay">
                            <div>
                                <h4 className="text-dark">Gym Dashboard</h4>
                                <h6 className="text-dark"><span className='text-secondary'> category: </span> Dashboard</h6>                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-sm-6">
                    <div className="project">
                        <img src={image35} alt width={350} height={250} />
                        <div className="overlay">
                            <div>
                                <h4 className="text-dark">Gym Dashboard</h4>
                                <h6 className="text-white"><span className='text-secondary'> category: </span> Dashboard</h6>                            </div>
                        </div>
                    </div>
                </div>

            </>)
        }
    }
    return (
        <div>
            {/* <hr  />   */}
            {/* ======= Portfolio Section ======= */}
            <section id="portfolio" className="portfolio">
                <div className="text-warning mx-auto" style={{ color: '#ef6603', width: "70em", marginBottom: "10em" }}>
                    <hr />
                </div>
                <div className="container">
                    <div className="section-title" data-aos="zoom-out">
                        <h2>Portfolio</h2>
                        <p className='text-white'>What we've done</p>
                    </div>
                    <ul id="portfolio-flters" className="d-flex justify-content-end" data-aos="fade-up">
                        <li data-filter="*" className={index === 1 ? "filter-active" : 'mt-0'} onClick={() => setIndex(1)}>All</li>
                        <li data-filter=".filter-app" className={index === 2 ? "filter-active" : 'mt-0'} onClick={() => setIndex(2)}>App</li>
                        <li data-filter=".filter-web" className={index === 3 ? "filter-active" : 'mt-0'} onClick={() => setIndex(3)}>Web</li>
                        <li data-filter=".filter-web" className={index === 4 ? "filter-active" : 'mt-0'} onClick={() => setIndex(4)}>Products</li>
                    </ul>
                    <div className="row gy-5">
                        {returnData()}
                    </div>
                </div>
            </section>{/* End Portfolio Section */}
        </div>
    )
}

export default Potfolio