import React from "react";
import Slider from "react-slick";
import Testimonials from "./testimonials";
import Anisha from "../images/avatar-anisha.png";
import AliBravo from "../images/avatar-ali.png";
import RichardWatts from "../images/avatar-richard.png";
import ShanaiGough from "../images/avatar-shanai.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function simpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <Testimonials
        image={Anisha}
        name="Anisha Li"
        testimonial="Manage has supercharged our team's workdflow. The ability 
      to maintain visibility on larger milestones at all times
      keeps everyone motivated."
      />
      <Testimonials
        image={AliBravo}
        name="Ali Bravo"
        testimonial="Manage has supercharged our team's workdflow. The ability 
      to maintain visibility on larger milestones at all times
      keeps everyone motivated."
      />
      <Testimonials
        image={RichardWatts}
        name="Richard Watts"
        testimonial="Manage has supercharged our team's workdflow. The ability 
      to maintain visibility on larger milestones at all times
      keeps everyone motivated."
      />
      <Testimonials
        image={ShanaiGough}
        name="Shanai Gough"
        testimonial="Manage has supercharged our team's workdflow. The ability 
      to maintain visibility on larger milestones at all times
      keeps everyone motivated."
      />
    </Slider>
  );
}

export default simpleSlider;
