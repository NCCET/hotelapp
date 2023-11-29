import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../config/firebase';
import axios from 'axios';

function AdminPage() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  const fetchData = async (searchQuery = '') => {
    try {
      const result = await axios.get('YOUR_API_URL');
      setData(result.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const deleteData = async (id) => {
    try {
      await axios.delete(`YOUR_API_URL/${id}`);
      setData(data.filter((item) => item.id !== id));
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  };

  const handleSearch = (event) => {
    const query = event.target.value;
    setSearchTerm(query);
    fetchData(query);
  };

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // User is signed in.
        setUser(user);
      } else {
        // No user is signed in.
        navigate('/login'); // Redirect to login page if not authenticated
      }
    });
    return unsubscribe;
  }, [navigate]);

  const handleLogout = () => {
    auth
      .signOut()
      .then(() => {
        // Sign-out successful.
        navigate('/login'); // Redirect to login page after sign out
      })
      .catch((error) => {
        // An error happened.
        console.error('Error signing out: ', error);
      });
  };

  

  // Get booking information from localStorage
  const bookingInfo = JSON.parse(localStorage.getItem('bookingInfo')) || {};

  const adminPageStyle = {
    backgroundColor: '#f0f0f0', // Background color
    padding: '20px',
    minHeight: '100vh', // Ensure the page takes at least the full height of the viewport
  };

  const tableStyle = {
    borderCollapse: 'collapse',
    width: '100%',
    marginBottom: '20px',
  };

  const thTdStyle = {
    border: '1px solid black',
    padding: '10px',
    textAlign: 'left',
  };

  const deleteButtonStyle = {
    backgroundColor: 'red',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '14px',
  };

  return (
    <div style={adminPageStyle}>
      <h1 style={{ textAlign: 'center', color: '#333' }}>Admin Page</h1>
      <p style={{ color: '#555' }}>Logged in as: {user ? user.email : 'Not logged in'}</p>
      <button style={{ ...deleteButtonStyle, float: 'right' }} onClick={handleLogout}>
        Logout
      </button>

      <div style={{ margin: '20px 0' }}>
        <input
          type='text'
          placeholder='Search'
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>

      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thTdStyle}>Name</th>
            <th style={thTdStyle}>Email</th>
            <th style={thTdStyle}>Phone</th>
            <th style={thTdStyle}>Address</th>
            <th style={thTdStyle}>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item) => (
            <tr key={item.id}>
              <td style={thTdStyle}>{item.name}</td>
              <td style={thTdStyle}>{item.email}</td>
              <td style={thTdStyle}>{item.phone}</td>
              <td style={thTdStyle}>{item.address}</td>
              <td style={thTdStyle}>
                <button style={deleteButtonStyle} onClick={() => deleteData(item.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div>
        <h2>Booking Information</h2>
        <p style={{ color: '#777' }}>Check-in Date: {bookingInfo.selectedDate}</p>
        {/* Add more booking details as needed */}
      </div>

      {/* Other components and functionalities for the admin page can be added here */}
      
    </div>
  );
}

export default AdminPage;
