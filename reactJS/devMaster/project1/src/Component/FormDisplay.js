
import { React } from 'react';
import ControlComponent from "./controlComponent";
import ListStudentComponent from "./ListStudentComponent";

const FormDisplayComponent = ({ ...props }) => {
    return (
        <div className="col-lg-7 grid-margin stretch-card">
            <div className="card">
                <ControlComponent
                    students={(props.students)}
                    // addInformation={props.addInformation}
                    setStudent={props.setStudent}
                    checkStudent={props.checkStudent}
                    setCheckStudent={props.setCheckStudent}
                    setIsDisplayForm={props.setIsDisplayForm}
                    isDisplayForm={props.isDisplayForm}
                    setButtonReplace={props.setButtonReplace}
                    setIsCheckWatchAndReplace={props.setIsCheckWatchAndReplace}
                    check={props.check}
                    setCheck={props.setCheck}
                    buttonReplace={props.buttonReplace}
                    searchInput={props.searchInput}
                    setSearchInput={props.setSearchInput}
                    handleSearch={props.handleSearch}
                    studentsApp={props.studentsApp}
                    setStudentSearch={props.setStudentSearch}
                    isCheckWatchAndReplace={props.isCheckWatchAndReplace}
                />
                <ListStudentComponent
                    props={props}
                />
            </div>
        </div>

    )

}
export default FormDisplayComponent;