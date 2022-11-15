const member1El = document.querySelector(".member1")
const member2El = document.querySelector(".member2")
const member3El = document.querySelector(".member3")
const member4El = document.querySelector(".member4")
const member5El = document.querySelector(".member5")

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

member1El.innerHTML = peopleAndInfos[0].name + " - " + peopleAndInfos[0].role + " - " + peopleAndInfos[0].img
member2El.innerHTML = peopleAndInfos[1].name + " - " + peopleAndInfos[1].role + " - " + peopleAndInfos[1].img
member3El.innerHTML = peopleAndInfos[2].name + " - " + peopleAndInfos[2].role + " - " + peopleAndInfos[2].img
member4El.innerHTML = peopleAndInfos[3].name + " - " + peopleAndInfos[3].role + " - " + peopleAndInfos[3].img
member5El.innerHTML = peopleAndInfos[4].name + " - " + peopleAndInfos[4].role + " - " + peopleAndInfos[4].img
