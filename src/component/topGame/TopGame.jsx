import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import './topGame.css'
import TopGameCard from '../topGameCard/TopGameCard';

function TopGame() {
    let navigate = useNavigate()
    const listRef = useRef()
    const hoverRef = useRef()

    const [slideNumber,setSlideNumber] = useState(0)
    const [isCursorLeft,setIsCursorLeft] = useState('')
    const [isCursorRight,setIsCursorRight] = useState('')

    const handleSlider = (direction) => {
        let distance = listRef.current.getBoundingClientRect().x - 20
        if (direction === 'left' && slideNumber > 0){
            setSlideNumber(slideNumber - 1)
            listRef.current.style.transform = `translateX(${245 + distance}px)`
        }
     
        if (direction === 'right' && slideNumber < 3){
            setSlideNumber(slideNumber + 1)
            listRef.current.style.transform = `translateX(${-245 + distance}px)`
        }  
    }

    const handleHover = (direction) => {
        if (direction === 'left' && slideNumber === 0){
           setIsCursorLeft('noDrop')
        }
        if (direction === 'left' && slideNumber > 0){
            setIsCursorLeft('pointer')
         }
         
         if (direction === 'right' && slideNumber === 3){
            setIsCursorRight('noDrop')
        }
        if (direction === 'right' && slideNumber < 3){
            setIsCursorRight('pointer')
        }
    }

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
                        <FontAwesomeIcon onClick={() => handleSlider('left')} 
                                        onMouseEnter= {() => handleHover('left')}
                                        className= {isCursorLeft === "noDrop" ? "topGame-slide-icon icon-noDrop" : "topGame-slide-icon" } 
                                        icon={faAngleLeft} 
                                   
                        />
                        <FontAwesomeIcon onClick={() => handleSlider('right')} 
                                         onMouseEnter= {() => handleHover('right')} 
                                        className= {isCursorRight === "noDrop" ? "topGame-slide-icon icon-noDrop" : "topGame-slide-icon" } 
                                        icon={faAngleRight}
                                       
                          />
                    </div>
                </div>
                <div className="topGame-bottom" ref={listRef}>

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
                        title="TFT"
                        imgURL="https://img.nimo.tv/o/banner/65C363DBB6FE3252E9009F53E93FB47A_team.jpg/w500_l0/img.webp"
                        liveCounter="7310"
                        type='PC game'
                    />
                    <TopGameCard
                        id='8'
                        title="IDENTITY V"
                        imgURL="https://img.nimo.tv/o/game/C5BD5779058F1CC5127384C81F272D47_IDENTITYV.png/w500_l0/img.webp"
                        liveCounter="120"
                        type='PC game'
                    />
                    <TopGameCard
                        id='9'
                        title="VALORANT"
                        imgURL="https://img.nimo.tv/o/banner/5E2B7DEE566F12BCC4F26580E8421E9F_b223f0ef4dadd4b55a3091cd829ab3c3.jpg/w500_l0/img.webp"
                        liveCounter="4310"
                        type='PC game'
                    />

                </div>
            </div>
        </div>
    );
}

export default TopGame