fetch("https://jsonplaceholder.typicode.com/users/1",{
    method: "PUT",
    body: JSON.stringify({
        name: "Adnan Ahmed Siddiqui",
        Address: "Karachi",
        university: "UBIT"
    }),
    headers: {
        "content-type": "application/json; charset=UTF-8"
    }
})
.then(response => response.json())
.then(data => console.log(data))