import React from "react";
import moment from "moment";

import "./ticket.scss";
import clockSvg from "../assets/img/clock.svg";

export default function Ticket({ price, legs }) {
  const firstFlight = legs[0];
  const secondFlight = legs[1];
  moment.locale("ru");

  function formatedDate(date) {
    const dateTime = moment(date).format("hh:mm");
    const dateData =
      moment(date).format("DD") +
      " " +
      moment(date).format("MMMM").slice(0, 3) +
      " " +
      moment(date).format("dddd").slice(0, 3);
    return {
      dateTime,
      dateData,
    };
  }

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

    const fomattedDateDep = formatedDate(departureDate);
    const fomattedDateArr = formatedDate(arrivalDate);

    const transfers = flight.segments.length - 1;

    const diffDate = new Date(
      +new Date(departureDate) - +new Date(arrivalDate)
    );

    return {
      departureCity,
      departureAirport,
      departureDate,
      starting,
      dateDeparture: fomattedDateDep,

      arrivalCity,
      arrivalAirport,
      arrivalDate,
      dateArrival: fomattedDateArr,

      transfers,
      airline,
      diffDate,
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
          <span>
            {price.total.amount} {price.total.currency}
          </span>
          <p>Стоимость для одного взрослого пассажира</p>
        </div>
      </div>
      <div className="first-flight">
        <div className="ticketTo">
          <span className="ticketTo__from">
            {flightInformation(firstFlight).departureCity.caption},{" "}
            {flightInformation(firstFlight).departureAirport.caption}&nbsp;
            <span className="airport-uid">
              ({flightInformation(firstFlight).departureAirport.uid})
            </span>
          </span>
          <span href="#" className="pointer">
            &rarr;
          </span>
          <span className="ticketTo__to">
            {flightInformation(firstFlight).arrivalCity.caption},{" "}
            {flightInformation(firstFlight).arrivalAirport.caption}&nbsp;
            <span className="airport-uid">
              ({flightInformation(firstFlight).arrivalAirport.uid})
            </span>
          </span>
        </div>
        <div className="dateTo">
          <div>
            <span className="dateTo__time">
              {flightInformation(firstFlight).dateDeparture.dateTime}
            </span>{" "}
            &nbsp;
            <span className="dateTo__date">
              {flightInformation(firstFlight).dateDeparture.dateData}
            </span>
          </div>
          <span className="travel-time">
            <img src={clockSvg} alt="clock" />
            {`${flightInformation(
              firstFlight
            ).diffDate.getHours()} ч ${flightInformation(
              firstFlight
            ).diffDate.getMinutes()} мин`}
          </span>
          <div>
            <span className="dateTo__time">
              {flightInformation(firstFlight).dateArrival.dateTime}
            </span>{" "}
            &nbsp;
            <span className="dateTo__date">
              {flightInformation(firstFlight).dateArrival.dateData}
            </span>
          </div>
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
            <span className="airport-uid">
              ({flightInformation(secondFlight).departureAirport.uid})
            </span>
          </span>
          <span className="pointer">&rarr;</span>
          <span className="ticketTo__to">
            {flightInformation(secondFlight).arrivalCity.caption},{" "}
            {flightInformation(secondFlight).arrivalAirport.caption}&nbsp;
            <span className="airport-uid">
              ({flightInformation(secondFlight).arrivalAirport.uid})
            </span>
          </span>
        </div>
        <div className="dateTo">
          <div>
            <span className="dateTo__time">
              {flightInformation(secondFlight).dateDeparture.dateTime}
            </span>{" "}
            &nbsp;
            <span className="dateTo__date">
              {flightInformation(secondFlight).dateDeparture.dateData}
            </span>
          </div>

          <span className="travel-time">
            <img src={clockSvg} alt="clock" />
            {`${flightInformation(
              secondFlight
            ).diffDate.getHours()} ч ${flightInformation(
              secondFlight
            ).diffDate.getMinutes()} мин`}
          </span>

          <div>
            <span className="dateTo__time">
              {flightInformation(secondFlight).dateArrival.dateTime}
            </span>{" "}
            &nbsp;
            <span className="dateTo__date">
              {flightInformation(secondFlight).dateArrival.dateData}
            </span>
          </div>
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
