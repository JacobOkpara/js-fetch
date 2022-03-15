fetch("http://localhost:3000/users")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

const url = "http://localhost:3000/users";
async function getAllUser() {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
}
getAllUser();

async function getUser(userId) {
  const response = await fetch(` ${url}/${userId}`);
  const data = await response.json();
  console.log(data);
}
getUser(2);

let User = {
  firstName: "Jake",
  lastName: "Jacobs",
  userName: "JakeMark",
  email: "jakemark@gmail.com",
  gender: "Male",
};

async function createUser(userInfo) {
  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(userInfo),
    headers: {
      "content-Type": "application/json",
    },
  });
  const data = await response.json();
  console.log(data);
}
createUser(User);

const data = {
  email: "sample@email.com",
};
async function updateUser(userId, userData) {
  const response = await fetch(`${url}/${userId}`, {
    method: "PATCH",
    body: JSON.stringify(userData),
    headers: {
      "content-Type": "application/json",
    },
  });
  const data = await response.json();
  console.log(data);
}
updateUser(51, data);

async function delateUser(userId) {
  const response = await fetch(`${url}/${userId}`, {
    method: "DELETE",
  });
  const data = await response.json();
  console.log(data);
}
delateUser(55);
