import React, { useState } from "react";
import sereneGardenImage from './images/serene-garden.jpg';
import gardenDetailsImage from './images/garden-details.jpg';
import weddingImage from './images/wedding.jpg';
import partyImage from './images/party.jpg';
import Admin from './Admin'; // Import the Admin component


const locationOptions = [
  { value: "garden", label: "Visit Garden" },
  { value: "wedding", label: "Book for Wedding" },
  { value: "party", label: "Book for Party" },
];

function Garden() {

  const [bookings, setBookings] = useState([]); // State to store bookings

  
  const [bookingLocation, setBookingLocation] = useState("garden");
  const [bookingType, setBookingType] = useState("garden");
  const [bookingDate, setBookingDate] = useState("");
  const [bookingTime, setBookingTime] = useState("");
  const [isBookingSubmitted, setIsBookingSubmitted] = useState(false);

  const handleBookingSubmit = (event) => {
    event.preventDefault();
    // Here you'd handle the booking submission logic for different booking types
    // e.g., send requests to your backend based on the booking type
    console.log("Booking Location:", bookingLocation);
    console.log("Booking Type:", bookingType);
    console.log("Booking Date:", bookingDate);
    console.log("Booking Time:", bookingTime);
    setIsBookingSubmitted(true);
  };

  const handleCancelBooking = () => {
    // Here you'd handle the cancellation logic similarly for different booking types
    console.log("Booking Cancelled!");
    setIsBookingSubmitted(false);
    setBookingDate("");
    setBookingTime("");
  };

  return (
    <div className="bg-gradient-to-b from-softgreen to-lightgreen min-h-screen flex flex-col items-center justify-center text-gray-800">
      <div className="container mx-auto px-4 py-8">
        {/* Title */}
        <h1 className="text-4xl font-bold text-center mb-8">Welcome to Our Beautiful Garden</h1>

        {/* Serene Garden Image */}
        <div className="flex justify-center">
          <img
            className="w-full md:max-w-lg h-auto"
            alt="Serene Garden - A lush green garden with colorful flowers"
            src={sereneGardenImage}
          />
        </div>


         {/* Location Selection */}
         <div className="mb-4">
          <label htmlFor="bookingLocation" className="mb-2">Select Location:</label>
          <select
            id="bookingLocation"
            value={bookingLocation}
            onChange={(e) => {
              setBookingLocation(e.target.value);
              setBookingType(e.target.value);
            }}
            className="mb-4"
          >
            {locationOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        {/* Description */}
        <p className="text-center text-lg my-8">
          Explore the serene beauty and tranquility of our lush garden, an oasis of nature's wonders.
        </p>

        {/* Booking Form */}
        {!isBookingSubmitted ? (
          <form onSubmit={handleBookingSubmit} className="flex flex-col items-center">
            <label htmlFor="bookingType" className="mb-2">Select Booking Type:</label>
            <select
              id="bookingType"
              value={bookingType}
              onChange={(e) => setBookingType(e.target.value)}
              className="mb-4"
            >
              <option value="garden">Visit Garden</option>
              <option value="wedding">Book for Wedding</option>
              <option value="party">Book for Party</option>
            </select>
            <label htmlFor="bookingDate" className="mb-2">Select Date:</label>
            <input
              type="date"
              id="bookingDate"
              value={bookingDate}
              onChange={(e) => setBookingDate(e.target.value)}
              required
              className="mb-4"
            />
            <label htmlFor="bookingTime" className="mb-2">Select Time:</label>
            <input
              type="time"
              id="bookingTime"
              value={bookingTime}
              onChange={(e) => setBookingTime(e.target.value)}
              required
              className="mb-4"
            />
            <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600">
              Book {bookingType === 'garden' ? 'Visit' : bookingType.charAt(0).toUpperCase() + bookingType.slice(1)}
            </button>
          </form>
       ) : (
        
        <div className="flex flex-col items-center">
          
          {/* Confirmation details */}
          
          <button onClick={handleCancelBooking} className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600">
            Cancel Booking
          </button>
        </div>
      )}

        {/* Images for Wedding and Party */}
        {bookingLocation === 'wedding' && (
          <div className="flex justify-center mt-8">
            <img
              className="w-full md:max-w-lg h-auto"
              alt="Wedding in Garden"
              src={weddingImage}
            />
          </div>
        )}
        {bookingLocation === 'party' && (
          <div className="flex justify-center mt-8">
            <img
              className="w-full md:max-w-lg h-auto"
              alt="Party in Garden"
              src={partyImage}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Garden;



