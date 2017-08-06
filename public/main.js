function post_priv() {
	function reqListener() {
		oReq.onreadystatechange = function() {
   	    	console.log("STATUS: " + this.status);
   	    	console.log("RESPONSE:");
        	console.log(this.responseText);
      	  console.log(this.getAllResponseHeaders());
   	 	}
	}
	var private_key = {
		private_key: document.getElementById("privkey").value
	};
	var json = JSON.stringify(private_key);
	var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", reqListener);
    oReq.open("POST", "localhost/api/private_key");
    oReq.setRequestHeader("Content-Type", "application/json")
    oReq.send(json);
}

window.onload = function() {
	document.getElementById("priv-button").addEventListener("click", post_priv);
}