var users=[
    {
        id: 1,
        name: "tiến trung"
    },
    {
        id: 2,
        name: "tiến Trường"
    },
    {
        id: 3,
        name: "tiến đức"
    }
]
var comments=[
    {
        id: 1,
        content: "alo đi chơi",
        userID:1
    }
    ,{
        id: 2,
        content: "oke 2h",
        userID:2
        },
        // {
        //     id: 3,
        //     content: "alo đi chơi",
        //     userID:3
        // }
]

function getComments(){
    return new  Promise(function(resolve){
        resolve(comments)
    })
}
function getUserId(userIds){
    return new Promise(function(resolve){
        var result= users.filter(function(userId){
            return userIds.includes(userId.id)
        })
        
        resolve(result)
        
    })
}


getComments()
    .then(function(result){
        var IDs= result.map(function(commntID){
            return commntID.userID
        })
        // return IDs
        // console.log(ID)
        return getUserId(IDs)
            .then(function(User){
                console.log(User)
                return {
                    users: User,
                    comments: comments
                }
            })
            

    })
    .then(function(result){
        console.log(result)
        var html=''
        var outputHtml= document.querySelector(".outputHere")
        result.comments.forEach(function(comment){
            var data=    result.users.find(function(user){
                return comment.userID==user.id
            })
            html+=`<li>Người dùng: ${data.name}  Comment: ${comment.content}</li>`
            // console.log(data)
        outputHtml.innerHTML=html
        })
        return html
    }).then(function(data){
        console.log(data)
        
    })
