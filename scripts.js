const url = 'http://localhost:3000/api/getAll'
fetch(url, {
    // headers: {
    //     'Content-Type': 'application/json',
    //     'Accept': 'application/json'
    // }
})
    .then(response => response.json())
    .then(data => {
        console.table(data)
    })


// fetch(url, {
//     mode: 'no-cors',
//     method: 'GET'
// })
//     .then(response => {
//         return response.text()
//     })
//     .then((data) => {
//         console.log(data ? JSON.parse(data) : {})
//     })