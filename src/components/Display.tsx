interface Props {
  count: number;
}

const Display = ({ count }: Props) => {
  return (
    <>
      <h1>Current Count</h1>
      <p>{count}</p>
    </>
  );
};

export default Display;
