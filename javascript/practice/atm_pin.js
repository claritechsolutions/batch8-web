f1=()=>{
    let a =document.getElementById('input').ariaValueMax;
    if((a.length ==4)||(a.length ==6)){
        document.getElementById('output').style.color ='green'
        document.getElementById('output').innerHTML='Accepted PIN codes'

    }else{
        document.getElementById('output').style.color ='red'
        document.getElementById('output').style.color ='Allow 4 or 6 digit PIN codes'
    }
}