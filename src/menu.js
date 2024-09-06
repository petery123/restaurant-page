export default (function(){
    const menu = document.createElement("div");

    const head = document.createElement("h1");
    head.textContent = "SPAURTACULAR MENU"

    function createMenuItem(name, description, price){
        const item = document.createElement("li");
        item.className = "menuItem";
        
        const constMealInfo = document.createElement("div");
        
        const nameDetail = document.createElement("h2");
        nameDetail.textContent = name;
        
        const descriptionDetail = document.createElement("p");
        descriptionDetail.textContent = description;
        
        constMealInfo.append(nameDetail, descriptionDetail);

        const priceDetail = document.createElement("p");
        priceDetail.textContent = `$${parseFloat(price).toFixed(2)}`

        item.append(constMealInfo, priceDetail);
        return item;
    }

    const catalogue = document.createElement("div");
    catalogue.className = "catalogue";

    catalogue.appendChild(createMenuItem('Jollof Rice', 'Spicy rice cooked with tomatoes and peppers', 1500));
    catalogue.appendChild(createMenuItem('Pounded Yam with Egusi Soup', 'Smooth yam paired with rich melon seed soup', 2000));
    catalogue.appendChild(createMenuItem('Suya', 'Grilled spicy beef skewers', 1200));
    catalogue.appendChild(createMenuItem('Akara', 'Fried bean cakes, crispy on the outside', 500));
    catalogue.appendChild(createMenuItem('Moi Moi', 'Steamed bean pudding with pepper and spices', 800));

    menu.append(head, catalogue);
    return menu;
})();