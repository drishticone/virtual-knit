<!DOCTYPE html>
<html lang="en">
<head>
<body>
<?php
require '../header.php'
?>
  <title>About Hostels</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
  <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
  <style>
  .carousel-inner > .item > img,
  .carousel-inner > .item > a > img {
      width: 70%;
      margin: auto;
  }
  </style>
</head>
<div class="container-fluid">
  <h2>About Hostels</h2>
  <div id="about_hostels" class="carousel slide">
    <!-- Indicators -->
    <ol class="carousel-indicators">
      <li class="item1 active"></li>
      <li class="item2"></li>
      <li class="item3"></li>
      <li class="item4"></li>
	  <li class="item5"></li>
	  <li class="item6"></li>
    </ol>
    <!-- Wrapper for slides -->
    <div class="carousel-inner" role="listbox">
      <div class="item active">
       <img src="../static/img/ramanujam.jpg" alt="ramanujam" width="460" height="345">
        <div class="carousel-caption">
          <h3>Ramanujam Hostel</h3>
          <p>*Ramanujan is a huge hostel which is given to our final year students<br>
		  *It had got excellent drinking water facilities<br>
		  *It had got a basketball court.</p>
        </div>
      </div>
      <div class="item">
         <img src="../static/img/aryabhatta.jpg" alt="aryabhatta" width="460" height="345">
        <div class="carousel-caption">
          <h3>Aryabhatta Hostel</h3>
          <p>*This hostel is given to third year students<br>
		  *It had got excellnet rooms and well developed wifi network<br>
		  *24*7 power backup facilities.<br>
		  *2 seater rooms</p>
        </div>
      </div>
	  <div class="item">
        <img src="../static/img/Kalaam.jpg" alt="Kalaam" width="460" height="345">
        <div class="carousel-caption">
          <h3>Kalaam Hostel</h3>
          <p>*Kalaam is allotted to first year students<br>
		  *Newly built hostel, having excellent power backup<br>
		  *well built infrastructure.</p>
        </div>
		</div>
      <div class="item">
        <img src="../static/img/new_vs.jpg" alt="new_vs" width="460" height="345">
        <div class="carousel-caption">
          <h3>New VS Hostel</h3>
          <p>*New VS Hostel accomodate second year students.<br>
		  *It had got three wings X-wing,Y-wing and Z-wing<br>
		  *It is 4 seater </p>
        </div>
      </div>
      <div class="item">
        <img src="../static/img/old_vs.jpg" alt="old_vs" width="460" height="345">
        <div class="carousel-caption">
          <h3>Old VS</h3>
          <p>*This hostel accomodate first year students <br>
		  *3 seater rooms<br>
		  *sufficient space inside to play various games </p>
        </div>
      </div>
	   <div class="item">
        <img src="../static/img/gargi.jpg" alt="gargi hostel" width="460" height="345">
        <div class="carousel-caption">
          <h3>Gargi Hostel</h3>
          <p>*This hostel accomodate second year students <br>
		  *3 seater rooms<br>
		  *Basket ball court inside<br>
          *High speed LAN network		  </p>
        </div>
    </div>
    <!-- Left and right controls -->
    <a class="left carousel-control" href="#about_hostels" role="button">
      <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="right carousel-control" href="#about_hostels" role="button">
      <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</div>
<script>
$(document).ready(function(){
    // Activate Carousel
    $("#about_hostels").carousel();

    // Enable Carousel Indicators
    $(".item1").click(function(){
        $("#about_hostels").carousel(0);
    });
    $(".item2").click(function(){
        $("#about_hostels").carousel(1);
    });
    $(".item3").click(function(){
        $("#about_hostels").carousel(2);
    });
    $(".item4").click(function(){
        $("#about_hostels").carousel(3);
    });
    $(".item5").click(function(){
        $("#about_hostels").carousel(4);
    });
	$(".item6").click(function(){
        $("#about_hostels").carousel(5);
    });
    // Enable Carousel Controls
    $(".left").click(function(){
        $("#about_hostels").carousel("prev");
    });
    $(".right").click(function(){
        $("#about_hostels").carousel("next");
    });
});
</script>
<?php
require '../footer.php'
?>
</body>
</html>
