import React from 'react'
import list from '../../public/list.json'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';

function Freebook() {
    const filterData = list.filter((data) => data.category === "Free")
    console.log(filterData)

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <>

            <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 my-10'>
                <div>
                    <h1 className='font-semibold text-xl pb-2'>Free Offered Courses !!!</h1>
                    <p>Each day you'll receive a selection of discounted titles, from bestsellers to hidden gems. Tell BookBub what you like to read, and get handpicked deals that match your reading taste.</p>
                </div>

                <div className="px-3">
                    <Slider {...settings}>
                        {filterData.map((item) => (
                            <div key={item.id} className="px-0.5">
                                <Cards item={item} />
                            </div>
                        ))}
                    </Slider>
                </div>


                {/* 
                <div>
                    <Slider {...settings}>
                        {filterData.map((item) => {
                            return <Cards item={item} key={item.id} />
                        })}
                    </Slider>
                </div> */}
            </div>


        </>
    )
}

export default Freebook
