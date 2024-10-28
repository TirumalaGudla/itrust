import { Link } from "react-router-dom";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { topventures1 } from "../../appConstants";
import Header from '../../components/Header/Header.js';
import Footer from "../../components/Footer";
import "./index.css";

const CompanyDetails = () => {
    return (
        <div className="comp-details-bg">
            <Header />
            <img src="./new-bg.jpg" alt="bg" className="bg-image" />
            <div className="details-box">
                <img src="./Realtor-logo.png" alt="bg" className="logo" />
                <h2>Sri Bhavya Constructions & Infra</h2>

                <p className="description">
                Sri Bhavya Constructions Private Limited, established in 2016, is a distinguished private limited company engaged in the construction of both residential and commercial properties. With a commitment to excellence, the company has quickly become a key player in the construction industry, specializing in building modern apartments, luxurious villas, integrated townships, state-of-the-art office spaces, commercial complexes, and durable industrial facilities. Their mission is to deliver high-quality construction solutions that cater to the diverse needs of their clients, creating aesthetically pleasing, structurally sound, and environmentally sustainable buildings. Adhering to core values of quality, integrity, innovation, and customer satisfaction, Sri Bhavya Constructions has successfully completed several notable projects, reflecting their dedication to excellence and strict quality standards. The company also places a strong emphasis on sustainability, integrating eco-friendly practices and materials to minimize environmental impact and promote energy efficiency. Looking ahead, Sri Bhavya Constructions plans to expand its portfolio with new and innovative projects, exploring new markets and leveraging advanced construction techniques. For more information, they can be reached at their head office, via phone, email, or through their website.
                </p>

                <div className="on-going-projects">
                    <h4>On Going Projects</h4>
                    <ul className="on-going-projects-list">
                        {topventures1.map((item) => (
                            <Link to="/venture-details">
                                <li key={item.id}>
                                    <img src={item.img} alt={item.heading} />
                                    <FavoriteBorderIcon className="heart-icon" />
                                    <p className="heading">{item.heading}</p>
                                    <div className="address-box">
                                        <LocationOnIcon className="loc-icon" />
                                        <p>{item.address}</p>
                                    </div>
                                    <ul className="tags-list">
                                        {item.tags.map((tag) => (
                                            <li
                                                key={tag.id}
                                                // style={{
                                                //     backgroundColor: tag.bgColor,
                                                // }}
                                                >
                                                {/* {tag.text} */}
                                            </li>
                                        ))}
                                    </ul>
                                    <span className="price">
                                    <span>&#8377;{item.price}</span>/Sqyards
                                    </span>
                                    <hr />
                                    <div className="counts">
                                        <div className="count-item">
                                            <p>Area</p>
                                            <span>{item.area}</span>
                                        </div>
                                        <div className="count-item">
                                            <p>Beds</p>
                                            <span>{item.beds}</span>
                                        </div>
                                        <div className="count-item">
                                            <p>Baths</p>
                                            <span>{item.baths}</span>
                                        </div>
                                        <div className="count-item">
                                            <p>Garages</p>
                                            <span>{item.garages}</span>
                                        </div>
                                    </div>
                                </li>
                            </Link>
                        ))}
                    </ul>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default CompanyDetails;
