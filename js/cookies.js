/**
 * @Author: CrowdSpeak
 * @Date:   04-23-2017 <05:15:33 PM>
 * @Email:  elmer.rodriguez6@gmail.com
 * @Filename: cookies.js
 * @Last modified by:   elmerxavierrodriguez
 * @Last modified time: 04-23-2017 <08:17:07 PM>
 * @Copyright: © 2017 ELMER RODRIGUEZ ALL RIGHTS RESERVED
 */

//
// var cookiearray;
//
// function setCookie(cname, cvalue, exdays) {
//     var d = new Date();
//     d.setTime(d.getTime() + (exdays*24*60*60*1000));
//     var expires = "expires="+ d.toUTCString();
//     document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
// }
//
// function getCookie(cname) {
//     var name = cname + "=";
//     var decodedCookie = decodeURIComponent(document.cookie);
//     var ca = decodedCookie.split(';');
//     for(var i = 0; i <ca.length; i++) {
//         var c = ca[i];
//         while (c.charAt(0) == ' ') {
//             c = c.substring(1);
// 						console.log("getCookie first character is empty");
//         }
//         if (c.indexOf(name) == 0) {
//             return c.substring(name.length, c.length);
// 						console.log("getCookie index equals zero");
//         }
//     }
//     return "";
// }
//
//
// function checkCookie() {
//     var usernameC = getCookie("username");
//     if (usernameC != "") {
// 				console.log("checkCookie");
//         alert("Welcome again " + usernameC);
//     }
// }``


function WriteCookie() {
<<<<<<< Updated upstream
	console.log("Start Cookies");
	nameC = escape(document.getElementById("fullname").value) + ";";
	emailC = escape(document.getElementById("email").value) + ";";
	usernameC = escape(document.getElementById("username").value) + ";";
	
	if (document.getElementById("username").value == "") {
		alert("Username is blank!!!!!!!!!!!!!!!!!");
		return;
	}
	else {
		document.cookie = "username=" + usernameC;
		document.cookie = "name=" + nameC;
		document.cookie = "email=" + emailC;
		document.cookie = "video=";
		console.log("Made Cookie");
		ShowCookie();
	}
=======
  console.log("Start Cookies");
  if (document.myform.customer.value == "") {
    alert("Enter some value!");
    return;
  }
  nameC = escape(document.getElementById("fullname").value) + ";"
	document.cookie="fullname=" + nameC;
	document.write ("fullname=" + fullname );
  emailC = escape(document.getElementById("email").value) + ";";
	document.cookie="emailC=" + emailC;
	document.write ("emailC=" + emailC );
  usernameC = escape(document.getElementById("username").value) + ";";
	document.cookie="usernameC=" + usernameC;
	document.write ("usernameC=" + usernameC );

  document.cookie = "username=" + usernameC;
  document.cookie = "name=" + nameC;
  document.cookie = "email=" + emailC;
  document.write = ("Everything is alright")

  console.log("Made Cookie");
  ShowCookie();
>>>>>>> Stashed changes
}

function ShowCookie() {
	var allcookies = document.cookie = document.cookie;

	cookiearray = allcookies.split(';');

	for(var i = 0; i < cookiearray.length; i++){
		name = cookiearray[i].split('=')[0];
		value = cookiearray[i].split('=')[1];
		console.log("Key is:" + name + " and Value is:" + value);
	}
}


function ReadCookie(){
	var x = document.cookie;
	console.log("Read Cookie");
}
