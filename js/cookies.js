

function WriteCookie() {
	console.log("Start Cookies");
	nameC = escape(document.getElementById("fullname").value) + ";";
	emailC = escape(document.getElementById("email").value) + ";";
	usernameC = escape(document.getElementById("username").value) + ";";
	
	document.cookie = "username=" + usernameC;
	document.cookie = "name=" + nameC;
	document.cookie = "email=" + emailC;
	
	console.log("Made Cookie");
}

