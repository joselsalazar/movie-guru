var path = "https://api.themoviedb.org/3/discover/movie?api_key=2bb8b1ba1728e487795e964aae1d41c4&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=";

$(".genre-family").click(function() {
	runAJAX("10751");
});

$(".genre-horror").click(function() {
	runAJAX("27");
});

$(".genre-romance").click(function() {
	runAJAX("10749");
});

$(".genre-documentary").click(function() {
	runAJAX("99");
});

$(".genre-comedy").click(function() {
	runAJAX("35");
});

$(".genre-animation").click(function() {
	runAJAX("16");
});

var runAJAX = function(arg) {
	$.ajax({
		url: path + arg,
		method: "GET"
	}).done(function (response) {
		$('#drop').empty();
		for (var i = 0; i < 9; i++) {
			// htmlContent.push(response.results[i].title + "<br>");
			htmlContent = `
				<div style="width: 30%; display: inline-block;">
					<h1>${response.results[i].title}</h1>
					<p>Overview: ${response.results[i].overview}</p>
					<img width="100%" src="https://image.tmdb.org/t/p/w500/${response.results[i].poster_path}">
				</div>
			`
			$("#drop").append(htmlContent);
		}
		console.log('updated');

		// html content
		// $("#drop").html(htmlContent);
	})
}
