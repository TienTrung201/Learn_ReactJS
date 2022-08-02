import { useEffect, useState } from "react"

export const FileAvarar = () => {
    const [Avatar, setAvata] = useState()
    const handlePreviewAvatar = (e) => {
        const fileAvatar= e.target.files[0]
        fileAvatar.preview=URL.createObjectURL(fileAvatar)
        setAvata(fileAvatar.preview)
    }
    useEffect(() =>{
        return ()=>URL.revokeObjectURL(Avatar)
    },[Avatar])
    return (
        <>
            <input
                onChange={handlePreviewAvatar}
                type="file"
            />
            <img
                style={{width: '20%'}}
                src={Avatar}
            />
        </>
    )
}
// const [Avata,setAvata]=useState()
//     const handlePreviewAvatar = (e) =>{
//         const file=e.target.files[0]
//         console.log(URL.createObjectURL(file))
//         file.preview=URL.createObjectURL(file)
//         setAvata(file)
//     }
//     useEffect(()=>{
//         // return Avata&& URL.revokeObjectURL(Avata)
//     },[Avata])
//     return (

//         <>
//             <input
//             onChange={handlePreviewAvatar}
//             type="file" />
//             <img style={{width:"80%"}} src={Avata&& Avata.preview}/>
//         </>

//     )