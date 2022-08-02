import { memo,useState,useCallback } from "react";
function MenoComponent({ count }) {
  //higher order Component components bậc cao
  // Kiểm tra React.memo()
  console.log("re-render", count);

  return <h1>Hello world!{count}</h1>;// count thay đổi thì mới render nếu không thì k render lại giao diện
}
export  function App() {
  const [count, setCount] = useState(0);

  const increase = useCallback(() => {
    setCount((preState) => preState + 1);
  }, []);

  return (
    <div className="App">
      <MenoComponent onIncrease={increase} />
      <h1>{count}</h1>
    </div>
  );
}
export default memo(MenoComponent);
