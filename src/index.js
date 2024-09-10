import home from "./home.js"
import menu from "./menu.js"
import about from "./about.js"

(function(){
    const pageContent = document.querySelector("#content");
    pageContent.appendChild(home);

    const navBar = document.querySelector("nav");
    navBar.addEventListener("click", handleClick);

    function handleClick(event){
        pageContent.removeChild(pageContent.firstElementChild);
        const newContent = event.target.id;
        switch (newContent) {
            case "home":
                pageContent.appendChild(home);
                break;
            case "menu":
                pageContent.appendChild(menu);
                break;
            case "about":
                pageContent.appendChild(about);
                break;
        }
    }
    
    

    
})();
