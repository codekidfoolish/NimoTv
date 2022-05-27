import { useState, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import './proTeam.css'
import TeamCard from './teamCard/TeamCard'


function ProTeam() {
    const [slideNumber,setSlideNumber] = useState(0)
    const listRef = useRef()

    const handleSlider = (direction) => {
        let distance = listRef.current.getBoundingClientRect().x 
        if (direction === 'left' && slideNumber > 0){
            setSlideNumber(slideNumber - 1)
            listRef.current.style.transform = `translateX(${1300 + distance}px)`
        }
     
        if (direction === 'right' && slideNumber < 1){
            setSlideNumber(slideNumber + 1)
            listRef.current.style.transform = `translateX(${-1300 + distance}px)`
        }  
        console.log(listRef.current.getBoundingClientRect())
    }
    return (
        <>
            <div className="proTeam-top">
                <h2 className="proTeam-theme">Pro Team</h2>
                <div className="proTeam-slide">
                    <FontAwesomeIcon onClick={() => handleSlider('left')} 
                                     className="proTeam-slide-icon" 
                                     icon={faAngleLeft} />
                    <FontAwesomeIcon onClick={() => handleSlider('right')} 
                                     className="proTeam-slide-icon" 
                                     icon={faAngleRight} />
                </div>
            </div>
            <div className="proTeam-wrapper" ref={listRef}>
                <TeamCard
                    id='1'
                    desc='Team Competitivo Region:Sur / Norte'
                    imgURL='https://img.nimo.tv/o/banner/42F04521FB82E3237194393E48315D90_d3688afbc816aaf948e8199cc66b2522.jpg/w680_l0/img.webp'
                    name='Team GOD'
                />
                <TeamCard
                    id='2'
                    desc='Indian No1 Team'
                    imgURL='https://img.nimo.tv/o/banner/1AF04E0156E0F9B5AC4EB982FF189945_c9fde492bb3a5a83d70c126e8b7f8808.jpg/w680_l0/img.webp'
                    name='S8ul'
                />
                <TeamCard
                    id='3'
                    desc='Indian No2 Team'
                    imgURL='https://img.nimo.tv/o/banner/BCFF6BC426A571934D1ACD0397F8D474_746c2d19006fbfb14a9d993f5c58fa0c.jpg/w680_l0/img.webp'
                    name='S8ul'
                />
                 <TeamCard
                    id='4'
                    desc='Indian No3 Team'
                    imgURL='https://img.nimo.tv/o/banner/E873BCECB73F996FA35EBC3DCD31B808_ee71a60cbb1bababe3b08155ea1022e3.jpg/w680_l0/img.webp'
                    name='the Next Genz'
                />
            </div>
        </>
    );
}

export default ProTeam
