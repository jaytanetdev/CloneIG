'use client'
import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Story() {
    var settings = {
        dots: false, 
        infinite: false,
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 1,
        swipeToSlide: true, 
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    dots: false, 
                    speed: 500,
                    slidesToShow: 8,
                    slidesToScroll: 1,
                    swipeToSlide: true,
                    infinite: false,
                    
                }
            },
            {
                breakpoint: 777,
                settings: {
                    dots: false, 
                    speed: 500,
                    slidesToShow: 8,
                    slidesToScroll: 1,
                    swipeToSlide: true,
                    infinite: false,
                    arrows: false,
                }
            },
            {
                breakpoint: 570,
                settings: {
                    speed: 500,
                    dots: false, 
                    slidesToShow: 7,
                    slidesToScroll: 1,
                    swipeToSlide: true,
                    infinite: false,
                    arrows: false,
                }
            },
            {
                breakpoint: 500,
                settings: {
                    speed: 500,
                    dots: false, 
                    slidesToShow: 6,
                    slidesToScroll: 1,
                    swipeToSlide: true,
                    infinite: false,
                    arrows: false,
                }
            },
            {
                breakpoint: 410,
                settings: {
                    speed: 500,
                    dots: false, 
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    swipeToSlide: true,
                    infinite: false,
                    arrows: false,
                }
            }
        ]
    };
    
    return (
        <>

                <Slider {...settings}>
                    {['org', 'apple', 'mango', 'durain', 'banana', 'grape', 'staw', 'coconut', 'org', 'apple', 'mango', 'durain', 'banana', 'grape', 'staw', 'coconut'].map((fruit, index) => (
                        <div key={index} className='m-2 cursor-pointer'>
                            <div className='bg-red-500 rounded-full p-[2px] w-[60px]'>
                                <div className='bg-black rounded-full'>
                                    <img src={`person/${fruit}.png`} className='rounded-full w-[60px] h-[60px] p-[2px]' alt={fruit} />
                                </div>
                            </div>
                            <p className='text-base text-center text-white mt-2 max-w-[60px] overflow-hidden text-ellipsis whitespace-nowrap'>{fruit}</p>
                        </div>
                    ))}
                </Slider>
         
        </>
    );
}

export default Story;
