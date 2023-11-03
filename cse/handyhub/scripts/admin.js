// TODO: Check that current user is an admin 

const URL = "https://reqres.in/api/users"

const request = new XMLHttpRequest();
request.open("GET", URL);
request.onload = displayAllUsers;
request.send();

function displayAllUsers() {
    if (request.status === 200) {
        const response = JSON.parse(request.response);
        const list = document.createElement("ol");

        for (const user of response.data) {
            const div = document.createElement("div");
            
            const li = document.createElement("li");
            li.appendChild(div);
            
            const span = document.createElement("span");
            span.innerText = `${user.first_name} ${user.last_name} ${user.email}`;
            
            div.appendChild(span);

            const button = document.createElement("button");
            button.innerText = "Delete";
            button.onclick = deleteUser;

            div.appendChild(button);

            list.appendChild(li);
        }

        const body = document.getElementsByTagName("body")[0];
        body.appendChild(list);

        function deleteUser() {
            console.log("User deleted.");
        }
    }
}