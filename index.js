let button=document.querySelector(".search");
let city=document.querySelector(".city_name");

function fetch_weather()
{
    var city_name=city.value;       
    fetch("http://api.openweathermap.org/data/2.5/weather?q="+city_name+"&units=metric&appid=d38f9eb3c37c222223c5a0aa6e0a33b6"
    ).then((response)=> response.json()).then((data)=> update(data));
    city.value="";
}

function update(data)
{
    const { name } = data;
    const { icon , description } = data.weather[0];
    const { temp , humidity   } = data.main;
    const { speed }=data.wind;
    //Update all the Weather Details 
    var x=document.querySelectorAll("h1");
    x[0].innerHTML="Weather in " +name;
    x[1].innerHTML= temp+"°C";
    console.log(icon);
    document.querySelector(".icon").src="http://openweathermap.org/img/wn/" + icon + ".png";;
    x=document.querySelectorAll("p");
    x[0].innerHTML=""+description;
    x[1].innerHTML="Humidity : "+humidity+" %";
    x[2].innerHTML="Wind Speed : "+ speed+" Km/Hr";
}

city.addEventListener("keypress", function (e) {
    if (e.key == "Enter") {       
      fetch_weather();
    }
});
button.addEventListener("click", fetch_weather);
