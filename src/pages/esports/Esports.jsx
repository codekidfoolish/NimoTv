import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import Topbar from '../../component/topbar/Topbar'
import Sidebar from '../../component/sidebar/Sidebar'
import StreamCard from '../../component/streamCard/StreamCard'
import ReplayCard from '../../component/replayCard/ReplayCard'
import './esports.css'

function Esports() {
    return (
        <div className="esport">
            <Topbar />
            <div className="esport-container">
                <Sidebar />
                <div className="esport-content">
                    <div className="esport-slide">
                        <span className="esport-game-slide esport-game-slide--choose">
                            <img src="https://img.nimo.tv/nw/nms/images/all-game-icon.4eef5339dbc8fe4a68eac11803926e45.png/w88_l0/img.webp" alt="logo"
                                className="esport-slideImg" />
                            <div className="esport-gameText">
                                All Games
                            </div>
                        </span>
                        <span className="esport-game-slide">
                            <img src="https://img.nimo.tv/o/banner/216D66953766043ED85F39D1065EA1B3_ea11e627e16d061d675930a77137e890.png/w88_l0/img.webp" alt="logo"
                                className="esport-slideImg" />
                            <div className="esport-gameText">
                                PUPG Mobile
                                <span className="esport-gameStatus">
                                    Comming soon
                                </span>
                            </div>
                            <FontAwesomeIcon className="esport-slide-icon" icon={faAngleRight} />
                        </span>
                        <span className="esport-game-slide">
                            <img src="https://img.nimo.tv/o/banner/6034F4CF201670296092F3D4474046FD_6afe99c696f3459ab5777bc493ac8f8e.png/w88_l0/img.webp" alt="logo"
                                className="esport-slideImg" />
                            <div className="esport-gameText">
                                Mobile Legends
                                <span className="esport-gameStatus">
                                    Comming soon
                                </span>
                            </div>
                            <FontAwesomeIcon className="esport-slide-icon" icon={faAngleRight} />
                        </span>
                        <span className="esport-game-slide">
                            <img src="https://img.nimo.tv/o/banner/12AB8CB7E4ECBA5F6B19C9CC043615CE_d22e396588491e5c495e1996674b4648.png/w88_l0/img.webp" alt="logo"
                                className="esport-slideImg" />
                            <div className="esport-gameText">
                                VALORANT
                                <span className="esport-gameStatus">
                                    Comming soon
                                </span>
                            </div>
                            <FontAwesomeIcon className="esport-slide-icon" icon={faAngleRight} />
                        </span>
                    </div>
                    <div className="esport-title">
                        <img src="https://img.nimo.tv/nw/nms/images/hot-icon.fd57c486c5d5afe2d84a700c922c86c1.png/l0/img.webp" alt=""
                            className="esport-title-img" />
                        <span>Hot Match</span>
                    </div>
                    <div className="esport-hotMatch">
                        <div className="hotMatch-left">
                            <div className="hotMatch-streamCard-left">
                                <StreamCard
                                    id='22'
                                    userId='22'
                                    imgURL='https://img.nimo.tv/o/banner/8F8FC0E6B5F43F4EAA23B89D46BA24A_f8cdd1ac6f5f94a9d07143ed8e2a900b.jpg/w800_l0/img.webp'
                                    type='CS:SO'
                                    userImgURL='https://img.nimo.tv/t/1599517086452/202008181597748427608_1599517086452_avatar.png/w120_l0/img.webp'
                                    title='PGL Major 2022 ngay 4'
                                    userName='500PROSTF'
                                    language=''
                                    counter='24k'
                                />
                            </div>
                        </div>
                        <div className="hotMatch-right">
                            <div className="hotMatch-streamCard-right">
                                <StreamCard
                                    id='23'
                                    userId='23'
                                    imgURL='https://img.nimo.tv/o/banner/96E3237760C2DC5493E9D105BB37FB80_924c52ed896d74f60433fa66f0c81e17.jpg/w800_l0/img.webp'
                                    type='LOL'
                                    userImgURL='https://img.nimo.tv/t/1599517960242/202109011630497854218_1599517960242_avatar.png/w120_l0/img.webp'
                                    title='TES VS RNG LPL 2022 '
                                    userName='lol seagame'
                                    language=''
                                    counter='83'
                                />
                            </div>
                            <div className="hotMatch-streamCard-right">
                                <StreamCard
                                    id='24'
                                    userId='24'
                                    imgURL='https://img.nimo.tv/o/banner/9FE52AE3E588000F17DD08BD97FE51EE_a2827c6553a8f885b071149ba701e0f0.jpg/w800_l0/img.webp'
                                    type='CS:SO'
                                    userImgURL='https://img.nimo.tv/t/1599512027183/202204121649740639460_1599512027183_avatar.png/w120_l0/img.webp'
                                    title='PCSC4 APEC 2022'
                                    userName='500PROSTF'
                                    language=''
                                    counter='113'
                                />
                            </div>
                            <div className="hotMatch-streamCard-right">
                                <StreamCard
                                    id='25'
                                    userId='25'
                                    imgURL='https://img.nimo.tv/o/banner/7EDD47483269B267537BA6F05DCC7715_97280c391263c6c430a4322b048872bf.png/w800_l0/img.webp'
                                    type='PUPG mobile'
                                    userImgURL='https://img.nimo.tv/t/1599517092453/202107201626784013743_1599517092453_avatar.png/w120_l0/img.webp'
                                    title='PMWD 2021 final dayy'
                                    userName='PMWD'
                                    language=''
                                    counter='8'
                                />
                            </div>
                            <div className="hotMatch-streamCard-right">
                                <StreamCard
                                    id='26'
                                    userId='26'
                                    imgURL='https://img.nimo.tv/o/banner/67F2552BF089F82427E1249358BF83D9_a9525033222c76aa2b7ced0223b96199.jpg/w800_l0/img.webp'
                                    type='CS:SO'
                                    userImgURL='https://img.nimo.tv/t/1999513463341/202203151647328561185_1999513463341_avatar.png/w120_l0/img.webp'
                                    title='CHUNG KET PUPG'
                                    userName='500PROSTF'
                                    language=''
                                    counter='8,3k'
                                />
                            </div>
                        </div>
                    </div>
                    <div className="esport-title">
                        <img src="https://img.nimo.tv/o/banner/216D66953766043ED85F39D1065EA1B3_ea11e627e16d061d675930a77137e890.png/w88_l0/img.webp" alt=""
                            className="esport-title-img" />
                        <h4>
                            PUPG Mobile  <span className="esport-more">&gt;</span>
                        </h4>
                    </div>
                    <p className="esport-replay">Replay</p>
                    <div className="esport-replay-video">
                        <ReplayCard
                            id='31'
                            userId='31'
                            imgURL='https://img.nimo.tv/vw/sg/avp/7029060910577266554.jpg/h270_l0/img.webp'
                            type='PUPG'
                            userImgURL='https://img.nimo.tv/t/1999513512502/202202271645949816890_1999513512502_avatar.png/l0/img.webp'
                            title='NIMO CHALLENGE - CHUNG KET PUPG'
                            userName='Nimo turnuva'
                            viewCount='21,3k'
                            time='217:40'
                        />
                        <ReplayCard
                            id='32'
                            userId='32'
                            imgURL='https://img.nimo.tv/vt/2aac47f2vodtranshk1256238590/236447df3701925921243865601/coverBySnapshot/coverBySnapshot_10_0.jpg/h270_l0/img.webp'
                            type='PUPG'
                            userImgURL='https://img.nimo.tv/t/1599517092453/202107201626784013743_1599517092453_avatar.png/l0/img.webp'
                            title='NIMO PMWI day 2'
                            userName='Nimo turnuva'
                            viewCount='41,3k'
                            time='317:40'
                        />

                    </div>
                    <p className="esport-featured">Featured</p>
                    <div className="esport-featured-video">
                        <ReplayCard
                            id='33'
                            userId='33'
                            imgURL='https://img.nimo.tv/vt/2aac47f2vodtranshk1256238590/4a8c7aec8602268011000134841/coverBySnapshot/coverBySnapshot_10_0.jpg/h270_l0/img.webp'
                            type='PUPG'
                            userImgURL='https://img.nimo.tv/t/1599517960254/202203131647153206562_1599517960254_avatar.png/l0/img.webp'
                            title='PMPL Sea 2022'
                            userName='2022 PMLJ'
                            viewCount='81k'
                            time='279:40'
                        />
                        <ReplayCard
                            id='34'
                            userId='34'
                            imgURL='https://img.nimo.tv/vt/2aac47f2vodtranshk1256238590/433137e03701925923603481624/coverBySnapshot/coverBySnapshot_10_0.jpg/h270_l0/img.webp'
                            type='PUPG'
                            userImgURL='https://img.nimo.tv/vt/2aac47f2vodtranshk1256238590/433137e03701925923603481624/coverBySnapshot/coverBySnapshot_10_0.jpg/h270_l0/img.webp'
                            title='W2D1 MAtch 5v5'
                            userName=' ALsn turnuva'
                            viewCount='22,3k'
                            time='57:40'
                        />

                    </div>
                    <div className="esport-title">
                        <img src="https://img.nimo.tv/o/banner/6034F4CF201670296092F3D4474046FD_6afe99c696f3459ab5777bc493ac8f8e.png/w88_l0/img.webp" alt=""
                            className="esport-title-img" />
                        <h4>
                            Mobile Legends  <span className="esport-more">&gt;</span>
                        </h4>
                    </div>
                    <p className="esport-replay">Replay</p>
                    <div className="esport-replay-video">
                        <ReplayCard
                            id='31'
                            userId='31'
                            imgURL='https://img.nimo.tv/vt/dac70089vodtranssgp1256238590/40325820387702294655749328/coverBySnapshot/coverBySnapshot_120031_0.jpg/h270_l0/img.webp'
                            type='MBLG'
                            userImgURL='https://img.nimo.tv/t/1599517960322/202204131649833146401_1599517960322_avatar.png/l0/img.webp'
                            title='NIMO GALA 2021'
                            userName='NimoZONE'
                            viewCount='221,3k'
                            time='219:40'
                        />
                       <ReplayCard
                            id='18'
                            userId='18'
                            imgURL='https://img.nimo.tv/vt/dac70089vodtranssgp1256238590/53e2099c387702294859366017/coverBySnapshot/coverBySnapshot_120031_0.jpg/h270_l0/img.webp'
                            type='MBLG'
                            userImgURL='https://img.nimo.tv/t/1599517960322/202204131649833146401_1599517960322_avatar.png/l0/img.webp'
                            title='NIMO GALA 2021'
                            userName='NimoZONE'
                            viewCount='311,3k'
                            time='19:40'
                        />

                    </div>
                    <p className="esport-featured">Featured</p>
                    <div className="esport-featured-video">
                        <ReplayCard
                            id='33'
                            userId='33'
                            imgURL='https://img.nimo.tv/vt/cb253e3dvodtransger1256238590/f6db8c34387702299535017155/coverBySnapshot/coverBySnapshot_120031_0.jpg/h270_l0/img.webp'
                            type='MBLG'
                            userImgURL='https://img.nimo.tv/t/2039514760813/202201211642802234297_2039514760813_avatar.png/l0/img.webp'
                            title='se vs evos day 1'
                            userName='PMLJ'
                            viewCount='81k'
                            time='279:40'
                        />
                        <ReplayCard
                            id='34'
                            userId='34'
                            imgURL='https://img.nimo.tv/vt/dac70089vodtranssgp1256238590/07461039387702294865122297/coverBySnapshot/coverBySnapshot_120031_0.jpg/h270_l0/img.webp'
                            type='MBLG'
                            userImgURL='https://img.nimo.tv/t/1599517960322/202204131649833146401_1599517960322_avatar.png/l0/img.webp'
                            title='W2D1 MAtch 5v5'
                            userName=' ALsn turnuva'
                            viewCount='22,3k'
                            time='57:40'
                        />

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Esports;