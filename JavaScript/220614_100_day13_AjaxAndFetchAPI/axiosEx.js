// LOAD ALL USERS

const btn = document.getElementById("btn");
btn.addEventListener("click", getUsers);

async function getUsers(e) {
    e.preventDefault();
    
    //구조분해할당
    const {data} = await axios.get("users.json")
    console.log(data)

    rendering(data)
}

function rendering(data) {
    let output = "";
    data.forEach(function(user) {
      //문자열끼리 계속 더한 것을 innerHTML로 밀어넣음!
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
}


// function getUsers(e) {
//     e.preventDefault();

//     axios.get("users.json")
//       .then(function(response) {
//           console.log(response)
//           console.log(response.data)
//           return response.data;
//       })
//       .then(function(data) {
//         let output = "";
//             data.forEach(function(user) {
//                 output += `
//                     <hr>
//                     <ul>
//                         <li>ID: ${user.id}</li>
//                         <li>Name: ${user.name}</li>
//                         <li>Age: ${user.age}</li>
//                         <li>Email: ${user.email}</li>
//                     </ul>
//                 `;

//             })
//             document.getElementById("users").innerHTML = output;
//       })
// }