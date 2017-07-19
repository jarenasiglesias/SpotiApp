var obj2;

(function($) {

var $button = $('#btn-artist');
var $divResults = $('#result');
var $textBoxArtist = $('#searchArtist');

$button.on("click", function(e) {

  e.preventDefault();
  var $inputValue = $('#query').val;  
  /*var sArtistToFind = $inputValue.val();*/
  //var sGetArtistsUrl = "https://api.spotify.com/v1/search?type=artist&query=" + sArtistToFind;

   function getHashParams() {
    var hashParams = {};
    var e, r = /([^&;=]+)=?([^&;]*)/g,
              q = window.location.hash.substring(1);
          while ( e = r.exec(q)) {
             hashParams[e[1]] = decodeURIComponent(e[2]);
          }
          return hashParams;
        }

  var params = getHashParams();

  var access_token = params.access_token;

	

$.ajax({
   url: 'https://api.spotify.com/v1/search',
   dataType: 'json',
   data: {
     	type: "artist",
      	query : $textBoxArtist.val().toString()
    },
   headers: {
       'Authorization': 'Bearer ' + access_token
   },
   success: function(response) {
   		getArtists(response);
   }
});
$.ajax({
   url: 'https://api.spotify.com/v1/search',
   dataType: 'json',
   data: {
     	type: "album",
      	query : $textBoxArtist.val()
    },
   headers: {
       'Authorization': 'Bearer ' + access_token
   },
   success: function(response2) {  
   		getAlbum(response2);
   }
});
});



})(jQuery);

function getArtists(response) {

	var nameArtist = [];
  	var items =response.artists.items;
  	$('#result').empty();
   	for (var i=0; i<items.length; i++ ){
   		nameArtist[i] = items[i].name;
    	$('#result').append("<p>" + nameArtist[i] + "</p>");
    	var imageArtist = items[i].images[0].url; //inicializa cogiendo la primera imagen del objeto de artista
		var img = document.createElement("img"); // crea el elemento img
		document.getElementById('result').appendChild(img).setAttribute("class", "imgArtist"); //añade el id de imgArtist
		document.getElementById('result').appendChild(img).setAttribute("src", imageArtist); //mete el source de la imagen 
 	};
	
}

function getAlbum(response2){
	var albumResult = document.getElementById('resultImg');
	var imgClass = document.getElementsByClassName('albumImg');
	var img = document.createElement("img"); // crea el elemento img
	for(var i = 0; i < response2.albums.items.length; i++){
		var imgItem = response2.albums.items[i];
		var imgName = document.createElement("p");
		img = document.createElement("img");
		albumResult.appendChild(img).setAttribute("class", "albumImg"); //añade el id de imgArtist
		albumResult.appendChild(img).setAttribute("src", imgItem.images[1].url);
		$("<h2>" + imgItem.name + "</h2>").insertAfter(imgClass[i]);
	}	
}
