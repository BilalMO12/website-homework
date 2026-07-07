console.log("University Events Guide Loaded");




window.addEventListener("load",()=>{


    const loader = document.getElementById("loader");


    if(loader){

        loader.classList.add("hide-loader");

    }


});



// Dark Mode

const themeToggle =
document.getElementById("themeToggle");


if(localStorage.getItem("theme") === "dark"){

    document.body.classList.add("dark-mode");

}



if(themeToggle){


    themeToggle.addEventListener("click",()=>{


        document.body.classList.toggle("dark-mode");


        if(document.body.classList.contains("dark-mode")){

            localStorage.setItem("theme","dark");

        }else{

            localStorage.setItem("theme","light");

        }


    });


}