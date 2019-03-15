function start() {
	var req = new XMLHttpRequest();
	req.onreadystatechange = function() {
	  if (req.readyState == 4 && req.status == 200) {
	    var list = JSON.parse(req1.response);
	    var classList = "";
	    var i;
	    for(i =0; i < RecentNews.length; i++)
	    {
	    	classList = classList + list.RecentNews[i].course + " ";
	    }
	  }
		classList = document.getElementById("results").innerHTML;
	};
	req.open("GET", "https://chan9970.github.io/RecentNews.json", true);
	req.send();
}
