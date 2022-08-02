var getCourseID="courseID"
var courseApi= "http://localhost:3000/courses"

function start(){
    getCourse(function(response){
        console.log(response)
        renderCourse(response)
    });
}
start()

function getCourse(callback){
    fetch(courseApi)
        .then(function(response){
            return response.json()
        })
        .then(callback)
}
function renderCourse(courses){
    var html='';
    var htmls=courses.map(function(course){
        return `<li id="${getCourseID}${course.id}">
                <h2>${course.name}</h2>
                <p>${course.mota}</p>
                <input class="courseID${course.id}" onclick="Delete(this);" type="button" value="Delete">
            </li>
        `
    })
    html=htmls.join(' ')
    var outHtml= document.querySelector('#list-courses').innerHTML=html
}


// function creat
function send(){
    var nameCourse=document.querySelector('input[name="nameCourse"]')
    var descriptionCourse=document.querySelector('input[name="description"]')
    console.log(nameCourse.value)
    var data={
        name: nameCourse.value,
        mota: descriptionCourse.value
    }
    nameCourse.value=""
    descriptionCourse.value=""
    creatCourse(data,start)
}
function creatCourse(data,callback){
    var options={
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    }
    fetch(courseApi,options)
        .then(function(response){
            response.json()
        })
        .then(callback)
}

// function delete
function Delete(className){
    var getNumberId=className.className.match(/(\d+)/)[0];
    var deleteHtml= document.querySelector(`#${getCourseID}${getNumberId}`).remove()
    DeleteCourse(getNumberId)
}
function DeleteCourse(data,callback){
    var options={
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
    }
    fetch(courseApi+`/${data}`,options)
        .then(function(response){
            response.json()
        })
        .then(callback)
}