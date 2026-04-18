const root= document.getElementById("card")
const result=document.getElementById("result");

const search=document.getElementById("search");
search.addEventListener("click",()=>{
    const place=document.getElementById("city").value;
    console.log(place);
    const fetching_data = fetch(
    `http://api.weatherapi.com/v1/current.json?key=57dd5e335ee543ceb1a63820263103&q=${place}&aqi=yes`,
  )

const data=fetching_data.then(response=>response.json())

data.then((data)=>{

const name = document.createElement("div");
    name.innerText = `District: ${data.location.name}`;

    const region = document.createElement("div");
    region.innerText = `State: ${data.location.region}`;

    const country = document.createElement("div");
    country.innerText =`Country: ${data.location.country}`;

     const Temprature = document.createElement('div');
     Temprature.classList.add("Weather");
    const temp_c=document.createElement('div')
    temp_c.classList.add("temp");
    temp_c.innerText=`Temp: ${data.current.temp_c} °C`;

    const image=document.createElement('div');
    const img=document.createElement('img')
    img.src=data.current.condition.icon;
    img.alt="Weather Image ";
    image.append(img);
    Temprature.appendChild(image);
     Temprature.appendChild(temp_c);

    const temp_f=document.createElement('div')
    temp_f.innerText=`Temp: ${data.current.temp_f} °f`

    const wind=document.createElement('div');
    wind.innerText=`Wind: ${data.current.wind_kph} Kph`


    console.log(data.location.name);
    console.log(data.location.region);
    console.log(data.location.country);


    const result = document.getElementById("result")
    if(result.childNodes.length>0){
        result.innerHTML="";
    }
    result.appendChild(Temprature);
    result.appendChild(temp_f);
    result.appendChild(wind);
    result.appendChild(name);
    result.appendChild(region);
    result.appendChild(country);
    
   

})

})