var obj;

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
      	query : $textBoxArtist.val()
    },
   headers: {
       'Authorization': 'Bearer ' + access_token
   },
   success: function(response) {   	
   		getArtists(response);
   		obj = response;
   }
});
});


})(jQuery);

function getArtists(response) {
	var nameArtist = response.artists.items[0].name;
	var img = 
	document.getElementById('result').innerText = nameArtist;
}