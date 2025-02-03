import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import LunuMirisa01 from '../../assets/LunuMirisa01.png';
import LunuMirisa02 from '../../assets/LunuMirisa02.png';
import LunuMirisa03 from '../../assets/LunuMirisa05.png';
import LunuMirisa04 from '../../assets/NoteApp02.png';
import LunuMirisa05 from '../../assets/BookScape01.png';
import LunuMirisa06 from '../../assets/BookScape02.png';

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Slider {...settings}>
      <div>
        <img src={LunuMirisa01} alt="Lunu Mirisa 1" />
      </div>
      <div>
        <img src={LunuMirisa02} alt="Lunu Mirisa 2" />
      </div>
      <div>
        <img src={LunuMirisa03} alt="Lunu Mirisa 3" />
      </div>
      <div>
        <img src={LunuMirisa04} alt="Lunu Mirisa 4" />
      </div>
      <div>
        <img src={LunuMirisa05} alt="Lunu Mirisa 5" />
      </div>
      <div>
        <img src={LunuMirisa06} alt="Lunu Mirisa 6" />
      </div>
    </Slider>
  );
};

export default ImageSlider;