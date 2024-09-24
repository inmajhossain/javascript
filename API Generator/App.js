

// Users API


function fetchApi() {
  fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((users) => {
    displayUsers(users);
    console.log(users);
  });
}

// let users = [
//   {nmae: "Shahin", id: 2},
//   {nmae: "Safran", id: 3},
//   {nmae: "Sanan", id: 4},
// ];

function displayUsers(users = []) {
  if (users.length > 0) {
    users.slice(0, 6).forEach((user) => {
      console.log(user.name);
      document.querySelector(".user-box").innerHTML += `
      <div class="box border-2 max-w-[300px] p-2">
      <h3 class="mt-1 text-lg font-bold text-gray-900 sm:text-xl">
      ${user.name}
      </h3>
      <p class="mt-2, max-w-sm text-gray-700">
      ${user.email}
      </p>
      <p class="mt-2, max-w-sm text-gray-700">
      ${user.phone}
      </p>
      <p class="mt-2, max-w-sm text-green-600 font-bold">
      ${user.company.name}
      </p>
      <a class="mt-2, max-w-sm text-gray-700 hover:text-blue-700" href='https://${user.website}' target="blank">
      ${user.website}
      </a>
      </div>`;
    });
  } else {
    document.querySelector(".user-box").innerHTML = 
    `<div class="text-center">No Data Found</div>`;
  }
}


// displayUsers(users);

fetchApi(); 



// Post API


function fetchPosts() {
  fetch("https://jsonplaceholder.typicode.com/posts")
  .then((res) => res.json())
  .then((posts) => {
    displayPosts(posts);
  });
}


function displayPosts(posts = []) {
  if (posts.length > 0) {
    posts.slice(0, 9).forEach((post) => {
      // console.log(post.name);
      document.querySelector(".user-box").innerHTML += `
      <div class="box border-2 max-w-[300px] p-2">
      <h3 class="mt-1 text-lg font-bold text-gray-900 sm:text-xl">
      ${post.title}
      </h3>
      <p class="mt-2, max-w-sm text-gray-700">
      ${post.body}
      </p>
      
      </div>`;
    });
  } else {
    document.querySelector(".user-box").innerHTML = 
    `<div class="text-center">No Data Found</div>`;
  }
}


fetchPosts();


// Advice API


function fetchAdvice() {
  fetch("https://api.adviceslip.com/advice")
  .then((res) => res.json())
  .then((advice) => {
   const showAdvice = document.getElementById("advice");
   showAdvice.innerHTML = advice.slip.advice;
  });
}


fetchAdvice();


const generateAdvice = document.getElementById("generateBtn");
generateAdvice.addEventListener("click", fetchAdvice)



