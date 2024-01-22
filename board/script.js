//fetching game settings from local storage converting to number
let minutes=localStorage.getItem('minutes');
let increment=localStorage.getItem('increment');
minutes=parseInt(minutes);
increment=parseInt(increment);
//converting minutes to seconds
minutes=minutes*60;
//setting default increment and time to 10 seconds
if(!increment){increment=10;}
if(!minutes){minutes=180;}

//different variables for both sides
let white_time=minutes;
let black_time=minutes;
//clearing local storage 
localStorage.clear();

//selecting elements from dom
let btime= document.querySelector('.btime');
let wtime= document.querySelector('.wtime');

//turn to play , default to white
let turn ='white';

//changing turns and stopping clock and adding additional time
//checking if its right turn then only button works
btime.addEventListener('click',()=>
 {
    if(turn==='black')
 {
     black_time+=increment;
    btime.innerText=black_time;
    turn='white';
 }
})
wtime.addEventListener('click',()=>
{    if(turn==='white')
 {
    white_time+=increment;
    wtime.innerText=white_time;
    turn='black';
 }
})

//timer working //timeout functionality
const timer=setInterval(()=>
    {
        if(turn==='white'){
            //display time 
            white_time--;
            wtime.innerText=white_time;
            //timeout functionality
            if(white_time ===0){
                alert('white lost on time');
                clearInterval(timer);
            }
        };

        if(turn==='black'){
            //display time
            black_time--;
            btime.innerText=black_time;
            //timeout functionality
            if(black_time ===0){
                alert('black lost on time');
                clearInterval(timer);
            }
        };
    },1000);



//chess board rendering with unique id and white black classes
const board=document.querySelector('.midBoard');

for(let i=0;i<8;i++){

if(i%2===0){
    
    for(let j=0;j<8;j++){
        if(j%2===0){
            const black_block=document.createElement('div');
            black_block.setAttribute('class','blackblock')
            black_block.setAttribute('id',`${i}${j}`);
            board.appendChild(black_block);
        }else{
            const white_block=document.createElement('div');
            white_block.setAttribute('class','whiteblock');
            white_block.setAttribute('id',`${i}${j}`);
            board.appendChild(white_block);
        }
    }

}else{
    for(let j=0;j<8;j++){
        if(j%2===0){
            const white_block=document.createElement('div');
            white_block.setAttribute('class','whiteblock');
            white_block.setAttribute('id',`${i}${j}`);
            board.appendChild(white_block);
        }else{
            const black_block=document.createElement('div');
            black_block.setAttribute('class','blackblock')
            black_block.setAttribute('id',`${i}${j}`);
            board.appendChild(black_block);
        }
    }
}



}




//rendering pieces


//white rook
const white_rook=document.createElement('div');
white_rook.setAttribute('class','white_piece');
white_rook.setAttribute('class','white_rook');
white_rook.setAttribute('draggable','true');

const white_rook_place=document.getElementById('77')

white_rook_place.appendChild(white_rook);


//white knight
const white_knight=document.createElement('div');
white_knight.setAttribute('class','white_piece');
white_knight.setAttribute('class','white_knight');
white_knight.setAttribute('draggable','true');

const white_knight_place=document.getElementById('76')

white_knight_place.appendChild(white_knight);



//white bishop

const white_bishop=document.createElement('div');
white_bishop.setAttribute('class','white_piece');
white_bishop.setAttribute('class','white_bishop');
white_bishop.setAttribute('draggable','true');

const white_bishop_place=document.getElementById('75')

white_bishop_place.appendChild(white_bishop);





//white king

const white_king=document.createElement('div');
white_king.setAttribute('class','white_piece');
white_king.setAttribute('class','white_king');
white_king.setAttribute('draggable','true');

const white_king_place=document.getElementById('74')

white_king_place.appendChild(white_king);




//white queen

const white_queen=document.createElement('div');
white_queen.setAttribute('class','white_piece');
white_queen.setAttribute('class','white_queen');
white_queen.setAttribute('draggable','true');

const white_queen_place=document.getElementById('73')

white_queen_place.appendChild(white_queen);




//white bishop

const white_bishop2=document.createElement('div');
white_bishop2.setAttribute('class','white_piece');
white_bishop2.setAttribute('class','white_bishop');
white_bishop2.setAttribute('draggable','true');

const white_bishop_place2=document.getElementById('72')

white_bishop_place2.appendChild(white_bishop2);




//white knight
const white_knight2=document.createElement('div');
white_knight2.setAttribute('class','white_piece');
white_knight2.setAttribute('class','white_knight');
white_knight2.setAttribute('draggable','true');

const white_knight_place2=document.getElementById('71')

white_knight_place2.appendChild(white_knight2);




//white rook
const white_rook2=document.createElement('div');
white_rook2.setAttribute('class','white_piece');
white_rook2.setAttribute('class','white_rook');
white_rook2.setAttribute('draggable','true');

const white_rook_place2=document.getElementById('70')

white_rook_place2.appendChild(white_rook2);




//white pawn1
const white_pawn=document.createElement('div');
white_pawn.setAttribute('class','white_piece');
white_pawn.setAttribute('class','white_pawn');
white_pawn.setAttribute('draggable','true');

const white_pawn_place=document.getElementById('67')

white_pawn_place.appendChild(white_pawn);



//white pawn2
const white_pawn2=document.createElement('div');
white_pawn2.setAttribute('class','white_piece');
white_pawn2.setAttribute('class','white_pawn');
white_pawn2.setAttribute('draggable','true');

const white_pawn_place2=document.getElementById('66')

white_pawn_place2.appendChild(white_pawn2);



//white pawn3
const white_pawn3=document.createElement('div');
white_pawn3.setAttribute('class','white_piece');
white_pawn3.setAttribute('class','white_pawn');
white_pawn3.setAttribute('draggable','true');

const white_pawn_place3=document.getElementById('65')

white_pawn_place3.appendChild(white_pawn3);




//white pawn4
const white_pawn4=document.createElement('div');
white_pawn4.setAttribute('class','white_piece');
white_pawn4.setAttribute('class','white_pawn');
white_pawn4.setAttribute('draggable','true');

const white_pawn_place4=document.getElementById('64')

white_pawn_place4.appendChild(white_pawn4);



//white pawn5
const white_pawn5=document.createElement('div');
white_pawn5.setAttribute('class','white_piece');
white_pawn5.setAttribute('class','white_pawn');
white_pawn5.setAttribute('draggable','true');

const white_pawn_place5=document.getElementById('63')

white_pawn_place5.appendChild(white_pawn5);




//white pawn6
const white_pawn6=document.createElement('div');
white_pawn6.setAttribute('class','white_piece');
white_pawn6.setAttribute('class','white_pawn');
white_pawn6.setAttribute('draggable','true');

const white_pawn_place6=document.getElementById('62')

white_pawn_place6.appendChild(white_pawn6);





//white pawn7
const white_pawn7=document.createElement('div');
white_pawn7.setAttribute('class','white_piece');
white_pawn7.setAttribute('class','white_pawn');
white_pawn7.setAttribute('draggable','true');

const white_pawn_place7=document.getElementById('61')

white_pawn_place7.appendChild(white_pawn7);





//white pawn8
const white_pawn8=document.createElement('div');
white_pawn8.setAttribute('class','white_piece');
white_pawn8.setAttribute('class','white_pawn');
white_pawn8.setAttribute('draggable','true');

const white_pawn_place8=document.getElementById('60')

white_pawn_place8.appendChild(white_pawn8);