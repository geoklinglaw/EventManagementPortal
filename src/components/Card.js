import dateConversion from "../hooks/dateConversion";
import Horoscopes from "../assets/images/horoscope.jpeg";

function Card({ event }) {
  console.log("event", event);
  const deadline = dateConversion(event.registrationDeadline);
  const date = dateConversion(event.datetime);

  return (
    <div>
      <div>
        <img
          className="w-full h-40 object-cover object-center rounded-t-lg shadow-lg"
          src={Horoscopes}
          alt="content"
        />
      </div>
      <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-b-lg shadow dark:bg-gray-800 dark:border-gray-700 h-[220px]">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white font-poppins">
            {event.title}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {event.description}
        </p>
        {/* <p className="flex justify-end">register by: {deadline}</p> */}
        <p className="flex justify-end align-end font-semibold text-purple pb-6">
          {date}
        </p>
      </div>
    </div>
  );
}

export default Card;
