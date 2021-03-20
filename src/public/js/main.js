let PedirUsuarios = () => {
    var requestOptions = {
        method: 'POST'
    };

    fetch("/user/getUsers", requestOptions)
        .then(response => response.text())
        .then(result => document.getElementById('resultados').innerText = result)
        .catch(error => document.getElementById('resultados').innerText = error);
}

let PedirPaises = () => {


    let requestOptions = {
        method: 'GET'
    };

    fetch("https://restcountries.eu/rest/v2/all", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}