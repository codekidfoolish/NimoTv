import Topbar from '../../component/topbar/Topbar'
import Sidebar from '../../component/sidebar/Sidebar'
import AllGame from '../../component/allGame/AllGame';
import FloatNav from '../../component/floatNav/FloatNav'
import './category.css'

function Category() {
    return (
        <div className="category">
            <Topbar />
            <div className="category-container">
                <Sidebar />
                <FloatNav />
                <div className="category-content">
                    <h2 className='category-title'>All Games</h2>
                    <div className="game-type-wrapper">
                        <span className="game-type game-type-choose">All</span>
                        <span className="game-type">Mobile game</span>
                        <span className="game-type">PC game</span>
                        <span className="game-type">Others</span>
                    </div>
                    <div className="category-main-content">
                        <AllGame />
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Category;