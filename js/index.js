const handleCategory = async () => {
    const response = await fetch(
      "https://openapi.programming-hero.com/api/videos/categories"
    );
    const data = await response.json();
     console.log(data.data);
  
    const tabContainer = document.getElementById("tab-container");
    // tabContainer.textContent = '';
  
    data.data.forEach((category) => {
      console.log(category);
      const div = document.createElement("div");
      div.innerHTML = `
          <a onclick = "handleLoad('${category.category_id}')"
           class="tab border">${category.category}</a> 
         `;
  
      tabContainer.appendChild(div);
    });
  };
  
  
  
  const handleLoad = async (id) => {
    // console.log(id);
    const response = await fetch(
      `https://openapi.programming-hero.com/api/videos/category/${id}`
    );
    const data = await response.json();
     console.log(data.data);
    const cardContainer = document.getElementById("card-container");
    const cardContainer1 = document.getElementById("card-container1");
    cardContainer.textContent = "";
    cardContainer1.textContent="";
    if (data.data.length === 0) {
      const div = document.createElement("div");
      div.innerHTML = `
          <div class="card w-96 bg-base-100 ">
          <figure class="px-10 pt-10">
          <img src="./image/icon.png" alt="" class="rounded-xl" />
          </figure>
          <div class="card-body items-center text-center font-semibold">
          <h2 class="card-title">Oops!! Sorry, There is no<br>content here</h2>
          
    </div>
  </div>
          `;
      cardContainer1.appendChild(div);
    }
    
    else {
      data.data.forEach((n) => {
  
          
        const div = document.createElement("div");
  
        div.innerHTML = `
              <div class="card w-96 md:w-72 lg:w-72 h-[380px] bg-base-100 shadow-xl mt-3 ml-3 md:ml-10 lg:ml-0">
              <figure class="relative"><img src="${n?.thumbnail}" alt="" /></figure>
              <p class="absolute mt-[130px] ml-28 lg:mt-[120px] w-[160px] lg:ml-32 border-none text-white bg-black text-sm"> 
              <span> ${Math.floor(n?.others?.posted_date / 3600 ) } hrs </span> <span> ${Math.floor(n?.others?.posted_date % 60)} mins <span>ago </span>
             </p>
              
              <div class="card-body mt-8">
                <div class="flex gap-4">
                 
                 <div>
                 <div class="avatar"> 
                 <div class=" w-14 rounded-full">
                 <img src="${n?.authors[0]?.profile_picture}" alt=""> 
                 </div> 
                 </div>
                 </div>
                 
                 <div>
                 <h2 class="card-title items-center text-lg">${n?.title}</h2>
                 
                 </div>
                </div>
      
                <p>${n?.authors[0]?.profile_name}</p>
                 <p>${n?.others.views} views</p>
                
               
                <!-- <div class="card-actions justify-end">
                  <button class="btn btn-primary">Buy Now</button>
                </div> -->
              </div>
              
              `;
  
        cardContainer.appendChild(div);
  
      
      });
    }
  };
  
  
  
  
  handleCategory();
  handleLoad("1000");
  