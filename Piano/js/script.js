const keys = document.querySelectorAll('.key');
const whiteKeys = document.querySelectorAll('.key.white');
const blackKeys = document.querySelectorAll('.key.black');
const checkbox = document.querySelector('.checkbox_keys');
const switcher = document.querySelector('.switcher');

const playNote = (note) => {
    console.log(note.getAttribute('data-note'));
    const data_note = note.getAttribute('data-note');
    const audio = new Audio (`../Piano/notes/${data_note}.wav`);
    audio.play();
    
}


const black_pressed = (key) =>{

    key.classList.add('black--pressed');
    playNote(key);

}

const black_unpressed = (key) =>{        
    key.classList.remove('black--pressed');
 }

const white_pressed = (key) =>{

    key.classList.add('white--pressed'); 
    playNote (key);
}

const white_unpressed = (key) =>{
    key.classList.remove('white--pressed');
}



const handleMouseDown = (key) => {
    
    
    if(key.className.includes('black')){
       
        black_pressed(key);
   return;
}

white_pressed(key);
}

const handleMouseUp= (key) => {
    
     if(key.className.includes('black')){
        black_unpressed(key);

   return;
}
white_unpressed(key);

}




keys.forEach(key => {
    key.addEventListener('mousedown', () => handleMouseDown(key));
    key.addEventListener('mouseup', () => handleMouseUp(key));
   
  
});


document.addEventListener('keydown', e => {
   event.preventDefault(); 
    if(e.repeat) return;
    const key = e.key.toUpperCase();
    const whiteKeyIndex = ['TAB','Q','W','E','R','T','Y', 'U', 'I', 'O', 'P', '[',']', '/'].indexOf(key);
    const blackKeyIndex = ['1','2','3','4','5', '6', '7', '8', '9', 'L', 'Ç', "~"].indexOf(key);
    console.log(key);
    if(whiteKeyIndex > -1){
        white_pressed(whiteKeys[whiteKeyIndex]);
       // playNote (whiteKeys[whiteKeyIndex]);
        white_unpressed(whiteKeys[whiteKeyIndex]);
        

    } 
    if(blackKeyIndex > -1){
        black_pressed(blackKeys[blackKeyIndex]);
        //  playNote (blackKeys[blackKeyIndex]);
        black_unpressed(blackKeys[blackKeyIndex]);

    }  
});


checkbox.addEventListener('change', ({target}) => {
    //alert(target.checked);
    if(target.checked){
        switcher.classList.add('switcher--active');
      playNote(2);
    }
    switcher.classList.remove('switcher--active');




});


