// Load your images on page-load
function preloader() {
    const imagesList = [
           "./img/light.png",
			"./img/plug.png",
			"./img/recycle.png"
        ];

    const images = [];
    for (let i = 0; i < imagesList.length; i++) {
        images[i] = new Image();
        images[i].src = imagesList[i];
    }

    console.log(`Preloaded images:\n\t${images[0].src}\n\t${images[1].src}\n\t${images[2].src}`);
};


window.addEventListener("load", preloader);


const buttons = document.querySelectorAll(".buttons button");
const article = document.querySelector("article");


let topics = {

    energy: {
        headingContent: 'Energy',
        bodyText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nec ex id libero blandit vestibulum id non elit. Phasellus imperdiet ultrices massa, id vulputate sem efficitur sed. Proin ut elementum magna. Integer vitae nulla orci. Phasellus mollis magna eget odio dignissim luctus. Ut interdum, odio in consequat suscipit, nisl augue finibus mi, ac luctus tellus ex ut massa.',
        imgUrl:'./img/light.png',
        imgAlt: 'Energy'
    },
    electricity: {
        headingContent: 'Electricity',
        bodyText: 'Maecenas ligula felis, ornare id commodo pulvinar, viverra rhoncus ligula. Nulla facilisis augue a lacus consequat, quis vulputate erat lacinia. Etiam lorem nisi, auctor faucibus libero ut, sodales ullamcorper lacus. Nullam vitae tellus tincidunt, pretium tellus eu.',
        imgUrl: 'img/plug.png',
        imgAlt: 'electricity'
    },
    recycle: {
        headingContent: 'Recycle',
        bodyText: 'Etiam ullamcorper nisi nec enim malesuada dignissim. Donec consectetur, mauris convallis lacinia sagittis, massa dui vestibulum lectus, ac cursus ante velit at felis. Curabitur velit ante, mollis quis nunc sed, luctus dictum sapien. Donec bibendum sollicitudin arcu, nec aliquam erat placerat ac. Nulla nec nunc quis enim efficitur fermentum imperdiet quis ipsum. Etiam gravida vestibulum velit. ',
        imgUrl: 'img/recycle.png',
        imgAlt: 'recycle'
    }

};

function handleSelection(ev) {


    for (let i = 0; i < buttons.length; i++) {

        if (buttons[i].hasAttribute("id")) {
            buttons[i].removeAttribute("id");
        }

        let clickedBtn = ev.target;
        clickedBtn.setAttribute("id", "active");
        let key = clickedBtn.getAttribute("data-content");

        article.innerHTML = "";

        console.log('clicked');

        article.innerHTML = `<h2>${topics[key].headingContent}</h2><img src="${topics[key].imgUrl}" alt="${topics[key].imgAlt}"><p>${topics[key].bodyText}</p>`;

    }
}

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", handleSelection);
}