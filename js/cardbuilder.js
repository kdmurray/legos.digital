function buildCardsFromFile(cardData, imgFolder) {
    var cardHtml = "";

    for (i=0; i < cardData.length; i++) {
        cardHtml += "<div class=\"card mb-3\">";

        let cardHasImage = cardData[i].imageslug;
        let cardHasBody = cardData[i].desc || (cardData[i].title && cardHasImage) || cardData[i].customBody;
        let cardHasFooter = cardData[i].builder  || cardData[i].date;

        //compose image for card
        if (cardHasImage) {
            cardHtml += "  <a href=\"imgs/" + imgFolder + "/" + cardData[i].imageslug + ".png\" title=\"click to open image\">";
            if(cardHasBody || cardHasFooter) {
              //card style to sit atop other elements
              cardHtml += "    <img class=\"card-img-top\" src=\"imgs/" + imgFolder + "/tn/" + cardData[i].imageslug + ".gif\" alt=\"" + cardData[i].desc + "\">";
            } else  {
              //card is only the image
              cardHtml += "    <img class=\"card-img\" src=\"imgs/" + imgFolder + "/tn/" + cardData[i].imageslug + ".gif\" alt=\"" + cardData[i].desc + "\">";
            }
            cardHtml += "  </a>";
        }


        if (cardHasBody && cardHasImage) {
            //card has image and text
            cardHtml += "  <div class=\"card-body\">";
            if (cardData[i].title) {
                cardHtml += "    <h5 class=\"card-title\">" + cardData[i].title + "</h5>";
            }
            if (cardData[i].desc) {
                cardHtml += "    <p class=\"card-text\">" + cardData[i].desc + "</p>";
            }
            cardHtml += "  </div>";
        } else {
            //card contains text only
            if (cardData[i].title) {
                cardHtml += "  <div class=\"card-header text-white\" style=\"background-color: #ee505e;\">";
                cardHtml += "    <h5 class=\"card-title m-2\"><b>" + cardData[i].title + "</b></h5>";
                cardHtml += "  </div>";
            }
            if (cardHasBody) {
                cardHtml += "  <div class=\"card-body\">";
                if (cardData[i].desc) {
                    cardHtml += "    <p class=\"card-text\">" + cardData[i].desc + "</p>";
                }
                if (cardData[i].customBody) {
                    cardHtml += "    " + cardData[i].customBody + "";
                }
                cardHtml += "  </div>";
            }
        }

        if (cardData[i].customCard) {
            cardHtml += "    " + cardData[i].customCard + "";
        }

        //tack on card footers if they exist
        if(cardHasFooter) {
            if (cardData[i].builder) {
                cardHtml += "  <div class=\"card-footer text-muted\">";
                cardHtml += "    <p class=\"text-muted mb-0\">&#x26cf;&#xfe0f; " + cardData[i].builder + "</p>";
                cardHtml += "  </div>";
            }
            if (cardData[i].date) {
                cardHtml += "  <div class=\"card-footer text-muted\">";
                cardHtml += "    <p class=\"text-muted mb-0\">" + cardData[i].date + "</p>";
                cardHtml += "  </div>";
            }
        }

        cardHtml += "</div>";
    }

    return cardHtml;

}
