import {Channel, Development, Tools, Typography, Inspration, Technologies, Categories} from "./data.js";

let categories = "";
Categories.forEach((category, index) => {
    categories+=`<button class="btn ${index === 0 ? "selected" : ""}">${category.categoryname}</button>`
    DisplayCard(Tools)
});

document.querySelector(`.js-categorys`).innerHTML = categories;

const buttons = document.querySelectorAll('.btn');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        buttons.forEach((btn)=>btn.classList.remove("selected"));

        button.classList.add("selected");
        
        if(button.innerHTML === "YT Channels"){
            DisplayCard(Channel);
        }else if(button.innerHTML === "Tools"){
            DisplayCard(Tools);
        }else if(button.innerHTML === "Development"){
            DisplayCard(Development);
        }else if(button.innerHTML === "Typography"){
            DisplayCard(Typography);
        }else if(button.innerHTML === "Inspration"){
            DisplayCard(Inspration);
        }else if(button.innerHTML === "Technologies"){
            DisplayCard(Technologies);
        }

    })
})

function DisplayCard(category){
    let resourceCard = '';
    category.forEach((resource) => {
        resourceCard += `
            <a class="links" target="_blank" href="${resource.link}"><div class="card">
                <div class="card-img">
                    <img src="${resource.channelimg}" alt="">
                </div>
                <div class="info">
                    <p>${resource.channelname}</p>
                    <button>${resource.tag}</button>
                </div>
            </div></a>
        `
    });
    document.querySelector(`.js-resource-card`).innerHTML = resourceCard;
}
