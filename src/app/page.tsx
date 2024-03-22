"use client";

import { useState } from "react";
import Ad from "./components/Ad";
import { FiSun } from "react-icons/fi";
import { FaRegMoon } from "react-icons/fa";
import { Poppins } from "next/font/google";
import TeamCard from "./components/TeamCard";
import { teams, tickets } from "./utils/data";
import TicketCard from "./components/TicketCard";
import CarouselBtn from "./components/CarouselBtn";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function Home() {
  const [dark, setDark] = useState(false);

  return (
    <main className={`${dark && "dark"}`}>
      <div className="mx-auto p-3 dark:bg-[#292B32] md:p-12">
        <header className="flex items-center justify-between">
          <h1
            className={`${poppins.className} w-min border-b-2 border-[#738FFF] text-[24px] font-bold dark:text-white`}
          >
            Sports
          </h1>
          <button
            className="rounded-full border-2 border-black p-3 dark:border-white"
            onClick={() => setDark((curr) => !curr)}
          >
            {!dark ? <FaRegMoon /> : <FiSun color="white" />}
          </button>
        </header>
        <section className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-3 lg:grid-cols-5">
          {teams.map((team, i) => (
            <TeamCard key={i} {...team} />
          ))}
          <Ad />
        </section>
        <div className="flex justify-center">
          <button className="my-12 rounded-sm bg-[#2C9CF0] px-6 py-3 text-[14px] font-semibold text-white">
            See More
          </button>
        </div>
        <section className="from-[#18282A] to-[#221A2C] p-3 pb-12 dark:bg-gradient-to-b">
          <div className="mx-auto flex flex-col items-center lg:w-10/12">
            <h1
              className={`${poppins.className} mt-20 text-center text-[25px] font-bold dark:text-white md:text-[37.5px] lg:text-[50px]`}
            >
              Collection Spotlight
            </h1>
            <h2 className="w-10/12 pb-12 pt-3 text-center text-[14px] dark:text-white">
              Discover extraordinary moments with our Spotlight Collection
              metatickets—exclusive access to premium events for an
              unforgettable experience. Grab yours today!
            </h2>
            <div className="flex w-full items-center gap-20">
              <CarouselBtn icon={<IoIosArrowBack size="20" />} />
              <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-3">
                {tickets.map((ticket, i) => (
                  <TicketCard key={i} {...ticket} />
                ))}
              </div>
              <CarouselBtn icon={<IoIosArrowForward size="20" />} />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
