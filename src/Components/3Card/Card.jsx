import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Card.css'

const Card = () => {
  const settings = {
    lazyLoad: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    arrows: false,
  };
  return (
    <>
    <div className="card-container">
    <Slider {...settings}>
      <div><img src="slider images/ben_pfp22.png" className="slider" /></div>
      <div><img src="slider images/IMG_1507.png" className="slider" /></div>
      <div><img src="slider images/IMG_1547.png" className="slider" /></div>
      <div><img src="slider images/IMG_1634.png" className="slider" /></div>
      <div><img src="slider images/IMG_1607.png" className="slider" /></div>
      <div><img src="slider images/IMG_1687.png" className="slider" /></div>
      <div><img src="slider images/IMG_1692.png" className="slider" /></div>
    </Slider>
    </div>
    </>
  )
}

export default Card
