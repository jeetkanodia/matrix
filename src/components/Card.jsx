// eslint-disable-next-line no-unused-vars
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import classnames from 'classnames';

const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000, // Increase this to make the transition animation slower and smoother
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000, // Increase this to increase the time between auto-play transitions
    pauseOnHover: true,
    rows: 2,
    responsive: [
      {
        breakpoint: 768, // window width to apply these settings
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 1, // only one row
        }
      }
    ]
  };

  const names = [
    'Ravi Kumar',
    'Sunita Sharma',
    'Amit Patel',
    'Priya Singh',
    'Vijay Verma',
    'Anita Desai',
    'Rajesh Gupta',
    'Pooja Yadav',
    'Sanjay Mehra',
    'Deepa Bhatia',
    'Harish Reddy',
    'Geeta Nair',
  ];

  const testimonies = [
    'Being a part of VIT Multimedia club has been a great experience. I learned a lot and made some great friends.',
    'I love the collaborative environment in the club. Everyone is always willing to help each other out.',
    'The club has given me the opportunity to work on some really interesting projects. I\'ve learned so much.',
    'I\'ve been a member for two years now and I can honestly say it\'s been one of the best experiences of my college life.',
    'The club has helped me develop my skills and build a strong portfolio. I\'m grateful for the opportunities it has provided me.',
    'I joined the club as a freshman and it has been a wonderful journey. The seniors are very supportive and I\'ve learned a lot from them.',
    'The club has not only helped me grow professionally, but also personally. The experiences and memories I\'ve made here are priceless.',
    'I\'ve had the chance to work with some really talented people in the club. It\'s been a great learning experience.',
    'The club has provided me with a platform to showcase my skills and learn from others. I\'m proud to be a part of it.',
    'Being a part of the club has been a rewarding experience. I\'ve gained a lot of practical knowledge and skills.',
    'The club has a great community. I\'ve made some of my best friends here.',
    'I\'ve been able to explore my creativity in a supportive and encouraging environment. I love being a part of the club.',
  ];

  const colorClasses = ['card-color1', 'card-color2', 'card-color3', 'card-color4'];

  const cards = names.map((name, index) => {
    const colorClass = colorClasses[index % colorClasses.length];

    return {
      title: name,
      text: testimonies[index],
      colorClass: colorClass, 
    };
  });



  return (
    <>
    <h2 className="card-heading" style={{fontSize: '40px', marginBottom: '1rem'}}>Don&apos;t take our word for it, see what the <span style={{color: '#C477CB'}}>community</span> is saying</h2>
    <div className="carousel">
      <Slider {...settings}>
        {cards.map((card, index) => (
          <div key={index} className={classnames('card', card.colorClass)}>
            <h3>{card.title}</h3>
            <p>{card.text}</p>
          </div>
        ))}
      </Slider>
    </div>
    </>
  );
};

export default Carousel;