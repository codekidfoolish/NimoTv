import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight} from '@fortawesome/free-solid-svg-icons'
import './topGameCard.css'

function TopGameCard({ ...props }) {
    let navigate = useNavigate()
    return (
        <>
            <div onClick={() => navigate("/games")} className="topGame-wrapper">
                <div className="topGame-box-deeper">
                    <div className="topGame-box-upper">
                        <span className="topGame-img">
                            <img src={props.imgURL} alt="topgameImg" className="loading" />
                        </span>
                        <div className="topGame-overlay">
                            <h2 className="topGame-name">{props.title}</h2>
                            <div className="underline"></div>
                            <div className="topGame-btn">
                                  <FontAwesomeIcon className="topGame-icon" icon={faAngleRight}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="topGame-desc">
                    <h2 className="topGame-title">{props.title}</h2>
                    <p className="topGame-live">
                        <span className="topGame-live-counter">{props.liveCounter}</span>
                          lives
                    </p>
                    <div className="topGame-type">{props.type}</div>
                </div>
            </div>
        </>
    );
}

export default TopGameCard