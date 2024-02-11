const card=document.querySelectorAll("#card-col");
const mediaQuery = window.matchMedia('(max-width: 1279px)');
const mediaQuery_1 = window.matchMedia('(max-width: 673px)');
const mediaQuery_2 = window.matchMedia('(min-width: 1280px)');

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
