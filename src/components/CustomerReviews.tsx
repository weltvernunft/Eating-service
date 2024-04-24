import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ReviewSlider.css";
import star from "../Images/icons/goldStar.svg";

interface Review {
  reviewerName: string;
  rate: number;
  yearsWithUs: number;
  content: string;
  avatarUrl: string;
}

interface ReviewSliderProps {
  reviews: Review[];
}

const ReviewSlider: React.FC<ReviewSliderProps> = ({ reviews }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<Slider>(null); // Create a reference to the Slider component
  const barRef = useRef<HTMLDivElement>(null);
  let barTranslate = 0;

  useEffect(() => {
    if (barRef.current) {
      const currentBarWidth = barRef.current.offsetWidth;
      barTranslate = currentSlide * currentBarWidth;
      barRef.current.style.transform = `translateX(${barTranslate}px)`;
    }
  }, [currentSlide]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    swipeToSlide: true,
    adaptiveHeight: true,
    beforeChange: (current: number, next: number) => setCurrentSlide(next),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const handleSlideClick = (index: number) => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(index); // Navigate to the clicked slide
    }
  };

  return (
    <section className="review-slider-container">
      <h2>
        <span className="text-global">Customers</span> Say
      </h2>
      <Slider ref={sliderRef} {...settings} className="mb-5 md:mb-0">
        {reviews.map((review, index) => (
          <div
            key={index}
            className={`border p-5 outline-none rounded-lg ${
              currentSlide === index && "md:min-h-[250px]"
            }`}
            onClick={() => handleSlideClick(index)}
          >
            {currentSlide === index && (
              <div className="reviewer flex gap-4 items-center mb-5">
                <img
                  src={review.avatarUrl}
                  alt={review.reviewerName}
                  className="w-16 rounded-full"
                />
                <div className="reviever-info text-left">
                  <h3>{review.reviewerName}</h3>
                  <p>{review.yearsWithUs} years with us</p>
                </div>
              </div>
            )}
            <p className="text-left text-gray-500 italic mb-5">"{review.content}"</p>
            <div className="rating flex gap-1">
              {Array.from({ length: review.rate }).map((_, index) => (
                <img
                  key={index}
                  src={star}
                  alt="Star"
                  className="w-3 h-3 inline-block"
                />
              ))}
            </div>
          </div>
        ))}
      </Slider>

      <div className="slider bg-slate-200 h-2 relative rounded-full | md:w-[48%] md:mr-0 md:ml-auto -translate-y-full">
        <div
          ref={barRef}
          className="slider-bar bg-slate-400 w-1/3 h-2 absolute rounded-full | transition-transform duration-300 ease-in-out"
        ></div>
      </div>
      <hr className="my-14" />
    </section>
  );
};

export default ReviewSlider;
