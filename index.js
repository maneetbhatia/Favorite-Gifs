var movies = [
  "Captain Marvel",
  "Dark Phoenix",
  "US",
  "The Lion King",
  "Toy Story 4"
];

function displayMovieInfo() {
  var movie = $(this).attr("data-name");
  var xhr = $.get(
    "https://api.giphy.com/v1/gifs/search?q=" +
      movie +
      "&api_key=a3NI5WruCwCtyyGiwFOUfm5KeH6TASNL&limit=10"
  );

  xhr.done(function(data) {
    console.log("success got data", data);

    if (document.getElementById("movie"))
      document.getElementById("movie").innerHTML = "";

    var movieDiv = $("<div id='movie' class='column'>");

    for (var i = 0; i < data.data.length; i++) {
      var rating = data.data[i].rating;
      var pOne = $("<p>").text("Rating: " + rating);
      movieDiv.append(pOne);
      var imgURL = data.data[i].images.fixed_width_still.url;
      var imgURL2 = data.data[i].images.fixed_width.url;
      var image = $("<img>").attr({
        src: imgURL,
        "data-still": imgURL,
        "data-animate": imgURL2,
        "data-state": "still",
        class: "gif"
      });
      movieDiv.append(image);
      $("#movies-view").prepend(movieDiv);
    }
  });
}

function renderButtons() {
  $("#buttons-view").empty();

  for (var i = 0; i < movies.length; i++) {
    var a = $("<button>");
    a.addClass("movie-btn");
    a.attr("data-name", movies[i]);
    a.text(movies[i]);
    $("#buttons-view").append(a);
  }
}

$("#add-movie").on("click", function(event) {
  event.preventDefault();
  var movie = $("#movie-input")
    .val()
    .trim();
  movies.push(movie);
  renderButtons();
});

$(document).on("click", ".movie-btn", displayMovieInfo);
renderButtons();
$(document).on("click", ".gif", handleGIF);

function handleGIF() {
  var state = $(this).attr("data-state");
  if (state === "still") {
    $(this).attr("src", $(this).attr("data-animate"));
    $(this).attr("data-state", "animate");
  } else {
    $(this).attr("src", $(this).attr("data-still"));
    $(this).attr("data-state", "still");
  }
}
