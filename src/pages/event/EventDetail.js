import Navbar from "../../components/Navbar";
import Horoscopes from "../../assets/images/horoscope.jpeg";

function EventDetail() {
  const imageUrls = [
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
  ];

  const event = {
    title: "NUS Wellbeing Day",
    date: "Sunday, 18 March 2024",
    location: "NUS UTown",
    host: "NUS Design Hub",
    hostemail: "nus@gmail.com",
    description:
      "DesignHub organized a 3D Modeling Workshop using Blender on 16th February at 5 PM. The workshop taught participants the magic of creating stunning 3D models and animations using Blender. It was suitable for both beginners and experienced users. The event was followed by a blender-render competition, which added to the excitement. DesignHub organized a 3D Modeling Workshop using Blender on 16th February at 5 PM. The workshop taught participants the magic of creating stunning 3D models and animations using Blender. It was suitable for both beginners and experienced users. The event was followed by a blender-render competition, which added to the excitement.",
  };

  return (
    <div className="pb-10">
      <Navbar />
      <div className="relative h-[600px] overflow-hidden">
        <div className="absolute z-20 w-full h-full flex flex-col justify-center items-center">
          <div className="flex flex-row">
            <span className="ml-12 pl-5 text-white text-[50px] mb-4 font-montserrat font-[1000] flex items-start flex-col w-[57%] mr-12 pr-10 justify-center">
              <p>{event.title}</p>
              <p className="text-white text-[16px] font-thin text-left">{event.description}</p>
            </span>
            <div className="flex flex-col bg-white h-[395px] w-[400px] rounded-lg pt-10">
              <p className="font-montserrat text-[18px] flex justify-start pl-9">
                Date and Time:
              </p>
              <div className="flex justify-center items-center flex-col">
                <p className="font-montserrat text-[18px] text-grey flex justify-center pl-6 mt-2">
                  {event.date}
                </p>
              </div>
              <p className="font-montserrat text-[18px] flex justify-start pl-9 pt-4">
                Location:
              </p>
              <div className="flex justify-center items-center flex-col">
                <p className="font-montserrat text-[18px] text-grey flex justify-center pl-6 mt-2">
                  {event.location}
                </p>
              </div>
              <div>
                <p className="font-montserrat text-[18px] flex justify-start pl-9 pt-4">
                  Registered Participants:
                </p>
                <div className="flex flex-row transform -space-x-2 -translate-y-[5px] flex justify-center mt-5">
                  {imageUrls.map((url, index) => (
                    <img
                      key={index}
                      src={url}
                      alt={`Member ${index}`}
                      className={`w-12 h-12 rounded-full border-2 border-white bg-cover ${
                        index === 0 ? "z-10" : ""
                      }`}
                    />
                  ))}
                </div>
              </div>
              <div className="flex justify-center items-center flex-col">
                <button className="bg-purple w-[85%] flex justify-center text-[16px] align-items font-monserrat text-white py-3 rounded-lg font-semibold mt-5">
                  <p>Register now</p>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img
            className="w-full brightness-[0.30] object-cover"
            alt="background"
            src={Horoscopes}
          />
        </div>
      </div>
      <div>
        <div className="flex justify-start flex-row">
          <div className="flex flex-col w-[60%]">
            <p className="px-12 pt-10 flex justify-start align-left text-[25px] font-montserrat">
              Description
            </p>
            <p className="px-12 pt-2 flex justify-start text-left ">{event.description}</p>
            <p className="px-12 pt-10 flex justify-start align-left text-[25px] font-montserrat">
              Hosted By
            </p>
            <p className="px-12 pt-2 flex justify-start text-left ">Please contact {event.host} at {event.hostemail} for enquiries</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventDetail;
