import React, { useState } from "react";
import DatePicker from "react-datepicker";
import DateTimePicker from "react-datetime-picker";
import "react-datepicker/dist/react-datepicker.css";
import "react-datetime-picker/dist/DateTimePicker.css";
import "react-calendar/dist/Calendar.css";
import "react-clock/dist/Clock.css";
import Navbar from "../../components/Navbar";

function CreateEvent() {
  const [startDate, setStartDate] = useState(new Date());
  //   const valuePiece = new Date();

  return (
    <div className="bg-offwhite">
      <Navbar />
      <div className="flex flex-col justify-center items-center pb-10">
        <p className="font-montserrat text-[40px] mt-12 font-bold">
          Create Event
        </p>
        <form className="flex flex-col w-[60%] mt-10">
          <div className="flex flex-row">
            <div className="flex flex-col w-[60%] mr-10">
              <p className="font-montserrat mt-5 flex justify-start pl-3 font-thin text-grey">
                Event Title
              </p>
              <input
                id="title"
                type="text"
                placeholder="Enter event title.."
                className="p-3 pr-10 pl-5 rounded-xl bg-white placeholder:: text-[16px] justify-center"
              />
            </div>
            <div className="flex justify-center items-center mt-10">
              <input
                className="block w-full text-sm text-purple cursor-pointer"
                id="file_input"
                type="file"
              />
            </div>
            <div></div>
          </div>
          <div className="flex flex-row mt-5">
            <div className="flex flex-col w-[45%] mr-11">
              <p className="font-montserrat mt-5 flex justify-start pl-3  font-thin text-grey">
                Event Date
              </p>
              {/* <DatePicker
                id='date'
                className="p-3 pr-10 pl-5 rounded-xl flex justify-start bg-white placeholder:: text-[16px]"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              /> */}
              <DateTimePicker
                className="p-3 pr-10 pl-5 rounded-xl flex justify-start bg-white placeholder:: text-[16px] border-none"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                value={startDate}
              />
            </div>
            <div className="flex flex-col ml-10 w-[45%]">
              <p className="font-montserrat mt-5 flex justify-start pl-3 font-thin text-grey">
                Registration Deadline
              </p>
              <DateTimePicker
                className="p-3 pr-10 pl-5 rounded-xl flex justify-start bg-white placeholder:: text-[16px] border-none"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                value={startDate}
              />
            </div>
          </div>
          <p className="font-montserrat mt-5 flex justify-start pl-3 font-thin text-grey">
            Event Location
          </p>
          <input
            id="location"
            type="text"
            placeholder="Enter event location.."
            className="p-3 pr-10 pl-5 rounded-xl bg-white placeholder:: text-[16px] justify-center"
          />
          <p className="font-montserrat mt-10 flex justify-start pl-3 font-thin text-grey">
            Event Description
          </p>
          <textarea
            id="description"
            type="text"
            placeholder="Enter event description.."
            className="p-3 pr-10 mt-1 pl-5 rounded-xl bg-white placeholder:: text-[16px] h-[200px]"
          ></textarea>
          <button className="bg-purple text-[16px] align-items font-monserrat text-white py-3 rounded-lg font-bold mt-10">
            Create Event
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateEvent;
