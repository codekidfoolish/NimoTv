import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightToBracket, faRankingStar, faHouseFlag, faMobileScreen, faTv, faHeadset, faDownload, faVideo }
    from '@fortawesome/free-solid-svg-icons'
import './sidebarCo.css'

function SidebarCollapse() {
    return (
        <div className="sidebarCollapse">
            <div className="sidebarCollapse-wrapper">
                <div className="sidebarCollapse-top">
                    <span className="sidebarCollapse-icon-link">
                        <FontAwesomeIcon className='sidebarCollapse-icon' icon={faArrowRightToBracket} />
                    </span>
                    <span className="sidebarCollapse-icon-link">
                        <FontAwesomeIcon className='sidebarCollapse-icon' icon={faRankingStar} />
                    </span>
                    <span className="sidebarCollapse-icon-link">
                        <FontAwesomeIcon className='sidebarCollapse-icon' icon={faHouseFlag} />
                    </span>
                    <span className="sidebarCollapse-icon-link">
                        <FontAwesomeIcon className='sidebarCollapse-icon' icon={faMobileScreen} />
                    </span>
                    <span className="sidebarCollapse-icon-link">
                        <FontAwesomeIcon className='sidebarCollapse-icon' icon={faTv} />
                    </span>
                    <span className="sidebarCollapse-icon-link">
                        <FontAwesomeIcon className='sidebarCollapse-icon' icon={faHeadset} />
                    </span>
                </div>
                <div className="sidebarCollapse-bottom">
                    <span className="sidebarCollapse-icon-link">
                        <FontAwesomeIcon className='sidebarCollapse-icon' icon={faDownload} />
                    </span>
                    <span className="sidebarCollapse-icon-link">
                        <FontAwesomeIcon className='sidebarCollapse-icon' icon={faVideo} />
                    </span>
                </div>
            </div>
            <div className="sidebarCollapse-switch-btn">
                <img src="https://www.nimo.tv/nms/images/arrow-expand.cb28e2276f23022af95348e938e99fb6.png" alt=""
                    className="switch-btn" />
            </div>
        </div>
    );
}

export default SidebarCollapse;