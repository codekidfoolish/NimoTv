import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import './topGame.css'
import TopGameCard from '../topGameCard/TopGameCard';

function TopGame() {
    let navigate = useNavigate()

    return (
        <div className="topGame-container">
            <div className="topGame-section">
                <div className="topGame-top">
                    <h2 className="topGame-theme">Top Games</h2>
                    <span className="topGame-more">View All &gt;</span>
                    <ul onClick={() => navigate("/games")} className="topGame-type-list">
                        <li className="topGame-type-item">All</li>
                        <li className="topGame-type-item">Mobie Game</li>
                        <li className="topGame-type-item">PC Game</li>
                        <li className="topGame-type-item">Others</li>
                    </ul>
                    <div className="topGame-slide">
                        <FontAwesomeIcon className="topGame-slide-icon" icon={faAngleLeft} />
                        <FontAwesomeIcon className="topGame-slide-icon" icon={faAngleRight} />
                    </div>
                </div>
                <div className="topGame-bottom">

                    <TopGameCard
                        id='1'
                        title="Mobile Legends"
                        imgURL="https://img.nimo.tv/o/banner/8057713FBF57F89AC21299AF3711720E_Mobilelegends.jpg/w500_l0/img.webp"
                        liveCounter="443"
                        type='Mobile game'
                    />
                    <TopGameCard
                        id='2'
                        title="Liveshow"
                        imgURL="https://img.nimo.tv/o/banner/C729D8401FDAC50C9F7A190133AC15D8_C729D8401FDAC50C9F7A190133AC15D8_312468.jpg/w500_l0/img.webp"
                        liveCounter="516"
                        type='Others'
                    />
                    <TopGameCard
                        id='3'
                        title="AOV"
                        imgURL="https://img.nimo.tv/o/game/61FB28869460609249C9981E835943F7_aov.jpg/w500_l0/img.webp"
                        liveCounter="430"
                        type='Mobile game'
                    />
                    <TopGameCard
                        id='4'
                        title="PUBG Mobile"
                        imgURL="https://img.nimo.tv/o/banner/CB5F66204E8B6FDBDD052B6FE8EBAF05_Pubgmobile.jpg/w500_l0/img.webp"
                        liveCounter="220"
                        type='Mobile game'
                    />
                    <TopGameCard
                        id='5'
                        title="Free Fire"
                        imgURL="https://img.nimo.tv/o/banner/E524D3A4150BCB94CCB8835142508A76_FreeFire.jpg/w500_l0/img.webp"
                        liveCounter="430"
                        type='Mobile game'
                    />
                    <TopGameCard
                        id='6'
                        title="Minecraft"
                        imgURL="https://img.nimo.tv/o/banner/85D90EDE97ED239431D27A9BA05FAA54_Minecfart.jpg/w500_l0/img.webp"
                        liveCounter="110"
                        type='Mobile game'
                    />
                    <TopGameCard
                        id='7'
                        title="League of Legends"
                        imgURL="https://img.nimo.tv/o/banner/DD32D5B48663891CE87978F262E2FA41_LOL.jpg/w500_l0/img.webp"
                        liveCounter="4310"
                        type='PC game'
                    />

                </div>
            </div>
        </div>
    );
}

export default TopGame