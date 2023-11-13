// EXAMPLE OF GETTING DATA FROM AN API
// const request = new XMLHttpRequest();
// request.open("GET", "http://localhost:5000/api/user");
// request.setRequestHeader("Access-Control-Allow-Credentials", "true");
// request.setRequestHeader("Content-Type", "application/json");
// request.onload = processData;
// request.send();

// function processData() {
//     const response = JSON.parse(request.response);

//     const h1 = document.createElement("h1");
//     // h1.innerText = `Welcome, ${response.data[0].first_name}`;
//     console.log(response);
// }

// EXAMPLE OF SENDING FROM AN API 
function clickToSend() {
    // get data from inputs 
    const inputs = document.getElementsByTagName("input");
    const email = inputs[0].value;
    const password = inputs[1].value; 
    const data = {
        "email": email,
        "password": password
    } 
    const jsonData = JSON.stringify(data);

    // build a request object
    const request = new XMLHttpRequest();

    // open a connection to my api 
    request.open("POST", "http://localhost:5000/api/signin");

    // customise the request 
    request.setRequestHeader("Access-Control-Allow-Credentials", "true");
    request.setRequestHeader("Content-Type", "application/json");
    
    // specify what happens when data arrives 
    request.onload = processRequestToSendDataResponse;
    
    // specify what happens when an error occurs
    request.onerror = processErrorResponse; 

    // send the data 
    request.send(JSON.stringify(data));

    function processRequestToSendDataResponse() {
        const response = JSON.parse(request.response);

        if (request.status == 200) {
            const h1 = document.createElement("h1");
            h1.innerText = `Welcome, ${response.data.user_id}`;
            
            const body = document.getElementsByTagName("body")[0];
            body.appendChild(h1);

            localStorage.setItem("user-id", response.data.user_id);
            sessionStorage.setItem("user-id", response.data.user_id);
        }


    }

    function processErrorResponse() {
        const response = JSON.parse(request.response);
            
        if (request.status == 400) {
            const p = document.createElement("p");
            p.innerText = response.message; 

            const body = document.getElementsByTagName("body")[0];
            body.appendChild(h1);
        }
    }
}