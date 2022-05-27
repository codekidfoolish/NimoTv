import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleUp, faSearch } from '@fortawesome/free-solid-svg-icons'
import './topbar.css'
import Setting from './setting/Setting';
import Search from './search/Search';
import CategoryItem from './categoryItem/CategoryItem';
import Login from '../login/Login';
import SignUp from '../signup/SignUp';


function Topbar() {
    const [showSetting, setShowSetting] = useState(false)
    const [showSearch, setShowSearch] = useState(false)
    const [showGames, setShowGames] = useState("none")
    const [showLogin, setShowLogin] = useState(false)
    const [showSignUp, setShowSignUp] = useState(false)


    const myStyle = {
        display: showGames
    }
    let navigate = useNavigate()
    return (

        <div className="topbar-container">
            <div className="topbar-left">
                <img src="data:image/png;base64,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"
                    onClick={() => navigate("/")}
                    alt="nimotvLogo" className="logo" />
                <div className="topbar-pages">
                    <span onClick={() => navigate("/")}
                        className="topbar-page topbar-home">
                        Home
                    </span>
                    <span onClick={() => navigate("/live")} className="topbar-page topbar-live">Live</span>
                    <span onMouseEnter={() => setShowGames("block")}
                        onMouseLeave={() => setShowGames("none")}
                        onClick={() => navigate("/games")}
                        className="topbar-page topbar-category">
                        Category
                        <span> <FontAwesomeIcon className='topbar-category-icon' icon={faAngleDown} /> </span>
                    </span>
                    <span onClick={() => navigate("/esports")}
                        className="topbar-page topbar-esports">
                        Esports
                    </span>
                </div>
                <div style={myStyle} className="categoryItem">
                    <CategoryItem />
                </div>

            </div>
            <div className="topbar-right">
                <div
                    onClick={() => setShowSearch(!showSearch)}
                    onMouseEnter={() => setShowSetting(showSetting === true ? !showSetting : showSetting)}
                    className={showSearch === true ? "search-box highlight-search" : "search-box"}>
                    <span>  <FontAwesomeIcon className= {showSearch === true ? 'search-icon highlight-search-icon': 'search-icon'} icon={faSearch} /> </span>
                    <input type="text" placeholder='thaygiaoba' className="search-input" />
                </div>
                {
                    showSearch && <Search />
                }
                <span
                    onMouseEnter={() => setShowSearch(showSearch === true ? !showSearch : showSearch)}
                    onClick={() => setShowSetting(!showSetting)}
                    className='topbar-setting'>
                    ...
                </span>
                {
                    showSetting && <Setting />
                }

                <button onClick={() => setShowLogin(!showLogin)} className="topbar-btn">Sign Up</button>
                {
                    showLogin && <Login />
                }
                <button onClick={() => setShowLogin(!showLogin)} className="topbar-btn">Login</button>
                {
                    showLogin && <Login />
                }
            </div>
        </div>

    );
}

export default Topbar;