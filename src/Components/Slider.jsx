import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Slider = () => {
    const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
  return (
    <div>


<Carousel responsive={responsive}>
  <div>  <div className="dent_img_txt">
              <img
                width="300px"
                height="200px"
                src="https://www.practostatic.com/fit/53c185b1d19332b14daca77376ee37dae7210e57"
                alt=""
              />
              <div className="dent_txt_only">
                <span className="dent_a_text">Dentist</span>
                <span className="dent_b_text">
                  Teething troubles?Schedule a dental checkup
                </span>
              </div>
            </div></div>
  <div><div className="dent_img_txt">
              <img
                width="300px"
                height="200px"
                src="https://www.practostatic.com/fit/e5f70ec2678d4d09aa1b25bcac0ff21fe5ed5729"
                alt=""
              />
              <div className="dent_txt_only">
                <span className="dent_a_text">Gynecologist/Obstetrician</span>
                <span className="dent_b_text">
                  Explore for human's health,pregnancy and infertility
                  treatments
                </span>
              </div>
            </div></div>
  <div>   <div className="dent_img_txt">
              <img
                width="300px"
                height="200px"
                src="https://www.practostatic.com/fit/b65f9037aec5488d93aef02209694982c896cc7f"
                alt=""
              />
              <div className="dent_txt_only">
                <span className="dent_a_text">Dietician/Nutrician</span>
                <span className="dent_b_text">
                  Get guidance on eating right,weight management and sports
                  nutrition
                </span>
              </div>
            </div></div>
  <div><div className="dent_img_txt">
              <img
                width="300px"
                height="200px"
                src="https://www.practostatic.com/fit/74c7586a1a3ee562a2748c660f1a0d218a375406"
                alt=""
              />
              <div className="dent_txt_only">
                <span className="dent_a_text">Phys</span>
                <span className="dent_b_text">
                  Teething troubles?Schedule a dental checkup
                </span>
              </div>
            </div></div>
            <div> <div className="dent_img_txt">
              <img
                width="300px"
                height="200px"
                src="https://www.practostatic.com/fit/950d08523e3761a3835833cf4d1fbbfc730f47ec"
                alt=""
              />
              <div className="dent_txt_only">
                <span className="dent_a_text">Dentist</span>
                <span className="dent_b_text">
                  Teething troubles?Schedule a dental checkup
                </span>
              </div>
            </div></div>
</Carousel>;
    </div>
  )
}

export default Slider