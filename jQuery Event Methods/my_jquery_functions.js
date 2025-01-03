// $('p').click(function (e) {
//     e.preventDefault();
//     let currentColor = $(this).css("background-color");
//     if (currentColor === 'rgb(0, 255, 255)') {
//         $(this).css("background-color", "white");
//     } else {
//         $(this).css("background-color", "aqua");
//     }
// });


$("p").on({
    mouseenter: function(){
      $(this).css("background-color", "lightgray");
    },
    mouseleave: function(){
      $(this).css("background-color", "lightblue");
    },
    click: function(){
      $(this).css("background-color", "yellow");
    }
  });