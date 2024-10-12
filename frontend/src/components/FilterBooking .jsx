import React, { useState } from "react";
import { MdOutlineLocationOn } from "react-icons/md";
import { IoBedOutline } from "react-icons/io5";
import "../styles/FilterBooking.css";

import { GoPeople, GoPlus } from "react-icons/go";
import { MdMinimize } from "react-icons/md";
import { BsCalendarDate } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const Counter = ({ title, value, onDecrement, onIncrement }) => {
  return (
    <div className="counter-section">
      <h1>{title}</h1>
      <div className="counter-filter">
        <button className="minus" onClick={onDecrement}>
          <MdMinimize />
        </button>
        <input type="text" value={value} readOnly />
        <button className="plus" onClick={onIncrement}>
          <GoPlus />
        </button>
      </div>
    </div>
  );
};

const FilterBooking = ({ places = [] }) => {
  const navigate = useNavigate();

  const [adult, setAdult] = useState(2);
  const [child, setChild] = useState(0);
  const [rooms, setRooms] = useState(1);
  const [suggestion, setSuggestion] = useState([]);
  const [inputSearchValue, setInputSeachValue] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");

  const handleSearchField = (e) => {
    setInputSeachValue(e.target.value);
  };

  const handleSuggestionClick = (value) => {
    setInputSeachValue(value);
  };

  const incrementAdult = () => setAdult(adult + 1);
  const decrementAdult = () => setAdult(adult > 0 ? adult - 1 : 0);

  const incrementChild = () => setChild(child + 1);
  const decrementChild = () => setChild(child > 0 ? child - 1 : 0);

  const incrementRooms = () => setRooms(rooms + 1);
  const decrementRooms = () => setRooms(rooms > 0 ? rooms - 1 : 0);

  const handleFilterUrl = () => {
    // Create the URL with query params
    const searchParams = new URLSearchParams({
      place: inputSearchValue,
      "check-in": checkInDate,
      "check-out": checkOutDate,
    });

    navigate(`/search?${searchParams.toString()}`);
  };
  return (
    <div className="booking-filter">
      <div className="filter-container">
        <div className="place-filter">
          <div className="filter">
            <button type="button " className="btn btn-icon-bed">
              <IoBedOutline />
            </button>
            <input
              type="text"
              placeholder="Where are you going ?"
              value={inputSearchValue}
              onChange={handleSearchField}
            />
          </div>

          <div className={`filter-popup suggestions`}>
            {places &&
              places.map((place) => (
                <div
                  key={place}
                  className="place-suggestion"
                  onClick={() => handleSuggestionClick(place)}
                >
                  <MdOutlineLocationOn />
                  <span>{place}</span>
                </div>
              ))}
          </div>
        </div>
        <div className="check-in-out-filter">
          <div className="filter">
            <button type="button" className="btn">
              <BsCalendarDate />
            </button>
            <p>
              Check In {checkInDate} - Check out {checkOutDate}
            </p>
          </div>
          <div className="filter-popup">
            <div className="date-picker">
              <h1>CheckIn Date - </h1>
              <input
                type="date"
                id="check-in"
                value={checkInDate}
                onChange={(e) => setCheckInDate(e.target.value)}
                className="date-input"
              />
            </div>
            <div className="date-picker">
              <h1>CheckOut Date - </h1>
              <input
                type="date"
                id="check-out"
                value={checkOutDate}
                onChange={(e) => setCheckOutDate(e.target.value)}
                className="date-input"
              />
            </div>
          </div>
        </div>
        <div className="member-filter">
          <div className="filter">
            <button className="btn">
              <GoPeople />
            </button>
            <p>
              {adult} adults - {child} children - {rooms} room
            </p>
          </div>

          <div className="filter-popup">
            <Counter
              title="Adults"
              value={adult}
              onDecrement={decrementAdult}
              onIncrement={incrementAdult}
            />
            <Counter
              title="Children"
              value={child}
              onDecrement={decrementChild}
              onIncrement={incrementChild}
            />

            <Counter
              title="Rooms"
              value={rooms}
              onDecrement={decrementRooms}
              onIncrement={incrementRooms}
            />
          </div>
        </div>

        <button
          type="button"
          className="btn btn-search"
          onClick={handleFilterUrl}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default FilterBooking;
