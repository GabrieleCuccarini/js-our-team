const peopleAndInfos = [
    {
        name: "Wayne Barnett",
        role: "Founder & CEO",	        
        img: "wayne-barnett-founder-ceo.jpg"
    },
    {
        name: "Angela Caroll",
        role: "Chief Editor",	        
        img: "angela-caroll-chief-editor.jpg"
    },
    {
        name: "Walter Gordon",
        role: "Office Manager",	        
        img: "walter-gordon-office-manager.jpg"
    },
    {
        name: "Angela Lopez",
        role: "Social Media Manager",	        
        img: "angela-lopez-social-media-manager.jpg"
    },
    {
        name: "Barbara Ramos",
        role: "Graphic Designer",	        
        img: "barbara-ramos-graphic-designer.jpg"
    }
]
const container = document.querySelector(".container");

// MILESTONE 1
for (let i = 0; i < peopleAndInfos.length; i++) {
    console.log(peopleAndInfos[i].name, peopleAndInfos[i].role, peopleAndInfos[i].img);
}

// MILESTONE 2
for (let i = 0; i < peopleAndInfos.length; i++) {
    const cardContainer = document.createElement("div")
    cardContainer.classList.add("basis")
    const nameEl = document.createElement("h2");
    const roleEl = document.createElement("h4");
    const imgEl = document.createElement("img");
    nameEl.innerHTML = peopleAndInfos[i].name;
    roleEl.innerHTML = peopleAndInfos[i].role;
    imgEl.src = "./img/" + peopleAndInfos[i].img;
    imgEl.classList.add("mb-5");
    imgEl.classList.add("width");
    container.append( cardContainer );
    cardContainer.append( nameEl, roleEl, imgEl );
}

