import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { onAuthStateChanged, signOut, setPersistence, browserLocalPersistence, }from 'firebase/auth';
import { auth, getAuth } from '../config/firebase'; 
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../config/firebase';

 



function Home ({navigation}) {

  



  const handleBooking = () => {
    // Assuming '/Booking' is the correct route for booking
    navigate('/Booking');
  };


  const [user, setUser] = useState(null);
  const [rooms, setRooms] = useState([]);


  const fetchRooms = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "Rooms"));
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      // Assuming setRooms is a function that sets state or performs an action with the fetched data
      setRooms(newData);
      console.log(newData);
    } catch (error) {
      alert("Error fetching rooms");
      console.error("Error fetching rooms: ", error);
    }
  };
useEffect(() => {
    fetchRooms();
}, []);




  useEffect(() => {
    const authInstance = getAuth(); // Use auth directly
    // Set session persistence to LOCAL
    setPersistence(authInstance, browserLocalPersistence)
      .then(() => {
        // Existing authentication state is maintained on page reload
        const unsubscribe = onAuthStateChanged(authInstance, (user) => {
          setUser(user);
        });
        return () => unsubscribe();
      })
      .catch((error) => {
        console.error('Error setting persistence:', error.message);
      });
  }, []);


  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        alert('Logout successful');
        setUser(null); // Clear the user state upon logout
        navigate('/login');
      })
      .catch((error) => {
        console.error('Error during logout:', error.message);
      });
  };

  

  const navigate = useNavigate();

  const Next = (room) => {
    navigate('/Booking', {state: room})
    console.log('Clicked room:', room);
    // Implement navigation or other functionality
  };

  





  return (
    <div  className="relative bg-white box-border w-full h-[11282px] overflow-hidden text-left text-base text-black font-sans border-[1px] border-solid border-black">
       <header>
        {/* Header content goes here */}
        <img
          className="w-[100px] h-[100px] object-cover"
          src={require('./images/images.png')}
          alt=""
        />
      </header>



      <img
        className="absolute top-[10406px] left-[53px] w-[100px] h-[100px] "
        alt=""
        src={require('./images/images.png')}

      />
      <img
        className="absolute top-[414px] left-[50px] w-[550px] h-[507px] object-cover"
        alt=""
        src={require('./images/greg.jpg')} 
      />
      <div className="absolute top-[414px] left-[700px] font-kapakana text-sienna-100 text-center">
        Enjoy your stay!
      </div>


        
      <div className="absolute top-[4375px] left-[1000px] font-kapakana text-sienna-300 text-center">
        About us
      </div>


      <div className="absolute top-[2876px] left-[88px] text-21xl font-kapakana text-sienna-300 text-center">
        Room Type
      </div>
      <div className="absolute top-[8233px] left-[129px] text-21xl font-medium text-sienna-300 text-center">
        Bar
      </div>
      <div className="absolute top-[6319px] left-[78px] font-kapakana text-sienna-300 text-center">
        Take a tour
      </div>
      <div className="absolute top-[9311px] left-[54px] text-21xl font-medium text-sienna-300 text-center">
        Newsletter
      </div>
      <div className="absolute top-[7986px] left-[1088px] font-kapakana text-sienna-300 text-center">
        Our Blog
      </div>
      <b className="absolute top-[470px] left-[700px] text-[30px] inline-block text-black w-[480px]">
        AN enchanting escape in the heart of Aix-en-Provence
      </b>
      <div className="absolute top-[6422px] left-[53px] text-50px font-semibold text-black whitespace-pre-wrap">
        <p className="m-0">Discover our</p>
        <p className="m-0">{`   garden `}</p>
      </div>
      <div className="absolute top-[8101px] left-[1088px] text-[40px] font-semibold text-black">
        Outdoor Bar
      </div>

      
      <div className="absolute top-[10465px] left-[850px] text-[25px] font-semibold text-black">
        About
      </div>
      <div className="absolute top-[10465px] left-[1210px] text-[25px] font-semibold text-black">
        Privacy
      </div>
      <div className="absolute top-[10465px] left-[1000px] text-[25px] font-semibold text-black">
        Contact Us
      </div>
      <div className="absolute top-[9383px] left-[54px] text-45xl font-semibold text-black inline-block w-[1548px]">{`Subscribe to get updted  `}</div>
      <div className="absolute top-[4445px] left-[1000px] text-[40px] font-medium text-black inline-block w-[290px]">
        The perfect luxury room for you
      </div>
      <div className="absolute top-[650px] left-[700px] leading-[60px] font-medium inline-block w-[1000px] h-[302px] text-[50px]">
        The are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form by injected humour
      </div>
      <div className="absolute top-[4620px] left-[1000px] leading-[40px] font-small inline-block w-[390px] text-[30px]">
        This is the about us context
      </div>
      <div className="absolute top-[2463px] left-[50px] font-medium inline-block w-[500px] text-[20px]">
        The are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form by injected humour
      </div>
      <div className="absolute top-[6787px] left-[53px] font-medium inline-block w-[500px] text-[20px]">
        The are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form by injected humour
      </div>
      <div className="absolute top-[9575px] left-[80px] font-medium inline-block w-[500px] text-[20px]">
        The are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form by injected humour
      </div>
      <div className="absolute top-[10540px] left-[80px] font-small inline-block w-[500px] text-[20px]">
        The are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form by injected humour
      </div>
      <div className="absolute top-[1210px] left-[1000px] bg-sienna-300 w-[285px] h-[115px]" />
      <div className="absolute top-[7098px] left-[54px] bg-sienna-300 w-[285px] h-[115px]" />
     
      <div className="absolute top-[9364px] left-[943px] rounded-[100px] bg-whitesmoke box-border w-[346px] h-[115px] border-[6px] border-solid border-sienna-200" />
      
      <div className="absolute top-[7124px] left-[81px] text-whitesmoke">
      <Link to="/Garden">  <button > Start Now</button> </Link>   
      </div>

      
      <button >
        <div className="absolute top-[9393px] left-[998px] text-sienna-300">
        Get start
      </div>
      </button>
      
      <div className="absolute top-[27px] left-[2350px] flex flex-row items-center justify-start gap-[321px] text-center text-21xl text-black">
        <div className="flex flex-row items-start justify-start gap-[42px] z-[0]">
          <div className="relative font-small text-[40px] left-[-2000px]">Home</div>


        
          <div className="relative font-small text-[-10px] left-[-2000px]">  <button >About  </button></div>
        

          <button>
             <div className="relative font-medium text-[40px] left-[-2000px]">Features</div>
          </button>
         <button>
          <div className="relative font-small text-[40px] left-[-2000px]">Contact Us</div>
         </button>
          
          <button>
            <div className="relative font-small text-[40px] left-[-2000px]">FAQ</div>
          </button>
          
        </div>
        

        
        
      </div>
      
      <div className="absolute top-[1488px] left-[366px] flex flex-row items-center justify-start gap-[48px] text-black">
       
        <img
          className="relative w-[13.51px] h-[15.25px]"
          alt=""
          src="/polygon-2.svg"
        />
        
        <img
          className="relative w-[25.98px] h-[22.5px]"
          alt=""
          src="/polygon-3.svg"
        />
        
        <img
          className="relative w-[25.98px] h-[22.5px]"
          alt=""
          src="/polygon-4.svg"
        />
      </div>
      
      
      
      
      
      <div className="absolute top-[11060px] left-[125px] text-21xl text-white">{`Enter your email `}</div>

      
     
    <div className="absolute top-[1240px] left-[1025px] font-semibold text-base">
      <button onClick={handleBooking}>Book Now</button>
    </div>
      <b className="absolute top-[2209px] left-[50px] text-[50px] text-black text-center">
        Suggested room
      </b>

      
      <div className="absolute top-[2637px] left-[4562px] w-[107px] h-[105px] object-cover">
        <img
          alt=""
          src="/left-3@2x.png"
          style={{ width: '150px', height: '150px' }}
        />
      </div>


      <div className="absolute top-[2950px] left-[80px] flex flex-wrap gap-4">
  {rooms.map((room) => (
    <div className="relative" key={room.id} onClick={() => Next(room)}>
      <img
        className="w-[400px] h-[300px] object-cover"
        alt=""
        src={room.image}
      />
    </div>
  ))}
</div>




      <img
        className="absolute top-[8318px] left-[120px] w-[400px] h-[300px] object-cover"
        alt=""
        src={require('./images/th (2).jpg')}
      />

{/* 
          <Link to="/Booking">

          <img
                className="absolute top-[2950px] left-[500px] w-[400px] h-[300px] object-cover"
                alt=""
                src={require('./images/234556690.jpg')}
              />

            </Link> */}
      

      <img
        className="absolute top-[8318px] left-[550px] w-[400px] h-[300px]  object-cover"
        alt=""
        src={require('./images/th (2).jpg')} 
      />

{/* 
            <Link to="/Booking">

            <img
                    className="absolute top-[2950px] left-[925px] w-[450px] h-[300px]object-cover"
                    alt=""
                    src={require('./images/le-pigonnet-aix-en-provence_big.jpg')}
                  />

            </Link> */}

      

      <img
        className="absolute top-[8318px] left-[1410px] w-[400px] h-[300px] object-cover"
        alt=""
        src={require('./images/garden-lounge-bar.jpg')} 
      />


      {/* <Link to="/Booking">
      <img
        className="absolute top-[2950px] left-[1400px] w-[400px] h-[300px] object-cover"
        alt=""
        src={require('./images/chambre-deluxe.jpg')}
        />
        </Link> */}
      

      <img
        className="absolute top-[8318px] left-[979px] w-[400px] h-[300px]  object-cover"
        alt=""
        src={require('./images/234560123.jpg')} 
      />

      <img
        className="absolute top-[4800px] left-[650px] w-[250px] h-[350px] object-cover"
        alt=""
        src={require('./images/private-terrace-overlooking.jpg')}
      />

      <img
        className="absolute top-[4382px] left-[53px] w-[500px] h-[600px] object-cover"
        alt=""
        
        src={require('./images/TabletHotels_Le-Pigonnet-1.jpg')}
      />

      <img
        className="absolute top-[6358px] left-[600px] w-[900px] h-[900px] object-cover"
        alt=""
        src={require('./images/th (1).jpg')}
      />

      <img
        className="absolute top-[4383px] left-[650px] w-[250px] h-[350px] object-cover"
        alt=""
        src={require('./images/presidential-suite.jpg')} 
      />

      <div className="absolute top-[4920px] left-[1000px] text-[23px] font-medium text-sienna-100">
        <p className="m-0">10+</p>
        <p className="m-0 text-black">Restarunt</p>
      </div>

      <div className="absolute top-[5050px] left-[1000px] text-[23px] font-medium text-sienna-100">
        <p className="m-0">29</p>
        <p className="m-0 text-black">GMY</p>
      </div>

      <div className="absolute top-[5050px] left-[1300px] text-[23px] font-medium text-sienna-100">
        <p className="m-0">7</p>
        <p className="m-0 text-black">Beach</p>
      </div>
      <div className="absolute top-[4920px] left-[1300px] text-[23px] font-medium text-sienna-100">
        <p className="m-0">109</p>
        <p className="m-0 text-black">Rooms</p>
      </div>
      
      
      



      <div className="absolute top-[10663px] left-[850px] text-[20px] font-medium">
        Home
      </div>
      <div className="absolute top-[10769px] left-[850px] text-[20px] font-medium">
        Features
      </div>
      <div className="absolute top-[10981px] left-[850px] text-[20px] font-medium">
        Reviews
      </div>
      <div className="absolute top-[10981px] left-[1000px] text-[20px] font-medium">
        Terms
      </div>
      <div className="absolute top-[10875px] left-[850px] text-[20px] font-medium">
        FAQs
      </div>
      <div className="absolute top-[11087px] left-[850px] text-[20px] font-medium">
        Stories
      </div>
      <div className="absolute top-[10875px] left-[1000px] text-[20px] font-medium">
        Payment
      </div>
      <div className="absolute top-[10769px] left-[1000px] text-[20px] font-medium">
        Policy
      </div>
      <div className="absolute top-[10760px] left-[1210px] text-[20px] font-medium">
        gregorykgosiejang0@gmail.com
      </div>
      <div className="absolute top-[10663px] left-[1000px] text-[20px] font-medium">
        Privacy
      </div>
      <div className="absolute top-[10654px] left-[1210px] text-[20px] font-medium">
        +27 78835261
      </div>
   
     {/* Logout button */}
     {user && (
      <Link to="/login">
        <div className="absolute top-[30px] left-[1550px] text-whitesmoke">
          
            <button
              onClick={handleLogout}
              className="border-2 border-black rounded-md px-4 py-2 transition duration-300 hover:bg-black hover:text-white"
            >
              Logout
            </button>
          
        </div>
        </Link>
      )}
    </div>
  );
}

export default Home;