import { MissionSectionWrap, MissionSectionContainer, MissionInfo, MissionImgBanner, Missions, Mission } from "./styled";
import girlPhoto from '../../../images/gardener_mission.jpg';
import { FcGlobe, FcIdea } from 'react-icons/fc';
import { IoPlayOutline } from 'react-icons/io5';


function MissionSection() {
    return (
        <MissionSectionWrap>
            <MissionSectionContainer>
                <MissionInfo>
                    <small>welcome to gardeofy</small>
                    <h2>10+ Years of Experience in Gardening & Landscaping</h2>
                    <Missions>
                        <Mission>
                            <span><FcGlobe /></span>
                            <div className="mission_texts">
                                <h4>our mission</h4>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed 
                                    do eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed 
                                    do eiusmod tempor incididunt ut labore
                                </p>
                            </div>
                        </Mission>

                        <Mission>
                            <span><FcIdea /></span>
                            <div className="mission_texts">
                                <h4>our vision</h4>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed 
                                    do eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed 
                                    do eiusmod tempor incididunt ut labore
                                </p>
                            </div>
                        </Mission>
                    </Missions>
                    
                    <div style={{textAlign: 'center'}}>
                        <span className="btn">discover more</span>
                    </div>
                </MissionInfo>

                <MissionImgBanner>
                    <img src={girlPhoto} alt="mission-girl" />
                    <span>
                        <IoPlayOutline />
                    </span>
                </MissionImgBanner>
            </MissionSectionContainer>
        </MissionSectionWrap>
    )
}

export default MissionSection;