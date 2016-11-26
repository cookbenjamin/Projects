$('document').ready(function() {
  update();
});
function toggleUnits() {
  if ($("#units").val() == "metric") {
    $("#units").val("imperial");
    $("#units").html("F");
    update();
  } else if ($("#units").val() == "imperial") {
    $("#units").val("metric");
    $("#units").html("C");
    update();
  }
}
function update()  {
  $.getJSON({
    url: 'http://ip-api.com/json',
    success: function(data) { 
      getWeather(data.lat, data.lon);
      $("#city").html(data.city)
      $("#country").html(data.country)
    },
    error: function(err, e, a) {
      alert("error 1");
    }
  });
}

function getWeather(lat, lon) {
  $.getJSON({
    url: 'http://api.openweathermap.org/data/2.5/weather',
    data: {
      lat: lat,
      lon: lon,
      APPID: "f917df0b8b9be3d070ddee92d9a6d12e",
      units: $("#units").val()
    },
    success: function(data) { 
      $("#weather").html(data.weather[0].main)
      $("#temp").html(data.main.temp)
      updateStyle(data.weather[0].id)
    },
    error: function(err, e, a) {
      alert("error");
    }
  });
}
function updateStyle(code) {
  $("#icon").attr('class','')
  $("#icon").addClass("owf");
  $("#icon").addClass("owf-"+String(code));
  $("#icon").addClass("owf-5x");
  if (code === 800) {
    $("body").attr('class','')
    $("body").addClass("clear");
  } else if (code > 800) {
    $("body").attr('class','')
    $("body").addClass("cloudy");
  } else if (code < 600) {
    $("body").attr('class','')
    $("body").addClass("rain");
  } else if (code > 700 && code < 800) {
    $("body").attr('class','')
    $("body").addClass("haze");
  }
}