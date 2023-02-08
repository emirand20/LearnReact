import { useState } from "react";

const Age = () => {
  let [age, setAge] = useState(0);
  const increase = () => {
    setAge(age + 1);
  };
  const decrease = () => {
    setAge(age - 1);
  };
  const reset = () => {
    setAge((age = 0));
  };

  return (
    <div>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      <button onClick={reset}>Reset</button>
      <br />
      {age}
    </div>
  );
};

export default Age;
