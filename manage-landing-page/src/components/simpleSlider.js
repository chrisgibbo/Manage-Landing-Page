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
    speed: 800,
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
        testimonial="We have been able to cancel so many other subscriptions 
        since using Manage. There is no more cross-channel confusion and everyone is much more focused."
      />
      <Testimonials
        image={RichardWatts}
        name="Richard Watts"
        testimonial="Manage allows us to provide structure and process. It keeps 
        us organized and focused. I can't stop recommending 
        them to everyone I talk to!."
      />
      <Testimonials
        image={ShanaiGough}
        name="Shanai Gough"
        testimonial="Their software allows us to track, manage and collaborate 
        on our projects from anywhere. It keeps the whole team in-sync without being intrusive."
      />
    </Slider>
  );
}

export default simpleSlider;
