import React, { useState } from "react";
import HOC from "./HOC";

const Hooks = () => {
  const [array, setArray] = useState([67, 12, 23]);
  const [customerData, setCustomerData] = useState([
    {
      name: "Jason",
      customerId: 1,
      gender: "male",
    },
    { name: "Alice", customerId: 2, gender: "female" },
  ]);

  const handleArray = () => {
    const updateArray = [...array];
    updateArray[1] = 45;
    setArray(updateArray);
  };
  const handleUpdate = () => {
    const updateCustomer = [
      ...customerData,
      { name: "Eunice", customerId: 3, gender: "female" },
    ];
    updateCustomer[1].customerId = 4;
    setCustomerData(updateCustomer);
  };
  const customerList = customerData.map((info) => (
    <>
      <p>{info.name}</p>
      <p>{info.customerId}</p>
      <p>{info.gender}</p>
    </>
  ));

  return (
    <>
      <p>{array.map((e) => e)}</p>
      <p>{customerList}</p>
      <button onClick={handleArray}>Update Array</button>
      <button onClick={handleUpdate}>Update Customer</button>
    </>
  );
};
export default HOC(Hooks);
