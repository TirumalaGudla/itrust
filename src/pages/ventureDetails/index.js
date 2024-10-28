import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import DoneIcon from "@mui/icons-material/Done";
// import RemoveIcon from "@mui/icons-material/Remove";
// import { FaRoad } from "react-icons/fa6";
import { facilities, imageTabs } from "../../appConstants";
import Header from '../../components/Header/Header.js';
import Footer from "../../components/Footer";
import "./index.css";

const VentureDetails = () => {
    const [activeImgId, setActiveImgId] = useState(0);

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, []);

    return (
        <div className="venture-details-bg">
            <Header />
            <img src="./new-bg.jpg" alt="bg" className="bg-image" />
            <div className="details-box">
                <img src="./LVR.png" alt="bg" className="logo" />
                <div className="header-section">
                <span>
                        </span>
                    <h2>
                        LVR Gardens{" "} <br />
                        <span>
                            <Link to="/company-details">(by Sri Bhavya Constructions & Developers)</Link>
                        </span>
                    </h2>
                    <Link to="/layout" className="view-layout-btn">
                        View Layout
                    </Link>
                </div>
                <p>

                    LVR Gardens is a CRDA-approved gated community that offers a luxurious and secure lifestyle with an array of modern amenities. The community features a grand main entrance arch with security, centrally monitored CCTV cameras, and 60ft main roads with dividers and street lights. Residents enjoy the convenience of 40ft internal blacktop roads, overhead tanks, solar-fenced compound walls, and individual plot water tap connections. Designed with families in mind, the community provides a children's play area with open space, electric supply, a drainage system, and avenue plantation. Additionally, LVR Gardens boasts a clubhouse and recreation center equipped with a modern gymnasium, indoor games, and a multipurpose hall. The community also includes a swimming pool, jogging and walking tracks, landscaped parks and gardens, and an open-air amphitheater for community events. A shopping complex, rainwater harvesting systems, waste management, and high-speed Wi-Fi connectivity further enhance the living experience.
                </p>
                <p>
                    Strategically located with easy access to major highways, commercial hubs, and entertainment centers, LVR Gardens is a prime investment with high appreciation potential. The community emphasizes green and sustainable living, offering eco-friendly practices such as solar power and rainwater harvesting. It fosters a vibrant social life with regular events and activities, ensuring a strong sense of belonging. On-site healthcare facilities, a school and daycare center, guest parking, and 24/7 security add to the convenience and safety of residents. Flexible payment plans make it accessible to various financial needs. Invest in LVR Gardens for a tranquil, modern living experience surrounded by natural landscapes and a thriving community.
                </p>

                <div className="image-view-box">
                    <img src={imageTabs[activeImgId].img} alt="bg" />
                    <div className="image-tabs">
                        {imageTabs.map((item) => (
                            <img
                                src={item.img}
                                alt="bg"
                                onClick={() => setActiveImgId(item.id)}
                                style={{
                                    opacity: activeImgId === item.id ? "0.7" : "1",
                                }}
                            />
                        ))}
                    </div>
                </div>
                <div className="facilities">
                    <h3>Venture Amenities </h3>
                    <ul className="facilities-list">
                        {facilities.map((e) => {
                            const { icon } = e;
                            return (
                                <li key={e.id}>
                                    {/* {item.availability ? (
                                    <DoneIcon sx={{ color: "green" }} />
                                ) : (
                                    <RemoveIcon sx={{ color: "gray" }} />
                                )} */}
                                    {icon}
                                    <p>{e.text}</p>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div className="highlights">
                    <h3>Location HighLights</h3>
                    <ul className="highlights-list">
                        <li>3 KM to School</li>
                        <li>1 KM to College</li>
                        <li>1 KM to Store</li>
                        <li>2 KM to Hospital</li>
                        <li>500 Mtrs to Public Transportation</li>
                        <li>750 mtrs (Vejendla Station ) to Railway Station</li>
                        <li>1 KM to Bus Stop</li>
                    </ul>
                </div>
                <div className="layout-box">
                    {/* <h3>Layout</h3> */}
                    <Link to="/layout"> <h3>Layout</h3></Link>
                    <img src="./new-layout.jpg" alt="bg" />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default VentureDetails;
