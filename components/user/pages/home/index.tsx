'use client'
import AboutUs from "./about-us";
import Articles from "./articles";

import Banner from "./banner";

import Landing from "./landing";

import PopularRooms from "./popular-rooms";
import Stats from "./stats";
import Videos from "./videos";
import Testmonials from './testmonials'
import Footer from "./footer";
import ChatOnline from "@/components/shared/chatOnline/index";
const Home = () => {
  return (<>
    <Landing />

    <PopularRooms />
    {/* commentsUser */}
    <Testmonials />
    <Stats />
    <AboutUs />
    {/* <PopularFoods /> */}
    <Banner />
    {/* <InfoBox /> */}
    <Articles />
    <Videos />
    {/* <Auth /> */}
    <Footer />
    <ChatOnline />
  </>
  );
};
export default Home;
