import { useCallback, useState } from "react";

const useCount = (initialValue: number) => {
  const [count, setCount] = useState(initialValue);

  const increment = useCallback(
    () => setCount((prevCount) => prevCount + 1),
    []
  );
  const decrement = useCallback(
    () => setCount((prevCount) => prevCount - 1),
    []
  );

  return { count, increment, decrement };
};

export default useCount;
