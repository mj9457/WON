$(document).ready(function () {
  let weathersIcon = {
    "01": "fas fa-sun",
    "02": "fas fa-cloud-sun",
    "03": "fas fa-cloud",
    "04": "fas fa-cloud-meatball",
    "09": "fas fa-cloud-showers-heavy",
    "10": "fas fa-cloud-rain",
    "11": "fas fa-poo-storm",
    "13": "fas fa-snowflake",
    "50": "fas fa-smog",
  };

  $.getJSON(
    "https://api.openweathermap.org/data/2.5/weather?lat=36.8187&lon=127.7996&appid=54d8b56b9ce4d6cafa110738a09ec718&units=metric",
    function (data) {
      var weatherTemp = Math.floor(data.main.temp) + " º ";
      var weatherIcon = data.weather[0].icon.substr(0, 2);
      var weatherCity = data.name;

      $(".menubar__weather--temp").append(weatherTemp);
      $(".menubar__weather--icon").append(
        '<i class="' + weathersIcon[weatherIcon] + '"></i>'
      );
      // $('.menubar__weather--city').append(weatherCity); /* 학교 날씨 */
    }
  );
});
