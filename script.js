const height=window.innerHeight;
const width=window.innerWidth;


//CHECK DEVICE LAPTOP OR SMARTPHONE
if(width>=height){
    alert('this device is not compatible try using a smartphone!');
    const body=document.querySelector('body');
    body.style.display='none';
}

const play=document.querySelector('.play');
play.addEventListener('click',game_start);



//function to take game info and direct to board
function game_start(){
    const minutes=document.querySelector('.minutes');
    const increment=document.querySelector('.increment');
    if(minutes.value && increment.value ){

        console.log(`match of ${minutes.value}-minutes with ${increment.value}-seconds increment has been started`);
        localStorage.setItem('minutes',minutes.value);
        localStorage.setItem('increment',increment.value);
        minutes.value='';   
        increment.value='';   
        window.location.href = "../board/index.html";

    }else{
        alert(`invalid time>>- ${minutes.value}-minutes , ${increment.value}-increment`);
    }
}
