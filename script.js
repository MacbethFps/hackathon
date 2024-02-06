function UpdateTime() {
    let currentTime = new Date();
    let hours = currentTime.getHours() < 10 ? `0${currentTime.getHours()}`: currentTime.getHours();
    let minutes = currentTime.getMinutes() < 10 ? `0${currentTime.getMinutes()}`: currentTime.getMinutes();
    let seconds = currentTime.getSeconds() < 10 ? `0${currentTime.getSeconds()}`: currentTime.getSeconds() ;

    let time = `${hours} : ${minutes} : ${seconds}`;
    document.querySelector('#time').innerText = time;
}
function scrollToSection(id){
    console.log(id);
    if(id){
        id.scrollIntoView({ behavior: 'smooth'});
    }
    console.log('success');
}

setInterval(()=>UpdateTime(), 1000);
document.addEventListener('DOMContentLoaded', UpdateTime);
const home = document.querySelector('.container-head ul li:nth-child(1)');
const games = document.querySelector('.container-head ul li:nth-child(2)');
const entertainment = document.querySelector('.container-head ul li:nth-child(3)');

home.addEventListener('onclick', scrollToSection(document.getElementsByClassName('all-apps')));
games.addEventListener('onclick', scrollToSection(document.getElementsByClassName('games')));
entertainment.addEventListener('onclick', scrollToSection(document.getElementsByClassName('entertainment')));