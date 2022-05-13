import './setting.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLanguage, faEarthAmericas, faMoon, faDesktop, faGem, faVideo, faDownload, faClock, faHeartCircleCheck }
    from '@fortawesome/free-solid-svg-icons'

function Setting() {
    return (
        <>
            <ul className="setting-wrapper">
                <li className="setting-item">
                    <span className="setting-text">
                        <FontAwesomeIcon className="setting-icon" icon={faLanguage} />
                        Language
                    </span>
                    <span className="setting-text-desc" >English</span>
                </li>
                <li className="setting-item">
                    <span className="setting-text">
                        <FontAwesomeIcon className="setting-icon" icon={faEarthAmericas} />
                        country/region</span>
                    <FontAwesomeIcon className="setting-text-desc" icon={faEarthAmericas} />
                </li>
                <li className="setting-item">
                    <span className="setting-text">
                        <FontAwesomeIcon className="setting-icon" icon={faMoon} />
                        Dark mode</span>
                    <div className="darkmode-switch-btn">
                        <div className="darkmode-btn"></div>
                    </div>
                </li>
                <li className="setting-item">
                    <span className="setting-text">
                        <FontAwesomeIcon className="setting-icon" icon={faDesktop} />
                        Add to desk top
                    </span>
                    <span className="setting-hightlight-text">New!</span>
                </li>
                <li className="setting-item">
                    <span className="setting-text">
                        <FontAwesomeIcon className="setting-icon" icon={faGem} />
                        Recharge
                    </span>
                </li>
                <li className="setting-item">
                    <span className="setting-text">
                        <FontAwesomeIcon className="setting-icon" icon={faVideo} />
                        Live 
                    </span>
                </li>
                <li className="setting-item">
                    <span className="setting-text">
                        <FontAwesomeIcon className="setting-icon" icon={faDownload} />
                        Download app
                    </span>
                </li>
                <li className="setting-item">
                    <span className="setting-text">
                        <FontAwesomeIcon className="setting-icon" icon={faClock} />
                        History
                    </span>
                </li>
                <li className="setting-item">
                    <span className="setting-text">
                        <FontAwesomeIcon className="setting-icon" icon={faHeartCircleCheck} />
                        My following
                    </span>
                </li>
            </ul>
        </>
    );
}

export default Setting;