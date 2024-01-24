import { useContext, useEffect } from "react";
import { Context } from "../App";
import "./Content1.css";

export default function Content1() {
  const { state, dispatch } = useContext(Context);

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  function addOnClick(id, type) {
    document.getElementById(id).addEventListener("click", () => {
      dispatch({ type: type });
    });
  }

  useEffect(() => {
    addOnClick("btn-decrement-1", "count-decrement");
    addOnClick("btn-decrement-5", "count-decrement-5");
    addOnClick("btn-decrement-10", "count-decrement-10");
    addOnClick("btn-clear", "count-clear");
    addOnClick("btn-increment-1", "count-increment");
    addOnClick("btn-increment-5", "count-increment-5");
    addOnClick("btn-increment-10", "count-increment-10");
  }, []);

  return (
    <div className="box">
      <h1>count</h1>
      <h1>{numberWithCommas(state.count)}</h1>
      <div>
        <button id="btn-decrement-10">-10</button>
        <button id="btn-decrement-5">-5</button>
        <button id="btn-decrement-1">-1</button>
        <button id="btn-clear">clear</button>
        <button id="btn-increment-1">+1</button>
        <button id="btn-increment-5">+5</button>
        <button id="btn-increment-10">+10</button>
      </div>
    </div>
  );
}
