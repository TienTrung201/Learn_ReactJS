import { useEffect, useRef, useState } from "react";
// khi render lại giao diện thì chạy lại hàm và khởi tạo lại biển 
//timeID nên phải dùng useRef
const UseRefComponent = () => {
    const [count, setCount] = useState("60");
    const prevCount = useRef();
  const h1Ref = useRef();
    useEffect(() => {
        prevCount.current = count;
      }, [count]);
    useEffect(() =>{
        let timeReplace // nếu khai báo trong useEffect thì không truy xuất được bên ngoài
    })
    useEffect(() => {
        console.log(h1Ref);
      });
    let timeID=useRef()
    const handleStart = () => {
        timeID.current = setInterval(() => {
            setCount((prevCount) => prevCount - 1);
            console.log(timeID);
        }, 1000);
    };
    console.log(timeID.current);
    const handleStop = () => {
        clearInterval(timeID.current);
    };
    console.log(count, prevCount.current);

    return (
        <div className="App">
            {/* LẤY ĐƯỢC ELEMENT TRONG reactElement */}
            <h1 ref={h1Ref} >{count}</h1>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
        </div>
    );
}
export default UseRefComponent;