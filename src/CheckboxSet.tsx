import { useState } from "react";

export function CheckboxSet<T extends string | number>(props: {
  options: T[];
  state: StatePair<T>;
}) {
  const [id] = useState(Math.floor(Math.random() * 1000));
  return (
    <>
      {props.options.map((option) => (
        <div key={"radio_" + id + "_" + option}>
          <input
            className="mx-4 my-2"
            type="radio"
            id={"radio_" + id + "_" + option}
            checked={props.state[0] === option}
            onChange={() => props.state[1](option)}
          />
          <label onClick={() => props.state[1](option)} htmlFor={"radio" + id}>
            {option}
          </label>
        </div>
      ))}
    </>
  );
}
export type StatePair<T> = [T, React.Dispatch<React.SetStateAction<T>>];
