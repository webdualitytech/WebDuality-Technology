import React, { useEffect, useState } from "react";
import "./Timesheet.css";
import axios from "axios";
import { BACKEND_SERVER } from "../../Helper/BaseUrl";

import Swal from "sweetalert2";
import { useLoaderContext } from "../../Contexts/LoaderContext/LoaderContext";
import Loader from "../Loader/Loader";

const Timesheet = () => {
  // Data from UseLoaderContext Hook
  const { setOpenLoader, openLoader } = useLoaderContext();

  const [date, setDate] = useState(new Date()); // Initialize date state to current date
  const [currYear, setCurrYear] = useState(date.getFullYear()); // Get current year from date
  const [currMonth, setCurrMonth] = useState(date.getMonth()); // Get current month from date
  const [days, setDays] = useState([]); // State to store the days to be displayed in the calendar
  const [attendanceData, setAttendanceData] = useState([]); // State to store attendance data fetched from the backend

  // Array of month names for display purposes
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Example national holidays and leave days
  const nationalHolidays = ["2024-06-16", "2024-07-16"];

  // Fetch attendance data from the backend when the component mounts
  useEffect(() => {
    // Fetch attendance data from the backend
    const fetchAttendanceData = () => {
      const token = localStorage.getItem("webDualToken");
      const userid = localStorage.getItem("webDualUserid");
      axios
        .get(`${BACKEND_SERVER}/users/get-timesheet/${userid}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          setAttendanceData(res?.data?.attendance || []);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    fetchAttendanceData();
  }, []);

  // Re-render the calendar whenever the current year, month, or attendance data changes
  useEffect(() => {
    renderCalendar(); // Call function to render calendar
  }, [currYear, currMonth, attendanceData]);

  const renderCalendar = () => {
    // Calculate the necessary dates and days for the current month view
    const firstDayofMonth = new Date(currYear, currMonth, 1).getDay();
    const lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate();
    const lastDayofMonth = new Date(
      currYear,
      currMonth,
      lastDateofMonth
    ).getDay();
    const lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate();

    let daysArray = []; // Array to hold day objects

    // Add days from the previous month to fill the first week
    for (let i = firstDayofMonth; i > 0; i--) {
      daysArray.push({
        date: new Date(currYear, currMonth - 1, lastDateofLastMonth - i + 1),
        inactive: true, // Mark these days as inactive
      });
    }

    // Add days for the current month
    for (let i = 1; i <= lastDateofMonth; i++) {
      const dayDate = new Date(currYear, currMonth, i);
      const isToday =
        i === date.getDate() &&
        currMonth === new Date().getMonth() &&
        currYear === new Date().getFullYear();
      const isNationalHoliday = nationalHolidays.includes(
        dayDate.toISOString().split("T")[0]
      );

      // Find the working hours for the current day from attendance data
      const attendance = attendanceData?.find((att) => {
        const attDate = new Date(att.date);
        return (
          attDate.getFullYear() === dayDate.getFullYear() &&
          attDate.getMonth() === dayDate.getMonth() &&
          attDate.getDate() === dayDate.getDate()
        );
      });

      const isLeaveDay = attendance && attendance.workingHours === 0; // Check if working hours are 0

      daysArray.push({
        date: dayDate,
        active: isToday,
        isNationalHoliday,
        isLeaveDay,
        isToday,
        workingHours: attendance ? attendance.workingHours : "", // Set working hours or empty string if not found
        isWeekend: dayDate.getDay() === 0 || dayDate.getDay() === 6, // Check if Saturday or Sunday
      });
    }

    // Add days from the next month to fill the last week
    for (let i = lastDayofMonth; i < 6; i++) {
      daysArray.push({
        date: new Date(currYear, currMonth + 1, i - lastDayofMonth + 1),
        inactive: true, // Mark these days as inactive
      });
    }

    setDays(daysArray); // Update state with the array of day objects
  };

  const handlePrevNext = (direction) => {
    // const currentDate = new Date(); // Get the current date
    // const currentYear = currentDate.getFullYear();
    // const currentMonth = currentDate.getMonth();
    // // Calculate the new month and year based on the direction
    // let newMonth = direction === "prev" ? currMonth - 1 : currMonth + 1;
    // let newYear = currYear;
    // // Prevent navigation beyond the previous month
    // if (newYear === currentYear && newMonth < currentMonth - 1) {
    //   newMonth = currentMonth - 1;
    // }
    // // Prevent navigation beyond the next month
    // if (newYear === currentYear && newMonth > currentMonth + 1) {
    //   newMonth = currentMonth + 1;
    // }
    // // Adjust year and month if necessary
    // if (newMonth < 0) {
    //   newMonth = 11;
    //   newYear -= 1;
    // } else if (newMonth > 11) {
    //   newMonth = 0;
    //   newYear += 1;
    // }
    // // Set the new date, year, and month
    // setDate(new Date(newYear, newMonth, 1));
    // setCurrYear(newYear);
    // setCurrMonth(newMonth);
  };

  const [sendData, setSendData] = useState({
    date: "",
    workingHours: "",
  });

  const handleInputChange = (e, day) => {
    const newWorkingHours = parseInt(e.target.value);
    if (newWorkingHours < 0 || newWorkingHours > 24) {
      return;
    }
    const updatedDays = days.map((d) => {
      if (d.date.toDateString() === day.date.toDateString()) {
        return { ...d, workingHours: newWorkingHours }; // Update working hours for the specific day
      }
      return d;
    });
    setDays(updatedDays); // Update state with the new array of day objects
    setSendData({
      date: new Date(day.date),
      workingHours: newWorkingHours,
    }); // Save the new working hours to the backend
  };

  // Function to save working hours to the backend
  const saveWorkingHours = (event) => {
    event.preventDefault();

    if (sendData.date === "" || sendData.workingHours === "") {
      Swal.fire({
        icon: "warning",
        text: "Please enter working hour!",
      });

      return;
    }

    const token = localStorage.getItem("webDualToken");
    const userid = localStorage.getItem("webDualUserid");

    // Open Loader
    setOpenLoader(true);

    axios
      .post(`${BACKEND_SERVER}/users/timesheet/${userid}`, sendData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setAttendanceData(res?.data?.attendance);

        // Close Loader
        setOpenLoader(false);

        Swal.fire({
          icon: "success",
          text: "Timesheet added successfully",
        });
      })
      .catch((err) => {
        // console.log(err);

        // Close Loader
        setOpenLoader(false);

        Swal.fire({
          icon: "error",
          title: `Server Error !!`,
          text: "Try again later",
        });
      });
  };

  return (
    <>
      <div className="wrapper">
        <header>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6"
            onClick={() => handlePrevNext("prev")}
            style={{
              width: "30px",
              color: "#3A0F67",
              cursor: "pointer",
            }}
          >
            <path
              fillRule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-4.28 9.22a.75.75 0 0 0 0 1.06l3 3a.75.75 0 1 0 1.06-1.06l-1.72-1.72h5.69a.75.75 0 0 0 0-1.5h-5.69l1.72-1.72a.75.75 0 0 0-1.06-1.06l-3 3Z"
              clipRule="evenodd"
            />
          </svg>
          <p className="current-date">{`${months[currMonth]} ${currYear}`}</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6"
            onClick={() => handlePrevNext("next")}
            style={{
              width: "30px",
              color: "#3A0F67",
              cursor: "pointer",
            }}
          >
            <path
              fillRule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm4.28 10.28a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H8.25a.75.75 0 0 0 0 1.5h5.69l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3Z"
              clipRule="evenodd"
            />
          </svg>
        </header>
        <div className="calendar">
          <ul className="weeks">
            <li>Sun</li>
            <li>Mon</li>
            <li>Tue</li>
            <li>Wed</li>
            <li>Thu</li>
            <li>Fri</li>
            <li>Sat</li>
          </ul>
          <form onSubmit={saveWorkingHours}>
            <ul className="days">
              {days.map((dayObj, index) => (
                <li
                  key={index}
                  className={`
                ${dayObj.inactive ? "inactive" : ""}
                ${dayObj.active ? "active" : ""}
                ${dayObj.isNationalHoliday ? "national-holiday" : ""}
                ${
                  dayObj.isLeaveDay &&
                  !dayObj.isWeekend &&
                  !dayObj.isNationalHoliday
                    ? "leave-day"
                    : ""
                }
                ${dayObj.isWeekend ? "weekend" : ""}
                ${
                  !dayObj.active &&
                  !dayObj.isNationalHoliday &&
                  !dayObj.isLeaveDay &&
                  !dayObj.isWeekend
                    ? "readonly-day"
                    : ""
                }
              `}
                  style={{
                    backgroundColor: dayObj.workingHours > 0 ? "#fff" : "",
                    color: dayObj.workingHours > 0 ? "#7c7979" : "",
                  }}
                >
                  {dayObj.date.getDate()}
                  <input
                    type="text"
                    value={
                      dayObj?.workingHours >= 0 ? dayObj?.workingHours : ""
                    }
                    onChange={(e) => handleInputChange(e, dayObj)}
                    readOnly={
                      !dayObj.isToday ||
                      dayObj.isNationalHoliday ||
                      dayObj.isWeekend ||
                      dayObj.isLeaveDay
                    }
                    style={{
                      color:
                        dayObj.workingHours > 0
                          ? "rgb(10, 157, 177)"
                          : dayObj.workingHours === 0
                          ? "#202020"
                          : "",
                    }}
                    placeholder="0"
                    min="0"
                    max="24"
                  />
                </li>
              ))}
            </ul>

            <button type="submit">Save</button>
          </form>
        </div>

        <div className="colorCode">
          <div className="box">Filled Hours</div>
          <div className="box">Leave Day</div>
          <div className="box">Weekend</div>
          <div className="box">Holiday</div>
        </div>
      </div>

      {/* Loader */}
      {openLoader && <Loader />}
    </>
  );
};

export default Timesheet;
