import { useState } from "react";

const Age = () => {
  const [age, setAge] = useState(0);
  const increaseAge = () => {
    setAge(age + 1);
  };

  return (
    <div>
      <button onClick={ increaseAge }>Aumenta Edad</button>
      <br/>
      {age}
    </div>
  );
};

export default Age