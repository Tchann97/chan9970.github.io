function start() {
	var req = new XMLHttpRequest();
	req.onreadystatechange = function() {
	  if (req.readyState == 4 && req.status == 200) {
	    var list = JSON.parse(req1.response);
	    var classList = "";
	    var i;
	    for(i in list.RecentNews)
	    {
	    	classList = classList + list.recentNews[i].course;
	    }
	  }
		document.getElementById("results").innerHTML = classList;
	};
	req.open("GET", "https://chan9970.github.io/RecentNews.json", true);
	req.send();
}
