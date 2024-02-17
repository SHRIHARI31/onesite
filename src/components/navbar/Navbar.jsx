import React, { useState } from "react";
import "./navbar.css";

import "../fonts/fonts.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { variantsForDropDowns } from "../animation/dropDownAnimations/dropdownAnime";
import Marquee from "react-fast-marquee";
import whitelogo from './img/whitelogo.svg'

const Navbar = () => {
  const [apply, setApply] = useState(1);
  const [animator, setAnimator] = useState(false);
  const [visible, setVisible] = useState(1);

  const serviceDropDownData = [
    { drop: "web developement", to: "/service/web-development" },
    { drop: "software Developement", to: "/service/software-development" },
    { drop: "mobile App Developement", to: "/service/mobile-app-development" },
    { drop: "training and Consulting", to: "/service/training-and-consulting" },
    { drop: "web3 Developement", to: "/service/modern-webthree-development" },
    { drop: "IT consulting", to: "/service/it-consulting" },
    { drop: "Digital Transformation", to: "/service/digital-transformation" },
    { drop: "Digital Marketing", to: "/service/digital-marketing" },
  ];

  const solutionDropDownData = [
    { drop: "ERP", to: "/solution/erp-software-solutions" },
    { drop: "CRM", to: "/solution/crm-software-solutions" },
    { drop: "Enterprise Application", to: "/solution/enterprise-software-solution" },
    { drop: "Data Analysis", to: "/solution/data-analysis-solution" },
    { drop: "IT solution Management", to: "/solution/it-solution-management" },
    { drop: "E-commerce", to: "/solution/e-commerce-solution" },
    { drop: "Supply Chain", to: "/solution/supply-chain-solution" },
    { drop: "Web portals", to: "/solution/web-portals-solutions" },
  ];

  const technologyDropDownData = [
    { drop: "Front-end", to: "/technology/front-end" },
    { drop: "Back-end", to: "/technology/back-end" },
    { drop: "Cross platform", to: "/technology/cross-platform" },
    { drop: "Full stack development", to: "/technology/full-stack" },
    { drop: "Devops & ML", to: "/technology/devops-and-ml" },
    { drop: "Ecommerce & CMS", to: "/technology/e-commerce-cms" },
    { drop: "Block chain", to: "/technology/block-chain" },
  ];
  const industryDropDownData = [
    { drop: "MLM software", to: "/industry/mlm" },
    { drop: "Automation software", to: "/industry/automation" },
    { drop: "Logistic software", to: "/industry/logistic" },
    { drop: "social media software", to: "/industry/social-media" },
    { drop: "Networking", to: "/industry/networking" },
  ];
  const updates = [
    { updates: "We need flutter developer", to: "recruitment-page" },
    {
      updates: "digital Marketing experienced wanted ",
      to: "recruitment-page",
    },
    { updates: "We are providing internship", to: "recruitment-page" },
    { updates: "full stack developer wanted", to: "recruitment-page" }
  ];
  return (
    <>
      <Marquee direction="left">
        <div onMouseEnter={() => setVisible(1)} className=" flex  justify-between items-center   capitalize">
          {updates.map((update, id = 0) => (
            <Link
              className=" text-sm px-5 mx-[100px] md:mx-[500px] tracking-wide relative marques text-inoa-red font-semibold  font-poppins"
              key={id + 1}
              to={update.to}
            >
              {update.updates}
            </Link>
          ))}
        </div>
      </Marquee>

      <nav className="nav-bar w-full  gap-4 md:gap-0 flex-col md:flex-row items-start  bg-neutral-700 flex py-8 
     justify-between  md:items-center  md:px-10 h-fit md:h-[50px] z-[999]
    sticky top-0 font-poppins">
        <Link href="/">
          <img
            src={whitelogo}
            alt="company logo"
            className="wiz-svg h-[40px] w-[50px] p-1  md:h-[60px] md:w-[60px]   relative"
            loading="lazy"
          />
        </Link>
        <button
          className="toggler w-fit flex flex-col absolute cursor-pointer   p-2 gap-2 md:hidden right-5"
          type="button"
          onClick={() => setAnimator(!animator)}
        >
          <p
            className={`toggler-child w-[50px] h-1 bg-white ${animator && "bar-1"
              }`}
          ></p>
          <p
            className={`toggler-child w-[50px] h-1 bg-white ${animator && "bar-2"
              } `}
          ></p>
          <p
            className={`toggler-child w-[50px] h-1 bg-white ${animator && "bar-3"
              }`}
          ></p>
        </button>
        <div className={`navigations flex pl-2 md:pl-0 flex-col max-sm:items-start w-full justify-center items-center  bg-neutral-700  md:flex-row gap-6 md:text-lg ${animator ? "max-md:visible " : "max-md:hidden "}`}>
          <Link
            className={`nav-btn hover:!text-inoa-red tracking-wide  !text-white relative ${apply === 1 ? "before" : ""}`}
            onClick={() => { setApply(1), setAnimator(!animator) }}
          >
            {" "}
            <img src="" alt="" /> Home
          </Link>
          <div className="link-holder">
            <div
              className={`nav-btn hover:!text-inoa-red tracking-wide  !text-white relative ${apply === 2 ? "before" : ""}`}
              onMouseEnter={() => {
                {
                  setVisible(2);
                }
                {
                  setApply(2);
                }
              }}
            >
              {" "}
              <motion.div
                onMouseLeave={() => {
                  setApply(10);
                }}
              >
                Services
              </motion.div>
            </div>
            <div
              className={`big-overlay ${visible === 2 ? "lg:block" : ""
                } hidden  top-20 absolute left-0 h-screen w-full bg-transparent `}
              onMouseEnter={() => setVisible(1)}
            ></div>
            <motion.div
              variants={variantsForDropDowns}
              initial={"hide"}
              transition={variantsForDropDowns.dropTransition}
              animate={`${visible === 2 ? "show" : "hide"}`}
              onMouseLeave={() => {
                setVisible(1);
              }}
              className={` drop-down ${visible === 2 ? "flex" : "hidden"}`}
            >
              {serviceDropDownData.map((item, id = 0) => {
                return (
                  <Link
                    onClick={() => {
                      setVisible(1), setApply(2), setAnimator(!animator);
                    }}
                    className="drop-down-item"
                    key={id + 1}
                    to={item.to}
                  >
                    {item.drop}
                  </Link>
                );
              })}
            </motion.div>
          </div>

          <div className="link-holder">
            <button
              className={`nav-btn hover:!text-inoa-red tracking-wide  ${apply === 3 ? "before" : ""}`}
              onMouseEnter={() => {
                {
                  setVisible(3);
                }
                {
                  setApply(3);
                }
              }}

              onMouseLeave={() => {
                setApply(10);
              }}
            >
              Solutions
            </button>
            <div
              className={` big-overlay ${visible === 3 ? "lg:block" : ""
                } hidden  top-20 absolute left-0 h-screen w-full bg-transparent `}
              onMouseEnter={() => setVisible(1)}
            ></div>
            <motion.div
              variants={variantsForDropDowns}
              initial={"hide"}
              transition={variantsForDropDowns.dropTransition}
              animate={`${visible === 3 ? "show" : "hide"}`}
              onMouseLeave={() => setVisible(1)}
              className={`drop-down ${visible === 3 ? "flex" : "hidden"}`}
            >
              {solutionDropDownData.map((item, id = 0) => {
                return (
                  <Link
                    to={item.to}
                    onClick={() => {
                      setVisible(1), setApply(3), setAnimator(!animator);

                    }}
                    className="drop-down-item"
                    key={id + 1}
                  >
                    {item.drop}
                  </Link>
                );
              })}
            </motion.div>
          </div>

          <div className="link-holder">
            <button
              className={`nav-btn ${apply === 4 ? "before" : ""}`}
              onMouseLeave={() => {
                setApply(10);
              }}
              onMouseEnter={() => {
                {
                  setVisible(4);
                }
                {
                  setApply(4);
                }
              }}
            >
              Technology
            </button>
            <div
              className={` big-overlay ${visible === 4 ? "lg:block" : ""
                } hidden  top-20 absolute left-0 h-screen w-full bg-transparent `}
              onMouseEnter={() => setVisible(1)}
            ></div>
            <motion.div
              variants={variantsForDropDowns}
              initial={"hide"}
              transition={variantsForDropDowns.dropTransition}
              animate={`${visible === 4 ? "show" : "hide"}`}
              onMouseLeave={() => setVisible(1)}
              className={`drop-down  ${visible === 4 ? "flex" : "hidden"}`}
            >
              {technologyDropDownData.map((item, id = 0) => {
                return (
                  <Link
                    to={item.to}
                    onClick={() => {
                      setVisible(1), setApply(4), setAnimator(!animator);
                    }}
                    className="drop-down-item"
                    key={id + 1}
                  >
                    {item.drop}
                  </Link>
                );
              })}
            </motion.div>
          </div>

          <div className="link-holder">
            <button
              className={`nav-btn ${apply === 5 ? "before" : ""}`}
              onMouseLeave={() => {
                setApply(10);
              }}
              onMouseEnter={() => {
                {
                  setVisible(5);
                }
                {
                  setApply(5);
                }
              }}
            >
              Industry
            </button>
            <div
              className={` big-overlay ${visible === 5 ? "lg:block" : ""
                } hidden  top-20 absolute left-0 h-screen w-full bg-transparent `}
              onMouseEnter={() => setVisible(1)}
            ></div>
            <motion.div
              variants={variantsForDropDowns}
              initial={"hide"}
              transition={variantsForDropDowns.dropTransition}
              animate={`${visible === 5 ? "show" : "hide"}`}
              onMouseLeave={() => setVisible(1)}
              className={`drop-down ${visible === 5 ? "flex" : "hidden"}`}
            >
              {industryDropDownData.map((item, id = 0) => {
                return (
                  <Link
                    to={item.to}
                    onClick={() => {
                      setVisible(1), setApply(5), setAnimator(!animator);
                    }}
                    className="drop-down-item"
                    key={id + 1}
                  >
                    {item.drop}
                  </Link>
                );
              })}
            </motion.div>
          </div>
          <button
            className={`nav-btn ${apply === 6 ? "before" : ""}`}
            onClick={() => { setApply(6), setAnimator(!animator) }}
          >
            <Link to={"blog"}>Blog</Link>
          </button>
          <button
            className={`nav-btn ${apply === 7 ? "before" : ""}`}
            onClick={() => { setApply(7), setAnimator(!animator) }}
          >
            <Link to={"recruitment-page"}>we recruit</Link>
          </button>
          <button className={`nav-btn ${apply === 8 ? "before" : ""} `}
            onClick={() => { setApply(8), setAnimator(!animator) }}>
            <Link to={"contact-us"}>Contact us</Link>
          </button>


        </div>
        <div className=" hidden lg:block rounded-md   shadow-inoa-red"> <Link to={'contact-us'}>
          {" "}
          <button onClick={() => setAnimator(!animator)} className="bg-red-950 btn-span  text-white border w-[120%]   h-[40px] md:hidden lg:block border-inoa-red border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
            <span className="bg-inoa-red shadow-inoa-red absolute  -top-[150%] left-0 inline-flex w-80 h-fit rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
            Free Demo
          </button>
        </Link></div>
      </nav>
    </>
  );
};

export default Navbar;