import './sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightToBracket, faRankingStar, faHouseFlag, faMobileScreen, faTv, faHeadset, faDownload, faVideo }
    from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';


function Sidebar() {
    const [toggleSidebar, setToggleSidebar] = useState(1)

    const SidebarExpand = () => {
        return (
            <>
                <div className={toggleSidebar === 2 ? "sidebarEx-wrapper" : "sidebarEx-wrapper show-sidebar" }>
                    <div className="sidebarEx-top">
                        <div className="sidebarEx-join">
                            <img src="https://www.nimo.tv/nms/images/sidebar-logo.2818872baaf842ab17d2e63fa190fe1f.png"
                                alt="logo" className="sidebarEx-join-img" />
                            <p className="join-text">Join Nimo!</p>
                            <p className="sidebarEx-join-text">Explore the world's best live streams!</p>
                            <button
                                className="sidebarEx-btn">
                                Sign Up
                            </button>
                        </div>
                        <span className="sidebarEx-title">
                            <FontAwesomeIcon className='sidebarEx-icon' icon={faRankingStar} />
                            LeaderBoard
                        </span>
                        <span className="sidebarEx-title">
                            <FontAwesomeIcon className='sidebarEx-icon' icon={faHouseFlag} />
                            Hall of Fame
                        </span>
                        <span className="sidebarEx-title">
                            <FontAwesomeIcon className='sidebarEx-icon' icon={faMobileScreen} />
                            Mobile game
                        </span>
                        <div className="sidebarEx-game-list">
                            <span className="sidebarEx-game-text">Play Together</span>
                            <span className="sidebarEx-game-text">Pokemon unite</span>
                            <span className="sidebarEx-game-text">PUBG Mobile</span>
                            <span className="sidebarEx-game-text">League of Legends: Wild Rift</span>
                            <span className="sidebar-more">More &gt;</span>

                        </div>
                        <span className="sidebarEx-title">
                            <FontAwesomeIcon className='sidebarCollapse-icon' icon={faTv} />
                            PC Game
                        </span>
                        <div className="sidebarEx-game-list">
                            <span className="sidebarEx-game-text">Business Tour</span>
                            <span className="sidebarEx-game-text">Pokemon unite</span>
                            <span className="sidebarEx-game-text">PUBG </span>
                            <span className="sidebarEx-game-text">League of Legends</span>
                            <span className="sidebar-more">More &gt;</span>
                        </div>
                        <span className="sidebarEx-title highlight">
                            <FontAwesomeIcon className='sidebarCollapse-icon' icon={faHeadset} />
                            Others
                        </span>
                        <div className="sidebarEx-game-list">
                            <span className="sidebarEx-game-text">LiveShow</span>
                            <span className="sidebarEx-game-text">Voice Room</span>
                            <span className="sidebarEx-game-text">Outdoor</span>
                            <span className="sidebar-more">More &gt;</span>
                        </div>
                    </div>
                    <div className="sidebarEx-bottom">
                        <div className="download-app">
                            <div className="download-title">
                                <FontAwesomeIcon className='download-icon' icon={faDownload} />
                                <span className="download-text">Download App</span>
                            </div>
                            <img src="https://www.nimo.tv/nms/images/qrcodeNimotv_new.b65f3ae8294194d7cb5f74d26373b7c8.png" alt="qrcode"
                                className="sidebarEx-qr" />
                            <p className="download-desc">Top live streaming platform</p>
                        </div>
                        <div className="download-btn">
                            <FontAwesomeIcon className='live-icon' icon={faVideo} />
                            <span className="live-text">Go Live</span>
                        </div>
                    </div>
                    <div className="sidebarEx-switch-btn">
                        <img onClick={() => setToggleSidebar(2)}
                            src="https://www.nimo.tv/nms/images/arrow-collapse.d1e5700e9b24870dca85a5a7ab555478.png" alt=""
                            className="left-switch-btn" />
                    </div>
                </div>
            </>
        )
    }

    const SidebarCollapse = () => {
        return (
            <>
                <div className={toggleSidebar === 2 ? "sidebarCollapse show-sidebar" : "sidebarCollapse"}>
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
                        <img onClick={() => setToggleSidebar(1)}
                            src="https://www.nimo.tv/nms/images/arrow-expand.cb28e2276f23022af95348e938e99fb6.png" alt=""
                            className="switch-btn" />
                    </div>
                </div>
            </>
        )
    }
    return (
        <div className="sidebar-wrapper">
            {
                toggleSidebar === 2 ? <SidebarCollapse /> : <SidebarExpand />
            }
            
        </div>
    );
}

export default Sidebar;