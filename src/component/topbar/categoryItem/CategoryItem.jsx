import { useNavigate } from 'react-router-dom'
import './categoryItem.css'

function CategoryItem() {
    let navigate = useNavigate()
    return (
        <div onClick={() => navigate("/games")}  className="topgame-wrapper">
            <h3 className="topgame-title">Top Games</h3>
            <ul className="topgame-list">
                <li className="topgame-item">
                    <img src="https://img.nimo.tv/o/banner/809D4521C53E72B50BEE5D4CBA4167F9_b17f8a4d9a767abf030b83af6ba78a88.jpg/l0/img.webp"
                        alt="topgameImg"
                        className="topgame-img" />
                    <div className='mark'>
                        <span className="topgame-text">Business Tour</span>
                    </div>
                </li>
                <li className="topgame-item">
                    <img src="https://img.nimo.tv/o/banner/FBE3388BF8689B6020EED0B290553AEB_b17f8a4d9a767abf030b83af6ba78a88.jpg/l0/img.webp"
                        alt="topgameImg"
                        className="topgame-img" />
                    <div className='mark'>
                        <span className="topgame-text">Play Together</span>
                    </div>
                </li>
                <li className="topgame-item">
                    <img src="https://img.nimo.tv/o/banner/C5191D50D03A1233A9A01C1EDB0F695D_4629c7fd4487c74479b4f0bfdfa9b6c4.jpg/l0/img.webp"
                        alt="topgameImg"
                        className="topgame-img" />
                    <div className='mark'>
                        <span className="topgame-text">Ragnarok X</span>
                    </div>
                </li>
                <li className="topgame-item">
                    <img src="https://img.nimo.tv/o/banner/3A89C6AF2EC5AAB0FD847664C4E7EAB5_edfb6b7ab5aab9a0c7dca087a5aef2ee.png/l0/img.webp"
                        alt="topgameImg"
                        className="topgame-img" />
                    <div className='mark'>
                        <span className="topgame-text">Pokemon</span>
                    </div>
                </li>
                <li className="topgame-item">
                    <img src="https://img.nimo.tv/o/game/675F6DD84822482F277AD7E99FB71A7_othergamecover.png/w500_l0/img.webp"
                        alt="topgameImg"
                        className="topgame-img" />
                    <div className='mark'>
                        <span className="topgame-text">PC/console</span>
                    </div>
                </li>
                <li className="topgame-item">
                    <img src="https://img.nimo.tv/o/banner/1444FBC75822A67CE1DE47693F6F39DC_1920x480.png/l0/img.webp"
                        alt="topgameImg"
                        className="topgame-img" />
                    <div className='mark'>
                        <span className="topgame-text">Lost Ark</span>
                    </div>
                </li>
                <li className="topgame-item">
                    <img src="https://img.nimo.tv/o/banner/FEAA665C88C2FAD8AD4FF84172149511_ARK.jpg/l0/img.webp"
                        alt="topgameImg"
                        className="topgame-img" />
                    <div className='mark'>
                        <span className="topgame-text">Ark Survival</span>
                    </div>
                </li>
                <li className="topgame-item">
                    <img src="https://img.nimo.tv/o/banner/BAAE856C9C2D3EBEFCB4120D0E40F9B4_f6fe0c579e2c67825aefcfe1f66cb637.jpg/l0/img.webp"
                        alt="topgameImg"
                        className="topgame-img" />
                    <div className='mark'>
                        <span className="topgame-text">League of Legend</span>
                    </div>
                </li>
                <li className="topgame-item">
                    <img src="https://img.nimo.tv/o/banner/8A42F448BBF5A6CBBFE1BD94CFE58C4C_GTA5.jpg/l0/img.webp"
                        alt="topgameImg"
                        className="topgame-img" />
                    <div className='mark'>
                        <span className="topgame-text">GTAs</span>
                    </div>
                </li>
            </ul>
            <p className='view' >View all &gt; </p>
        </div>
    );
}

export default CategoryItem;
