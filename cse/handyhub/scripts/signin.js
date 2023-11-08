function submit() {
    const inputs = document.getElementsByTagName("input");

    const email = inputs[0].value;
    const password = inputs[1].value;
    const rememberMe = inputs[2].checked;

    const URL = "https://reqres.in/api/users";
    const data = {
        "email": email,
        "password": password
    }

    const request = new XMLHttpRequest();
    request.open("POST", URL);

    request.setRequestHeader("Access-Control-Allow-Credentials", "true");
    request.setRequestHeader("Content-Type", "application/json");
    
    request.onload = signinCompleted;
    request.send(JSON.stringify(data));

    function signinCompleted() {
        if (request.status === 200 || request.status === 201) {
            localStorage.setItem("user-id", 1);
            window.location.href = "home.html";
        }
    }
}