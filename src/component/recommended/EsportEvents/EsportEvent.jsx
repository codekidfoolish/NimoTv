import './esportEvents.css'

function EsportEventsCard({ ...props }) {
    return (
        <div className="EsportEventsCard-wrapper">
            <div className="EEC-top">
                <img src={props.imgURL} alt="EECimg" className="EEC-top-img" />
                <span className="EEC-type">{props.type}</span>
                <span className="EEC-desc">{props.desc}</span>
            </div>
            <div className="EEC-bottom">
                <span className="EEC-time">{props.time}</span>
                <img src={props.imgURL} alt="EECimg" className="EEC-bottom-img" />
                <button className="EEC-btn">{props.status}</button>
            </div>
        </div>
    );
}

export default EsportEventsCard;