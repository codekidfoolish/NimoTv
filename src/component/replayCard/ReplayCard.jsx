import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faPlay } from '@fortawesome/free-solid-svg-icons'
import './replayCard.css'

function ReplayCard({ ...props }) {
    return (
        <div className="replayCard-wrapper">
            <div className="replayCard-left">
                <img src={props.imgURL} alt="replayImg"
                    className="replayCard-img" />
            </div>
            <div className="replayCard-right">
                <div className="replayCard-right-top">
                    <p className="replayCard-user">
                        <img src={props.userImgURL} alt=""
                            className="replayCard-user-img" />
                       <span className="replayCard-userName">{props.userName}</span> 
                    </p>
                    <p className="replayCard-param">
                        <span className="replayCard-view">
                            <FontAwesomeIcon className='replayCard-icon' icon={faPlay} />
                            {props.viewCount}
                        </span>
                        <span className="replayCard-view">
                            <FontAwesomeIcon className='replayCard-icon' icon={faClock} />
                            {props.time}
                        </span>
                    </p>
                </div>
                <p className="replayCard-title">{props.title}</p>
            </div>
        </div>
    );
}

export default ReplayCard;