import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./counterSlice";

export function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      hello
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
          style={{ fontSize: "70px" }}
        >
          Increment
        </button>
        <span
          
          style={{ fontSize: "70px", margin: "40px" }}
        >
          {count}
        </span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
          style={{ fontSize: "70px" }}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}
