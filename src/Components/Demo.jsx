import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = () => {
  const carouselItems = [
    {
      id: 1,
      title: 'https://www.practo.com/tests/public/images/landingpage_icons/Fever.svg?v=1569493559',
      content: 'Fever',
    },
    {
      id: 2,
      title: 'https://www.practo.com/tests/public/images/landingpage_icons/Diabetes.svg?v=1569493559',
      content: 'Diabetes',
    },
    {
      id: 3,
      title: 'https://www.practo.com/tests/public/images/landingpage_icons/Skin.svg?v=1569493559',
      content: 'Skin',
    }, {
      id: 4,
      title: 'https://www.practo.com/tests/public/images/landingpage_icons/Kidney.svg?v=1569493559',
      content: 'Kidney',
    }, {
      id: 5,
      title: 'https://www.practo.com/tests/public/images/landingpage_icons/Skin.svg?v=1569493559',
      content: 'Digestion',
    }, {
      id: 6,
      title: 'https://www.practo.com/tests/public/images/landingpage_icons/Cancer.svg?v=1569493559',
      content: 'Cancer',
    }, {
      id: 7,
      title: 'https://www.practo.com/tests/public/images/landingpage_icons/Bones.svg?v=1569493559',
      content: 'Bone',
    }, {
      id: 8,
      title: 'https://www.practo.com/tests/public/images/landingpage_icons/Sexual_wellness.svg?v=1569493559',
      content: 'Sexual wellness',
    },
    // Add more items as needed
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 8,
  };

  return (
    <div>
      
      <Slider {...settings}>
        {carouselItems.map(item => (
          <div key={item.id}>
            <img src={item.title} alt="" />
            <p>{item.content}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;