<?php
$WeatherSource = "https://api.forecast.io/forecast/e1a2731c7f5882f1e8308f6dc77003e9/" . $_GET["lat"] . "," . $_GET["lng"];
header("Content-Type: application/json");
header("Cache-Control: no-cache");
readfile($WeatherSource);
?>