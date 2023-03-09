import React from "react";
import flat from "./assets/flat.svg";

const Home = () => {
  return (
    <div className="flex justify-around h-[95vh] px-[6%] py-[80px]">
      <div className=" flex flex-col w-[42%] ">
        <div className=" text-[64px] font-semibold ">
          <h1>Project Diary.</h1>
        </div>
        <div className="text-[52px] font-semibold text-violet-700 pb-6">
          <p className="leading-snug">Project Management Made Easy</p>
        </div>
        <div className="text-xl">
          <p>
            Voluptate occaecat mollit duis adipisicing dolore ipsum ex officia
            cillum et. Qui in aute consequat in exercitation elit ad laboris est
            est laborum. Ipsum ullamco occaecat esse nulla. Non laboris
            voluptate eu sunt sit nulla elit qui cillum. Esse tempor velit qui
            voluptate eu reprehenderit nulla velit do. Enim nostrud irure
            laboris officia minim do ea velit consectetur ut.Esse tempor velit
            qui voluptate eu reprehenderit nulla velit do. Enim nostrud irure
            laboris officia minim do ea velit consectetur ut.
          </p>
        </div>
      </div>
      <div className="w-[42%] h-[100px] pt-[60px]">
        <img src={flat} alt="image" className="w-[100%] h-[400px]" />
      </div>
    </div>
  );
};

export default Home;
