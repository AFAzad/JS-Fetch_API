fetch("/content.txt")
.then((response)=>{
    return(response.text());
})
.then((data)=>{
    document.write(data);
})

// fetch json data//


fetch("https://jsonplaceholder.typicode.com/todos/")
.then((response)=>{
    return(response.json());
})
.then((data)=>{
    console.log(data);
}).catch((error)=>console.log("cant fetch data"))


//Fetch data of own system in json file

fetch("json/student_data.json")
.then((response)=>{
    return(response.json());
})
.then((data)=>{
    console.log(data);
}).catch((error)=>console.log("mission failed"))

//inserting data
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));

  // updating 
  fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'PUT',
  body: JSON.stringify({
    id: 1,
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));