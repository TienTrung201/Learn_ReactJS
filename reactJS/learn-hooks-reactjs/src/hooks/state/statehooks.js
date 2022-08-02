// import React, { useState } from 'react';
import { useState } from "react";
const orders = [100, 200, 300]
function StateHooks() {
  //object
  const [info,setInfo] =useState({
    name: 'Tien trung',
    age:'20'
  })
  const update = () => {
    setInfo(prev => ({
      ...prev,
      phone:"0202"
    }))
  }
  //object
  const [counter, setCounter] = useState(() => {
    const total = orders.reduce((total, cur) => {
      return total + cur
    })
    return total
  }

  )
  const inCrease = () => {
    // setCounter(counter+1) 
    setCounter(prevState => prevState + 1)
    // setCounter(prevState=>prevState+1)
  }

  return (
    <>
      <h1>{counter}</h1>
      <button onClick={inCrease}>Tăng lên</button>
    </>

  )
}
export default StateHooks


