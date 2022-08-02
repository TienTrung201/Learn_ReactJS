import StateHooks from "./hooks/state/statehooks";
import * as effect12 from "./hooks/Efect/effect12";
import * as EffectTIme from "./hooks/Efect/EffectTImes";
import * as effectWithAvata from "./hooks/Efect/effectWithAvata";
import UseRefComponent from "./hooks/ref/useRef";
import MenoComponent from "./hooks/memo/meno_useCallBack"
import { useState } from "react";
import UseReducer from "./hooks/useReduce/useReduce";

function App() {
  const [show, setShow] = useState(false)
  
  return (
    <div className="App">
      <StateHooks/>
      {/* <effect12.Effect12/> */}
      {/* <effect12.Effect3/> */}
      <button className="Time" onClick={() => setShow(!show)}>showTime</button>
      {show||<EffectTIme.EffectTime/>}
      {/* <effectWithAvata.FileAvarar/> */}
      <UseRefComponent></UseRefComponent>
      <MenoComponent count={show==true?2:2}//count k đổi thì k render
      />
      <UseReducer/>
    </div>
  );
}

export default App;
