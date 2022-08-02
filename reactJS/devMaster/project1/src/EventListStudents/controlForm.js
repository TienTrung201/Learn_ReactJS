import formSubmit from "./checkForm";
function replaceStudent(student, f,setStudent,setCheckStudent,students){
    const infoStudent = {
            id:student.id,
            msv: f.msv.value,
            name: f.name.value,
            age:getAge(f.birthDate.value),
            sex: f.sex.value=="Nam"?true:false,
            birthDate: f.birthDate.value,
            placeBirth: "Quảng Ninh",
            adress: f.adress.value
        }
        let studentReplace=[]
        for(let j=0;j<students.length;j++){
            if(students[j]==student){
                studentReplace.push(infoStudent);
                continue;
            }
            studentReplace.push(students[j]);
        }
        // console.log(3)
        alert('thành công');
        setStudent(prev =>
            studentReplace
        )
        setCheckStudent(students.length)
    }
export const replaceInformation = (students,checkStudent,setCheckStudent, f,setStudent) => {
    replaceStudent(students[checkStudent], f,setStudent,setCheckStudent,students)  
}
export const deleteInformation = (student, setStudent,students) => {
    let studentReplace=[]
    for (let i = 0; i < students.length; i++) {
        if(students[i]==student){
            continue;
        }
        studentReplace.push(students[i])
    }
    
    setStudent(prev =>
        studentReplace
        )
    }
    
    
// export const addInformation = (students, f, setStudent,checkStudent,setCheckStudent) => {
//         f.msv.focus();
//         setValueNull(f)
//         setCheckStudent(students.length)    
// }
export const addStudent=(f,setStudent)=>{
        alert('thành công');
        
        setStudent(prev => [
            ...prev,
        {   id:prev.length+1,
            msv: f.msv.value,
            name: f.name.value,
            age:getAge(f.birthDate.value),
            sex: f.sex.value=="Nam"?true:false,
            birthDate: f.birthDate.value,
            placeBirth: f.placeBirth.value,
            adress: f.adress.value
        }
    ])
    f.submit.innerHTML = "submit";
}


const readInformation = (student, f) => {
    
    f.submit.innerHTML = "submit";
    getValue(student, f)
}
export const getValue=(student, f)=>{
    console.log(student.name)
    f.name.value = student.name;
    f.msv.value = student.msv;
    f.age.value = student.age;
    f.sex.value = student.sex == true ? "Nam" : "Nữ";
    f.birthDate.value = student.birthDate;
    f.placeBirth.value = student.placeBirth;
    f.adress.value = student.adress;
}
export const  setValueNull=( f)=>{
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
    return Math.floor(ageInMilliseconds/1000/60/60/24/365); // convert to years
 }
export default readInformation;