$( document ).ready(function() {

//Jarallax
  $('.jarallax').jarallax({
  	speed: 0.2
  });

var options = {
  offset: 400,
  classes: {
    clone: 'header',
    stick: ' header--stick',
    unstick: 'header--unstick'
  }
}


var header = new Headhesive('.header', options);


});
