$('#btn-artist').on('click', function(){
	GET "https://api.spotify.com/v1/search?q=acdc&type=artist" -H "Accept: application/json" -H "Authorization: Bearer BQBap4Hg_YZXLe7WwUvER-TPpTPXz5lSbzIEq-Y_8mny7q5zdJe6xt7nN9sXozRmQmztH7weL85ctklrF6ow_4psw4I8MTDXD5uG_9FbgXjDzcMub9zG3TtId-xtq0GXVkvmUce8kP6p"
})