var division = document.createElement('div')
division.innerHTML=`    <input type="text" id="txt">
<button onclick="get()">Search</button>
<h3 id="header"> </h3>
<h3 id="head"> </h3>` 
document.body.append(division);

// https://api.covid19api.com/dayone/country/${covid19} //

async function get(){

let covid = document.getElementById("txt").value 
console.log(covid)

let url = await fetch(`https://api.covid19api.com/dayone/country/${covid}`)
let result= await url.json();
console.log(result);

let length = result.length-1;
let deathcase = result[length].Deaths;

let activecase= result[length].Active
console.log(deathcase);
document.getElementById("header").innerText=`Total deathcase in ${covid}:${deathcase}`
document.getElementById("head").innerText=`Total activecase in ${covid}:${activecase}`
}
get()