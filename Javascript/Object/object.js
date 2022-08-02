// Object trong Javascript
var emailKey='email';
var myInfo={
    name:'Son Dang',
    age:18,
   address:'Ha Noi,VN',
    [emailKey]:'sondn@fulltack.edu.vn',
    getName: function(){
        return this.name;
    }
};
console.log(myInfo);
// thêm key mới: 
myInfo.email='sondn@fullstack.edu.vn';
myInfo['my-email']='sondn@fullstack.edu.vn';
//  xóa key delete
// lấy key
console.log(myInfo.name)
console.log(myInfo['email']);
var mykey='address';
console.log(myInfo[mykey]);
console.log(myInfo.getName());



// ---------------------------------------
// objectContructer
// Object constructor
function User(firstName,lastName,avatar){
    this.firstName =firstName;
    this.lastName=lastName;

    this.avatar=avatar;
    this.getName=function(){
    return `${this.firstName}${this.lastName}`
    }              
}
// thêm vào hàm tạo
User.prototype.clasName='F8';
User.prototype.className='F8';
User.prototype.getClassName=function(){
    return this.className;
}

var author=new User('Son','Dang','Avatar');
var user=new User('vu','Nguyễn','Avatar');
author.title='Chia sẻ dạo tại F8';
user.comment='liệu có khóa asp.netkad'
console.log(author);
console.log(user.getName());
