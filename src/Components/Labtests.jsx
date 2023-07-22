import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import "../App.css";
import { Swiper, SwiperSlide } from "swiper/react";
import Labfirst from "../imgs/labtest1.png";
import Labsec from "../imgs/labtes2.png";
import Labthird from "../imgs/labtest3.png";
import Labfour from "../imgs/labtest4.png";
import Phonecall from "../imgs/phone-call.png";

export default function Labtest() {

  const card=[{
    thyroid :"Thyroid Profile",
    section:"Known as thyroid profile total blood",
    but : "Add"


  },
  {
    thyroid :"Thyroid Profile",
    section:"Known as thyroid profile total blood",
    but : "Add"


  },{
    thyroid :"Thyroid Profile",
    section:"Known as thyroid profile total blood",
    but : "Add"


  }]

  return (
    <div>
      <input type="text" list="places" placeholder="Please Select" />
      <datalist id="places">
        <option value="Bengaluru"></option>
        <option value="Delhi"></option>
        <option value="Chennai"></option>
        <option value="Mumbai"></option>
        <option value="Kerala"></option>
        <option value="Kolkata"></option>
      </datalist>
      <div className="allswip_labtest">
        <div className="in_allswip_labtest">
          <Swiper
            spaceBetween={4}
            slidesPerView={1}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>
              <img width="100%" height="310px" src={Labfirst} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img width="100%" height="310px" src={Labsec} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img width="100%" height="310px" src={Labthird} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img width="100%" height="310px" src={Labfour} alt="" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      {/* <details>
  <summary>Social media</summary>
  <p>Instagram</p>
  <p>Facebook</p>
  <p>Twitter</p>
</details> */}

      <div className="all_blu_txt_call_number">
        <div className="iiim">
          <img width="60px"height="60px"
            src="https://www.practo.com/tests/public/images/call_to_order.svg"
            alt=""
          />
          <div className="">
          <span>Need help with booking your test?</span>
          <br />
          <span>Our experts are here to help you</span>{" "}</div>
        </div>
        <div className="call_with_im">
          <img src={Phonecall} alt="" />
          <span>+98765432123456</span>
        </div>
      </div>
      

{/* {
  
  card.map((item)=>{
   
    <div>
      <h1>{item.thyroid}</h1>
      <p>{item.section}</p>
      <button>{item.but}</button>
    </div>
  })
  
} */}

<div class="card">
  <div class="card-details">
    <p class="text-title">Card Title</p>
    <p class="text-body">Card Details</p>
  </div>
  <a class="card-button" href="#link">More info</a>
</div>
 
    </div>
  );
}
