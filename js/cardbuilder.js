function buildCardsFromFile(cardData) {
    var myCardsHtml = "";

    for (i=0; i < cardData.length; i++) {
        myCardsHtml += "<div class=\"card mb-3\">";
        myCardsHtml += "  <a href=\"imgs/rev1/" + cardData[i].imageslug + ".png\" title=\"click to open image\">";
        myCardsHtml += "    <img class=\"card-img-top\" src=\"imgs/rev1/tn/" + cardData[i].imageslug + ".gif\" alt=\"" + cardData[i].desc + "\">";
        myCardsHtml += "  </a>";
        myCardsHtml += "  <div class=\"card-body\">";

        if (cardData[i].title) {
            myCardsHtml += "    <h5 class=\"card-title\">" + cardData[i].title + "</h5>";
        }

        if (cardData[i].desc) {
            myCardsHtml += "    <p class=\"card-text\">" + cardData[i].desc + "</p>";
        }

        if (cardData[i].builder) {
            myCardsHtml += "    <h6 class=\"card-subtitle mb-2 text-muted\">" + cardData[i].desc + "</h6>";
        }

        if (cardData[i].date) {
            myCardsHtml += "    <h6 class=\"card-subtitle mb-2 text-muted\">&#x1F4C5 " + cardData[i].date + "</h6>";
        }

        myCardsHtml += "  </div>";
        myCardsHtml += "</div>";
    }

    return myCardsHtml;
    
}