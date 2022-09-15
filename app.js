const navslide = ()=>{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');

    burger.addEventListener('click', ()=>{
        nav.classList.toggle('open');
        burger.classList.toggle('toggle')
    });
}

navslide();

//parallelax

const lowerPart1 = document.querySelector('.lower-part1');
const lowerPart2 = document.querySelector('.lower-part2');

window.addEventListener('scroll',function(){
    let value = window.scrollY;

   lowerPart1.style.left=value*0.25 + 'px';
   lowerPart2.style.right=value*0.25 + 'px';
    
}); 

const panels = document.querySelectorAll(".panel");
panels.forEach(panel=> {
    panel.addEventListener("mouseenter",()=>{
        removeActiveClass();
        panel.classList.add("active");
    })
    
});
function removeActiveClass(){
    panels.forEach(panel => {
        panel.classList.remove("active")
    });
    
}


window.addEventListener('scroll',reveal);

function reveal(){
    var revealsOne = document.querySelectorAll('.section11');
    var revealsTwo = document.querySelectorAll('.section22');
    var revealsThree = document.querySelectorAll('.section33');
    
    for(var i=0; i<revealsOne.length; i++){
        var windowheight= window.innerHeight;
        var revealtop = revealsOne[i].getBoundingClientRect().top;
        var revealTwo = revealsTwo[i].getBoundingClientRect().top;
        var revealpoint = 130;

        if(revealtop < windowheight - revealpoint){
            revealsOne[i].classList.add('appear');
        }
        // else{
        //     revealsOne[i].classList.remove('appear');
        // } 
        
        
        if(revealTwo < windowheight - revealpoint){
            revealsTwo[i].classList.add('appear');
        }
        // else{
        //     revealsTwo[i].classList.remove('appear');
        // } 
    }
    for(var i=0; i<revealsThree.length; i++){
        var windowheight= window.innerHeight;
        var revealThree = revealsThree[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if(revealThree < windowheight - revealpoint){
            revealsThree[i].classList.add('appear33');
        }    
    }

}
