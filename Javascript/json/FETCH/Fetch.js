var postAPI='https://jsonplaceholder.typicode.com/posts'

fetch(postAPI)
//   .then(response => response.json())
  .then(function(response){
      return response.json()
  })
  .then(function(response){
      var html=response.map(function(post){
          return `
            <li><h2>${post.title}</h2>
            <p>${post.body}</p></li>
          `
      })
      var htmls=html.join(" ")
      console.log(htmls)
      var body=document.querySelector('.haha').innerHTML=htmls
      
  })