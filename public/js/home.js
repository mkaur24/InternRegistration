var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
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
} 

/* Toggle between adding and removing the "responsive" class to header when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myheader");
  if (x.className === "header") {
    x.className += " responsive";
  } else {
    x.className = "header";
  }
} 

/* Toggle between adding and removing the "responsive" class to footer when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myfooter");
  if (x.className === "footer") {
    x.className += " responsive";
  } else {
    x.className = "footer";
  }
} 

  function showIntern(internid, fullname, address,branch,projname){
    document.getElementById("internid").innerHTML = " "+internid;
    document.getElementById("fullname").innerHTML = " "+fullname;
    document.getElementById("address").innerHTML = " "+address;
    document.getElementById("branch").innerHTML = " "+branch;
    document.getElementById("projname").innerHTML = " "+projname.slice(1);
  }
  
   function showProject(projid,projname,domaintype,fullname){
    document.getElementById("projid").innerHTML = " "+projid;
    document.getElementById("projname").innerHTML = " "+projname;
    document.getElementById("domaintype").innerHTML = " "+domaintype;
    document.getElementById("fullname").innerHTML = " "+fullname.slice(1);
  }