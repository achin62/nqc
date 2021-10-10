/* about section tabs */
(() =>{
    const aboutSection= document.querySelector(".about-section"),
    tabsContainer = document.querySelector(".about-tabs");

    tabsContainer.addEventListener("click", (event) =>{
         /* console.log(event.target) */
        /* if event.target contains 'tab-item' class and not contain 'active'a */
        if(event.target.classList.contains("tab-item") &
          !event.target.classList.contains("active")){
            /* console.log("event.target contains 'tab-item' class and not contain ''acvtive");
            console.log(event.target) */
            const target = event.target.getAttribute("data-target");
            /* console.log(target)  */

            tabsContainer.querySelector(".active").classList.remove("outer-shadow"
            ,"active");

            event.target.classList.add("active","outer-shadow");

            aboutSection.querySelector(".tab-content.active").classList.remove("active");

            aboutSection.querySelector(target).classList.add("active");
        }
    })
})();           