
var regexEmail = /^[\w-]+@[\w]+(\.[a-z0-9]{2,4}){1,3}$/;
var regexPhone = /^(\+84|0)[1-9][0-9]{8}$/;
var regexUsername = /^[A-Za-z0-9_]{1,20}$/;
var regexPassword = /^([A-Za-z0-9_@!#$%^&*]){6,20}/;

function checkNull(txt) {
    if(txt.value.length == 0)
        return true;
    else
        return false;
}

function stringMatch(txt, reg) {
    return reg.test(txt.value);
}

function checkPass(txt1, txt2) {
    if(txt1.value == txt2.value) 
        return true;
    else
        return false;
}
function getAge(dateString) {
    var ageInMilliseconds = new Date() - new Date(dateString);
    return Math.floor(ageInMilliseconds/1000/60/60/24/365); // convert to years
 }
function formSubmit(f){
    if(checkNull(f.msv)) {
       alert("Chưa điền mã sinh viên"); 
        return false;
    }
    if(checkNull(f.name)) {
       alert("Chưa điền tên sinh viên"); 
        return false;
    }
    if(checkNull(f.age)) {
       alert("Chưa điền tuổi sinh viên"); 
        return false;
    }
    if(checkNull(f.birthDate)) {
       alert("Chưa điền ngày sinh sinh viên"); 
        return false;
    }
    if(f.age.value!=getAge(f.birthDate.value)){
       alert(getAge(f.birthDate.value))
       alert("Ngày sinh và tuổi không hợp lý"); 
        return false;
    }

    return true
}
export default formSubmit;