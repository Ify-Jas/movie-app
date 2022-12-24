var searchInput = $('.search');
var cardWrapper = $('main');


function noMatch(){
    cardWrapper.html('<p class="no-search">No results found.</p>');

}

function displayMatches(matches) {
   cardWrapper.html('');

   if(!matches.length) {
    noMatch();
   }

    for (var matchObj of matches) {
        cardWrapper.append(`
        <div class="movie-card" style='background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${matchObj.Poster});'>
          <h3>${matchObj.Title}</h3>
          <p>Release Year${matchObj.Year}</p>
          <a href='https://www.imdb.com/title/${matchObj.imdbID}' target='_blank'>View more info here</a>
        </div> 
        
        `);

         //target='_blank' is to open the link on a blank new page.

    }


}

function fetchMovies(event) {
    var keyCode = event.keyCode;
    var searchText = searchInput.val().trim();
    //trim to remove white spaces, toLowerCase to convert and match search to same type, includes to allow a partial search to march jurassic search to return Jurassica park

    if (keyCode === 13 && searchText) {
        

        $.get(`http://www.omdbapi.com/?apikey=c953ed91&s=${searchText}`)
          .then(function(data) {
           displayMatches(data.Search);
           searchInput.val('');


         });         
    
      

    }

}

function init() {
    searchInput.keydown(fetchMovies);

}

init();




































/* <div class="movie-card">
    <h3>Movie Title</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    <a href="#">View more info here</a>
</div> */