/**
 * @Author: Elmer Rodriguez <elmerxavierrodriguez>
 * @Date:   04-23-2017 <05:15:33 PM>
 * @Email:  elmer.rodriguez6@gmail.com
 * @Filename: cookies.js
 * @Last modified by:   elmerxavierrodriguez
 * @Last modified time: 04-23-2017 <05:40:13 PM>
 * @Copyright: © 2017 ELMER RODRIGUEZ ALL RIGHTS RESERVED
 */



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


function ReadCookie(){
	var x = document.cookie;
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}


function checkCookie() {
    var usernameC = getCookie("username");
    if (usernameC != "") {
        alert("Welcome again " + usernameC);
    }
}
