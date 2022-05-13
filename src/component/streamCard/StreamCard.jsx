import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserGroup, faPlay } from '@fortawesome/free-solid-svg-icons'
import './streamCard.css'

function StreamCard({ ...props }) {
    return (
        <div className="streamCard-wrapper">
            <div className="SC-top">
                <img src={props.imgURL} alt="" className="SC-img" />
                <span className="SC-type">{props.type}</span>
                <div className="SC-overlay">
                    <div className="SC-playBtn">
                        <FontAwesomeIcon className="SC-playIcon" icon={faPlay} />
                    </div>
                </div>
            </div>
            <div className="SC-bottom">
                <div className="SC-bottom-left">
                    <img src={props.userImgURL} alt="" className="SC-user-img" />
                    <div className="SC-desc">
                        <h3 className="SC-title">{props.title}</h3>
                        <span className="SC-user-name">{props.userName}</span>
                        <span className="SC-language">{props.language}</span>
                    </div>
                </div>
                <div className="SC-bottom-right">
                    <FontAwesomeIcon className="SC-icon" icon={faUserGroup} />
                    <span className="SC-counter">{props.counter}</span>
                </div>
            </div>
        </div>
    );
}

export default StreamCard;