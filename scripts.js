const url = 'https://aula03-nodejs-hiug.onrender.com/api/getAll'

fetch(url, {
})
    .then(response => response.json())
    .then(data => {
        console.table(data)
        const lista = document.getElementById("lista")
        let nomes = "<tr><td>Nomes</td><td>Idade</td></tr>"
        data.forEach(element => {
            nomes += `<tr><td>${element.name}</td><td>${element.age}</td></tr>`
        });
        lista.innerHTML = nomes
    })
