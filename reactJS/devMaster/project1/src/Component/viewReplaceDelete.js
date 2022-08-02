import { React, useEffect, useRef, useState } from 'react';
import fromSubmit from '../EventListStudents/checkForm';


const ViewReolaceDelete = ({ ...props }) => {
   useEffect(() =>{
    if(props.props.buttonReplace==true)
        document.forms.formSubmit.msv.focus();
   },[props.props.buttonReplace])
    return (
        <div className="template-demo">
            <button

                onClick={() => {
                    props.setCheck(!props.check)
                    props.props.setIsDisplayForm(true)
                    props.props.setButtonReplace(false)
                    props.props.setIsCheckWatchAndReplace(props.check)
                    props.props.setCheckStudent(props.checkStudentId)
                }}
                type="button"
                className="btn readInformation btn-danger btn-icon-text "
            >
                Xem
            </button>
            <button
                onClick={() => {
                    props.setCheck(!props.check)
                    props.props.setIsDisplayForm(true)
                    props.props.setButtonReplace(true)
                    props.props.setIsCheckWatchAndReplace(props.check)
                    props.props.setCheckStudent(props.checkStudentId)
                }
                }
                type="button"
                className="btn replaceInformation btn-warning btn-icon-text removeBtn"
            >
                Sửa
            </button>
            <button
                id={props.i++}
                onClick={() => {
                    props.props.setCheckStudent(props.props.students.length)
                    props.props.deleteInformation(props.student, props.props.setStudent, props.props.students)
                }
                }
                type="button"
                className="btn deleteInformation btn-success btn-icon-text"
            >
                Xóa
            </button>
        </div>
    )
}

const getValue = (student, f) => {
    f.name.value = student.name;
    f.msv.value = student.msv;
    f.age.value = student.age;
    f.sex.value = student.sex == true ? "Nam" : "Nữ";
    f.birthDate.value = student.birthDate;
    f.placeBirth.value = student.placeBirth;
    f.adress.value = student.adress;
}
const setValueNull = (f) => {
    f.name.value = "";
    f.msv.value = "";
    f.age.value = "";
    f.sex.value = "";
    f.birthDate.value = "";
    f.placeBirth.value = "";
    f.adress.value = "";
}
function getAge(dateString) {
    var ageInMilliseconds = new Date() - new Date(dateString);
    return Math.floor(ageInMilliseconds / 1000 / 60 / 60 / 24 / 365); // convert to years
}
function replaceStudent(student, f, setStudent, students, e) {

    const infoStudent = {
        id: student.id,
        msv: f.msv.value,
        name: f.name.value,
        age: getAge(f.birthDate.value),
        sex: f.sex.value == "Nam" ? true : false,
        birthDate: f.birthDate.value,
        placeBirth: "Quảng Ninh",
        adress: f.adress.value
    }
    let studentReplace = []
    for (let j = 0; j < students.length; j++) {
        console.log(studentReplace)
        if (students[j] == student) {
            studentReplace.push(infoStudent);
            continue;
        }
        studentReplace.push(students[j]);
    }

    if (!fromSubmit(f)) {
        return
    }
    // console.log(3)
    alert('thành công');
    f.submit.innerHTML = "submit";
    e.preventDefault();
    setStudent(prev =>
        studentReplace
    )
    setValueNull(f)
    return
}
const replaceInformation = (student, f, setStudent, students) => {
    f.msv.focus();
    getValue(student, f)
    var i = true;

    f.submit.addEventListener('click', (e) => {
        replaceStudent(student, f, setStudent, students, e, i)
    })
}
export default ViewReolaceDelete;