import { React, Component } from "react";
import Form from "./component/Form";
import Control from "./component/Control";
import ListStudent from "./component/ListStudent";

class App extends Component {
  constructor(props){
    super(props);
    //Khoi tao state chua mock data danh sach sinh vien
    this.state={
      students:[
        {studentId:'SV001',studentName:'Nguyễn Văn A',age:20,sex:true,birthDate:'2000-04-15',birthPlace:'Hà Nội',address:'25, Vũ Ngọc Phan'},
        {studentId:'SV002',studentName:'Nguyễn Văn B',age:22,sex:false,birthDate:'1999-05-26',birthPlace:'Đà Nẵng',address:'1, Phan Bội Châu'},
        {studentId:'SV003',studentName:'Nguyễn Văn C',age:19,sex:true,birthDate:'2001-04-25',birthPlace:'TP HCM',address:'5, Lý Tự Trọng'}
      ],
      isToggle: false,
      actionName:'',
      selectStudent:{}
    }
  }
  handleClickNewSt = (toggle,actionNameParam) =>{
    //xu ly nhan du lieu tu component con - Control - set state isToggle
    this.setState({
      isToggle:toggle,
      actionName:actionNameParam
    })
  }
  handleClickSubmitForm = (toggle) =>{
    //Xy ly nhan du lieu con - Form - set state isToggle
    this.setState({
      isToggle:toggle
    })
  }
  handleClickViewEdit = (toggle,actionNameParam,selectStudent)=>{
    // console.log(selectStudent);
    this.setState({
      isToggle:toggle,
      actionName: actionNameParam,
      selectStudent:selectStudent
    })
  }
  render() {
    // let elementFrom = <Form />;
    let elementFrom = '';
    if (this.state.isToggle) {
      elementFrom = <Form clickSubmit = {this.handleClickSubmitForm} actionName={this.state.actionName} selectStudent={this.state.selectStudent}/>;
    }
    return (
      // <!-- JSX Student Management Start -->
      <div className="row">
        <div className="col-lg-7 grid-margin stretch-card">
          <div className="card">
            {/* <!-- Control start --> */}
            <Control clickNewStudent = {this.handleClickNewSt}/>
            {/* <!-- Control End --> */}
            {/* <!-- List Student Start --> */}
            <ListStudent students={this.state.students} clickViewEdit={this.handleClickViewEdit}/>
            {/* <!-- List Student End --> */}
          </div>
        </div>
        {/* <!-- Form Start --> */}
        {elementFrom}
        {/* <!-- Form End --> */}
      </div>
    );
  }

}

export default App;
