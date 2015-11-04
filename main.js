// wait for DOM to load before running JS
$(function() {

 // check to make sure JS is loaded
  console.log('JS is loaded!');
  // your code here

  
//1, create form CHECK
//2. make AJAX request when form submits
//2.5 get user input from for to send to spotify



$('#search').on('submit', function (event) {
     event.preventDefault();
    console.log('form submitted!');
    

    // get user input from form
    var searchedTracks = $('#track').val();
    console.log(searchedTracks);

    
    $.get('https://api.spotify.com/v1/search?q=' + searchedTracks + '&type=track', function(data) {
      console.log(data);
     
      var trackResults = data.tracks.items;
      
      trackResults.forEach(function(x) {
      	var tracks = x.name;
      	var artists = x.artists[0].name;
      	var preview_url = x.preview_url;
      	var image = x.album.images[0].url;

        $('<li>' + artists + ": " + tracks + "<img src=" + image +"><audio controls><source src=" + preview_url + ' type="audio/mpeg"></audio></li>').appendTo('ul');



});
      


      $('.btn').click(function() {
      	$('ul').empty();


        
      	
      	

});

});

});

});


  


      
   





      



    








