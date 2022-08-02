import { Component, useEffect } from "react";
import { React } from 'react';
import { scryRenderedComponentsWithType } from "react-dom/test-utils";


const ControlComponent = ({ ...props }) => {
    useEffect(() => {
        // if(props.buttonReplace==false&&props.checkStudent==props.students.length)
        //     document.forms.formSubmit.msv.focus();
    })
    const handleSort = (e) => {
        const typeSort = e.target.value.split('-')
        const orderDir = typeSort[0]
        const orderBy = typeSort[1]
        const studernSort=[...props.students]
        if (orderDir == 'name') {
            if (orderBy == 'ASC') {
                studernSort.sort((a,b)=>(a.name>b.name)?-1:(a.name<b.name)?1:0);
                props.setStudent(studernSort)
            }else{
                studernSort.sort((a,b)=>(a.name>b.name)?1:(a.name<b.name)?-1:0);
                props.setStudent(studernSort)
            }
            // props.setStudent(props.students)
        }
        if(orderDir=="age"){
            if (orderBy == 'ASC') {
                studernSort.sort((a,b)=>(a.age-b.age));
                props.setStudent(studernSort)
            }else{
                studernSort.sort((a,b)=>(b.age-a.age));
                props.setStudent(studernSort)
            }    
        }
        console.log(orderBy)
        if(orderBy=="..."){
            props.setStudent(props.students)
        }
    }
    return (
        <div className="card-header">
            <div className="row">
                <div className="col-3 ">
                    <button
                        type="button"
                        className="btn btn-primary btn-icon-text"
                        onClick={() => {
                            props.setCheck(!props.check)
                            props.setButtonReplace(false)
                            props.setCheckStudent(props.students.length)
                            props.setIsCheckWatchAndReplace(props.check)
                            props.setIsDisplayForm(true)
                        }
                        }
                    >
                        Thêm mới sinh viên
                    </button>
                </div>
                <div className="col-6 ">
                    <form className="search-form" action="#">
                        <i className="icon-search" />
                        <input
                            type="search"
                            className="form-control"
                            placeholder="Search Here"
                            title="Search here"
                            value={props.searchInput}
                            onChange={(e) => {
                                props.setSearchInput(e.target.value);
                                props.handleSearch(props.searchInput)
                            }}
                        />
                        <button className="btn btn-primary btn-icon-text"
                            onClick={(e) => {
                                // console.log(props.students)
                                e.preventDefault();
                                // props.setSearchInput(e.target.value);
                                props.handleSearch(props.searchInput)
                            }}
                        >
                            Tìm kiếm
                        </button>
                    </form>
                </div>
                <div className="col-3 d-flex align-items-center">
                    <select
                        onChange={(e) => {
                            handleSort(e)
                        }}
                        className="form-control">
                        <option value="default-...">Sắp xếp </option>
                        <option value="name-ASC">Tên tăng dần</option>
                        <option value="name-DESC">Tên giảm dần</option>
                        <option value="age-ASC">Tuổi tăng dần</option>
                        <option value="age-DESC">Tuổi giảm dần</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

    export default ControlComponent;