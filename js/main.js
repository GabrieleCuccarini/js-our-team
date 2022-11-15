const nameEl = document.querySelector(".name")
const roleEl = document.querySelector(".role")
const imgEl = document.querySelector(".img")

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
        img: " barbara-ramos-graphic-designer.jpg"
    }
]

console.log(peopleAndInfos)
for (let i = 0; i < peopleAndInfos.length; i++) {
    console.log(peopleAndInfos[i].name, peopleAndInfos[i].role, peopleAndInfos[i].img)
}

nameEl.innerHTML = peopleAndInfos[0].name
roleEl.innerHTML = peopleAndInfos[0].role
imgEl.innerHTML = peopleAndInfos[0].img