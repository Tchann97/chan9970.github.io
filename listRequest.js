window.onload = function start() {
	var req1 = new XMLHttpRequest();
	req1.onreadystatechange = function() {
	  if (req1.readyState == 4 && req1.status == 200) {
	    var list = JSON.parse(req1.response);
	    var classList = "";
	    var i;
	    for(i =0; i < list.recentNews.length;i++)
	    {
	    	
	    	classList = classList+"<h3 class>" + list.recentNews[i].course + "<h3>";
	    	console.log(classList);
	    }
	  }
		document.getElementById("results").innerHTML = classList;
	};
	req1.open("GET", "https://chan9970.github.io/RecentNews.json", true);
	req1.send();
}
