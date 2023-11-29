import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from "react-router-dom";

function Booking() {
  const [selectedDate, setSelectedDate] = useState('');
  const [isBooked, setIsBooked] = useState(false);
  const [numRooms, setNumRooms] = useState(1);
  const [pricePerRoom, setPricePerRoom] = useState(1500); // Initial price per room

  const location = useLocation();
  const data = location.state;
  console.log(data)

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleBookNow = () => {
    setIsBooked(true);

    // Calculate total price based on the number of rooms and price per room
    const totalPrice = numRooms * pricePerRoom;

    // Store booking information in localStorage
    const bookingInfo = {
      selectedDate,
      numRooms,
      pricePerRoom,
      totalPrice,
    };
    localStorage.setItem('bookingInfo', JSON.stringify(bookingInfo));
  };

  const containerStyle = {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #e0e0e0',
    borderRadius: '8px',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
  };

  const imageStyle = {
    width: '100%',
    height: 'auto',
    marginBottom: '20px',
    borderRadius: '8px',
  };

  const inputStyle = {
    width: '100%',
    padding: '12px',
    marginBottom: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    fontSize: '16px',
  };

  const buttonStyle = {
    padding: '12px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
  };

  return (
    <div>
      <div style={containerStyle}>
        <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Booking Details</h1>


        <Link to="/Booking">

          <img style={imageStyle} alt="" src={data.image} />

        </Link>

        

        <div style={{ marginBottom: '20px' }}>
          <Link to="/admin" style={{ textDecoration: 'none', color: '#4CAF50', fontWeight: 'bold' }}>
            Go to Admin
          </Link>
        </div>

        <div>
          <label htmlFor="checkInDate">Check-in</label>
          <input
            style={inputStyle}
            type="date"
            id="checkInDate"
            value={selectedDate}
            onChange={handleDateChange}
          />
        </div>

        <div>
          <label htmlFor="checkOutDate">Check-out</label>
          <input
            style={inputStyle}
            type="date"
            id="checkOutDate"
            value={selectedDate}
            onChange={handleDateChange}
          />
        </div>

        <input style={inputStyle} type="search" placeholder="Search" />

        <h1 style={{ marginBottom: '10px', fontSize: '20px', color: '#4CAF50' }}>Rate | Cancellation Policy</h1>

        <div>
          <div style={{ marginBottom: '20px', fontSize: '18px' }}>Price Per Room/Night</div>
          <input
            style={inputStyle}
            type="number"
            placeholder="Enter Price"
            value={pricePerRoom}
            onChange={(e) => setPricePerRoom(e.target.value)}
          />
        </div>

        <div>
          <div style={{ marginBottom: '10px', fontSize: '18px' }}>Number of Rooms</div>
          <input
            style={inputStyle}
            type="number"
            placeholder="Enter Number of Rooms"
            value={numRooms}
            onChange={(e) => setNumRooms(e.target.value)}
          />
        </div>

        <div>
          <button
            style={{ ...buttonStyle, border: '1px solid #4CAF50' }}
            onClick={handleBookNow}
            disabled={isBooked}
          >
            {isBooked ? 'Booking Confirmed' : 'Book Now'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Booking;
