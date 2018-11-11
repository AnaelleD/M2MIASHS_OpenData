fetchCinema = function(){
    fetch('/requestCinema').then(function(response) {
    console.log(response.json())
    }
)}
