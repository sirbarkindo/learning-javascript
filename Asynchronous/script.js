'use strict';

// function getCountriesData(country) {

//     const btn = document.querySelector('.btn-country');
//     const countriesContainer = document.querySelector('.countries');

//     ///////////////////////////////////////

//     const request = new XMLHttpRequest();
//     request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//     request.send();

//     request.addEventListener('load', function () {
//         const [data] = JSON.parse(this.responseText);
//         console.log(data);

//         const html = `
//      <article class="country">
//           <img class="country__img" src="${data.flags.png}" />
//           <div class="country__data">
//             <h3 class="country__name">${data.name.common}</h3>
//           <h4 class="country__region">${data.region}</h4>
//             <p class="country__row"><span>👫</span>${(
//                 +data.population / 1000000
//             ).toFixed(1)}M</p>
//         <p class="country__row"><span>🗣️</span>${Object.values(
//                 data.languages
//             ).join(', ')}</p>
//            <p class="country__row"><span>💰</span>${Object.values(
//                 data.currencies
//             )
//                 .map(curr => curr.name)
//                 .join(', ')}</p>

//           </div>
//         </article>

//     `;

//         countriesContainer.insertAdjacentHTML('beforeend', html);
//         countriesContainer.style.opacity = 1;
//     });

// }

// Lecture 2

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

function renderCountry(data, className = '') {
  const html = `
     <article class="country ${className}">
          <img class="country__img" src="${data.flags.png}" />
          <div class="country__data">
            <h3 class="country__name">${data.name.common}</h3>
          <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              +data.population / 1000000
            ).toFixed(1)}M</p>
        <p class="country__row"><span>🗣️</span>${Object.values(
          data.languages
        ).join(', ')}</p>
           <p class="country__row"><span>💰</span>${Object.values(
             data.currencies
           )
             .map(curr => curr.name)
             .join(', ')}</p>

          </div>
        </article>
       
    `;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
}

// function getCountriesAndNeibour(country) {

//   ///////////////////////////////////////
// // Ajax call country 1
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//   request.send();

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     //   Render Country 1
//       renderCountry(data);

//       //   Get neighbour country

//       const neighbour = data.borders?.[0];

//       if (!neighbour) return

//  // Ajax call country 1
//   const request2 = new XMLHttpRequest();
//   request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
//       request2.send();

//       request2.addEventListener('load', function () {
//           const [data2] = JSON.parse(this.responseText);
//           console.log(data2);

//           renderCountry(data2, 'neighbour')
//       })

//   });

// }

// getCountriesAndNeibour('usa');
// getCountriesAndNeibour('nigeria');

// Promises lecture

// const request = new XMLHttpRequest();
//     request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//     request.send();

// const request =
//     fetch('https://restcountries.com/v3.1/name/nigeria');

// console.log(request);

// function getJSON(url, errorMsg = 'Something went wrong') {
//   return fetch(url).then(response => {
//     if (!response.ok) throw new Error(`${errorMsg} ${response.status}`);

//     return response.json();
//   });
// }

// function renderError(msg) {
//   countriesContainer.insertAdjacentText('beforeend', msg);
//   countriesContainer.style.opacity = 1;
// }

// function getCountryData(country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(response => {
//       console.log(response);

//       if (!response.ok) throw new Error(`Country not found ${response.status}`);

//       return response.json();
//     })

//     .then(data => {
//       renderCountry(data[0]);

//       const neighbour = data[0].borders?.[0];
// ;

//       if (!neighbour) return;

//       // country 2
//       return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
//     })
//     .then(response => {
//       if (!response.ok) throw new Error(`Country not found ${response.status}`);

//       response.json();
//     })
//     .then(data => renderCountry(data[0], 'neighbour'))
//     .catch(err => {
//       console.error(`${err}💥💥💥`);
//       renderError(`Error 404 ${err}`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// }

// function renderError(msg) {
//   countriesContainer.insertAdjacentText('beforeend', msg);
//   countriesContainer.style.opacity = 1;
// }

// function getCountryData(country) {
//     // Country 1
//    return getJSON(`https://restcountries.com/v3.1/name/${country}`, 'Country not found')
//         .then(data => {
//             renderCountry(data[0]);

//             const neighbour = data[0].borders?.[0];
//             if (!neighbour) return;
        
//             // country 2
//             return getJSON(
//                 `https://restcountries.com/v3.1/alpha/${neighbour}`,
//                 'Country not found'
//             )
      
//                 .then(data => renderCountry(data[0], 'neighbour'))
//                 .catch(err => {
//                     console.error(`${err}💥💥💥`);
//                     renderError(`Error 404 ${err}`);
//                 })
//                 .finally(() => {
//                     countriesContainer.style.opacity = 1;
//                 });
//         });
//         }

// btn.addEventListener('click', function () {
//   getCountryData('australia');
// });


////  CODING CHALLENGE 1 (not complete)

// function whereAmI(lat, lng) {
//   fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
//     .then(res => {
//       if(!res.ok) throw new Error(`Problem with geocoding${res.status}`)
//      return res.json()
//     })
//     .then(data => {
//       console.log(`you are in ${data.city}, ${data.country}`);
//     })
//     .then(res => {
//       if(!res.ok) throw new Error(`Problem with Geocoding ${res.status}` )
//     })
//   .catch(err => console.log(`${err.message}`)
//   )
// }
// whereAmI(52.508, 13.381)
// whereAmI(19.037, 72.873);
// whereAmI(-33.933, 18.474)



// Event loop

console.log('Test start');
setTimeout(() => console.log('1 sec timer'), 0)
Promise.resolve('Resolve promise 1')
  .then(res => console.log(res))

Promise.resolve('Resolved Promise 2').then(res => {
  for (let i = 0; i < 10000; i++){ }
  console.log(res);
  
})
  console.log('Test Ends');
  

