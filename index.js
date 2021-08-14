var req = new XMLHttpRequest();
req.open('GET', 'https://restcountries.eu/rest/v2/all');
req.send();
req.responseType = "json";
req.onload = () =>{
    const resp = req.response;
    // console.log(res);
    const display = country => {
        var info = {
            "Name": country.name,
            "Population": country.population,
        }
        return info;
    }
    const popCountries = resp.filter(response => response.population > 100000000).map(display)
    console.log(popCountries)
}

