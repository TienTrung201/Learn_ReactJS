import { Component, useState } from "react";
import { React } from 'react';
import StudentKey from "./StudentKey";
import ViewReolaceDelete from "./viewReplaceDelete";
const Student = ({ props }) => {
    return (
        props.students.map((student, i) => {
            const checkStudentId = i
            return (
                <tr
                    style={props.checkStudent == checkStudentId ? { background: "#ccc" } : {}}
                    key={i}
                >
                    <StudentKey
                        student={student}
                        number={i+1}

                    />

                    <td>
                        <ViewReolaceDelete
                            check={props.check}
                            setCheck={props.setCheck}
                            checkStudentId={checkStudentId}
                            i={i}
                            student={student}
                            props={props}
                        />
                    </td>

                </tr>

            )
        })
    )

}
export default Student;