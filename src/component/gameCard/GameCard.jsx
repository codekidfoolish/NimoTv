import './gameCard.css'

function GameCard({ ...props }) {

    return (
        <div className="gameCard-wrapper">
            <div className="gameCard-content">
                <img src={props.imgURL} alt="" className="gameCard-img" />
                <span className="gameCard-name">{props.name}</span>
            </div>
        </div>
    );
}

export default GameCard;