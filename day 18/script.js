// rest country : https://restcountries.com/v3.1/all //


var division = document.createElement('div')
division.innerHTML=`<div class="card-deck">
<div class="card">
  
  <div class="card-body">
    <h5 class="card-title">Name</h5>
    <img src="..." class="card-img-top" alt="...">
    <h5 class="card-title">Capital</h5>
    <h5 class="card-title">region</h5>
    <h5 class="card-title">country code</h5>
    <h5 class="card-title">Card title</h5>
      <button type="button" class="btn btn-dark" onclick="getWeather()">GetWeather</button>
  </div>
</div>
<div class="card">
  
  <div class="card-body">
  <h5 class="card-title">Name</h5>
    <img src="..." class="card-img-top" alt="...">
    <h5 class="card-title">Capital</h5>
    <h5 class="card-title">region</h5>
    <h5 class="card-title">country code</h5>
    <h5 class="card-title">Card title</h5>
      <button type="button" class="btn btn-dark" onclick="getWeather()">GetWeather</button>
  </div>
</div>
<div class="card">
 
  <div class="card-body">
  <h5 class="card-title">Name</h5>
  <img src="..." class="card-img-top" alt="...">
  <h5 class="card-title">Capital</h5>
  <h5 class="card-title">region</h5>
  <h5 class="card-title">country code</h5>
  <h5 class="card-title">Card title</h5>
    <button type="button" class="btn btn-dark"  onclick="getWeather()">GetWeather</button>
  </div>
</div>
</div>`
division.setAttribute("class","container")
document.body.append(division);




function getWeather(){
    var cityNames =document.getElementById('txt').value


var weather= fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityNames}&appid=5ded84aa412f193391ae9e228b36e0fc`)

weather.then((result)=>result.json()).then((result1)=>{console.log(result1)})
console.log(result1);


 
}