const games = [
    {
        img:"https://i5.walmartimages.com/asr/afd341a0-735f-43b0-b917-07f3bd14622a_2.46f3410af681994543dddb67ec00ad4b.jpeg",
        price:"$19.99",
        name:"God of War",
        description:"Dad of war discovers how to be a father by chucking his axe at giant nordic creatures and yell BOY many many times.",
        platform:"playstation"
    },
    {
        img:"https://www.gamerevolution.com/assets/uploads/2014/07/file_8759_killer-instinct-box.jpg",
        price:"$14.99",
        name:"Killer Instinct",
        description:"Bunch of crazy 80s and 90s knock offs fighting using breakers and instinct senses.",
        platform:"xbox"
    },
    {
        img:"https://upload.wikimedia.org/wikipedia/en/thumb/f/fb/DKC5_box_art.jpg/220px-DKC5_box_art.jpg",
        price:"$49.99",
        name:"Donkey Kong Country: Tropical Freeze",
        description:"A giant gorilla and possibly apes quest to unfreeze their island form a bunch of icey animals and collect lots of bananas.",
        platform:"switch"
    }
];



function productDisplay(i) {
    let that = this;
    this.ele = document.createElement("div");
    this.ele.classList.add("product");

    this.productImage = document.createElement("img");
    this.productImage.classList.add("prdImg");

    this.priceEle = document.createElement("h1");

    this.productImage.setAttribute("src", games[i].img);
    this.ele.append(this.productImage);

    this.priceEle.innerHTML = games[i].price;
    this.ele.append(this.priceEle);

    this.platformImage = document.createElement("img");
    this.platformImage.classList.add("plat");

        if (games[i].platform === "playstation") {
            this.platformImage.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/PlayStation_logo.svg/2560px-PlayStation_logo.svg.png";
            this.ele.classList.add("playstation");
        } else if (games[i].platform === "xbox") {
            this.platformImage.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Xbox_logo_%282019%29.svg/1200px-Xbox_logo_%282019%29.svg.png";
            this.ele.classList.add("xbox");
        } else if (games[i].platform === "switch") {
            this.platformImage.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Nintendo_Switch_Logo.svg/1024px-Nintendo_Switch_Logo.svg.png";
            this.ele.classList.add("switch");
        }

    this.ele.append(this.platformImage);

}


function popUpMenu(i) {
    let that = this;
    this.ele = document.createElement("div");
    this.productImage = document.createElement("img");
    this.gameTitle = document.createElement("h3");
    this.priceEle = document.createElement("p");
    this.descriptionEle = document.createElement("p");
    this.platformType = document.createElement("p");

    //this.ele.classList.add("popUp");

    this.productImage.setAttribute("src", games[i].img);
    this.gameTitle.innerHTML = games[i].name;
    this.priceEle.innerHTML = games[i].price;
    this.descriptionEle.innerHTML = games[i].description;
    if (games[i].platform === "playstation") {
        this.platformType.innerHTML = games[i].platform;
        this.platformType.style.color = "blue";
    } else if (games[i].platform === "xbox") {
        this.platformType.innerHTML = games[i].platform;
        this.platformType.style.color = "green";
    } else if (games[id].platform === "switch") {
        this.platformType.innerHTML = games[i].platform;
        this.platformType.style.color = "red";
    }



    this.ele.append(this.productImage);
    this.ele.append(this.gameTitle);
    this.ele.append(this.priceEle);
    this.ele.append(this.descriptionEle);
    this.ele.append(this.platformType);

    this.ele.addEventListener("click", function() {
        that.ele.classList.add("img");
        that.ele.classList.add("popUp");
    })

    document.body.appendChild(this.ele);

}


function mainDisplay() {
    let that = this;
    this.gameArray = [];
    this.ele = document.createElement("div");

    for (let i = 0; i < games.length; i++) {
        this.gameArray.push(new productDisplay(i));

        this.gameArray[i].ele.addEventListener("click", function () {
            let display = new popUpMenu(i);
        })
        this.ele.appendChild(this.gameArray[i].ele);

    }
    document.body.appendChild(this.ele);
}


let newGame = new mainDisplay();