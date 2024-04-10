import React from "react";
import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import backgroundImg from "../../assets/images/backgroundcrop.jpg";
import { MdOutlineSearch } from "react-icons/md";
import Card from "../../components/Card";


function Home() {
  const [events, setEvents] = useState([]);

  // Retrieve all events
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch(
          "/EventManagement-war/webresources/events/allevents",
          {
            mode: "no-cors",
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setEvents(data);
        console.log("Events fetched:", data);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div className="">
      <Navbar />
      <div className="relative">
        <div className="absolute z-20 w-full h-full flex flex-col justify-center items-center">
          <span className="text-white text-[100px] mb-4 font-montserrat font-[1000] flex items-start flex-col">
            <p>Explore Events</p>
          </span>
          <span className="flex flex-row">
            <input
              type="text"
              placeholder="Search for Events..."
              className="p-10 rounded-xl placeholder:: text-[16px] py-[10px] font-montserrat pl-[20px]"
            />
            <button className="rounded-full bg-white ml-2 px-2">
              <MdOutlineSearch className="text-purple text-[25px] -mt-1 " />
            </button>
          </span>
        </div>
        <div>
          <img
            className="w-full brightness-50"
            alt="background"
            src={backgroundImg}
          />
        </div>
      </div>

      <p className="px-12 pt-10 flex flex-col justify-start align-left text-[30px] font-montserrat">All Events</p>
      <div className="px-12 pt-3 pb-10 flex flex-wrap">
        
        {events.map((event) => (
          <div key={event.id} className="flex flex-auto max-w-[25%] p-2 px-5">
            <Card event={event} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
