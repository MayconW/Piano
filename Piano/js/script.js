const keys = document.querySelectorAll('.key');
const whiteKeys = document.querySelectorAll('.key.white');
const blackKeys = document.querySelectorAll('.key.black');
const checkbox = document.querySelector('.checkbox_keys');
const switcher = document.querySelector('.switcher');


const playNote = (note) => {
    console.log(note.getAttribute('data-note'));
    const data_note = note.getAttribute('data-note');
    const audio = new Audio (`../notes/${data_note}.wav`);
    audio.play();
    
}

const playNoteAuto = (note) => {
    
    const audio = new Audio (`../notes/${note}.wav`);
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
    const whiteKeyIndex = ['TAB','A','S','D','F','G','H', 'J', 'K', 'L', 'Ç', ']', '8', '0'].indexOf(key);
    const blackKeyIndex = ['Q','W','R','T','Y', 'I', 'O', '[', '7', '9'].indexOf(key);

    if(whiteKeyIndex > -1){
        
        white_pressed(whiteKeys[whiteKeyIndex]);

        white_unpressed(whiteKeys[whiteKeyIndex]);
        
        if(checkbox.checked){
          
        }
    } 
    if(blackKeyIndex > -1){
        black_pressed(blackKeys[blackKeyIndex]);
       
        black_unpressed(blackKeys[blackKeyIndex]);

    }  
});
const DEF_DELAY = 1000;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms || DEF_DELAY));
  }
  


checkbox.addEventListener('change', async ({target}) => {
    //console.log(target);
    const music_auto = [13,12,10,8,5,8,5,8,5,8];
    //alert(target.checked);
    if(target.checked){
        switcher.classList.add('switcher--active');
        for(let j=0; j<2;j++){ 
            for(let i = 0; i < 10; i++){
                if(j==0){
                playNoteAuto(music_auto[i]);}
                else{
                    playNoteAuto(music_auto[i]+12);
                }
                if(i<5){
                 await sleep(400);
                }else{
                    await sleep(450);
                }}
               
            }
            
       
    }
    else{
        switcher.classList.remove('switcher--active');
        return;
    }
    
   

});





