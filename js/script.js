/* Toggle between showing and hiding dropdown menu when user clicks on button */

function myFunction () {
  document.getElementById("myDropdown").classList.toggle("show")
}

// Close dropdown menu if user clicks outside area //

window.onclick = function(event) {
  if (!event.target.matches(".dropdown-button")) {
    var dropdowns = document.getElementsByClassName("dropdown-menu");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
}




/* Slideshow JavaScript */
var slideIndex = 1;
showSlides(slideIndex);

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}






/* Initialize Google Maps */
function myMap() {
  var mapOptions = {
    //defines the properties for the map
    center: new google.maps.LatLng (37.9838, 23.7275),
    //specifies where to center the map
    zoom: 0,
    //specifies the zoom level for the map
    mapTypeId: google.maps.MapTypeId.TERRAIN
    //specifies the map type to display
  }
var map = new google.maps.Map(document.getElementById("googleMap"), mapOptions);
//creates a new map inside the <div> element
}
