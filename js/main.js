
getData('cairo')



document.getElementById('search').addEventListener('input', function () {
  let text = document.querySelector("input").value
  getData(text)
})


let forcast;

async function getData(term) {
  let response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=5322639b90b94e7b960163718241312&q=${term}&days=3`)

  if (response.ok) {
    let allData = await response.json()
    // console.log(allData);
    title = allData.location
    deg = allData.current
    img = allData.current.condition
    forcast = allData.forecast.forecastday


  }



  let days = forcast.map(el => {
    let dateNumber = new Date(el.date);
    let dayName = dateNumber.toLocaleString('en-US', { weekday: 'long' }); 
    return { dayName };
  });







  //   
  document.getElementById('myRow').innerHTML = `
    
    <div class="col-md-4">
          <div class="forecast f1">
            <div class="forecast-header px-3 d-flex  ">
              <p class="">${days[0].dayName}</p>
              <p class="">15December</p>
            </div>
            <div class="forecast-body">
              <h3 class="m-3  c-name">${title.name}</h3>
              <h1 class="ms-3 fw-bold">${forcast[0].day.maxtemp_c}°C</h1>
              <img src="${forcast[0].day.condition.icon}" class="main-icon ms-5" alt="">
              <p class="status ms-3">${forcast[0].day.condition.text}</p>
              <span class="d-inline-flex me-3">
                <img class="me-1 ms-3" height="20px" src="images/icon-umberella@2x.png" alt="">
                <p>20%</p>
              </span>
              <span class="d-inline-flex me-3">
                <img class="me-1 ms-3" height="20px" src="images/icon-wind@2x.png" alt="">
                <p>18km/h</p>
              </span>
              <span class="d-inline-flex me-3">
                <img class="me-1 ms-3" height="20px" src="images/icon-compass@2x.png" alt="">
                <p>East</p>
              </span>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="forecast dark">
            <div class="forecast-header diff">
              <p class="text-center">${days[1].dayName}</p>
            </div>
            <div class="forecast-body text-center py-5">
              <img src="${forcast[1].day.condition.icon}" alt="">
              <h4 class="text-white">${forcast[1].day.maxtemp_c}°C</h4>
              <p class="deg">${forcast[1].day.mintemp_c}°C</p>
              <p class="status">${forcast[1].day.condition.text}</p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="forecast f3">
            <div class="forecast-header last">
              <p class="text-center">${days[2].dayName}</p>
            </div>
            <div class="forecast-body text-center py-5">
              <img src="${forcast[2].day.condition.icon}" alt="">
              <h4 class="text-white">${forcast[2].day.maxtemp_c}°C</h4>
              <p class="deg">${forcast[2].day.mintemp_c}°C</p>
              <p class="status">${forcast[2].day.condition.text}</p>
            </div>
          </div>
        </div>
    
    
    
    `




}