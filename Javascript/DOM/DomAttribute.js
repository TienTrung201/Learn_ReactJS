// DOM attributes
var headingElement =document.querySelector('h1');
// thêm title vào 
headingElement.className = 'Heading';
headingElement.href = 'Heading';// k đưuọc vì h1 k có href
// cach2 thì làm dc: 
headingElement.setAttribute('href',"ss")
headingElement.getAttribute('href')


