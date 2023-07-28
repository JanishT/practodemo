import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = () => {
  const carouselItems = [
    {
        imagee : "https://images1-fabric.practo.com/dx/labs/PRL-HWP/logo.jpg/360x240",
        txt : "Basic Womens Health",
        txtsec : "Ideal for individual aged 15 - 40 years",
        txtthird : "85 tests include",
        pricefirst : "1900",
        fadeprice : "3000",
        offprice : "29 off",
        butt : "2000"

    }, {
        imagee : "https://images1-fabric.practo.com/dx/labs/PRL-VDHC/logo.jpg/360x240",
        txt : "Basic Womens Health",
        txtsec : "Ideal for individual aged 15 - 40 years",
        txtthird : "85 tests include",
        pricefirst : "1900",
        butt : "2000"

    },{
        imagee : "https://images1-fabric.practo.com/dx/labs/PRL-YIHC/logo_0gMZNaj.jpg/360x240",
        txt : "Basic Womens Health",
        txtsec : "Ideal for individual aged 15 - 40 years",
        txtthird : "85 tests include",
        pricefirst : "1900",
        butt : "2000"

    },{
        imagee : "https://images1-fabric.practo.com/dx/labs/PRL-AYIHC/logo.jpg/360x240",
        txt : "Basic Womens Health",
        txtsec : "Ideal for individual aged 15 - 40 years",
        txtthird : "85 tests include",
        pricefirst : "1900",
        butt : "2000"

    },{
        imagee : "https://images1-fabric.practo.com/dx/labs/PRL-CFBC/logo_XZ8poyA.jpg/360x240",
        txt : "Basic Womens Health",
        txtsec : "Ideal for individual aged 15 - 40 years",
        txtthird : "85 tests include",
        pricefirst : "1900",
        butt : "2000"

    },{
        imagee : "https://images1-fabric.practo.com/dx/labs/PRL-AHCP/logo_92jA83w.jpg/360x240",
        txt : "Basic Womens Health",
        txtsec : "Ideal for individual aged 15 - 40 years",
        txtthird : "85 tests include",
        pricefirst : "1900",
        butt : "2000"

    },{
        imagee : "https://images1-fabric.practo.com/dx/labs/PRL-TSB/logo.png/360x240",
        txt : "Basic Womens Health",
        txtsec : "Ideal for individual aged 15 - 40 years",
        txtthird : "85 tests include",
        pricefirst : "1900",
        butt : "2000"

    },{
        imagee : "https://images1-fabric.practo.com/dx/labs/PRL-TSA/logo.png/360x240",
        txt : "Basic Womens Health",
        txtsec : "Ideal for individual aged 15 - 40 years",
        txtthird : "85 tests include",
        pricefirst : "1900",
        butt : "2000"

    },{
        imagee : "https://images1-fabric.practo.com/dx/labs/PRL-FBC/logo.jpeg/360x240",
        txt : "Basic Womens Health",
        txtsec : "Ideal for individual aged 15 - 40 years",
        txtthird : "85 tests include",
        pricefirst : "1900",
        butt : "2000"

    },{
        imagee : "https://www.practo.com/tests/public/images/default-package-image.png?v112",
        txt : "Basic Womens Health",
        txtsec : "Ideal for individual aged 15 - 40 years",
        txtthird : "85 tests include",
        pricefirst : "1900",
        butt : "2000"

    },{
        imagee : "https://images1-fabric.practo.com/dx/labs/JAANCH-DPB/logo.jpg/360x240",
        txt : "Basic Womens Health",
        txtsec : "Ideal for individual aged 15 - 40 years",
        txtthird : "85 tests include",
        pricefirst : "1900",
        butt : "2000"

    },{
        imagee : "https://images1-fabric.practo.com/dx/labs/JAANCH-DFA/logo_ML45mcW.jpg/360x240",
        txt : "Basic Womens Health",
        txtsec : "Ideal for individual aged 15 - 40 years",
        txtthird : "85 tests include",
        pricefirst : "1900",
        butt : "2000"

    },{
        imagee : "https://images1-fabric.practo.com/dx/labs/JAANCH-HHB/logo.jpg/360x240",
        txt : "Basic Womens Health",
        txtsec : "Ideal for individual aged 15 - 40 years",
        txtthird : "85 tests include",
        pricefirst : "1900",
        butt : "2000"

    },{
        imagee : "https://images1-fabric.practo.com/dx/labs/JAANCH-HHA/logo_cV5h8Gf.jpg/360x240",
        txt : "Basic Womens Health",
        txtsec : "Ideal for individual aged 15 - 40 years",
        txtthird : "85 tests include",
        pricefirst : "1900",
        butt : "2000"

    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div>
      
      <Slider {...settings}>
        {carouselItems.map(item => (
          <div>
            <img src={item.imagee} alt="" />
            <p>{item.content}</p>
            <p>{item.txtsec}</p>
            <p>{item.txtthird}</p>
            <div className="bot_card_lab">
            <p>{item.pricefirst}</p>
            <p>{item.fadeprice}</p>
            <p>{item.offprice}</p>
            <button>{item.butt}</button></div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;