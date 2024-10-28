import React from 'react';
import './topCities.css';

const cities = [
    { name: 'Vijayawada', image: 'vijayawada.jpg' },
    { name: 'Guntur', image: 'guntur.jpg' },
    { name: 'Hyderabad', image: 'hyderabad.jpg' },
    { name: 'Chennai', image: 'chennai.jpg' },
  
];

const TopCities = () => {
    return (
        <div className="container1">
            <h1 className="heading1">Top Cities</h1>
            <div className="image-gallery">
                {cities.map((city, index) => (
                    <div key={index} className="image-item">
                        <img src={city.image} alt={city.name} />
                        <div className="city-name">{city.name}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TopCities;
