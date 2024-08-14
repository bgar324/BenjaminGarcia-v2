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
    <div><img src="/public/static/sliderimages/ben_pfp22.png" className="slider" alt="Image 1" /></div>
    <div><img src="/public/static/sliderimages/IMG_1507.png" className="slider" alt="Image 2" /></div>
    <div><img src="/public/static/sliderimages/IMG_1547.png" className="slider" alt="Image 3" /></div>
    <div><img src="/public/static/sliderimages/IMG_1634.png" className="slider" alt="Image 4" /></div>
    <div><img src="/public/static/sliderimages/IMG_1607.png" className="slider" alt="Image 5" /></div>
    <div><img src="/public/static/sliderimages/IMG_1687.png" className="slider" alt="Image 6" /></div>
    <div><img src="/public/static/sliderimages/IMG_1692.png" className="slider" alt="Image 7" /></div>
    </Slider>
    </div>
    </>
  )
}

export default Card
