import React, {useEffect, useRef } from "react";
import Supportcomp from './Supportcomp'
import logo1 from "../assets/logo1.png"
import linevector from "../assets/linevector.svg"
import oneframe from "../assets/oneframe.png"
import giveframe from "../assets/giveframe.png"
import buyframe from "../assets/buyframe.png"

import Footer from './footer'
import Head from './Nav'
import './Home.css';
import './bestdeals.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ubuntu from "../assets/ubuntu.png"
import heart_fill from "../assets/heart_fill.png"
import heart_unfill from "../assets/heart_unfill.png"
import Netflix from "../assets/Netflix.png"
import Linux from "../assets/8.png"
import zeenox from "../assets/9.png"
import image4 from "../assets/image4.png"
import upframe from "../assets/upframe.png"
import spinframe from "../assets/spinframe.png"
import disframe from "../assets/disframe.png"
import twoframe from "../assets/twoframe.png"
import Hermes from "../assets/hermes.png"
import Youtube from "../assets/youtube.png"
import Hm from "../assets/h.m.png"
import Edx from "../assets/edx.png"
import Skill from "../assets/skill.png"
import Linked from "../assets/linkedin.png"
import threeframe from "../assets/threeframe.png"


function BestDeals() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
      slidesToslide: 2

    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 2
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToslide: 2

    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToslide: 2

    }
  };
  const carouselRef = useRef(null);

  useEffect(() => {
 

    const interval = setInterval(() => {
      carouselRef.current.next();
    }, 3000);


    // Clean up on component unmount
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <>
      <Head />
      <div className="flex items-center px-6">
        <img className="h-24" src={logo1} alt="" />
        <img className="h-10" src={linevector} alt="" />
        <h3 className="ml-4 giveaway">Giveaway/Discounts</h3>
      </div>
      <img className="" src={oneframe} alt="" />
      <img className="px-6 py-4" src={giveframe} alt="" />
      <div className="flex justify-around pb-10">
        <img className="h-72" src={upframe} alt="" />
        <img className="h-72" src={spinframe} alt="" />
      </div>
      <img className="px-6 pb-4" src={disframe} alt="" />
      <div className="pl-10">
      <Carousel
          ref={carouselRef}
          responsive={responsive}
          autoPlay
          autoPlaySpeed={3000}
          infinite
          className="flex gap-4 justify"
      >
          <div className="pink w-96 pb-4">
            <img className="pinkimg" src={ubuntu} alt="Logo" />
            <div className="flex justify-between mx-4 items-center text-xl font-semibold"><h4 className="text-indigo-950">The Sims 4</h4> <h3>$150</h3></div>
            <div className="flex justify-between mx-4 items-center text-sm font-semibold"><h4 className="text-indigo-950">Global</h4> <h3></h3></div>
            <div className="flex justify-between mx-4 items-center text-sm font-semibold"><h4 className="flex items-center">
              <img className="" src={heart_fill} alt="Logo" />
              <small className="">1544 likes</small>


            </h4>
              <h3>
                <img className="" src={heart_unfill} alt="Logo" />
              </h3>
            </div>
          </div>
          <div className="pink w-96 pb-4">
            <img className="pinkimg" src={Linux} alt="Logo" />
            <div className="flex justify-between mx-4 items-center text-xl font-semibold"><h4 className="text-indigo-950">The Sims 4</h4> <h3>$150</h3></div>
            <div className="flex justify-between mx-4 items-center text-sm font-semibold"><h4 className="text-indigo-950">Global</h4> <h3></h3></div>
            <div className="flex justify-between mx-4 items-center text-sm font-semibold"><h4 className="flex items-center">
              <img className="" src={heart_fill} alt="Logo" />
              <small className="">1544 likes</small>


            </h4>
              <h3>
                <img className="" src={heart_unfill} alt="Logo" />
              </h3>
            </div>
          </div>
          <div className="pink w-96 pb-4">
            <img className="pinkimg" src={zeenox} alt="Logo" />
            <div className="flex justify-between mx-4 items-center text-xl font-semibold"><h4 className="text-indigo-950">The Sims 4</h4> <h3>$150</h3></div>
            <div className="flex justify-between mx-4 items-center text-sm font-semibold"><h4 className="text-indigo-950">Global</h4> <h3></h3></div>
            <div className="flex justify-between mx-4 items-center text-sm font-semibold"><h4 className="flex items-center">
              <img className="" src={heart_fill} alt="Logo" />
              <small className="">1544 likes</small>


            </h4>
              <h3>
                <img className="" src={heart_unfill} alt="Logo" />
              </h3>
            </div>
          </div>
          <div className="pink w-96 pb-4">
            <img className="pinkimg" src={image4} alt="Logo" />
            <div className="flex justify-between mx-4 items-center text-xl font-semibold"><h4 className="text-indigo-950">The Sims 4</h4> <h3>$150</h3></div>
            <div className="flex justify-between mx-4 items-center text-sm font-semibold"><h4 className="text-indigo-950">Global</h4> <h3></h3></div>
            <div className="flex justify-between mx-4 items-center text-sm font-semibold"><h4 className="flex items-center">
              <img className="" src={heart_fill} alt="Logo" />
              <small className="">1544 likes</small>


            </h4>
              <h3>
                <img className="" src={heart_unfill} alt="Logo" />
              </h3>
            </div>
          </div>
          <div className="pink w-96 pb-4">
            <img className="pinkimg" src={Netflix} alt="Logo" />
            <div className="flex justify-between mx-4 items-center text-xl font-semibold"><h4 className="text-indigo-950">The Sims 4</h4> <h3>$150</h3></div>
            <div className="flex justify-between mx-4 items-center text-sm font-semibold"><h4 className="text-indigo-950">Global</h4> <h3></h3></div>
            <div className="flex justify-between mx-4 items-center text-sm font-semibold"><h4 className="flex items-center">
              <img className="" src={heart_fill} alt="Logo" />
              <small className="">1544 likes</small>


            </h4>
              <h3>
                <img className="" src={heart_unfill} alt="Logo" />
              </h3>
            </div>
          </div>
        </Carousel>
        </div>
        <div className="pt-10">
          <img src={twoframe} alt="" />
        </div>
        <div className="px-10 py-6 seeall-container">
      <div className="pink w-96 pb-4">
            <img className="pinkimg" src={Hermes} alt="Logo" />
            <div className="flex justify-between mx-4 items-center text-xl font-semibold"><h4 className="text-indigo-950">The Sims 4</h4> <h3>$150</h3></div>
            <div className="flex justify-between mx-4 items-center text-sm font-semibold"><h4 className="text-indigo-950">Global</h4> <h3></h3></div>
            <div className="flex justify-between mx-4 items-center text-sm font-semibold"><h4 className="flex items-center">
              <img className="" src={heart_fill} alt="Logo" />
              <small className="">1544 likes</small>


            </h4>
              <h3>
                <img className="" src={heart_unfill} alt="Logo" />
              </h3>
            </div>
          </div>          
          <div className="pink w-96 pb-4">
            <img className="pinkimg" src={Youtube} alt="Logo" />
            <div className="flex justify-between mx-4 items-center text-xl font-semibold"><h4 className="text-indigo-950">The Sims 4</h4> <h3>$150</h3></div>
            <div className="flex justify-between mx-4 items-center text-sm font-semibold"><h4 className="text-indigo-950">Global</h4> <h3></h3></div>
            <div className="flex justify-between mx-4 items-center text-sm font-semibold"><h4 className="flex items-center">
              <img className="" src={heart_fill} alt="Logo" />
              <small className="">1544 likes</small>


            </h4>
              <h3>
                <img className="" src={heart_unfill} alt="Logo" />
              </h3>
            </div>
          </div>          <div className="pink w-96 pb-4">
            <img className="pinkimg" src={Hm} alt="Logo" />
            <div className="flex justify-between mx-4 items-center text-xl font-semibold"><h4 className="text-indigo-950">The Sims 4</h4> <h3>$150</h3></div>
            <div className="flex justify-between mx-4 items-center text-sm font-semibold"><h4 className="text-indigo-950">Global</h4> <h3></h3></div>
            <div className="flex justify-between mx-4 items-center text-sm font-semibold"><h4 className="flex items-center">
              <img className="" src={heart_fill} alt="Logo" />
              <small className="">1544 likes</small>


            </h4>
              <h3>
                <img className="" src={heart_unfill} alt="Logo" />
              </h3>
            </div>
          </div>         
          <div className="pink w-96 pb-4">
            <img className="pinkimg" src={Edx} alt="Logo" />
            <div className="flex justify-between mx-4 items-center text-xl font-semibold"><h4 className="text-indigo-950">The Sims 4</h4> <h3>$150</h3></div>
            <div className="flex justify-between mx-4 items-center text-sm font-semibold"><h4 className="text-indigo-950">Global</h4> <h3></h3></div>
            <div className="flex justify-between mx-4 items-center text-sm font-semibold"><h4 className="flex items-center">
              <img className="" src={heart_fill} alt="Logo" />
              <small className="">1544 likes</small>


            </h4>
              <h3>
                <img className="" src={heart_unfill} alt="Logo" />
              </h3>
            </div>
          </div>          
          <div className="pink w-96 pb-4">
            <img className="pinkimg" src={Skill} alt="Logo" />
            <div className="flex justify-between mx-4 items-center text-xl font-semibold"><h4 className="text-indigo-950">The Sims 4</h4> <h3>$150</h3></div>
            <div className="flex justify-between mx-4 items-center text-sm font-semibold"><h4 className="text-indigo-950">Global</h4> <h3></h3></div>
            <div className="flex justify-between mx-4 items-center text-sm font-semibold"><h4 className="flex items-center">
              <img className="" src={heart_fill} alt="Logo" />
              <small className="">1544 likes</small>


            </h4>
              <h3>
                <img className="" src={heart_unfill} alt="Logo" />
              </h3>
            </div>
          </div>    
          <div className="pink w-96 pb-4">
            <img className="pinkimg" src={Linked} alt="Logo" />
            <div className="flex justify-between mx-4 items-center text-xl font-semibold"><h4 className="text-indigo-950">The Sims 4</h4> <h3>$150</h3></div>
            <div className="flex justify-between mx-4 items-center text-sm font-semibold"><h4 className="text-indigo-950">Global</h4> <h3></h3></div>
            <div className="flex justify-between mx-4 items-center text-sm font-semibold"><h4 className="flex items-center">
              <img className="" src={heart_fill} alt="Logo" />
              <small className="">1544 likes</small>


            </h4>
              <h3>
                <img className="" src={heart_unfill} alt="Logo" />
              </h3>
            </div>
          </div>  
          </div>
          <img className="mt-10" src={threeframe} alt="" />
          <img className="mt-10 ml-6" src={buyframe} alt="" />

          <div className="pl-10">
      <Carousel
          ref={carouselRef}
          responsive={responsive}
          autoPlay
          autoPlaySpeed={3000}
          infinite
          className="flex gap-4 justify"
      >
          <div className="pink w-96 pb-4">
            <img className="pinkimg" src={ubuntu} alt="Logo" />
            <div className="flex justify-between mx-4 items-center text-xl font-semibold"><h4 className="text-indigo-950">The Sims 4</h4> <h3>$150</h3></div>
            <div className="flex justify-between mx-4 items-center text-sm font-semibold"><h4 className="text-indigo-950">Global</h4> <h3></h3></div>
            <div className="flex justify-between mx-4 items-center text-sm font-semibold"><h4 className="flex items-center">
              <img className="" src={heart_fill} alt="Logo" />
              <small className="">1544 likes</small>


            </h4>
              <h3>
                <img className="" src={heart_unfill} alt="Logo" />
              </h3>
            </div>
          </div>
          <div className="pink w-96 pb-4">
            <img className="pinkimg" src={Linux} alt="Logo" />
            <div className="flex justify-between mx-4 items-center text-xl font-semibold"><h4 className="text-indigo-950">The Sims 4</h4> <h3>$150</h3></div>
            <div className="flex justify-between mx-4 items-center text-sm font-semibold"><h4 className="text-indigo-950">Global</h4> <h3></h3></div>
            <div className="flex justify-between mx-4 items-center text-sm font-semibold"><h4 className="flex items-center">
              <img className="" src={heart_fill} alt="Logo" />
              <small className="">1544 likes</small>


            </h4>
              <h3>
                <img className="" src={heart_unfill} alt="Logo" />
              </h3>
            </div>
          </div>
          <div className="pink w-96 pb-4">
            <img className="pinkimg" src={zeenox} alt="Logo" />
            <div className="flex justify-between mx-4 items-center text-xl font-semibold"><h4 className="text-indigo-950">The Sims 4</h4> <h3>$150</h3></div>
            <div className="flex justify-between mx-4 items-center text-sm font-semibold"><h4 className="text-indigo-950">Global</h4> <h3></h3></div>
            <div className="flex justify-between mx-4 items-center text-sm font-semibold"><h4 className="flex items-center">
              <img className="" src={heart_fill} alt="Logo" />
              <small className="">1544 likes</small>


            </h4>
              <h3>
                <img className="" src={heart_unfill} alt="Logo" />
              </h3>
            </div>
          </div>
          <div className="pink w-96 pb-4">
            <img className="pinkimg" src={image4} alt="Logo" />
            <div className="flex justify-between mx-4 items-center text-xl font-semibold"><h4 className="text-indigo-950">The Sims 4</h4> <h3>$150</h3></div>
            <div className="flex justify-between mx-4 items-center text-sm font-semibold"><h4 className="text-indigo-950">Global</h4> <h3></h3></div>
            <div className="flex justify-between mx-4 items-center text-sm font-semibold"><h4 className="flex items-center">
              <img className="" src={heart_fill} alt="Logo" />
              <small className="">1544 likes</small>


            </h4>
              <h3>
                <img className="" src={heart_unfill} alt="Logo" />
              </h3>
            </div>
          </div>
          <div className="pink w-96 pb-4">
            <img className="pinkimg" src={Netflix} alt="Logo" />
            <div className="flex justify-between mx-4 items-center text-xl font-semibold"><h4 className="text-indigo-950">The Sims 4</h4> <h3>$150</h3></div>
            <div className="flex justify-between mx-4 items-center text-sm font-semibold"><h4 className="text-indigo-950">Global</h4> <h3></h3></div>
            <div className="flex justify-between mx-4 items-center text-sm font-semibold"><h4 className="flex items-center">
              <img className="" src={heart_fill} alt="Logo" />
              <small className="">1544 likes</small>


            </h4>
              <h3>
                <img className="" src={heart_unfill} alt="Logo" />
              </h3>
            </div>
          </div>
        </Carousel>
        </div>

      <Supportcomp />
      <Robluxcomp />
      <Footer />
      {/* Your component content here */}
    </>
  )
}

export default BestDeals;
