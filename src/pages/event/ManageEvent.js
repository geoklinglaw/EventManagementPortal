import "ka-table/style.css";
import Navbar from "../../components/Navbar";
import React from "react";
import EventDataTable from "../../components/EventDataTable";

const event = {
  title: "NUS Wellbeing Day",
  date: "Sunday, 18 March 2024",
  location: "NUS UTown",
  host: "NUS Design Hub",
  hostemail: "nus@gmail.com",
  description:
    "DesignHub organized a 3D Modeling Workshop using Blender on 16th February at 5 PM. The workshop taught participants the magic of creating stunning 3D models and animations using Blender. It was suitable for both beginners and experienced users. The event was followed by a blender-render competition, which added to the excitement. DesignHub organized a 3D Modeling Workshop using Blender on 16th February at 5 PM. The workshop taught participants the magic of creating stunning 3D models and animations using Blender. It was suitable for both beginners and experienced users. The event was followed by a blender-render competition, which added to the excitement.",
};

const hostedEventArray = [
  {
    id: 1,
    name: "Mike Wazowski",
    score: 80,
    passed: true,
    nextTry: new Date(2021, 10, 9),
    deadline: new Date(2021, 11, 11),
  },
  {
    id: 2,
    name: "Billi Bob",
    score: 55,
    passed: true,
    nextTry: new Date(2021, 7, 9),
    deadline: new Date(2021, 11, 11),
  },
  {
    id: 3,
    name: "Tom Williams",
    score: 45,
    passed: false,
    nextTry: new Date(2021, 7, 9),
    deadline: new Date(2021, 11, 11),
  },
  {
    id: 4,
    name: "Kurt Cobain",
    score: 75,
    passed: true,
    nextTry: new Date(2021, 10, 12),
    deadline: new Date(2021, 11, 11),
  },
  {
    id: 5,
    name: "Marshall Bruce",
    score: 77,
    passed: true,
    nextTry: new Date(2021, 10, 15),
    deadline: new Date(2021, 11, 11),
  },
  {
    id: 6,
    name: "Sunny Fox",
    score: 33,
    passed: false,
    nextTry: new Date(2021, 10, 7),
    deadline: new Date(2021, 11, 11),
  },
  {
    id: 7,
    name: "Alex Brzowsky",
    score: 48,
    passed: false,
    nextTry: new Date(2021, 11, 11),
    deadline: new Date(2021, 11, 9),
  },
];

const registeredEventArray = [
  {
    id: 1,
    name: "NUS Wellbeing Day 1",
    score: 80,
    passed: true,
    nextTry: new Date(2021, 10, 9),
    deadline: new Date(2021, 11, 11),
  },
  {
    id: 2,
    name: "NUS Wellbeing Day 2",
    score: 55,
    passed: false,
    nextTry: new Date(2021, 7, 9),
    deadline: new Date(2021, 11, 11),
  },
  {
    id: 3,
    name: "NUS Wellbeing Day 3",
    score: 45,
    passed: false,
    nextTry: new Date(2021, 7, 9),
    deadline: new Date(2021, 11, 11),
  },
  {
    id: 4,
    name: "NUS Wellbeing Day 4",
    score: 75,
    passed: true,
    nextTry: new Date(2021, 10, 12),
    deadline: new Date(2021, 11, 11),
  },
  {
    id: 5,
    name: "NUS Wellbeing Day 5",
    score: 77,
    passed: true,
    nextTry: new Date(2021, 10, 15),
    deadline: new Date(2021, 11, 11),
  },
  {
    id: 6,
    name: "NUS Wellbeing Day 6",
    score: 33,
    passed: false,
    nextTry: new Date(2021, 10, 7),
    deadline: new Date(2021, 11, 11),
  },
  {
    id: 7,
    name: "NUS Wellbeing Day 7",
    score: 48,
    passed: false,
    nextTry: new Date(2021, 11, 11),
    deadline: new Date(2021, 11, 9),
  },
];

function ManageEvent() {
  return (
    <div className="pb-10">
      <Navbar />
      <div className="flex ml-12 mr-12 mt-10 flex-col">
        <div>
          <p className="flex justify-start font-montserrat text-[25px] pr-10 mb-5 font-bold">
            Hosted Events
          </p>
          <EventDataTable data={hostedEventArray} status={"hosted"}/>
        </div>

        <div>
          <p className="flex justify-start font-montserrat text-[25px] pr-10 mt-5 mb-5 font-bold">
            Registered Events
          </p>
          <EventDataTable data={registeredEventArray} status={"registered"}/>
        </div>
      </div>
    </div>
  );
}

export default ManageEvent;
