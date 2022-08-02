import { Component } from "react";
import { React } from 'react';
import { useEffect } from "react";
const StudentKey = ({ ...props }) => {
    
    const trReact = (
        // lỗi khi k đưuọc gói hai khối một lúc
        <>
            <td >{props.number}</td>
            <td>{props.student.msv}</td>
            <td>{props.student.name}</td>
            <td>{props.student.age}</td>
            <td>{props.student.sex == true ? "Nam" : "Nữ"}</td>
        </>

    )
    return (
        trReact
    )
}

export default StudentKey;