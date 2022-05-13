import './live.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import Topbar from '../../component/topbar/Topbar'
import Sidebar from '../../component/sidebar/Sidebar'
import GlobalStream from '../../component/globalStream/GlobalStream'
import FloatNav from '../../component/floatNav/FloatNav'



function Live() {
    return (
        <div className="live">
            <Topbar />
            <div className="live-container">
                <Sidebar />
                <FloatNav />
                <div className="live-content">
                    <h2 className='live-title'>Live now</h2>
                    <div className="region-wrapper">
                        <span className="region-text">Choose country/region:</span>
                        <div className="region-choose">
                            <span className="region-name">Global</span>
                            <ul className='country-list'>
                                <li className="country-name">Global</li>
                                <li className="country-name">Brazil</li>
                                <li className="country-name">Indo</li>
                                <li className="country-name">Vietnam</li>
                                <li className="country-name">Thailand</li>
                                <li className="country-name">Turkey</li>
                                <li className="country-name">Mexico</li>
                                <li className="country-name">Morroco</li>
                            </ul>
                            <span> <FontAwesomeIcon className='region-icon' icon={faAngleDown} /> </span>
                        </div>
                    </div>
                    <div className="live-main-content">
                        <GlobalStream />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Live;