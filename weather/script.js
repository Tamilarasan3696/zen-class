var title= document.createElement('div')
title.innerText="WEATHER REPORT BASED ON CITYNAME"
title.setAttribute('id','title')
document.body.append(title);


var division = document.createElement('div')
division.innerHTML=`    <input type="text" placeholder="Cityname"  id="txt">
<button id="button" onclick="get()">Search</button>` 
division.setAttribute('class','container')
document.body.append(division);


async function get(){
     var cityNames =document.getElementById('txt').value
var url =  await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityNames}&appid=5ded84aa412f193391ae9e228b36e0fc`)
var result = await url.json();
console.log(result)
 

 
 let division1 = document.getElementById('cardlist')
 division1.innerHTML=`<div class="card" style="width: 18rem;">
 <img src="https://media.istockphoto.com/id/1225639749/vector/weather-icons-set.jpg?s=612x612&w=0&k=20&c=7EbuC4dBLWOEWMBiJSSDZCyIfNAAnn3K0Gzm-n1AaXI=" id="card-img-top" alt="...">
 <div id="card-body">
   <h5 id="temp">Temperature:${result.main.temp}</h5>
   <h5 id="speed">Speed: ${result.wind.speed}</h5>
   <h5 id="speed">Wind-Deg: ${result.wind.deg}</h5>
   <h5 id="humidity">Humidity:${result.main.humidity}</h5>

 </div>
</div>`
}


 