import React from "react";
import { useDispatch } from "react-redux";
import {
  setSortBy,
  setWithoutBy,
  setTransferBy,
  setPeriodFrom,
  setPeriodBefor,
} from "../redux/action/filters";

export default function Filter() {
  const dispatch = useDispatch();

  return (
    <div className="setting">
      <div className="sort">
        <strong>Сортировать</strong>
        <div>
          <input
            type="radio"
            name="sortBy"
            value="price_high"
            onChange={(e) => dispatch(setSortBy(e.target.value))}
          />{" "}
          - по возрастанию цен
        </div>
        <div>
          <input
            type="radio"
            name="sortBy"
            value="price_low"
            onChange={(e) => dispatch(setSortBy(e.target.value))}
          />{" "}
          - по убыванию цен
        </div>
        <div>
          <input
            type="radio"
            name="sortBy"
            value="time"
            onChange={(e) => dispatch(setSortBy(e.target.value))}
          />{" "}
          - по времени суток
        </div>
      </div>
      <div className="filter">
        <strong>Фильтровать</strong>
        <div>
          <input
            type="checkbox"
            name="transfer"
            onChange={(e) => dispatch(setTransferBy(e.target.checked))}
          />{" "}
          - 1 пересадка
        </div>
        <div>
          <input
            type="checkbox"
            name="without"
            onChange={(e) => dispatch(setWithoutBy(e.target.checked))}
          />{" "}
          - без пересадок
        </div>
      </div>
      <div className="price">
        <strong>Цена</strong>
        <div>
          От: <input type="text" name="from" onChange={(e) => dispatch(setPeriodFrom(+e.target.value))}/>
        </div>
        <div>
          До: <input type="text" name="befor" onChange={(e) => dispatch(setPeriodBefor(+e.target.value))}/>
        </div>
      </div>
    </div>
  );
}
