let keys = document.querySelectorAll('.keyboard>.key span')
let keyPad = document.querySelector('.keyboard>.key')
let display = document.querySelector('display')

if( keys && keyPad && display)
{
    let capsLockmode = false;
    keys.forEach(key=>
     {
        key.addEventListener('click',function()
        {
            // console.log(this.innerText)
            if(this.classList.contains('caps'))
            {
                 this.classList.toggle('active');
                 keyPad.classList.toggle('uppercase');


              capsLockmode?capsLockmode=false   : capsLockmode =true; 
             }
             else if(this.classList.contains('backspace')){
                let str =display.innerText;
                display.innerText = str.substring(0,(str.length-1))
           }else{
            if(capsLockmode)
            {
                display.innerText += this.innerText.toUppercase();
            }else{
                display.innerText += this.innerText.toLowercase();
            }
           }
                
             
        });
    });
}
