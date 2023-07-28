import React from "react";
// import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import "../App.css";
import { Swiper, SwiperSlide } from "swiper/react";
import Labfirst from "../imgs/labtest1.png";
import Labsec from "../imgs/labtes2.png";
import Labthird from "../imgs/labtest3.png";
import Labfour from "../imgs/labtest4.png";
import Phonecall from "../imgs/phone-call.png";
import { Link, Outlet } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Demo from "../Components/Demo"
import Democard from "../Components/Democard"






export default function Labtest() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const cardd = [
    {
      Thyro1: "Thyroid profile",
      thyro2: "know as Thyroid profile total blood",
      Thyro3: "E-Reports on same day",
      Thyro4: "₹399",
    },
    {
      Thyro1: "Complete Blood Count",
      thyro2: "Known as Complete Blood Count Automated Blood",
      Thyro3: "E-Reports on same day",
      Thyro4: "₹300",
    },
    {
      Thyro1: "Lipid Profile",
      thyro2: "Known as Lipid Profile Blood",
      Thyro3: "E-Reports on same day",
      Thyro4: "₹434",
    },
    {
      Thyro1: "Live Function Test",
      thyro2: "Known as Liver Function Tests Blood",
      Thyro3: "E-Reports on same day",
      Thyro4: "₹673",
    },
    {
      Thyro1: "HbA1c",
      thyro2: "Known as Glycolosylated Haemoglobin Blood",
      Thyro3: "E-Reports on same day",
      Thyro4: "₹300",
    },
    {
      Thyro1: "Vitamin B 12",
      thyro2: "Known as Vitamin B12 Conventional Blood",
      Thyro3: "E-Reports on same day",
      Thyro4: "₹490",
    },
    {
      Thyro1: "Beta HCG",
      thyro2: "Known as Beta Hcg Automated Blood",
      Thyro3: "E-Reports on same day",
      Thyro4: "₹400",
    },
    {
      Thyro1: "Fasting Bloog Sugar",
      thyro2: "Known as Glucose Fasting Blood",
      Thyro3: "E-Reports on same day",
      Thyro4: "₹199",
    },
    {
      Thyro1: "Vitamin D Profile",
      thyro2: "Known as Vitamin D Profile Blood",
      Thyro3: "E-Reports on same day",
      Thyro4: "₹434",
    },
  ];

  const iconcard = [
    {
      photo:
        "https://www.practo.com/tests/public/images/landingpage_icons/Fever.svg?v=1569493559",
      nam: "Fever",
    },{
      photo:
        "https://www.practo.com/tests/public/images/landingpage_icons/Fever.svg?v=1569493559",
      nam: "Fever",
    },{
      photo:
        "https://www.practo.com/tests/public/images/landingpage_icons/Fever.svg?v=1569493559",
      nam: "Fever",
    },{
      photo:
        "https://www.practo.com/tests/public/images/landingpage_icons/Fever.svg?v=1569493559",
      nam: "Fever",
    },{
      photo:
        "https://www.practo.com/tests/public/images/landingpage_icons/Fever.svg?v=1569493559",
      nam: "Fever",
    },{
      photo:
        "https://www.practo.com/tests/public/images/landingpage_icons/Fever.svg?v=1569493559",
      nam: "Fever",
    },
  ];

  
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
      <div className="all_blu_txt_call_number">
        <div className="iiim">
          <img
            width="60px"
            height="60px"
            src="https://www.practo.com/tests/public/images/call_to_order.svg"
            alt=""
          />
          <div className="">
            <span>Need help with booking your test?</span>
            <br />
            <span>Our experts are here to help you</span>{" "}
          </div>
        </div>
        <div className="call_with_im">
          <img src={Phonecall} alt="" />
          <span>+98765432123456</span>
        </div>
      </div>
      <div className="full_card">
        {cardd.map((data) => {
          return (
            <div className="card">
              <div className="card-info">
                <span className="text-title">{data.Thyro1} </span>

                <span className="text-body">{data.thyro2}</span>
                <span className="text-body">{data.Thyro3}</span>
              </div>
              <div className="card-footer">
                <span className="text-title">{data.Thyro4}</span>
                <div className="card-button">
                  <svg className="svg-icon" viewBox="0 0 20 20">
                    <path d="M17.72,5.011H8.026c-0.271,0-0.49,0.219-0.49,0.489c0,0.271,0.219,0.489,0.49,0.489h8.962l-1.979,4.773H6.763L4.935,5.343C4.926,5.316,4.897,5.309,4.884,5.286c-0.011-0.024,0-0.051-0.017-0.074C4.833,5.166,4.025,4.081,2.33,3.908C2.068,3.883,1.822,4.075,1.795,4.344C1.767,4.612,1.962,4.853,2.231,4.88c1.143,0.118,1.703,0.738,1.808,0.866l1.91,5.661c0.066,0.199,0.252,0.333,0.463,0.333h8.924c0.116,0,0.22-0.053,0.308-0.128c0.027-0.023,0.042-0.048,0.063-0.076c0.026-0.034,0.063-0.058,0.08-0.099l2.384-5.75c0.062-0.151,0.046-0.323-0.045-0.458C18.036,5.092,17.883,5.011,17.72,5.011z"></path>
                    <path d="M8.251,12.386c-1.023,0-1.856,0.834-1.856,1.856s0.833,1.853,1.856,1.853c1.021,0,1.853-0.83,1.853-1.853S9.273,12.386,8.251,12.386z M8.251,15.116c-0.484,0-0.877-0.393-0.877-0.874c0-0.484,0.394-0.878,0.877-0.878c0.482,0,0.875,0.394,0.875,0.878C9.126,14.724,8.733,15.116,8.251,15.116z"></path>
                    <path d="M13.972,12.386c-1.022,0-1.855,0.834-1.855,1.856s0.833,1.853,1.855,1.853s1.854-0.83,1.854-1.853S14.994,12.386,13.972,12.386z M13.972,15.116c-0.484,0-0.878-0.393-0.878-0.874c0-0.484,0.394-0.878,0.878-0.878c0.482,0,0.875,0.394,0.875,0.878C14.847,14.724,14.454,15.116,13.972,15.116z"></path>
                  </svg>
                </div>
              </div>
            </div>
          );
        })}{" "}
      </div>
      <span className="find_labtest_he">Find Tests by Health Concern</span>
   
   <div className="car_labte_demo">
    <div className="in_car_labte_demo">
   <Demo/></div></div>


   <span>Popular Health Checkup Packages
</span>
<button>Feutured checkups</button>
<button>Women's Health</button>
<button>Men's Health</button>
<div className="car_lab_democard">
<div className="in_car_lab_democard"><Democard/></div>
  

      </div>

    </div>
  );
}

