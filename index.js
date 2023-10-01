/*const container=document.querySelector("tbody");*/
const card=document.querySelectorAll("#card-col");
const mediaQuery = window.matchMedia('(max-width: 1279px)');
const mediaQuery_1 = window.matchMedia('(max-width: 673px)');
const mediaQuery_2 = window.matchMedia('(min-width: 1280px)');
/*const mediaQuery_3 = window.matchMedia('(max-width: 959px)');
const mediaQuery_4 = window.matchMedia('(max-width: 600px)');*/

function handleMediaQuery(event) {
    for (var i=0;i<card.length;i++){
        if (event.matches){
            card[i].classList.add("col-6");
        }
        else{
            card[i].classList.remove("col-6");
        }

    }
}
mediaQuery.addListener(handleMediaQuery);

handleMediaQuery(mediaQuery);



function handleMediaQuery_1(event) {
    for (var i=0;i<card.length;i++){
        if (event.matches){
            card[i].classList.add("col-12");
        }
        else{
            card[i].classList.remove("col-12");
        }

    }
}
mediaQuery_1.addListener(handleMediaQuery_1);

handleMediaQuery_1(mediaQuery_1);


function handleMediaQuery_2(event) {
    for (var i=0;i<card.length;i++){
        if (event.matches){
            card[i].classList.add("col-3");
        }
        else{
            card[i].classList.remove("col-3");
        }

    }
}
mediaQuery_2.addListener(handleMediaQuery_2);

handleMediaQuery_2(mediaQuery_2);

document.querySelector("#floatingInput").addEventListener("click",function(){
    document.querySelector("#floatingInput").setAttribute("style","background:transparent");
})

/*function handleMediaQuery_3(event) {
    if(event.matches){
        for(var i=0;i<document.querySelectorAll("tr").length-1;i++){
            document.querySelectorAll("tr")[i].lastElementChild.classList.add("querydel");
        }
        const row_1=document.createElement("tr");
        row_1.classList.add("tableElement");
        const cell_1=document.createElement("td");
        cell_1.textContent="Media Centre";
        const cell_2=document.createElement("td");
        cell_2.textContent="Terms of Use";
        const cell_3=document.createElement("td");
        cell_3.textContent="Contact Us";
        row_1.appendChild(cell_1);
        row_1.appendChild(cell_2);
        row_1.appendChild(cell_3);
        container.appendChild(row_1);
    }
    else{
        for(var i=0;i<document.querySelectorAll("tr").length-1;i++){
            document.querySelectorAll("tr")[i].lastElementChild.classList.remove("querydel");
        }
        const tableElement=document.querySelector(".tableElement");
        if(tableElement){
            container.removeChild(tableElement);
        }
    }
}
mediaQuery.addListener(handleMediaQuery_3);

handleMediaQuery_3(mediaQuery);

function handleMediaQuery_4(event) {
    if(event.matches){
        for(var i=0;i<document.querySelectorAll("tr").length;i++){
            document.querySelectorAll("tr")[i].querySelectorAll("td")[2].classList.add("querydel");
        }
        const row_1=document.createElement("tr");
        row_1.classList.add("tableElement");
        const cell_1=document.createElement("td");
        cell_1.textContent="Account";
        const cell_2=document.createElement("td");
        cell_2.textContent="Ways to Watch";
        row_1.appendChild(cell_1);
        row_1.appendChild(cell_2);
        container.appendChild(row_1);
        const row_2=document.createElement("tr");
        row_2.classList.add("tableElement_1");
        const cell_3=document.createElement("td");
        cell_3.textContent="Corporate Information";
        const cell_4=document.createElement("td");
        cell_4.textContent="Only on Netflix";
        row_2.appendChild(cell_3);
        row_2.appendChild(cell_4);
        container.appendChild(row_2);
        const row_3=document.createElement("tr");
        row_3.classList.add("tableElement_2");
        const cell_5=document.createElement("td");
        cell_5.textContent="Contact Us";
        row_3.appendChild(cell_5);
        container.appendChild(row_3);
    }
    else{
        for(var i=0;i<document.querySelectorAll("tr").length;i++){
            const queryElement=document.querySelectorAll("tr")[i].querySelectorAll("td")[2];
            if(queryElement){
                queryElement.classList.remove("querydel");
            }
        }
        const tableElement=document.querySelector(".tableElement");
        if(tableElement){
            container.removeChild(tableElement);
        }
        const tableElement_1=document.querySelector(".tableElement_1");
        if(tableElement_1){
            container.removeChild(tableElement_1);
        }
        const tableElement_2=document.querySelector(".tableElement_2");
        if(tableElement_2){
            container.removeChild(tableElement_2);
        }
    }
}
mediaQuery_3.addListener(handleMediaQuery_4);

handleMediaQuery_4(mediaQuery_3);

function handleMediaQuery_5(event) {
    if(event.matches){
        const row_1=document.createElement("tr");
        row_1.classList.add("tableElement");
        const cell_1=document.createElement("td");
        cell_1.textContent="Help Centre";
        row_1.appendChild(cell_1);
        container.appendChild(row_1);
        const row_2=document.createElement("tr");
        row_2.classList.add("tableElement_1");
        const cell_2=document.createElement("td");
        cell_2.textContent="Jobs";
        row_2.appendChild(cell_2);
        container.appendChild(row_2);
        const row_3=document.createElement("tr");
        row_3.classList.add("tableElement_2");
        const cell_3=document.createElement("td");
        cell_3.textContent="Cookie Preferances";
        row_3.appendChild(cell_3);
        container.appendChild(row_3);
        const row_4=document.createElement("tr");
        row_4.classList.add("tableElement_3");
        const cell_4=document.createElement("td");
        cell_4.textContent="Legal Notices";
        row_4.appendChild(cell_4);
        container.appendChild(row_4);
        const row_5=document.createElement("tr");
        row_5.classList.add("tableElement_4");
        const cell_5=document.createElement("td");
        cell_5.textContent="Terms of Use";
        row_5.appendChild(cell_5);
        container.appendChild(row_5);
        const row_6=document.createElement("tr");
        row_6.classList.add("tableElement_5");
        const cell_6=document.createElement("td");
        cell_6.textContent="Ways to Watch";
        row_6.appendChild(cell_6);
        container.appendChild(row_6);
        const row_7=document.createElement("tr");
        row_7.classList.add("tableElement_6");
        const cell_7=document.createElement("td");
        cell_7.textContent="Only on Netflix";
        row_7.appendChild(cell_7);
        container.appendChild(row_7);
    }
    else{
        const tableElement_1=document.querySelector(".tableElement_1");
        if(tableElement_1){
            container.removeChild(tableElement_1);
        }
        const tableElement_2=document.querySelector(".tableElement_2");
        if(tableElement_2){
            container.removeChild(tableElement_2);
        }
        const tableElement_3=document.querySelector(".tableElement_3");
        if(tableElement_3){
            container.removeChild(tableElement_3);
        }
        const tableElement_4=document.querySelector(".tableElement_4");
        if(tableElement_4){
            container.removeChild(tableElement_4);
        }
        const tableElement_5=document.querySelector(".tableElement_5");
        if(tableElement_5){
            container.removeChild(tableElement_5);
        }
        const tableElement_6=document.querySelector(".tableElement_6");
        if(tableElement_6){
            container.removeChild(tableElement_6);
        }
    }
}
mediaQuery_4.addListener(handleMediaQuery_5);

handleMediaQuery_5(mediaQuery_4);*/