import React from "react";
import { Component } from "react";
class Student extends Component {
    handleClickEdit = ()=>{
        this.props.clickViewEdit(true,'edit',this.props.student);
    }
    handleClickView = ()=>{
        this.props.clickViewEdit(true,'view',this.props.student);
    }
    render() {
        let {student,index} = this.props;
        return (
            <tr>
                <td>{index+1}</td>
                <td>{student.studentId}</td>
                <td>{student.studentName}</td>
                <td>{student.age}</td>
                <td>{student.sex?'Nam':'Nữ'}</td>
                <td>
                    <div className="template-demo">
                        <button type="button" className="btn btn-danger btn-icon-text" onClick={this.handleClickView}>
                            Xem
                        </button>
                        <button type="button" className="btn btn-warning btn-icon-text" onClick={this.handleClickEdit}>
                            Sửa
                        </button>
                        <button type="button" className="btn btn-success btn-icon-text">
                            Xóa
                        </button>
                    </div>
                </td>
            </tr>
        );
    }
}
export default Student;