import { useContext, useEffect } from "react";
import { CounterSettingContext } from "../../../store/counterContext";
import { loginSettingContext } from "../../../store/approveLogin";

const DisplayContext = () => {
  let { counter } = useContext(CounterSettingContext); //gain access to counter context
  let { login } = useContext(loginSettingContext);
  /**
   * value = {
   *  counter,
   *  setCounter
   * }
   */
  return (
    <div>
      <h3>Display component</h3>
      <h4>{counter}</h4>
      <h5>{login}</h5>
    </div>
  );
};
export default DisplayContext;
