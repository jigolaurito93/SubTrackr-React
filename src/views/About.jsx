import React from "react";
import Index from "../components/Index";
import bgImage from "../assets/pexels-lukas-317356.jpg";

export default function About() {
  return (
    <div>
      <div className="top-0 fixed -z-10">
        <img src={bgImage} alt="" className="" />
      </div>
      <h2 className="w-full h-fit py-4 bg-black text-white text-5xl text-center">
        ABOUT US
      </h2>
      <div className="border-2 mx-72 mt-12 bg-black border-black">
        <div className=" m-4 rounded px-36 pt-10 pb-16 flex flex-col gap-10 bg-white">
          <h2 className="text-7xl text-center">
            Stay connected, stay subscribed Let us remind you!
          </h2>
          <p className="text-2xl mt-7">
            We strive to enable individuals to optimize their financial
            well-being by providing them with unparalleled insights into their
            finances and a range of beneficial services that assist them in
            saving time and money. Our ultimate goal is to equip them with an
            advantage in their financial pursuits.
          </p>
          <p className="text-2xl">
            SubTrackr was established in 2023 by Software Engineer Jose Laurito
            to aid users in monitoring and receiving reminders about their
            overlooked subscriptions. The objective is to prevent inadvertent
            payment for subscriptions that are no longer needed, while also
            keeping track of all subscriptions and memberships. This includes
            details such as when the subscription was initiated, payment
            frequency, cost, and subscription type.
          </p>
        </div>
      </div>
    </div>
  );
}
