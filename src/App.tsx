import Counter from "./components/Counter";
import Display from "./components/Display";
import useCount from "./hooks/useCount";

const App = () => {
  const { count, increment, decrement } = useCount(0);

  return (
    <>
      <Display count={count} />
      <Counter increment={increment} decrement={decrement} />
    </>
  );
};

export default App;
