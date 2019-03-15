function var req = new XMLHttpRequest();
req.onreadystatechange = function() {
  if (req.readyState == 4 && req.status == 200) {
    // successfully received data!
  }
};
req.open("GET", "web_address", true);
req.send();
