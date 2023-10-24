import { FunctionComponent } from "react";
import{signInWithEmailAndPassword} from 'firebase/auth';
import {useNavigate, Link} from "react-router-dom";
import { useState } from 'react';
import {auth} from '../config/firebase'

function home () {
  







  return (
    <div className="relative bg-white box-border w-full h-[11282px] overflow-hidden text-left text-29xl text-darkslategray font-inter border-[1px] border-solid border-black">
      <img
        className="absolute top-[0px] left-[50px] w-[225px] h-[225px] object-cover"
         src={require('./images/images.png')} alt=""
      />
      <img
        className="absolute top-[10406px] left-[53px] w-[225px] h-[225px] object-cover"
        alt=""
        src={require('./images/images.png')}

      />
      <img
        className="absolute top-[414px] left-[50px] w-[1500px] h-[1074px] object-cover"
        alt=""
        src={require('./images/greg.jpg')} 
      />
      <div className="absolute top-[414px] left-[1675px] font-kapakana text-sienna-300 text-center">
        Enjoy your stay!
      </div>
      <div className="absolute top-[4291px] left-[1812px] font-kapakana text-sienna-300 text-center">
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
      <div className="absolute top-[7986px] left-[2401px] font-kapakana text-sienna-300 text-center">
        Our Blog
      </div>
      <b className="absolute top-[470px] left-[1696px] text-[96px] inline-block text-black w-[979px]">
        AN enchanting escape in the heart of Aix-en-Provence
      </b>
      <div className="absolute top-[6422px] left-[53px] text-45xl font-semibold text-black whitespace-pre-wrap">
        <p className="m-0">Discover our</p>
        <p className="m-0">{`   garden `}</p>
      </div>
      <div className="absolute top-[8101px] left-[2088px] text-45xl font-semibold text-black">
        Outdoor Bar
      </div>
      <div className="absolute top-[10480px] left-[1549px] text-45xl font-semibold text-black">
        About
      </div>
      <div className="absolute top-[10465px] left-[2290px] text-45xl font-semibold text-black">
        Privacy
      </div>
      <div className="absolute top-[10465px] left-[3109px] text-45xl font-semibold text-black">
        Contact Us
      </div>
      <div className="absolute top-[9383px] left-[54px] text-45xl font-semibold text-black inline-block w-[1548px]">{`Subscribe to get updted  `}</div>
      <div className="absolute top-[4382px] left-[1788px] text-45xl font-medium text-black inline-block w-[633px]">
        The perfect luxury room for you
      </div>
      <div className="absolute top-[905px] left-[1696px] leading-[75px] font-medium inline-block w-[1279px] h-[302px]">
        The are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form by injected humour
      </div>
      <div className="absolute top-[4745px] left-[1723px] leading-[80px] font-medium inline-block w-[1279px]">
        The are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form by injected humour
      </div>
      <div className="absolute top-[2463px] left-[50px] font-medium inline-block w-[1279px]">
        The are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form by injected humour
      </div>
      <div className="absolute top-[6787px] left-[53px] font-medium inline-block w-[1279px]">
        The are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form by injected humour
      </div>
      <div className="absolute top-[9575px] left-[80px] font-medium inline-block w-[1279px]">
        The are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form by injected humour
      </div>
      <div className="absolute top-[10665px] left-[80px] font-medium inline-block w-[1279px]">
        The are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form by injected humour
      </div>
      <div className="absolute top-[1210px] left-[1696px] bg-sienna-300 w-[285px] h-[115px]" />
      <div className="absolute top-[7098px] left-[54px] bg-sienna-300 w-[285px] h-[115px]" />
      <div className="absolute top-[1207px] left-[2204px] bg-whitesmoke box-border w-[346px] h-[115px] border-[3px] border-solid border-sienna-100" />
      <div className="absolute top-[9364px] left-[943px] rounded-[100px] bg-whitesmoke box-border w-[346px] h-[115px] border-[6px] border-solid border-sienna-200" />
      <div className="absolute top-[1236px] left-[1723px] text-whitesmoke">
        Start Now
      </div>
      <div className="absolute top-[7124px] left-[81px] text-whitesmoke">
      <Link to="/Booking">  <button > Start Now</button> </Link>   
      </div>
      <div className="absolute top-[1236px] left-[2259px] text-sienna-300">
        Read more
      </div>
      <div className="absolute top-[9393px] left-[998px] text-sienna-300">
        Get start
      </div>
      <div className="absolute top-[27px] left-[2350px] flex flex-row items-center justify-start gap-[321px] text-center text-21xl text-black">
        <div className="flex flex-row items-start justify-start gap-[42px] z-[0]">
          <div className="relative font-medium">Home</div>
          <div className="relative font-medium">About</div>
          <div className="relative font-medium">Features</div>
          <div className="relative font-medium">Contact Us</div>
          <div className="relative font-medium">FAQ</div>
        </div>
        <div className="relative bg-whitesmoke box-border w-[346px] h-[115px] z-[1] border-[3px] border-solid border-sienna-100" />
        <div className="absolute my-0 mx-[!important] top-[29px] left-[1233px] text-29xl font-semibold text-sienna-300 text-left z-[2]">
          Register
        </div>
      </div>
      <div className="absolute top-[1443px] left-[238px] bg-gainsboro w-[1932px] h-[163px]" />
      <div className="absolute top-[1488px] left-[366px] flex flex-row items-center justify-start gap-[48px] text-black">
        <div className="relative font-medium">Location</div>
        <img
          className="relative w-[13.51px] h-[15.25px]"
          alt=""
          src="/polygon-2.svg"
        />
        <div className="relative font-medium">Your Category</div>
        <img
          className="relative w-[25.98px] h-[22.5px]"
          alt=""
          src="/polygon-3.svg"
        />
        <div className="relative font-medium">Total Person</div>
        <img
          className="relative w-[25.98px] h-[22.5px]"
          alt=""
          src="/polygon-4.svg"
        />
      </div>
      <div className="absolute top-[1566px] left-[366px] text-xl font-medium text-dimgray inline-block w-[99px]">
        Select
      </div>
      <div className="absolute top-[1566px] left-[751px] text-xl font-medium text-dimgray inline-block w-[99px]">
        Select
      </div>
      <div className="absolute top-[1566px] left-[1204px] text-xl font-medium text-dimgray inline-block w-[99px]">
        Select
      </div>
      <div className="absolute top-[1447px] left-[1617px] bg-sienna-300 w-[553px] h-[159px]" />
      <div className="absolute top-[11005px] left-[54px] bg-sienna-400 w-[701px] h-[159px]" />
      <div className="absolute top-[11060px] left-[125px] text-21xl text-white">{`Enter your email `}</div>
      <div className="absolute top-[1488px] left-[1747px] font-extrabold text-whitesmoke">
        Book Now
      </div>
      <b className="absolute top-[2209px] left-[50px] text-[128px] text-black text-center">
        Suggested room
      </b>

      <img
        className="absolute top-[2637px] left-[4405px] w-[107px] h-[105px] object-cover"
        alt=""
        src="/left-2@2x.png"
      />

      <img
        className="absolute top-[2637px] left-[4562px] w-[107px] h-[105px] object-cover"
        alt=""
        src="/left-3@2x.png"
      />

      <img
        className="absolute top-[3009px] left-[53px] w-[1006px] h-[595px] object-cover"
        alt=""
        src={require('./images/110.jpg')}
      />

      <img
        className="absolute top-[8418px] left-[53px] w-[1006px] h-[595px] object-cover"
        alt=""
        src={require('./images/th (2).jpg')}
      />

      <img
        className="absolute top-[3009px] left-[1257px] w-[1006px] h-[595px] object-cover"
        alt=""
        src={require('./images/234556690.jpg')}
      />

      <img
        className="absolute top-[8418px] left-[1257px] w-[1006px] h-[595px] object-cover"
        alt=""
        src={require('./images/th (2).jpg')} 
      />

      <img
        className="absolute top-[3009px] left-[2479px] w-[1006px] h-[595px] object-cover"
        alt=""
        src={require('./images/le-pigonnet-aix-en-provence_big.jpg')}
      />

      <img
        className="absolute top-[8418px] left-[2479px] w-[1006px] h-[595px] object-cover"
        alt=""
        src={require('./images/garden-lounge-bar.jpg')} 
      />

      <img
        className="absolute top-[3009px] left-[3663px] w-[1006px] h-[595px] object-cover"
        alt=""
        src={require('./images/chambre-deluxe.jpg')}
      />

      <img
        className="absolute top-[8418px] left-[3663px] w-[1006px] h-[595px] object-cover"
        alt=""
        src={require('./images/234560123.jpg')} 
      />

      <img
        className="absolute top-[4970px] left-[1059px] w-[568px] h-[679px] object-cover"
        alt=""
        src={require('./images/private-terrace-overlooking.jpg')}
      />

      <img
        className="absolute top-[4382px] left-[53px] w-[940px] h-[1124px] object-cover"
        alt=""
        
        src={require('./images/TabletHotels_Le-Pigonnet-1.jpg')}
      />

      <img
        className="absolute top-[6358px] left-[1585px] w-[1731px] h-[1124px] object-cover"
        alt=""
        src={require('./images/th (1).jpg')}
      />

      <img
        className="absolute top-[4217px] left-[1059px] w-[568px] h-[679px] object-cover"
        alt=""
        src={require('./images/presidential-suite.jpg')} 
      />

      <div className="absolute top-[5195px] left-[1801px] font-medium text-sienna-100">
        <p className="m-0">10+</p>
        <p className="m-0 text-black">Restarunt</p>
      </div>

      <div className="absolute top-[5411px] left-[1802px] font-medium text-sienna-100">
        <p className="m-0">29</p>
        <p className="m-0 text-black">GMY</p>
      </div>

      <div className="absolute top-[5411px] left-[2179px] font-medium text-sienna-100">
        <p className="m-0">7</p>
        <p className="m-0 text-black">Beach</p>
      </div>
      <div className="absolute top-[5183px] left-[2179px] font-medium text-sienna-100">
        <p className="m-0">109</p>
        <p className="m-0 text-black">Rooms</p>
      </div>
      <div className="absolute top-[11032px] left-[549px] bg-gainsboro w-[170px] h-[104px]" />
      
      <img
        className="absolute top-[11073.95px] left-[603px] w-[63.5px] h-[22.09px]"
        alt=""
        src="/arrow-1.svg"
      />
      <div className="absolute top-[10663px] left-[1549px] text-21xl font-medium">
        Home
      </div>
      <div className="absolute top-[10769px] left-[1549px] text-21xl font-medium">
        Features
      </div>
      <div className="absolute top-[10981px] left-[1549px] text-21xl font-medium">
        Reviews
      </div>
      <div className="absolute top-[10981px] left-[2290px] text-21xl font-medium">
        Terms
      </div>
      <div className="absolute top-[10875px] left-[1549px] text-21xl font-medium">
        FAQs
      </div>
      <div className="absolute top-[11087px] left-[1549px] text-21xl font-medium">
        Stories
      </div>
      <div className="absolute top-[10875px] left-[2290px] text-21xl font-medium">
        Payment
      </div>
      <div className="absolute top-[10769px] left-[2290px] text-21xl font-medium">
        Policy
      </div>
      <div className="absolute top-[10760px] left-[3109px] text-21xl font-medium">
        gregorykgosiejang0@gmail.com
      </div>
      <div className="absolute top-[10663px] left-[2290px] text-21xl font-medium">
        Privacy
      </div>
      <div className="absolute top-[10654px] left-[3109px] text-21xl font-medium">
        +27 78835261
      </div>
    </div>
  );
};

export default home;
