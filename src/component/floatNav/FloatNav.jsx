import {useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMobileScreen, faVideo, faTableList, faBell, faHeadphones, faSquareCaretUp, faAppleAlt, faG, faCommentDots } from '@fortawesome/free-solid-svg-icons'
import './floatNav.css'

function FloatNav() {
    const [scrollToTop,setScrollToTop] = useState(false)
    useEffect(() => {
        window.addEventListener('scroll',() => {
            if (window.scrollY > 200){
                setScrollToTop(true)
            }
            else {
                setScrollToTop(false)
            }
        })
    },[])

    const handleScroll = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
    return (
        <>
        <div className="floatNav">
            <img src="https://www.nimo.tv/nms/images/logo.cf91c5b3be8d65583dac860c4255408c.png" alt="icon"
                className="floatNav-img" />
            <div className="floatNav-wrapper">
                <div className="floatNav-list">
                    <span className='floatNav-item floatNav-download-app'>
                        <FontAwesomeIcon className="floatNav-icon " icon={faMobileScreen} />
                        <div className="download-app-modal">
                            <div className="social-link">
                                <FontAwesomeIcon className="social-icon" icon={faAppleAlt} />
                                <span className="social-text">App Store</span>
                            </div>
                            <div className="social-link">
                                <FontAwesomeIcon className="social-icon" icon={faG} />
                                <span className="social-text">Google Play</span>
                            </div>
                            <img src="https://www.nimo.tv/nms/images/qrcodeNimotv_side.73e785c66017a64afde5e32d54093b79.png" alt="qrcode"
                                className="qr-code" />
                            <span className="social-text">Scan QR Code Download</span>
                        </div>
                    </span>
                    <span className='floatNav-item'>
                        <FontAwesomeIcon className="floatNav-icon" icon={faVideo} />
                    </span>
                    <span className='floatNav-item'>
                        <FontAwesomeIcon className="floatNav-icon" icon={faTableList} />
                    </span>
                    <span className='floatNav-item'>
                        <FontAwesomeIcon className="floatNav-icon" icon={faBell} />
                        <FontAwesomeIcon className="noti-icon" icon={faCommentDots} />
                    </span>
                    <span className='floatNav-item'>
                        <FontAwesomeIcon className="floatNav-icon" icon={faHeadphones} />
                    </span>
                    {
                        scrollToTop && 
                    <span className='floatNav-item'>
                        <FontAwesomeIcon onClick={handleScroll}
                                         className="floatNav-icon scroll-top-icon" 
                                         icon={faSquareCaretUp} />
                    </span>
                    }
                </div>
            </div>
        </div>
        </>
    );
}

export default FloatNav;