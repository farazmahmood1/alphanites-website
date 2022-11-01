import React from 'react'

const Footer = () => {
  return (
    <div>
        {/* ======= Footer ======= */}
        <footer id="footer">
                <div className="container">
                    <h3>Alphanites</h3>
                    <p>Your're exactly where you need to be ...</p>
                    <div className="social-links">
                        <a href="#" className="twitter"><i className="bx bxl-twitter" /></a>
                        <a href="#" className="facebook"><i className="bx bxl-facebook" /></a>
                        <a href="#" className="instagram"><i className="bx bxl-instagram" /></a>
                        <a href="#" className="google-plus"><i className="bx bxl-skype" /></a>
                        <a href="#" className="linkedin"><i className="bx bxl-linkedin" /></a>
                    </div>
                    <div className="copyright">
                        © Copyright <strong><span>Alphanites</span></strong>. All Rights Reserved
                    </div>
                    <div className="credits">
                        {/* All the links in the footer should remain intact. */}
                        {/* You can delete the links only if you purchased the pro version. */}
                        {/* Licensing information: https://bootstrapmade.com/license/ */}
                        {/* Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/selecao-bootstrap-template/ */}
                        Designed by <a href="https://www.linkedin.com/in/faraz-mahmood-0701b0208/">Faraz Mahmood</a>
                    </div>
                </div>
            </footer>{/* End Footer */}
    </div>
  )
}

export default Footer