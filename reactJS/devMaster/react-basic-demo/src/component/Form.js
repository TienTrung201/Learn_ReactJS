import { React, Component } from 'react';
class Form extends Component {
    constructor(props){
        super(props);
        this.state = {
            studentId:'',
            studentName:'',
            age: '',
            sex: true,
            birthDate:'',
            birthPlace:'',
            address:''  ,
            checkReadOnly:false    
        }
    }
    handleChange=(e)=>{
        let name= e.target.name;
        let value= e.target.value;
        if(name=="sex"){
            value=value=="Nam"?"Nam":"Nữ"
        }
        this.setState({
            [name]: value
        })
    }

    handleClickSubmit = (toggle) => {
        this.props.clickSubmit(false);
    }

    // componentWillMount() {
    //     const selectStudent = this.props.selectStudent;
    //     this.setState(()=>{
    //         return{
    //             studentId:selectStudent.studentId,
    //             studentName: selectStudent.studentName,
    //             age: selectStudent.age,
    //             sex:selectStudent.sex,
    //             birthDate:selectStudent.birthDate,
    //             birthPlace:selectStudent.birthPlace,
    //             address:selectStudent.address
    //         }
            
    //     })
    // }
    componentWillReceiveProps(nextProps) {
        const {selectStudent} = nextProps;
        this.state.studentId=selectStudent.studentId
        this.state.studentName=selectStudent.studentName
        this.state.age=selectStudent.age
        this.state.sex=selectStudent.sex
        this.state.birthDate=selectStudent.birthDate
        this.state.birthPlace=selectStudent.birthPlace
        this.state.address=selectStudent.address
    // console.log(nextProps); 
    //     this.setState(()=>{
    //         return{
    //             studentId:selectStudent.studentId,
    //             studentName: selectStudent.studentName,
    //             age: selectStudent.age,
    //             sex:selectStudent.sex,
    //             birthDate:selectStudent.birthDate,
    //             birthPlace:selectStudent.birthPlace,
    //             address:selectStudent.address
    //         }
            
    //     })
    }
    render() {
        let elementBtnSubmit;
        if (this.props.actionName == 'create') {
            elementBtnSubmit = <button type="submit" className="btn btn-primary me-2" onClick={this.handleClickSubmit}>
                Create
            </button>
        }else if(this.props.actionName=='edit'){
            elementBtnSubmit = <button type="submit" className="btn btn-primary me-2" onClick={this.handleClickSubmit}>
                Edit
            </button>
        }else{
            elementBtnSubmit = '';
        }
        return (
            <div className="col-5 grid-margin">
                <div className="card">
                    <div className="card-body">
                        <h3 className="card-title">Thông tin sinh viên</h3>
                        <form className="form-sample">
                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">Mã sinh viên</label>
                                <div className="col-sm-9">
                                    <input value={this.state.studentId } name="studentId" onChange={(e)=>{this.handleChange(e)}} type="text" className="form-control" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">Tên sinh viên</label>
                                <div className="col-sm-9">
                                    <input value={this.state.studentName} name="studentName" onChange={(e)=>{this.handleChange(e)}} type="text" className="form-control" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">Tuổi</label>
                                <div className="col-sm-9">
                                    <input value={this.state.age} name="age" onChange={(e)=>{this.handleChange(e)}} type="text" className="form-control" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">Giới tính</label>
                                <div className="col-sm-9">
                                    <select value={this.state.sex} name="sex" onChange={(e)=>{this.handleChange(e)}} className="form-control">
                                        <option>Nam</option>
                                        <option>Nữ</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">Ngày sinh</label>
                                <div className="col-sm-9">
                                    <input value={this.state.birthDate} name="birthDate" onChange={(e)=>{this.handleChange(e)}} className="form-control" placeholder="dd/mm/yyyy" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">Nơi sinh</label>
                                <div className="col-sm-9">
                                    <select value={this.state.birthPlace} name="birthPlace" onChange={(e)=>{this.handleChange(e)}} className="form-control">
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
                                    <textarea value={this.state.address} className="form-control" defaultValue={""} />
                                </div>
                            </div>
                            {/* Button submit start */}
                            {elementBtnSubmit}
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
export default Form;