import React from "react";
import { Link, Outlet } from "react-router-dom";
import First from "../imgs/first.png";
import Second from "../imgs/second.png";
import Third from "../imgs/third.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";


const Home = () => {
  return (
    <div>
      <div className="input_img">
        <div className="input_only">
          <div>
            <input
              className="search_location"
              type="search"
              placeholder="Search location"
            />
            <input
              className="search_location_doctors"
              type="text"
              placeholder="Search doctors,clinics,hospitals,etc."
            />
          </div>
          <input
            className="first_doc_img"
            type="image"
            src="https://s3.ap-southeast-1.amazonaws.com/www.practostatic.com/consumer-home/desktop/images/1597423628/chronic_consumer_banner_dweb.png
     "
            alt=""
          />
        </div>
      </div>

      <div className="all_card_doc">
        <div className="all_in_card_doc">
          <div className="card_doc">
            <div className="card_img">
              <img
                width="130px"
                height="160px"
                src="https://www.practostatic.com/consumer-home/desktop/images/1597423628/dweb_instant_video_consulation.png"
                alt=""
              />
            </div>
            <div className="card_p">
              <span className="card_b_img">Instant Video Consultation</span>
              <span className="card_c_img">Connect with in 60 seconds</span>
            </div>
          </div>

          <div className="card_doc">
            <div className="card_img_sec">
              <img
                width="160px"
                height="160px"
                src="https://www.practostatic.com/consumer-home/desktop/images/1597423628/dweb_find_doctors.png"
                alt=""
              />
            </div>
            <div className="card_p">
              <span className="card_b_img">Instant Video Consultation</span>
              <span className="card_c_img">Connect with in 60 seconds</span>
            </div>
          </div>

          <div className="card_doc">
            <div className="card_img_sec">
              <img
                width="160px"
                height="160px"
                src="https://www.practostatic.com/consumer-home/desktop/images/1597423628/dweb_medicines.png"
                alt=""
              />
            </div>
            <div className="card_p">
              <span className="card_b_img">Instant Video Consultation</span>
              <span className="card_c_img">Connect with in 60 seconds</span>
            </div>
          </div>

          <div className="card_doc">
            <div className="card_img_sec">
              <img
                width="160px"
                height="160px"
                src="https://www.practostatic.com/consumer-home/desktop/images/1597423628/dweb_lab_tests.png"
                alt=""
              />
            </div>
            <div className="card_p">
              <span className="card_b_img">Instant Video Consultation</span>
              <span className="card_c_img">Connect with in 60 seconds</span>
            </div>
          </div>

          <div className="card_doc">
            <div className="card_img_sec">
              <img
                width="160px"
                height="160px"
                src="https://www.practostatic.com/consumer-home/desktop/images/1597423628/dweb_surgeries.png"
                alt=""
              />
            </div>
            <div className="card_p">
              <span className="card_b_img">Instant Video Consultation</span>
              <span className="card_c_img">Connect with in 60 seconds</span>
            </div>
          </div>
        </div>
        <div className="fixed_img">
          <img
            width="300px"
            height="150px"
            src="https://www.practostatic.com/scripts/images/img_app_download_bottom_sticky.png"
            alt=""
          />
        </div>
      </div>

      {/* ==================================================================================================================================== */}

      <div className="sec_page">
        <div className="con_txt_but">
          <div className="in_con_txt_but">
            <div className="con_txt">
              <span className="con_">
                Consult top doctors online for any health concern
              </span>
              <span>
                Private online consultations with verified doctors in all
                specialists
              </span>
            </div>
            <button className="con_but">View All Specialities</button>
          </div>
        </div>
        <div className="all_consult_card">
          <div className="in_all_consult_card">
            <div className="consult_card">
              <img
                width="100px"
                height="100px"
                src="https://www.practostatic.com/consult/consult-home/symptoms_icon/irregular-painful+period.png"
                alt=""
              />
              <p>Period doubts or Pregnancy</p>
              <Link className="consult_link">Consult Now</Link>
            </div>

            <div className="consult_card">
              <img
                width="100px"
                height="100px"
                src="https://www.practostatic.com/consult/consult-home/symptoms_icon/Acne.png"
                alt=""
              />
              <p>Acne,pimple or skin issues</p>
              <Link className="consult_link">Consult Now</Link>
            </div>

            <div className="consult_card">
              <img
                width="100px"
                height="100px"
                src="https://www.practo.com/consult/static/images/top-speciality-sexology.svg"
                alt=""
              />
              <p>Performance issues in bed</p>
              <Link className="consult_link">Consult Now</Link>
            </div>

            <div className="consult_card">
              <img
                width="100px"
                height="100px"
                src="https://www.practostatic.com/consult/consult-home/symptoms_icon/coughing.png"
                alt=""
              />
              <p>Cold,cough or fever</p>
              <Link className="consult_link">Consult Now</Link>
            </div>

            <div className="consult_card">
              <img
                width="100px"
                height="100px"
                src="https://www.practo.com/consult/static/images/top-speciality-pediatric.svg"
                alt=""
              />
              <p>Child not feeling well</p>
              <Link className="consult_link">Consult Now</Link>
            </div>

            <div className="consult_card">
              <img
                width="100px"
                height="100px"
                src="https://www.practostatic.com/acred/search-assets/2/12-mental-wellness.png"
                alt=""
              />
              <p>Depression or anxiety</p>
              <Link className="consult_link">Consult Now</Link>
            </div>
          </div>
        </div>
      </div>
      {/* ========================================================================================================================================= */}
<div className="book_an">
  <div className="in_book_an">
      <div className="con_txt">
        <span className="con_">
          Book an appointment for an in-clinic consultation
        </span>
        <span>Find experienced doctors across all specialties</span>
      </div>
      <div className="all_swiper">
        <Swiper
          spaceBetween={9}
          slidesPerView={4}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <div className="dent_img_txt">
              <img
                width="300px"
                height="200px"
                src="https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-dentist@2x.jpg"
                alt=""
              />
              <div className="dent_txt_only">
                <span className="dent_a_text">Dentist</span>
                <span className="dent_b_text">
                  Teething troubles?Schedule a dental checkup
                </span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="dent_img_txt">
              <img
                width="300px"
                height="200px"
                src="https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-gynecologist@2x.jpg"
                alt=""
              />
              <div className="dent_txt_only">
                <span className="dent_a_text">Gynecologist/Obstetrician</span>
                <span className="dent_b_text">
                  Explore for human's health,pregnancy and infertility
                  treatments
                </span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="dent_img_txt">
              <img
                width="300px"
                height="200px"
                src="https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-dietitian@2x.jpg"
                alt=""
              />
              <div className="dent_txt_only">
                <span className="dent_a_text">Dietician/Nutrician</span>
                <span className="dent_b_text">
                  Get guidance on eating right,weight management and sports
                  nutrition
                </span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="dent_img_txt">
              <img
                width="300px"
                height="200px"
                src="https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-physiotherapist@2x.jpg"
                alt=""
              />
              <div className="dent_txt_only">
                <span className="dent_a_text">Phys</span>
                <span className="dent_b_text">
                  Teething troubles?Schedule a dental checkup
                </span>
              </div>
            </div>{" "}
          </SwiperSlide>

          <SwiperSlide>
            <div className="dent_img_txt">
              <img
                width="300px"
                height="200px"
                src="https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-general-surgeon@2x.jpg"
                alt=""
              />
              <div className="dent_txt_only">
                <span className="dent_a_text">Dentist</span>
                <span className="dent_b_text">
                  Teething troubles?Schedule a dental checkup
                </span>
              </div>
            </div>{" "}
          </SwiperSlide>

          <SwiperSlide>
            <div className="dent_img_txt">
              <img
                width="300px"
                height="200px"
                src="https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-orthopedist@2x.jpg"
                alt=""
              />
              <div className="dent_txt_only">
                <span className="dent_a_text">Dentist</span>
                <span className="dent_b_text">
                  Teething troubles?Schedule a dental checkup
                </span>
              </div>
            </div>{" "}
          </SwiperSlide>

          <SwiperSlide>
            <div className="dent_img_txt">
              <img
                width="300px"
                height="200px"
                src="https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-general-doctor@2x.jpg"
                alt=""
              />
              <div className="dent_txt_only">
                <span className="dent_a_text">Dentist</span>
                <span className="dent_b_text">
                  Teething troubles?Schedule a dental checkup
                </span>
              </div>
            </div>{" "}
          </SwiperSlide>

          <SwiperSlide>
            <div className="dent_img_txt">
              <img
                width="300px"
                height="200px"
                src="https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-pediatrician@2x.jpg"
                alt=""
              />
              <div className="dent_txt_only">
                <span className="dent_a_text">Dentist</span>
                <span className="dent_b_text">
                  Teething troubles?Schedule a dental checkup
                </span>
              </div>
            </div>{" "}
          </SwiperSlide>

          <SwiperSlide>
            <div className="dent_img_txt">
              <img
                width="300px"
                height="200px"
                src="https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-gastroenterologist@2x.jpg"
                alt=""
              />
              <div className="dent_txt_only">
                <span className="dent_a_text">Dentist</span>
                <span className="dent_b_text">
                  Teething troubles?Schedule a dental checkup
                </span>
              </div>
            </div>{" "}
          </SwiperSlide>
        </Swiper>
      </div>
      </div>
      </div>

      <hr />

      <div className="all_cor_vitamines">
        <div className="in_all_cor_vitamines">
          <div className="all_left_cor_vitamines">
            <div className="left_read_only">
              <span className="read_top">
                Read top articles from health experts
              </span>
              <span className="health_art">
                Health articles that keep you informed about good health
                practices and achieve your goals.
              </span>
            </div>
            <button className="health_art_butt">See all articles</button>
          </div>

          <div className="coro_na">
            <img
              width="298px"
              height="200px"
              src="https://www.practostatic.com/fit/5fd27b74d9477cb633445cf3f105078bbc479910"
              alt=""
            />
            <Link className="cor_link">CORONAVIRUS</Link>
            <Link className="cor_link_second">
              12 Coronavirus Myths nand Facts That You Should Be Aware Of
            </Link>
            <Link className="cor_link_third">Dr Diana Borgio</Link>
          </div>
          <div className="coro_na">
            <img
              width="298px"
              height="200px"
              src="https://www.practostatic.com/fit/bade52edc7fb158bf627216bf96c2b881a97f30c"
              alt=""
            />
            <Link className="cor_link">VITAMINS AND SUPPLEMENTS</Link>
            <Link className="cor_link_second">
              Eating Right to Build Immunity Against Cold and Viral Infections
            </Link>
            <Link className="cor_link_third">Dr Diana Borgio</Link>
          </div>
        </div>
      </div>

      <hr />

      {/* ================================================================================================================================== */}
      <div
        id="carouselExampleDark"
        className="carousel carousel-dark slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <h2 className="carousel_head">What our users have to say</h2>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <img src={First} className="d-block w-100" alt="" />
           
          </div>
          <div className="carousel-item" data-bs-interval="2000">
           
            <img src={Second} className="d-block w-100" alt="" />
           
          </div>
          <div className="carousel-item">
           
            <img src={Third} className="d-block w-100" alt="" />
           
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="dwnld_pract">
        <div className="in_dwnld_pract">
        <img
          width="320px"
          height="370px"
          src="https://www.practostatic.com/consumer-home/desktop/images/1597423628/footer-img.png"
          alt=""
        />
        <div className="dwnld_pract_right">
          
          <span className="head_pract_upfoot">Download the Practo app</span>
          <span>
            Access video consultation with India’s top doctors on the Practo
            app. Connect with doctors online, available 24/7, from the comfort
            of your home.
          </span>

          <span>Get the link to download the app</span>
          <div className="input_health_art_butt">
            <input className="input_pract" type="number" name="" id="" />
            <button className="health_art_butt_last">Send SMS</button>
          </div>
          <div className="google_pract">
            <img
              width="130px"
              height="40px"
              src="https://www.practostatic.com/consumer-home/desktop/images/1597423628/google_play.png"
              alt=""
            />
            <img
              width="130px"
              height="40px"
              src="https://www.practostatic.com/consumer-home/desktop/images/1597423628/apple_store.png"
              alt=""
            />
          </div>
        </div>


        </div>

      </div>

      {/* ========================================================================================================================================== */}

     
    </div>
  );
};

export default Home;
