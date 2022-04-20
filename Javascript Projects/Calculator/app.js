let btn = document.querySelectorAll('button');

let data="";
for(item of btn){
    item.addEventListener('click', (e) =>{
       buttonText = e.target.innerText;
       
       if(buttonText == '='){
        document.getElementById('currentValue').firstChild.nodeValue= eval(data);
        document.getElementById('previousValue').firstChild.nodeValue= eval(data);
       }
       
       if(buttonText == 'AC'){
        document.getElementById('currentValue').firstChild.nodeValue= "0";
        document.getElementById('previousValue').firstChild.nodeValue= "0";
        data="";
       }
       else{
       data = data + buttonText;
       document.getElementById('currentValue').firstChild.nodeValue=data;
       }
    })
}