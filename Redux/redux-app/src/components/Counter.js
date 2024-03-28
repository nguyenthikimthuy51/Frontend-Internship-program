
import { increaseCount, decreaseCount } from "../redux/actions/Action";
import { useSelector, useDispatch } from "react-redux";
function Counter() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const handleIncrease = (number) => {
    dispatch(increaseCount(number))
  }

  const handleDecrease = (number) => {
    dispatch(decreaseCount(number))
  }

 
  return (
    <div>
      <h1>Counter use redux</h1>
      <h2>{counter}</h2>
      <button onClick={() => handleIncrease(5)}>Increase</button>
      <button onClick={() => handleDecrease(5)}>Decrease</button>
    </div>
  );
}
export default Counter;