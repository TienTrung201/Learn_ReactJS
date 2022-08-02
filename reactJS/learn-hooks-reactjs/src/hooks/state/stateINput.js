import { useState } from "react";

function App(){
    const [checked,setChecked] = useState(2)
    // const handleSubmit=(){
    //     console.log({id: checked})
    // }
    const handleChecked=(id)=>{
        setChecked(prev=>{
            const isChecked=checked.includes(id)
            if(isChecked){
                return checked.filter(item=>item!==id)
            }else{
                return [...prev,id]
            }
        })
    }
    return (
        <div style={{ padding: 32 }}>
        {courses.map(course=> (
            <div key={course.id}>
                <input
                    type="radio"
                    checked={checked=== course.id}
                    onChange={() => setChecked (course.id)}/>
                    {course.name}
            </div>
        ))}
            <button onClick={handleSubmit}>submit</button>
        </div>
        )
        
}