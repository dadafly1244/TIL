// LOAD ALL USERS

const btn = document.getElementById("btn");
btn.addEventListener("click", getUsers);

function getUsers(e) {
    e.preventDefault();

    axios.get("users.json")
      .then(function(response) {
          console.log(response)
          console.log(response.data)
          return response.data;
      })
      .then(function(data) {
        let output = "";
            data.forEach(function(user) {
                output += `
                    <hr>
                    <ul>
                        <li>ID: ${user.id}</li>
                        <li>Name: ${user.name}</li>
                        <li>Age: ${user.age}</li>
                        <li>Email: ${user.email}</li>
                    </ul>
                `;

            })
            document.getElementById("users").innerHTML = output;
      })
}