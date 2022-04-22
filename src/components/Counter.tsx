import React from "react";

interface Props {
  increment: () => void;
  decrement: () => void;
}

const Counter = ({ increment, decrement }: Props) => {
  console.log("counter rerender");

  return (
    <>
      <button type="button" onClick={increment}>
        increment
      </button>
      <button type="button" onClick={decrement}>
        decrement
      </button>
    </>
  );
};

export default React.memo(Counter);
