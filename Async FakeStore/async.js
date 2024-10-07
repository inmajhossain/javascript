
const allProducts = document.getElementById("product-section");
const loader = document.getElementById("loader")
const errorDiv = document.getElementById("error")


const API = "https://fakestoreapi.com/products?limit=50";

const fetchAllProducts = async (url) => {
    
    // const data = await res.json();
    // console.log(data);
    // displayProducts(data);

  try {
    showLoader();
    const res = await fetch(url);
   

  if(!res.ok){
    throw new Error("Somthing Went Wrong")
  }

    const data = await res.json();
    hideLoader();
    displayProducts(data);

  } catch(error) {
  console.log(error);
  hideLoader();
   errorDiv.innerHTML =  `<h1>Something Went Wrong, Please Try Again Later</h1>`;
  }

  };


  const showLoader = () => {
    loader.style.display = "block";
  };


  const hideLoader = () => {
    loader.style.display = "none";
  };


  const displayProducts = (products) => {
   products.forEach((product) => {
    allProducts.innerHTML += 
    `<div>
                    <a href="#" class="group block">
                        <img
                          src="${product.image}"
                          alt=""
                          class="h-[350px] w-full object-contain sm:h-[450px]"
                        />
                      
                        <div class="mt-3 flex justify-between text-sm">
                          <div>
                            <h3 class="text-gray-900 group-hover:underline group-hover:underline-offset-4">
                            ${product.title.slice(0, 30)}...
                            </p>
                            </h3>
                      
                            <p class="mt-1.5 text-pretty text-xs text-gray-500">
                            ${product.description.slice(0, 100)}.......
                            </p>
                          </div>
                      
                          <p class="text-gray-900">${product.price}</p>
                        </div>
                      </a>
                </div>`
   }) ;
  };

  

  hideLoader();
  fetchAllProducts(API);