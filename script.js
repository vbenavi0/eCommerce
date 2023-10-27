let index = 1;
let heroId;
let prevHero;

function changeHero(){
    document.getElementById('hiddenImg').style.opacity = 0;
    heroId = 'hero' + index;
    document.getElementById(heroId).style.opacity = 0;
    if (index === 4){
        index = 1;
    }
    else {
        index++;
    }
    // if(index!=1){
    //     prevHero = 'hero' + (index-1);
    //     document.getElementById(prevHero).style.opacity = 0;
    // }
    heroId = 'hero' + index;
    // document.getElementById('heroImg').src = 'images/hero'+index+'.png';
    document.getElementById(heroId).style.opacity = 1;

}
setInterval(changeHero, 3000);