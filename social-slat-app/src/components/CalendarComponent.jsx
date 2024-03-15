import { useState } from "react";
import cn from "../util/cn";
import generateDate, { months } from "../util/generateDate";
import dayjs from "dayjs";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

export default function CalendarComponent({ events }) {
  const days = ["S", "M", "T", "W", "T", "F", "S"];

  const currentDate = dayjs();

  const [today, setToday] = useState(currentDate);

  const [selectDate, setSelectDate] = useState(currentDate);

  // Filter events for the selected date
  const filteredEvents = events.filter((event) => {
    const eventDate = dayjs(event.date);
    return eventDate.isSame(selectDate, "day");
  });

  return (
    <div className="flex w-1/2 mx-auto divide-x-2 gap-10 h-screen items-center">
      <div className="w-96 h-96">
        {/* Calendar Header */}
        <div className="flex justify-between">
          <h1 className="font-semibold">
            {months[today.month()]}, {today.year()}
          </h1>
          <div className="flex items-center gap-5">
            <GrFormPrevious
              className="w-5 h-5 cursor-pointer"
              onClick={() => {
                setToday(today.month(today.month() - 1));
              }}
            />
            <h1
              className=" cursor-pointer"
              onClick={() => {
                setToday(currentDate);
              }}
            >
              Today
            </h1>
            <GrFormNext
              className="w-5 h-5 cursor-pointer"
              onClick={() => {
                setToday(today.month(today.month() + 1));
              }}
            />
          </div>
        </div>

        <div className="w-full grid grid-cols-7 text-gray-500">
          {days.map((day, index) => (
            <h1
              key={index}
              className="h-14 grid place-content-center text-sm"
            >
              {day}
            </h1>
          ))}
        </div>

        {/* Calendar Days */}
        <div className="w-full grid grid-cols-7">
          {generateDate(today.month(), today.year()).map(
            ({ date, currentMonth, today }, index) => {
              // Check if there's an event on this date
              const hasEvent = events.some((event) =>
                dayjs(event.date).isSame(date, "day")
              );

              return (
                <div
                  key={index}
                  className={cn(
                    "h-14 border-t grid place-content-center text-sm",
                    hasEvent && "bg-blue-200 rounded"
                  )}
                >
                  <h1
                    className={cn(
                      currentMonth ? "" : "text-gray-400",
                      today ? "bg-red-400 text-white" : "",
                      selectDate.toDate().toDateString() ===
                        date.toDate().toDateString()
                        ? "bg-slate-600 text-white"
                        : "",
                      "h-10 w-10 grid place-content-center rounded-full hover:bg-slate-800 hover:text-white transition-all cursor-pointer"
                    )}
                    onClick={() => setSelectDate(date)}
                  >
                    {date.date()}
                  </h1>
                </div>
              );
            }
          )}
        </div>
      </div>

      {/* Events for selected date */}
      <div className="h-96 w-96 px-5">
        <h1 className="font-semibold">
          Events for {selectDate.format("YYYY-MM-DD")}
        </h1>
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event) => (
            <div key={event.id}>
              <p className="mt-5 font-semibold text-amber-600">{event.title}</p>
            </div>
          ))
        ) : (
          <p>No events</p>
        )}
      </div>
    </div>
  );
}
