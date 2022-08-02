import { useEffect, useState } from "react";

export function EffectTime() {
    const [countDown, setCountDown] = useState(300);

    useEffect(() => {
        const btnTime=document.querySelector(".Time")
        btnTime.addEventListener("click", () => {
            console.log("3")
        })
        const timeCount = setInterval(() => {
            setCountDown(prevstate => prevstate - 1)
        }, 1000)
        return () => {
            btnTime.removeEventListener("click", () => {
            })
            console.log("2")
            clearInterval(timeCount)}
    }, [])
    return (
        <>
            
            <h1>{countDown}</h1>
        </>
    )
}
// const [show, setShow] = useState(false);
//     const [countDown, setCountDown] = useState(180);
//     // useEffect(() => {
//     //     const timeDown=setInterval(() =>{
//     //         setCountDown(prevState=>prevState-1);
//     //         console.log('setCountDown called')
//     //     },1000)
//     //     return ()=>clearInterval(timeDown)
//     // }, []);

//     //Cách 2 dùng với setTimeout-------------------------------------------------------------
//     useEffect(() => {
//         const timeDown=setTimeout(() =>{
//             setCountDown(prevState=>prevState-1);
//             console.log('setCountDown called')
//         },1000)
//         return ()=>clearInterval(timeDown)
//     }, [countDown]);
//     return (
//         <div>
//             <button onClick={() => setShow(!show)}>ToggleTime</button>
//             <p>{show||countDown}</p>
//         </div>
//     );
