let value = document.querySelector('.display')
let buttons = document.querySelectorAll('.btn')
let count = 0;
buttons.forEach(function(key){
    key.addEventListener('click', function(e){
       let btn = e.currentTarget.innerText;
       if(btn == 'Decrease')
       {
           count --;
       }
       else if(btn == 'Increase')
       {
           count ++;
       }
       else if(btn == 'Reset')
       {
           count = 0;
       }
       value.textContent = count;

    })
})
