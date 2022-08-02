
import { React } from 'react';
import Students from "./Student";

const ListStudentComponent = ({ props }) => {
    return (
        <div className="card-body">
            <h3 className="card-title">Danh sách sinh viên</h3>
            <div className="table-responsive pt-3">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Mã sinh viên</th>
                            <th>Tên sinh viên</th>
                            <th>Tuổi</th>
                            <th>Giới tính</th>
                            <th>Hành động</th>
                        </tr>
                    </thead>
                    <tbody>
                        <Students
                            props={props}
                            // students={(props.students)}
                            // readInformation={props.readInformation}
                            // replaceInformation={props.replaceInformation}
                            // deleteInformation={props.deleteInformation}
                            // setStudent={props.setStudent}
                            // checkStudent={props.checkStudent}
                            // setCheckStudent={props.setCheckStudent}
                        >
                        </Students>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default ListStudentComponent;