import './teamCard.css'

function TeamCard({ ...props }) {
    return (
        <div className="teamCard-wrapper">
            <div className="teamCard-bottom">
                <span className="teamCard-desc">{props.desc}</span>
            </div>
            <div className="teamCard-center">
                <img src={props.imgURL} alt="teamCard" className="teamCard-center-img" />
            </div>
            <div className="teamCard-top">
                <img src={props.imgURL} alt="" className="teamCard-top-img" />
                <span className="teamCard-name">{props.name}</span>
                <div className="more">
                    <span className="more-icon">&gt;</span>
                </div>
            </div>
        </div>
    );
}

export default TeamCard;