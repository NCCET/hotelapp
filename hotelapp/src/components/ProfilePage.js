import React, { useState, useEffect } from 'react';
import { useAuth } from './AuthContext'; // Assuming an authentication context
import { updateUserProfile } from './userService'; // Service to update user profile
import defaultProfilePic from './images/default-profile-pic.png'; 
import 'tailwindcss/tailwind.css';

function ProfilePage() {
  
  
  const { currentUser, logout } = useAuth(); // Fetch current user details from context
  const [userData, setUserData] = useState({
    name: '',
    bio: '',
    contact: '',
    // Include other fields as needed
  });
  const [editing, setEditing] = useState(false);
  const [profilePic, setProfilePic] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false); // State for success message

  
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (currentUser) {
          const userData = await getUserData(currentUser.uid);
          setUserData(userData);
        }
      } catch (error) {
        setError('Failed to fetch user data');
      }
    };
  
    fetchData();
  }, [currentUser]);

  const getUserData = async (userId) => {
    try {
      // Fetch user data from a database or API using the provided userId
      // This is an example, replace it with your actual data fetching logic
      const response = await fetch(`https://yourapi.com/users/${userId}`);
      const userData = await response.json();
      return userData;
    } catch (error) {
      throw new Error('Failed to fetch user data');
    }
  };
const updateUserProfile = async (userId, userData) => {
  try {
    // Update user profile in a database or API using the provided userId and userData
    // This is an example, replace it with your actual update logic
    const response = await fetch(`https://yourapi.com/users/${userId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    const updatedUserData = await response.json();
    return updatedUserData;
  } catch (error) {
    throw new Error('Failed to update user profile');
  }
};
  

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = async () => {
    setLoading(true);
    setError('');
    try {
      await updateUserProfile(currentUser.uid, userData); // Update user profile

      // Upload profile picture if it exists
      if (profilePic) {
        // Implement logic to upload profile picture
      }

      setEditing(false);
      setSuccess(true); // Set success message
    } catch (err) {
      setError('Failed to save changes');
    } finally {
      setLoading(false);
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setProfilePic(file);
  };
  

  const handleLogout = async () => {
    try {
      await logout();
      // Redirect to the login page or any other desired action after logout
    } catch (err) {
      setError('Failed to log out');
    }
  };
  

  
  


  return (
    <div className="profile-container mx-auto max-w-md p-8">
      <h2 className="text-3xl font-bold mb-4">Profile Page</h2>
      {currentUser && (
        <div className="profile-content">
          <div className="profile-picture-container mb-4">
            <img
              src={profilePic || defaultProfilePic}
              alt="Profile"
              className="w-32 h-32 rounded-full mx-auto transition duration-300 ease-in-out transform hover:scale-110"
              
            />
            {editing && (
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="mt-2"
              />
            )}
          </div>
          <p>Email: {currentUser.email}</p>
          {editing ? (
            <div>
              <input
                type="text"
                value={userData.name}
                onChange={(e) =>
                  setUserData({ ...userData, name: e.target.value })
                }
                placeholder="Name"
                className={`border rounded p-2 mb-4 w-full ${
                  userData.name.length === 0 ? 'border-red-500' : 'border-gray-300'
                }`}
              />

{userData.name.length === 0 && (
  <p className="text-red-500">Name is required</p>
)}

              <textarea
                value={userData.bio}
                onChange={(e) =>
                  setUserData({ ...userData, bio: e.target.value })
                }
                placeholder="Bio"
                className="border rounded p-2 mb-4 w-full"
              />
              <input
                type="text"
                value={userData.contact}
                onChange={(e) =>
                  setUserData({ ...userData, contact: e.target.value })
                }
                placeholder="Contact"
                className="border rounded p-2 mb-4 w-full"
              />
              <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-0 px-4 rounded mr-2 transition duration-300"
                onClick={handleSave}
                disabled={loading}
              >
                Save
              </button>
              <button
                onClick={() => setEditing(false)}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-medium py-0 px-4 rounded"
              >
                Cancel
              </button>
            </div>
          ) : (
            <button
              onClick={handleEdit}
              className="bg-green-500 hover:bg-green-700 text-white font-medium py-0 px-4 rounded"
              disabled={loading}
            >
              Edit
            </button>
          )}
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-700 text-white font-medium py-0 px-4 rounded mt-4"
          >
            Logout
          </button>
          {error && <p className="text-red-500 mt-4">Error: {error}</p>}
          {success && <p className="text-green-500 mt-4">Profile updated successfully!</p>}
        </div>
      )}
    </div>
  );
}

export default ProfilePage;
