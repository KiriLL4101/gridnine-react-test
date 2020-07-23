import React from "react";

import "./ticket.scss";
import clockSvg from "../assets/img/clock.svg"

export default function Ticket({ price, legs }) {
  const firstFlight = legs[0];
  const secondFlight = legs[1];

  function flightInformation(flight) {
    
    const {
      departureCity,
      departureAirport,
      departureDate,
      starting,
      airline,
    } = flight.segments[0];

    const { arrivalCity, arrivalAirport, arrivalDate } = flight.segments[1]
      ? flight.segments[1]
      : flight.segments[0];

    const formatDep = new Date(departureDate);
    const formatArr = new Date(arrivalDate);
    const fomattedDateDep =
      formatDep.getHours() + ": " + formatDep.getMinutes();
    const fomattedDateArr =
      formatArr.getHours() + ": " + formatArr.getMinutes();

    const transfers = flight.segments.length - 1;

    return {
      departureCity,
      departureAirport,
      departureDate,
      starting,
      fomattedDateDep,

      arrivalCity,
      arrivalAirport,
      arrivalDate,
      fomattedDateArr,

      transfers,
      airline,
    };
  }

  return (
    <div className="card">
      <div className="header">
        <div className="header__logo">
          <img
            src="https://www.aeroflot.ru/media/aflfiles/logo_rd/header__logo.png"
            alt="logo"
          />
        </div>
        <div className="header__price">
          <b>
            {price.total.amount} {price.total.currency}
          </b>
          <p>Стоимость для одного взрослого пассажира</p>
        </div>
      </div>
      <div className="first-flight">
        <div className="ticketTo">
          <span className="ticketTo__from">
            {flightInformation(firstFlight).departureCity.caption},{" "}
            {flightInformation(firstFlight).departureAirport.caption}&nbsp;
            <a href="#">
              ({flightInformation(firstFlight).departureAirport.uid})
            </a>
          </span>
          <a href="#" className="pointer">
            &rarr;
          </a>
          <span className="ticketTo__to">
            {flightInformation(firstFlight).arrivalCity.caption},{" "}
            {flightInformation(firstFlight).arrivalAirport.caption}&nbsp;
            <a href="#">
              ({flightInformation(firstFlight).arrivalAirport.uid})
            </a>
          </span>
        </div>
        <div className="dateTo">
          <span>{flightInformation(firstFlight).fomattedDateDep}</span>
          <span className="travel-time">
            {flightInformation(firstFlight).arrivalDate -
              flightInformation(firstFlight).departureDate}
          </span>
          <span>{flightInformation(firstFlight).fomattedDateArr}</span>
        </div>
        <div className="transfers">
          <hr />
          <div className="transfers-count">
            {`${flightInformation(firstFlight).transfers} пересадок`}
          </div>
        </div>
        <div className="flightBy">
          <span>
            Рейс выполняет: {flightInformation(firstFlight).airline.caption}
          </span>
        </div>
      </div>
      <div className="second-flight">
        <div className="ticketTo">
          <span className="ticketTo__from">
            {flightInformation(secondFlight).departureCity.caption},{" "}
            {flightInformation(secondFlight).departureAirport.caption}&nbsp;
            <a href="#">
              ({flightInformation(secondFlight).departureAirport.uid})
            </a>
          </span>
          <a href="#" className="pointer">
            &rarr;
          </a>
          <span className="ticketTo__to">
            {flightInformation(secondFlight).arrivalCity.caption},{" "}
            {flightInformation(secondFlight).arrivalAirport.caption}&nbsp;
            <a href="#">
              ({flightInformation(secondFlight).arrivalAirport.uid})
            </a>
          </span>
        </div>
        <div className="dateTo">
          <span>{flightInformation(secondFlight).fomattedDateDep}</span>
          <span className="travel-time">
            {flightInformation(secondFlight).arrivalDate -
              flightInformation(secondFlight).departureDate}
          </span>
          <span>{flightInformation(secondFlight).fomattedDateArr}</span>
        </div>
        <div className="transfers">
          <hr />
          <div className="transfers-count">
            {`${flightInformation(secondFlight).transfers} пересадок`}
          </div>
        </div>
        <div className="flightBy">
          <span>
            Рейс выполняет: {flightInformation(secondFlight).airline.caption}
          </span>
        </div>
      </div>
      <button className="btn">выбрать</button>
    </div>
  );
}
