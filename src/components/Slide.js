import React, { useState , useEffect } from "react";
import Slider from "react-slick";
import {useDispatch , useSelector } from "react-redux";
import {getSlide} from "../actions/slide";

function Slide({page_type}) {
    const dispatch = useDispatch();

    const slide = useSelector(state => state.slide.slide.data.data);

    useEffect(() => {
      dispatch(getSlide({page_type : page_type}));
    }, []);


    const [settings, setSettings] = useState({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    });

    return (
            <Slider {...settings}>
                {(slide||[]).map((item , index) => {
                    return (
                        <div key={index}>
                            <img src={process.env.API_URL+"/storage/"+item?.image.pc} alt="slide" className="w-full h-80"/>
                        </div>
                    )
                })}
            </Slider>
    );
}

export default Slide;
