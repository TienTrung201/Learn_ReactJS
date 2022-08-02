import { Component, useEffect, useReducer, useRef } from "react";
import { React } from 'react';
import fromSubmit from "../EventListStudents/checkForm";
import * as button from "./button"
const initState = {
    msv: "",
    name: "",
    age: "",
    sex: "",
    birthDate: "",
    placeBirth: "",
    adress: "",
};
const SET__VALUE = "set-value";
const setValue = (value, nameInput) => {
    return {
        type: SET__VALUE,
        value: value,
        nameInput: nameInput
    }
}
const reducer = (state, action) => {
    switch (action.type) {
        case SET__VALUE:
            return {
                [action.nameInput]: action.value,
                // msv:action.value,
            };
        default:
            throw new Error("Invalid action!!!");
    }
}
const FormComponent = ({ ...props }) => {

    const [state, dispatch] = useReducer(reducer, initState);
    const { msv, name, age, sex, birthDate, placeBirth, adress } = state;
    const msvRef = useRef()
    const nameRef = useRef()
    const ageRef = useRef()
    const sexRef = useRef()
    const birthDateRef = useRef()
    const placeBirthRef = useRef()
    const adressRef = useRef()
    useEffect(() => {
        if (props.students[props.checkStudent]) {
            nameRef.current.value = props.students[props.checkStudent].name
            msvRef.current.value = props.students[props.checkStudent].msv
            ageRef.current.value = props.students[props.checkStudent].age
            sexRef.current.value = props.students[props.checkStudent].sex == true ? "Nam" : "Nữ"
            birthDateRef.current.value = props.students[props.checkStudent].birthDate
            placeBirthRef.current.value = props.students[props.checkStudent].placeBirth
            adressRef.current.value = props.students[props.checkStudent].adress
        } else {
            nameRef.current.value = ""
            msvRef.current.value = ""
            ageRef.current.value = ""
            sexRef.current.value = true == true ? "Nam" : "Nữ"
            birthDateRef.current.value = ""
            placeBirthRef.current.value = ""
            adressRef.current.value = ""
        }


    }, [props.isCheckWatchAndReplace])
    return (
        <div className="col-5 grid-margin">
            <div className="card">
                <div className="card-body">
                    <h3 className="card-title">Thông tin sinh viên</h3>
                    <form name="formSubmit" className="form-sample">
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label"

                            >Mã sinh viên</label>
                            <div className="col-sm-9">
                                <input

                                    value={msv}
                                    onChange={(e) => {
                                        dispatch(setValue(e.target.value, "msv"))
                                    }}
                                    ref={msvRef}
                                    name="msv" type="text" className="form-control" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Tên sinh viên</label>
                            <div className="col-sm-9">
                                <input
                                    value={name}
                                    onChange={(e) => {
                                        dispatch(setValue(e.target.value, "name"))
                                    }}
                                    ref={nameRef}

                                    name="name" type="text" className="form-control" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Tuổi</label>
                            <div className="col-sm-9">
                                <input
                                    value={age}
                                    ref={ageRef}
                                    onChange={(e) => {
                                        dispatch(setValue(e.target.value, "age"))
                                    }}
                                    name="age" type="text" className="form-control" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Giới tính</label>
                            <div className="col-sm-9">
                                <select
                                    value={sex == "Nam" ? "Nam" : "Nữ"}
                                    ref={sexRef}
                                    onChange={(e) => {
                                        dispatch(setValue(e.target.value, "sex"))
                                    }}
                                    name="sex" className="form-control">
                                    <option>Nam</option>
                                    <option>Nữ</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Ngày sinh</label>
                            <div className="col-sm-9">
                                <input
                                    value={birthDate}
                                    ref={birthDateRef}
                                    onChange={(e) => {
                                        dispatch(setValue(e.target.value, "birthDate"))
                                    }}
                                    name="birthDate" className="form-control" placeholder="yyyy/mm/dd" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Nơi sinh</label>
                            <div className="col-sm-9">
                                <select
                                    value={placeBirth}
                                    ref={placeBirthRef}
                                    onChange={(e) => {
                                        dispatch(setValue(e.target.value, "placeBirth"))
                                    }}
                                    name="placeBirth" className="form-control">
                                    <option>Hà Nội</option>
                                    <option>TP. Hồ Chí Minh</option>
                                    <option>Đà Nẵng</option>
                                    <option>Quảng Ninh</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Địa chỉ</label>
                            <div className="col-sm-9">
                                <textarea
                                    value={adress}
                                    ref={adressRef}
                                    onChange={(e) => {
                                        dispatch(setValue(e.target.value, "adress"))
                                    }}
                                    name="adress" className="form-control" defaultValue={""} />
                            </div>
                        </div>
                        {!props.isDisplayForm == true ? <button.btnReplace props={props} /> : <div ></div>}
                        {props.buttonReplace == true ? <button.btnReplace
                            msvRef={msvRef}
                            buttonReplace={props.buttonReplace}
                            props={props}>Replace</button.btnReplace> : <div ></div>}
                        {props.students.length == props.checkStudent ? <button.btnReplace
                            msvRef={msvRef}
                            props={props}>Create</button.btnReplace> : <div ></div>}

                    </form>
                </div>
            </div>
        </div>
    )
}

export default FormComponent;