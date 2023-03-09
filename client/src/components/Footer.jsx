import React from "react";

const Footer = () => {
  return (
    <div className="flex w-[90%] justify-between px-[10%]">
      <div className="w-[40%] text-xl flex flex-col leading-10">
        <h1 className="text-5xl">Project Diary</h1>
        <p>Cupidatat officia incididunt nostrud laboris.</p>
      </div>
      <div className="flex justify-evenly w-[40%] gap-10 ">
        <div className="text-lg flex flex-col leading-10">
          <p className="text-2xl font-semibold">Marketplace</p>
          <ul>
            <li>Home</li>
            <li>Discover</li>
            <li>Activity</li>
            <li>Learn More</li>
          </ul>
        </div>
        <div className="text-lg flex flex-col leading-10">
          <p className="text-2xl font-semibold">Marketplace</p>
          <ul>
            <li>Home</li>
            <li>Discover</li>
            <li>Activity</li>
            <li>Learn More</li>
          </ul>
        </div>
        <div className="text-lg flex flex-col leading-10">
          <p className="text-2xl font-semibold">Marketplace</p>
          <ul>
            <li>Home</li>
            <li>Discover</li>
            <li>Activity</li>
            <li>Learn More</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
