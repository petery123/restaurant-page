export default (function(){
    const aboutPage = document.createElement("div");

    const head = document.createElement("h1");
    head.textContent = "What is Spaurtacus Restaurant about?";

    function createParagraphElement(content){
        const paragraph = document.createElement("p");
        paragraph.textContent = content;
        return paragraph;
    }

    const aboutInfo = document.createElement("div");
    aboutInfo.appendChild(createParagraphElement("Welcome to Spartacus Restaurant, where tradition meets flavor in the heart of Nigerian cuisine! At Spartacus, we pride ourselves on serving up the finest, authentic Nigerian dishes, prepared with love and respect for the rich culinary heritage of our homeland."));
    aboutInfo.appendChild(createParagraphElement("Our menu is crafted to bring the bold, vibrant tastes of Nigeria straight to your plate. From the beloved Jollof Rice to the hearty Pounded Yam with Egusi Soup, and the sizzling Suya, each dish is a tribute to our roots, prepared with the freshest local ingredients and authentic spices."))
    aboutInfo.appendChild(createParagraphElement("Whether you're enjoying a casual meal with friends, or a festive gathering with family, we aim to create an atmosphere that's warm, welcoming, and full of joy—just like home. At Spartacus, every meal is a celebration, and we’re committed to making sure you savor every moment."));
    aboutInfo.appendChild(createParagraphElement("Join us for an unforgettable dining experience that combines great food, warm hospitality, and the true spirit of Nigeria!"));

    aboutPage.append(head, aboutInfo);
    
    return aboutPage;
})();