
import './App.css';
import FormComponent from './Component/Form';
import FormDisplayComponent from './Component/FormDisplay';
import readInformation from './EventListStudents/controlForm';
import * as event from './EventListStudents/controlForm';
import { useEffect, useLayoutEffect, useState, useRef } from "react";
function App() {
  const [check, setCheck] = useState(true)
  const studentsApp = [
    {
      id: 1,
      msv: "SV001",
      name: "Nguyễn Tiến Trung",
      age: 20,
      sex: true,
      birthDate: "2001/12/12",
      placeBirth: "Đà Nẵng",
      adress: "... Gì đó Đà Nẵng"
    },
    {
      id: 2,
      msv: "SV002",
      name: "Nguyễn Tiến Trường",
      age: 21,
      sex: true,
      birthDate: "2000/12/12",
      placeBirth: "Hà Nội",
      adress: "Cầu Giấy Hà Nội"

    },
    {
      id: 3,
      msv: "SV003",
      name: "Trần Tiến Dũng",
      age: 20,
      sex: false,
      birthDate: "2001/12/12",
      placeBirth: "Quảng Ninh",
      adress: "Móng Cái- Quảng Ninh"

    },
    {
      id: 4,
      msv: "SV004",
      name: "Vũ Văn Khoa",
      age: 20,
      sex: true,
      birthDate: "2001/12/12",
      placeBirth: "Đà Nẵng",
      adress: "... Gì đó Đà Nẵng"
    },
    {
      id: 5,
      msv: "SV005",
      name: "Nguyễn Hoàng Hải",
      age: 20,
      sex: true,
      birthDate: "2001/12/12",
      placeBirth: "Đà Nẵng",
      adress: "... Gì đó Đà Nẵng"
    },
    {
      id: 6,
      msv: "SV006",
      name: "Trần văn Tiến ",
      age: 20,
      sex: true,
      birthDate: "2001/12/12",
      placeBirth: "Đà Nẵng",
      adress: "... Gì đó Đà Nẵng"
    },
  ]
  const [searchInput, setSearchInput] = useState("")
  const [isDisplayForm, setIsDisplayForm] = useState(false)
  const [buttonReplace, setButtonReplace] = useState(false)
  const [isCheckWatchAndReplace, setIsCheckWatchAndReplace] = useState(false)
  const [students, setStudent] = useState(studentsApp)
  const [checkStudent, setCheckStudent] = useState(students.length)
  const [studentSearch,setStudentSearch]= useState(studentsApp)
  let studentSearchInput = useRef()
  studentSearchInput.current = []
  
  const handleSearch = (searchValue) => {
    // cách 1-----------------------------------------------------------
    // setStudentSearch(students)
    // students.forEach((st) => {
    //   if (st.name.toLowerCase().includes(searchValue.toLowerCase())) {
    //     studentSearchInput.current.push(st);
    //   }
    // })
    // setStudentSearch(studentSearchInput.current)
    // cách 2-------------------------------------------------------------------
    // studentSearchInput.current=students.filter(st => {
    //   //neu include dữ liệu rỗng thì trả về true thì lấy toàn bộ dữ liệu
    //   return st.name.toLowerCase().includes(searchValue.toLowerCase())
    // })
    // console.log(studentSearchInput.current);
    // setStudentSearch(studentSearchInput.current)
  }
  useEffect(()=>{
    setStudentSearch(students)
  },[students])
  useEffect(() => {
    // if (searchInput == "") {
    //   setStudentSearch(students)
    // }
    // cách 3 không cần hàm trong control------------------------------------------------------------------------
    studentSearchInput.current=students.filter(st => {
      //neu include dữ liệu rỗng thì trả về true thì lấy toàn bộ dữ liệu
      return st.name.toLowerCase().includes(searchInput.toLowerCase())
    })
    setStudentSearch(studentSearchInput.current)

  }, [searchInput])
  return (
    <div className="row">
      <FormDisplayComponent
        handleSearch={handleSearch}
        studentsApp={studentsApp}
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        checkStudent={checkStudent}
        students={studentSearch}
        setStudent={setStudent}
        setCheckStudent={setCheckStudent}
        buttonReplace={buttonReplace}
        setButtonReplace={setButtonReplace}
        isDisplayForm={isDisplayForm}
        setIsDisplayForm={setIsDisplayForm}
        isCheckWatchAndReplace={isCheckWatchAndReplace}
        setIsCheckWatchAndReplace={setIsCheckWatchAndReplace}
        check={check}
        setCheck={setCheck}
         deleteInformation={event.deleteInformation}
      />
      {isDisplayForm == false ? <div></div> :
        < FormComponent
          setStudent={setStudent}
          students={students}
          setCheckStudent={setCheckStudent}
          checkStudent={checkStudent}
          buttonReplace={buttonReplace}
          setButtonReplace={setButtonReplace}
          setValueNull={event.setValueNull}
          isCheckWatchAndReplace={isCheckWatchAndReplace}
          isDisplayForm={isDisplayForm}
          setIsDisplayForm={setIsDisplayForm}
         
        />
      }
    </div>
  );
}

export default App;
