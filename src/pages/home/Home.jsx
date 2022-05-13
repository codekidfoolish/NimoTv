import './home.css'
import Topbar from '../../component/topbar/Topbar';
import Hero from '../../component/hero/Hero';
import TopGame from '../../component/topGame/TopGame';
import Recommended from '../../component/recommended/Recommend';
import HotStream from '../../component/hotStream/HotStream';
import FloatNav from '../../component/floatNav/FloatNav';
import ProTeam from '../../component/proTeam/ProTeam';
import Footer from '../../component/footer/Footer';


function Home() {
    return (
        <>
            <Topbar />
        <div className="home-container">
            <FloatNav />
            <Hero />
            <TopGame />
            <Recommended />
            <HotStream />
            <ProTeam />
            <Footer />
        </div>
        </>
    );
}

export default Home
