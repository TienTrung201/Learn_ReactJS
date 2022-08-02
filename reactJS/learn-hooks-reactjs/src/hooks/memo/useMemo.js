import { useState, useEffect, useRef, useMemo } from "react";

function Content() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [product, setProduct] = useState([]);

  const handleSubmit = () => {
    setProduct([
      ...product,
      {
        name,
        price: +price
      }
    ]);
    setName("");
    setPrice("");
    fcName.current.focus();
  };
  const fcName = useRef();

  const total = useMemo(() => {
    const result = product.reduce((result, prod) => {
      console.log("tinh taon lai ....");
      return result + prod.price;
    }, 0);
    return result;
  }, [product]);

  return (
    <div style={{ padding: 32 }}>
      <input
        ref={fcName}
        value={name}
        placeholder="enter name ..."
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <input
        value={price}
        placeholder="enter price ..."
        onChange={(e) => setPrice(e.target.value)}
      />
      <br />
      <button onClick={handleSubmit}>Add</button>
      <p>total : {total} </p>
      <ul>
        {product.map((product, index) => (
          <li key={index}>
            {product.name} - {product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Content;
