import React, { useState } from "react";
import Form from "./Form";

export default function Home() {
  const [sum, setSum] = useState();
  const handleNumber = (numbers) => {
    const sum = numbers.numberOne + numbers.numberOne;
    setSum(sum);
  };
  return (
    <div>
      <h1>Result :{sum == "" ? 0 : sum}</h1>
      <Form onSum={handleNumber} />
    </div>
  );
}
