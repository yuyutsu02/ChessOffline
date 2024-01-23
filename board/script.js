//fetching game settings from local storage converting to number
let minutes = localStorage.getItem('minutes');
let increment = localStorage.getItem('increment');
minutes = parseInt(minutes);
increment = parseInt(increment);
//converting minutes to seconds
minutes = minutes * 60;
//setting default increment and time to 10 seconds
if (!increment) { increment = 10; }
if (!minutes) { minutes = 180; }

//different variables for both sides
let white_time = minutes;
let black_time = minutes;
//clearing local storage 
localStorage.clear();

//selecting elements from dom
let btime = document.querySelector('.btime');
let wtime = document.querySelector('.wtime');

//turn to play , default to white
let turn = 'white';

//changing turns and stopping clock and adding additional time
//checking if its right turn then only button works
btime.addEventListener('click', () => {
    if (turn === 'black') {
        black_time += increment;
        btime.innerText = black_time;
        turn = 'white';
    }
})
wtime.addEventListener('click', () => {
    if (turn === 'white') {
        white_time += increment;
        wtime.innerText = white_time;
        turn = 'black';
    }
})

//timer working //timeout functionality
const timer = setInterval(() => {
    if (turn === 'white') {
        //display time 
        white_time--;
        wtime.innerText = white_time;
        //timeout functionality
        if (white_time === 0) {
            alert('white lost on time');
            clearInterval(timer);
        }
    };

    if (turn === 'black') {
        //display time
        black_time--;
        btime.innerText = black_time;
        //timeout functionality
        if (black_time === 0) {
            alert('black lost on time');
            clearInterval(timer);
        }
    };
}, 1000);



//chess board rendering with unique id and white black classes
const board = document.querySelector('.midBoard');

for (let i = 0; i < 8; i++) {

    if (i % 2 === 0) {

        for (let j = 0; j < 8; j++) {
            if (j % 2 === 0) {
                const black_block = document.createElement('div');
                black_block.setAttribute('class', 'blackblock')
                black_block.setAttribute('id', `${i}${j}`);
                board.appendChild(black_block);
            } else {
                const white_block = document.createElement('div');
                white_block.setAttribute('class', 'whiteblock');
                white_block.setAttribute('id', `${i}${j}`);
                board.appendChild(white_block);
            }
        }

    } else {
        for (let j = 0; j < 8; j++) {
            if (j % 2 === 0) {
                const white_block = document.createElement('div');
                white_block.setAttribute('class', 'whiteblock');
                white_block.setAttribute('id', `${i}${j}`);
                board.appendChild(white_block);
            } else {
                const black_block = document.createElement('div');
                black_block.setAttribute('class', 'blackblock')
                black_block.setAttribute('id', `${i}${j}`);
                board.appendChild(black_block);
            }
        }
    }



}







//rendering pieces black
function place_piece(piece,at) {

    const temp = document.createElement('div');
    temp.setAttribute('class', 'white_piece');
    temp.setAttribute('class', piece);
    temp.setAttribute('draggable', 'true');

    const piece_place = document.getElementById(at)

    piece_place.appendChild(temp);
}
//black pawns
place_piece('black_pawn','10');
place_piece('black_pawn','11');
place_piece('black_pawn','12');
place_piece('black_pawn','13');
place_piece('black_pawn','14');
place_piece('black_pawn','15');
place_piece('black_pawn','16');
place_piece('black_pawn','17');


//black pieces
place_piece('black_rook','00');
place_piece('black_knight','01');
place_piece('black_bishop','02');
place_piece('black_queen','03');
place_piece('black_king','04');
place_piece('black_bishop','05');
place_piece('black_knight','06');
place_piece('black_rook','07');


//white pawns
place_piece('white_pawn','60');
place_piece('white_pawn','61');
place_piece('white_pawn','62');
place_piece('white_pawn','63');
place_piece('white_pawn','64');
place_piece('white_pawn','65');
place_piece('white_pawn','66');
place_piece('white_pawn','67');


//white pieces
place_piece('white_rook','77');
place_piece('white_knight','76');
place_piece('white_bishop','75');
place_piece('white_king','74');
place_piece('white_queen','73');
place_piece('white_bishop','72');
place_piece('white_knight','71');
place_piece('white_rook','70');





//numbering blocks
const whiteblocks=document.querySelectorAll('.whiteblock');
const blackblocks=document.querySelectorAll('.blackblock');

whiteblocks.forEach((block)=>
{
    const temp=document.createElement('div');
    temp.style.position='absolute';
    temp.innerText=block.id;
    block.appendChild(temp);

})


blackblocks.forEach((block)=>
{
    const temp=document.createElement('div');
    temp.style.position='absolute';
    temp.innerText=block.id;
    block.appendChild(temp);

})