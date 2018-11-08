function fetchBoutton(theme){
  if (theme == "Sport"){
    fetchSport()
  }
  else if (theme == "Music"){
    fetchMusic()
  }
  else if (theme == "Cinema"){
    fetchCinema()
  }
  else if (theme == "Flag"){
    fetchFlag()
	  }
  else if (theme == "Games"){
    fetchGames()
  }else{
    console.log("erreur")
  }
}
