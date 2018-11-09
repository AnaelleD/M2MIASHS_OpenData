// Get
sendgetfetch = function(theme)
{
  fetch('/score?theme='+theme).then(function(response) {
    console.log(response.json())
  }
)}

// Post
sendpostfetch = function(nickname,theme,score,age,sexe)
{
	fetch('/score', {
  		method: 'POST',
  		body: JSON.stringify({
				nickname: nickname,
				theme: theme,
        score:score,
        age:age,
        sexe:sexe
			}),
		headers: {
      		'Content-Type': 'application/json'
    	}
	})
}
