const countryInp = document.querySelector('#country-inp');
const search = document.querySelector('#search-btn');
const result = document.querySelector('#result');


search.addEventListener('click', (e) => {
    let countryName = countryInp.value;
    let finalURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
    //25-06-1990;
    fetch(finalURL)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            // console.log(data[0].name.common);
            // console.log(data[0].capital[0]);
            // console.log(data[0].region);
            // console.log(data[0].population);
            // console.log(data[0].currencies[Object.keys(data[0].currencies)].name);
            // console.log(data[0].currencies[Object.keys(data[0].currencies)].symbol);
            // console.log(data[0].flags.png)
            // console.log(Object.values(data[0].languages).toString().split(',').join(' , '))
            

            result.innerHTML = `
            <div class="animation-class">
            <div class="img-ctn">
            <img class="flag" src=${data[0].flags.png}>
            </div>
            <h1 class="heading">${data[0].name.common}</h1>
            <div class="content-wrapper">
            <div><span class="bold-element">Capital</span> : ${data[0].capital[0]}</div>
            <div><span class="bold-element">Continent</span> : ${data[0].region}</div>
            <div><span class="bold-element">Population</span> : ${data[0].population}</div>
            <div><span class="bold-element">Currency</span> : ${data[0].currencies[Object.keys(data[0].currencies)].name} ( ${data[0].currencies[Object.keys(data[0].currencies)].symbol} ) </div>
            <div><span class="bold-element">Common Languages</span> : ${Object.values(data[0].languages).toString().split(',').join(' , ')}</div>
            </div>
            </div>
            `;
            countryInp.value="";


        })
        .catch((e) => {
            if (countryName.length == 0) {
                
                result.innerHTML = `<div class="error">The input field cannot be empty</div>`;
              } else {
                result.innerHTML = `<div class="error">Please enter a valid country name.</div>`;
              }
        });
});