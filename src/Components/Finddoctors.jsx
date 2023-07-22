import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Slider from "./Slider";

const Finddoctors = () => {
  return (
    <div>
      <>
        <div className="find_big_img">
          <img
            width="100%"
            src="https://www.practostatic.com/web-assets/home/assets/images/homepage.06859593240c3efd483fe48951cfe6ff.svg"
            alt=""
          />
        </div>
        <div className="find_rel_img">
          <div className="find_h_inp_link">
            <span className="find_txt_h">Your home for health</span>

            <span className="find_txt_p">Find and book</span>
            <div>
              <input className="find_txt_input" type="search" />
              <input
                className="find_txt_input_b"
                type="text"
                placeholder="Search doctors,clinics,hospitals,etc."
              />
            </div>
            <div className="all_link_rel_img">
              <span className="link_rel_img">popular searches :</span>
              <Link className="link_rel_img">Dermatologist</Link>
              <Link className="link_rel_img">Pediatrician</Link>
              <Link className="link_rel_img">Gynecologist/Obstetrician</Link>
              <span className="link_rel_img">Others </span>
            </div>
          </div>
          <div className="all_bottom_links">
            <div className="in_all_botttom_links">
              <div className="find_bottomlnk">
                <Link className="find_link">
                  <div>
                    {" "}
                    <img
                      classNam0="link_with_img"
                      width="20px"
                      height="25px"
                      src="https://cdn-icons-png.flaticon.com/128/1848/1848755.png"
                      alt=""
                    />
                  </div>{" "}
                  <div>Consult with a doctor</div>{" "}
                </Link>
              </div>
              <div className="find_top_line"></div>

              <div className="find_bottomlnk">
                <Link className="find_link">
                  <div>
                    {" "}
                    <img
                      className="link_with_img"
                      width="25px"
                      height="25px"
                      src="https://cdn-icons-png.flaticon.com/128/1124/1124199.png"
                      alt=""
                    />
                  </div>{" "}
                  <div>Order medicines</div>{" "}
                </Link>
              </div>
              <div className="find_top_line"></div>

              <div className="find_bottomlnk">
                <Link className="find_link">
                  <div>
                    {" "}
                    <img
                      className="link_with_img"
                      width="25px"
                      height="25px"
                      src="https://cdn-icons-png.flaticon.com/128/2180/2180314.png"
                      alt=""
                    />
                  </div>{" "}
                  <div>View medical records</div>{" "}
                </Link>
              </div>
              <div className="find_top_line"></div>

              <div className="find_bottomlnk">
                <Link className="find_link">
                  <div>
                    {" "}
                    <img
                      className="link_with_img"
                      width="25px"
                      height="25px"
                      src="https://cdn-icons-png.flaticon.com/128/9419/9419093.png"
                      alt=""
                    />
                  </div>{" "}
                  <div>Book test</div>{" "}
                </Link>
              </div>
              <div className="find_top_line"></div>

              <div className="find_bottomlnk">
                <Link className="find_link">
                  <div>
                    {" "}
                    <img
                      className="link_with_img"
                      width="25px"
                      height="25px"
                      src="https://cdn-icons-png.flaticon.com/128/11090/11090919.png"
                      alt=""
                    />
                  </div>{" "}
                  <div>Read articles</div>{" "}
                </Link>
              </div>
              <div className="find_top_line"></div>

              <div className="find_bottomlnk">
                <Link className="find_link">
                  <div>
                    {" "}
                    <img
                      className="link_with_img"
                      width="25px"
                      height="25px"
                      src="https://t3.ftcdn.net/jpg/06/13/44/16/240_F_613441634_NtDe4ngOUPuryC0MZMX0NZeqNk3wMpDp.jpg"
                      alt=""
                    />
                  </div>{" "}
                  <div>For healthcare providers</div>{" "}
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="left_right_img_txt">
          <div className="in_left_right_img_txt">
            <div className="left_Safety_l">
              <div>
                {" "}
                <span className="Safety_only">
                  Safety of your data is our
                  <span className="top_pr"> top priority.</span>
                </span>
              </div>
              <div>
                <div>
                  <img
                    width="24px"
                    height="24px"
                    src="https://cdn-icons-png.flaticon.com/128/9136/9136003.png"
                    alt=".........."
                  />
                  <span className="let_tick">Multi-level security checks</span>
                </div>
                <div>
                  <img
                    width="24px"
                    height="24px"
                    src="https://cdn-icons-png.flaticon.com/128/9136/9136003.png"
                    alt=".........."
                  />
                  <span className="let_tick">Multiple data backups</span>
                </div>
                <div>
                  <img
                    width="24px"
                    height="24px"
                    src="https://cdn-icons-png.flaticon.com/128/9136/9136003.png"
                    alt=".........."
                  />
                  <span className="let_tick">
                    Stringent data privacy policies
                  </span>
                </div>
              </div>
              <button className="find_read_button">Read more</button>
            </div>
            <div>
              <img
                width="300px"
                src="https://www.practostatic.com/web-assets/home/assets/images/security_1.4f45ac92aba979dac915f864df632d90.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="all_botom_safety_imgs">
          <div className="in_all_botom_safety_imgs">
            <div className="bit_img_txt">
              <img
                width="70px"
                height="70px"
                src="https://www.practostatic.com/web-assets/home/assets/images/security_2.654a7085bfa74c726f26b64edaafd9a5.png"
                alt=""
              />
              <span>256-bit encryption</span>
            </div>
            <div className="bit_img_txt">
              <img
                width="70px"
                height="70px"
                src="https://www.practostatic.com/web-assets/home/assets/images/security_3.a73921ca6e980ed186518d7cb0ce64bf.png"
                alt=""
              />
              <span>ISO 27001 certified</span>
            </div>
            <div className="bit_img_txt">
              <img
                width="70px"
                height="70px"
                src="https://www.practostatic.com/web-assets/home/assets/images/security_4.216e25d35038f0e7f6d8a514727fa67a.png"
                alt=""
              />
              <span>HIPAA compliant data centers</span>
            </div>
            <div className="bit_img_txt">
              <img
                width="70px"
                height="70px"
                src="https://www.practostatic.com/web-assets/home/assets/images/security_5.cf6e04c57178071a67c219b43066ffcf.png"
                alt=""
              />
              <span>DSCI member</span>
            </div>
          </div>
        </div>
        <div className="full_instant_part">
          <div className="infull_instant_part">
            <div className="left_instant_part">
              <span className="Safety_only">
                Instant appointment with doctors.{" "}
                <span className="top_pr">Guaranteed.</span>
              </span>
              <div>
                <img
                  width="24px"
                  height="24px"
                  src="https://cdn-icons-png.flaticon.com/128/9136/9136003.png"
                  alt=".........."
                />
                <span className="let_tick">100,000 Verified doctors</span>
              </div>
              <div>
                <img
                  width="24px"
                  height="24px"
                  src="https://cdn-icons-png.flaticon.com/128/9136/9136003.png"
                  alt=".........."
                />
                <span className="let_tick">3M+ Patient recommendations</span>
              </div>
              <div>
                <img
                  width="24px"
                  height="24px"
                  src="https://cdn-icons-png.flaticon.com/128/9136/9136003.png"
                  alt=".........."
                />
                <span className="let_tick">25M Patients/year</span>
              </div>
              <button className="find_me_re_but">
                Find me the right doctor
              </button>

              <img
                width="20px"
                height="20px"
                src="https://cdn-icons-png.flaticon.com/128/2893/2893811.png"
                alt=""
              />
              <img
                width="20px"
                height="20px"
                src="https://cdn-icons-png.flaticon.com/128/2893/2893811.png"
                alt=""
              />
              <img
                width="20px"
                height="20px"
                src="https://cdn-icons-png.flaticon.com/128/2893/2893811.png"
                alt=""
              />
              <img
                width="20px"
                height="20px"
                src="https://cdn-icons-png.flaticon.com/128/2893/2893811.png"
                alt=""
              />

              <div
                id="carouselExampleControls"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    {/* <img src="..." class="d-block w-100" alt="..."> */}
                    <div>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Cupiditate corrupti, temporibus architecto deleniti animi
                      excepturi? Accusantium voluptas molestias quibusdam a
                      asperiores consequatur hic inventore quam. Quis neque
                      temporibus officia repellendus.
                    </div>
                  </div>
                  <div className="carousel-item">
                    {/* <img src="..." class="d-block w-100" alt="..."> */}
                    <div>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Porro voluptatem cumque ut assumenda minima eveniet ipsum
                      ullam? Quos, consectetur ipsa nemo provident nisi placeat
                      pariatur voluptates, dolorem impedit quam omnis.
                    </div>
                  </div>
                  <div className="carousel-item">
                    {/* <img src="..." class="d-block w-100" alt="..."> */}
                    <div>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptatibus ipsum laborum vel nesciunt hic esse, iste,
                      deserunt nam autem iure nostrum exercitationem est modi
                      ipsam saepe, porro quos blanditiis pariatur.
                    </div>
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleControls"
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
                  data-bs-target="#carouselExampleControls"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
            <div>
              <video
                width="280px"
                height="400px"
                src="https://www.practostatic.com/web-assets/home/assets/videos/appointment.700ce682eaec91bf93b6574cb8f09cd0.webm"
              ></video>
            </div>
          </div>
        </div>
        <img
          width="200px"
          height="600px"
          src="https://www.practostatic.com/web-assets/home/assets/images/logo_india.6ae037c11f3c08c0f974ad35d22cdc55.png"
          alt=""
        />

        <div className="full_skip_the_part">
          <div className="inn_full_skip_the_part">
            <div className="left_skip_part">
              <video
                width="280px"
                height="450px"
                src="https://www.practostatic.com/web-assets/home/assets/videos/consult.099446892618434cc8a038d7844c4380.webm"
              ></video>
            </div>
            <div className="right_skip_part">
              <span className="Safety_only">Skip the waiting room.</span>
              <br></br>
              <span className="top_pr">Consult with a doctor</span>
              <div>
                <img
                  width="24px"
                  height="24px"
                  src="https://cdn-icons-png.flaticon.com/128/9136/9136003.png"
                  alt=".........."
                />
                <span className="let_tick">Fees starting at ₹99</span>
              </div>
              <div>
                <img
                  width="24px"
                  height="24px"
                  src="https://cdn-icons-png.flaticon.com/128/9136/9136003.png"
                  alt=".........."
                />
                <span className="let_tick">
                  Verified doctors respond in 5 minutes
                </span>
              </div>
              <div>
                <img
                  width="24px"
                  height="24px"
                  src="https://cdn-icons-png.flaticon.com/128/9136/9136003.png"
                  alt=".........."
                />
                <span className="let_tick">100% Private and confidential</span>
              </div>
            </div>
          </div>
        </div>

        <div className="full_slide">
          <span className="top_pr">Read top articles from health experts</span>
          <div className="in_full_slide">
            <Slider />
          </div>
          <button className="more_art_but">More Articles</button>
        </div>

        <div className="full_instant_part">
          <div className="infull_instant_part">
            <div className="left_instant_part">
              <span className="Safety_only">
                Get all your medicines.
                <span className="top_pr">Everytime. On time.</span>
              </span>
              <div>
                <img
                  width="24px"
                  height="24px"
                  src="https://cdn-icons-png.flaticon.com/128/9136/9136003.png"
                  alt=".........."
                />
                <span className="let_tick">Guaranteed availability</span>
              </div>
              <div>
                <img
                  width="24px"
                  height="24px"
                  src="https://cdn-icons-png.flaticon.com/128/9136/9136003.png"
                  alt=".........."
                />
                <span className="let_tick">
                  Over 130,000+ genuine medicines
                </span>
              </div>
              <div>
                <img
                  width="24px"
                  height="24px"
                  src="https://cdn-icons-png.flaticon.com/128/9136/9136003.png"
                  alt=".........."
                />
                <span className="let_tick">Home delivery in 24hrs</span>
              </div>
              <button className="find_me_re_but">Order Medicines</button>

              <div
                id="carouselExampleControls"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    {/* <img src="..." class="d-block w-100" alt="..."> */}
                    <div>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Cupiditate corrupti, temporibus architecto deleniti animi
                      excepturi? Accusantium voluptas molestias quibusdam a
                      asperiores consequatur hic inventore quam. Quis neque
                      temporibus officia repellendus.
                    </div>
                  </div>
                  <div className="carousel-item">
                    {/* <img src="..." class="d-block w-100" alt="..."> */}
                    <div>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Porro voluptatem cumque ut assumenda minima eveniet ipsum
                      ullam? Quos, consectetur ipsa nemo provident nisi placeat
                      pariatur voluptates, dolorem impedit quam omnis.
                    </div>
                  </div>
                  <div className="carousel-item">
                    {/* <img src="..." class="d-block w-100" alt="..."> */}
                    <div>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptatibus ipsum laborum vel nesciunt hic esse, iste,
                      deserunt nam autem iure nostrum exercitationem est modi
                      ipsam saepe, porro quos blanditiis pariatur.
                    </div>
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleControls"
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
                  data-bs-target="#carouselExampleControls"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
            <div>
              <img
                width="280px"
                height="400px"
                src="https://www.practostatic.com/web-assets/home/assets/images/order.c84fc07b0be8a7e8d4db432eb4e606a2.svg"
              ></img>
            </div>
          </div>
        </div>
        <div className="full_medical_records">
          <div className="in_full_medical_rec">
          <div className="left_medical_rec">
        <img src="https://www.practostatic.com/web-assets/home/assets/images/record.bfc5241f9b15340a32c98eb360d1005a.svg" alt="" /></div>
        <div className="right_medical_rec">
        <span className="Safety_only">
          All your medical records</span><br></br>
          <span className="top_pr">In one secure app.</span>
        
        <div>
          <img
            width="24px"
            height="24px"
            src="https://cdn-icons-png.flaticon.com/128/9136/9136003.png"
            alt=".........."
          />
          <span className="let_tick">256-bit end to end encryption</span>
        </div>
        <div>
          <img
            width="24px"
            height="24px"
            src="https://cdn-icons-png.flaticon.com/128/9136/9136003.png"
            alt=".........."
          />
          <span className="let_tick">Records are accessible only by you</span>
        </div>
        <div>
          <img
            width="24px"
            height="24px"
            src="https://cdn-icons-png.flaticon.com/128/9136/9136003.png"
            alt=".........."
          />
          <span className="let_tick">Access your records across 8000+ centers</span>
        </div>
        <button className="find_me_re_but">Find out more</button>
        </div>
        </div>
        </div>
      </>
    </div>
  );
};

export default Finddoctors;
