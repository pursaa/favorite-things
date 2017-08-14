$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var favoriteThings = [];
    var favorite1 = $("#first-thing").val();
    var favorite2 = $("#second-thing").val();
    var favorite3 = $("#third-thing").val();

    favoriteThings.push(favorite1, favorite2, favorite3);
    var newFavoriteThings = [];
    newFavoriteThings.push(favoriteThings[1],favoriteThings[0], favoriteThings[2]);
    debugger;
    $(".favorite1").text(favorite1);
    $(".favorite2").text(favorite2);
    $(".favorite3").text(favorite3);

  });

});
