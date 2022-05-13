import './footer.css'


function Footer() {
    return (
        <div className="footer-wrapper">
            <div className="footer-social">
                <div className="social-icon footer-icon facebook-link"></div>
                <div className="social-icon footer-icon google-link"></div>
                <div className="social-icon footer-icon twitter-link"></div>
            </div>
            <div className="footer-link-list">
                <span className="footer-item first-item"> Aboutus </span>
                <span className="footer-item"> Contact us </span>
                <span className="footer-item"> Download </span>
                <span className="footer-item"> Cookie Policy </span>
                <span className="footer-item"> Privacy Policy </span>
                <span className="footer-item"> Terms </span>
                <span className="footer-item"> Thank You List </span>
                <span className="footer-item"> Open Platform </span>
            </div>
            <p className="footer-copyRight">Copyright © 2018-2022 Huya PTE. LTD. All Rights Reserved</p>
        </div>


    );
}

export default Footer;