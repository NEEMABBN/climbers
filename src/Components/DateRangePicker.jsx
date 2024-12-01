import React, { useState } from "react";
import DatePicker from "react-multi-date-picker";
import DateObject from "react-date-object";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

const DateRangePicker = () => {
  const [startDate, setStartDate] = useState(
    new DateObject({ calendar: persian, locale: persian_fa })
  );
  const [endDate, setEndDate] = useState(
    new DateObject({ calendar: persian, locale: persian_fa })
  );
  const [showCalendars, setShowCalendars] = useState(false);

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  const toggleCalendars = () => {
    setShowCalendars(!showCalendars);
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md max-w-xl mx-auto">
      <h2 className="text-center text-2xl font-bold mb-4">بازه زمانی</h2>

      <div className="flex justify-center mb-4">
        <input
          type="text"
          readOnly
          value={`${startDate.format("YYYY/MM/DD")} تا ${endDate.format(
            "YYYY/MM/DD"
          )}`}
          onClick={toggleCalendars}
          placeholder="تاریخ رفت و برگشت"
          className="border p-2 rounded w-full text-center cursor-pointer"
        />
      </div>

      {showCalendars && (
        <div className="flex justify-between">
          <DatePicker
            value={startDate}
            onChange={handleStartDateChange}
            calendar={persian}
            locale={persian_fa}
            placeholder="تاریخ شروع"
            style={{ marginRight: "10px" }}
          />
          <DatePicker
            value={endDate}
            onChange={handleEndDateChange}
            calendar={persian}
            locale={persian_fa}
            placeholder="تاریخ پایان"
            style={{ marginLeft: "10px" }}
          />
        </div>
      )}

      <div className="mt-4 text-center">
        <p className="text-sm text-gray-500">
          با انتخاب یک بازه زمانی، شما می‌توانید تمامی تورهایی که در آن زمان
          وجود دارند را ببینید.
        </p>
      </div>
    </div>
  );
};

export default DateRangePicker;
