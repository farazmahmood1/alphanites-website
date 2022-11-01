import React from 'react'
import img1 from '../portfolio/imgpsh_fullsize_anim.png'
import img2 from '../portfolio/imgpsh_fullsize_anime.png'
import img3 from '../portfolio/imgpsh_fullsize_animes.png'
import img4 from '../portfolio/imgpsh_fullsize_animex.png'
import img5 from '../portfolio/Group18.svg'



const header = () => {
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-transparent">
        <div className="container-fluid">
          {/* <i className='fa-solid fa-infinity fa-5x' style={{fontSize:"30px"}} /> */}
          <a className="navbar-brand" href="#"><img src={img5} alt="logo" className='mainLogo' /> </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto  navheading">
              <li className="nav-item ">
                <a className="nav-link active scrollto me-3 " aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link scrollto me-3 " href="#about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link scrollto me-3 " href="#services">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link scrollto me-3 " href="#portfolio">Portfolio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link scrollto me-3 " href="#pricing">Pricing</a>
              </li>
              <li className="nav-item">
                <a className="nav-link scrollto me-3 " href="#faq">FAQ</a>
              </li>
              <li className="nav-item">
                <a className="nav-link scrollto me-3" href="#team">Team</a>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default header