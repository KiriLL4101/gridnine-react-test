import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { setTicket } from "./redux/action/ticket";

import Filter from "./components/Filter";
import Ticket from "./components/Ticket";

import "./App.scss";

function App() {
  const [countShow, setCountShow] = React.useState(2);

  function sortBy(tickets, sort) {
    switch (sort) {
      case "price_high":
        return tickets.sort((a, b) => {
          return b.flight.price.total.amount - a.flight.price.total.amount;
        });
      case "price_low":
        return tickets.sort((a, b) => {
          return a.flight.price.total.amount - b.flight.price.total.amount;
        });
      case "time":
        return tickets.sort((a, b) => {
          return (
            +new Date(b.flight.legs[0].segments[0].departureDate) -
            +new Date(a.flight.legs[0].segments[0].departureDate)
          );
        });
      default:
        return tickets;
    }
  }

  function filterBy(tickets, without, transfer) {
    if (without && transfer) {
      return tickets;
    }
    if (without) {
      return tickets.filter((item) => {
        return (
          item.flight.legs[0].segments.length === 1 ||
          item.flight.legs[1].segments.length === 1
        );
      });
    }
    if (transfer) {
      return tickets.filter((item) => {
        return (
          item.flight.legs[0].segments.length === 2 ||
          item.flight.legs[1].segments.length === 2
        );
      });
    }
    return tickets;
  }

  function filterPricePeriod(tickets, from, befor) {
    if (from || befor) {
      return tickets.filter((item) => {
        return (
          item.flight.price.total.amount >= from &&
          item.flight.price.total.amount <= befor
        );
      });
    }
    return tickets;
  }

  function orderBy(tickets, ...filters){
    const sortTicket = sortBy(tickets,filters[0])
    const filterTicket = filterBy(sortTicket, filters[1], filters[2])
    const periodTicket = filterPricePeriod(filterTicket, filters[3], filters[4])
    return periodTicket
  }

  const dispatch = useDispatch();
  const { ticket, isReady } = useSelector(({ ticket, filters }) => {
    return {
      ticket:
        ticket.tickets &&
        orderBy(
          ticket.tickets,
          filters.sortBy,
          filters.without,
          filters.transfer,
          filters.pricePeriodFrom,
          filters.pricePeriodBefor
        ),
      isReady: ticket.isReady,
    };
  });
  React.useEffect(() => {
    fetch("http://localhost:3001/result")
      .then((res) => res.json())
      .then((json) => dispatch(setTicket(json.flights)));
  }, []);

  return (
    <div className="App">
      <Filter />
      <div className="tickets">
        {!isReady
          ? "Билетов нет"
          : ticket
              .slice(0, countShow)
              .map((item, i) => <Ticket key={i} {...item.flight} />)}
        {isReady && (
          <button
            className="tickets__btn"
            onClick={() => setCountShow(countShow + 2)}
          >
            Показать еще
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
