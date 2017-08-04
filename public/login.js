function userLogin(){
	var user = document.getElementById("username").value;
	var pass = document.getElementById("password").value;

	var formData = {userName: user, userPassword: pass};

	var req = new XMLHttpRequest();
	req.open('POST', 'https://www.wsusuperstudy.com/authenticate', true); //this part authenticates the username and password with what's in the database
	req.setRequestHeader("Content-Type", "application/json");
	req.setRequestHeader("X-Forwarded-Proto", "https"); //you can ignore this part. I had to add it to support https

	formData = JSON.stringify(formData);
	req.send(formData);

	req.addEventListener('load', function(){ //listen for a response
			if(req.status == 200){
				window.location = "https://www.wsusuperstudy.com/lab_login_landing"; //this is the line that's executed upon successful login. for us, that will be the map
			}
			else{
				alert("The username/password combination supplied was incorrect."); //you can probably just leave this
			}
		});
}

document.getElementById("submit").addEventListener("click", userLogin);