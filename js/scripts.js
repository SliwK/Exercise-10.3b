// scripts.js
$(function(){
	var carouselList = $("#carousel section");
  function changeSlide() {
  carouselList.animate({'marginLeft':-600}, 500, moveFirstSlide);
  }
  var interval = setInterval(changeSlide, 4500);

  function moveFirstSlide(){
    var firstItem = carouselList.find("div:first");
    var lastItem = carouselList.find("div:last");

		lastItem.after(firstItem);
    carouselList.css({marginLeft:0});

  }

});
