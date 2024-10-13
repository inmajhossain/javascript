const searchMeal = document.getElementById("input");
// console.log(searchMeal.value);

function fetchMeal() {
  if (searchMeal.value) {
    console.log(searchMeal.value);
    let URL = `https://themealdb.com/api/json/v1/1/search.php?s=${searchMeal.value}`;
    fetch(URL)
      .then((res) => res.json())
      .then((meals) => showMeal(meals.meals));
    document.getElementById("noMeal").style.display = "none";
    document.querySelector(".meal-wrapper").innerHTML = "";
  } else {
    alert("Search a food first");
    document.getElementById("noMeal").style.display = "block";
  }
}

function showMeal(meals) {
  console.log("Show Meal:", meals);
  for (let meal of meals) {
    document.querySelector(
      ".meal-wrapper"
    ).innerHTML += `<div class="meal-box border border-gray-500">
          <img
            src=${meal.strMealThumb}
            alt=${meal.strMeal}
            class="rounded h-[200px] w-full object-cover"
          />
          <div class="p-3">
            <h3 class="heading">${meal.strMeal}</h3>
            <p class="text-gray-300 my-2">
            ${meal.strInstructions.slice(0, 100)}....
            </p>
            <p class="italic text-gray-500">
              <span>${meal.strArea}</span> <span>${meal.strCategory}</span>
            </p>
            <div class="mt-5 my-4">
              <a href=${meal.strYoutube} target="_blank" class="btn">Watch</a>
              <button class="px-5 text-white" onclick="lookUpDetails('${
                meal.idMeal
              }')" >View Recepie</button>
            </div>
          </div>
        </div>`;
  }
}

function lookUpDetails(id) {
  console.log("Look Up:", id);
  let URL = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
  fetch(URL)
    .then((res) => res.json())
    .then((meals) => showMealDetails(meals.meals[0]));
}

function showMealDetails(meal) {
  console.log(meal);
  const details = document.getElementById("details");
  details.classList.add("visible");
  details.classList.remove("invisible");

  details.innerHTML = `
    <div class="popup bg-white w-[70%] min-h-[500px] p-10">
            <h2 class="text-2xl font-vold mb-4">${meal.strMeal}</h2>
            <p class="mb-6">${meal.strInstructions}</p>
            <a href=${meal.strYoutube}
              class="px-4 py-2 bg-blue-500 hove:bg-blue-600 text-white rounded"
            >
              Watch
            </a>
            <button class="ml-[20px]" onclick="closeDetails()">Close</button>

          </div>
    `;
}

function closeDetails() {
  details.classList.add("invisible");
  details.classList.remove("visible");
}

const search = document.getElementById("search");
search.addEventListener("click", () => {
  fetchMeal();
});
