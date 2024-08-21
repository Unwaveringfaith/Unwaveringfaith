'use strict';
const modal = document.querySelector(".modal");
const overplay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnOpenModal = document.querySelectorAll(".show-modal");
const escCloseMdal = function(e)
{
    if(e.key==="Escape" && !modal.classList.contains("hidden"))
   {
    closemodal();
   }
}
//close
const closemodal = function()

    {
        modal.classList.add("hidden");
        overplay.classList.add("hidden");
    }

//open
 const openmodal = function()
    {
        console.log("Button clicked");
        modal.classList.remove("hidden");
        overplay.classList.remove("hidden");
    }


for(let i =0 ; i < btnOpenModal.length; i++)
    {
       btnOpenModal[i].addEventListener  ("click", openmodal  );
        btnCloseModal.addEventListener  ("click",closemodal);
        overplay.addEventListener ("click",closemodal);
        document.addEventListener("keydown",escCloseMdal);
        

    }



