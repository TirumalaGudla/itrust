import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { topventures } from '../../appConstants';
import Header from '../../components/Header/Header.js';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './index.css';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';
import TopCities from './topCities';


const Home = () => {
  const [approvedBy, setApprovedBy] = useState('DTPC');
  const [searchText, setSearchText] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    // Implement search functionality
  };

  const handleChangeApprovedBy = (e) => {
    setApprovedBy(e.target.value);
  };

  const handleClick = () => {
    if (searchText.trim() !== '') { // Check if search text is not empty
      navigate('/venture-in-guntur');
    }
    // Optionally, you can add an else condition to handle empty search case
  };

  return (
    <div className="home-bg">
<Header />
      <img src="./new-bg.jpg" alt="bg" className="bg-image" />

      <div className="approved-div">
        <div className="find-property-box-bg">
          <div className="find-property-box">
            <h4>Find Your Property</h4>
            <form onSubmit={(e) => handleSearch(e)}>
              <div className="input-select-box">
                <TextField
                  size="small"
                  id="outlined-basic"
                  label="Venture Name/City/Village"
                  variant="outlined"
                  sx={{ width: '350px' }}
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                />
                <FormControl sx={{ width: '150px' }}>
                  <InputLabel id="demo-simple-select-label">Approved By</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={approvedBy}
                    label="Approved By"
                    size="small"
                    onChange={(e) => handleChangeApprovedBy(e)}>
                    <MenuItem value="DTPC">DTPC</MenuItem>
                    <MenuItem value="UDS">UDS</MenuItem>
                    <MenuItem value="CRDA">CRDA</MenuItem>
                    <MenuItem value="RERA">RERA</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <button type="submit" onClick={handleClick}>Search</button>
            </form>
          </div>
        </div>
        < TopCities />
        {/* <h1>Ventures Approved by</h1>
        <ul>
          <li>
            <p>DTCP</p>
            <span>Approved</span>
          </li>
          <li>
            <p>UDA</p>
            <span>Approved</span>
          </li>
          <li>
            <p>CRDA</p>
            <span>Approved</span>
          </li>
          <li>
            <p>RERA</p>
            <span>Approved</span>
          </li>
        </ul> */}
        <h1 style={{ marginTop: '25px' }}>Top Ventures</h1>
      </div>

      <div className="top-ventures">
        <ul>
          {topventures.map((item) => (
            <li key={item.id}>
              {/* <img src={item.img} alt={item.heading} /> */}
              <Link to="/venture-details"><img src={item.img} alt={item.heading} /></Link>
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
                    //   backgroundColor: tag.bgColor,
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
          ))}
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
