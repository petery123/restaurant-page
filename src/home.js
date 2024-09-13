import jImg from "./hq720.jpg";

export default (function(){
    const welcomeContent = document.createElement("div");
    welcomeContent.className = "welcome";

    const jollofImg = document.createElement("img");
    jollofImg.src = jImg;

    const rightSide = (function(){
        const welcomeHead = document.createElement("h2");
        welcomeHead.textContent = "IF IT IS NOT SPECTACULAR IT IS NOT SPAURTACUS";

        const moreInfo = document.createElement("p");
        moreInfo.textContent = "Get some mouth watering fast food at Spaurtacus Restaurant. For those who love the taste of Nigerian Culture!"
        
        const right = document.createElement("div");
        right.className = "rightSide";

        right.append(welcomeHead, moreInfo);
        return right;
    })();

    welcomeContent.append(rightSide, jollofImg);

    return welcomeContent;
})();