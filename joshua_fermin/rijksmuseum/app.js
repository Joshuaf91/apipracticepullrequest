//https://www.rijksmuseum.nl/api/pages/en/rijksstudio/artists/rembrandt-harmensz-van-rijn?key=BmzGWILt&format=json
$("button").on("click", function(){
	var rooturl = "https://www.rijksmuseum.nl/api/pages/en"
	var slug = "/rijksstudio/artists/"
	var llave = "?key="+apikey+"&format=json"
	var input = $("input").val().split(" ").join("-").toLowerCase();
	console.log(input);
	$.ajax({
		url:rooturl+slug+input+llave,
		success:function(data){
			var photoArr = data.contentPage.artObjectSet
			for (var i = 0; i < photoArr.length; i++) {
				getImages(photoArr[i]);
			}
			// console.log(data);
		},
		error: function (data) {
			$("ul").append("<li>artist not found</li>");
		},
	});
});
function getImages(str){
	// console.log("hello");
	var rooturl = "https://www.rijksmuseum.nl/api/en/collection/";
	var input = str + "/tiles";
	var llave = "?key="+apikey+"&format=json";
	$.ajax({
		url: rooturl + input +llave,
		success: function(data){
			var data = JSON.parse(data);
			var img = data.levels[data.levels.length -1].tiles[0].url;
			$("ul").append("<li><img src="+img+"></li>");
		}
	})
}





































// $("#search").show().on("click" , function(){
// 	$("button").show();
// 	var input = $("input").val();
// 	$('ul').empty();
// 	var start = "http://www.rijksmuseum.nl/api/oai2/"
// 	var slug = "en/rijksstudio/artists/"
// 	var querry = $("input").val().split(' ').join('+');
// 	$.ajax({
// 		url: start+apikey+slug+input,
// 		success: function(){
			
// 		}
// 	});
// });