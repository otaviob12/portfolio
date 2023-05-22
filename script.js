let count = 1;
let interval;
document.getElementById('radio1').checked = true;

setInterval(function(){
    nextImagem()
},9000);

function nextImagem(){
    count++
    if(count > 5){
        count = 1
    }
    document.getElementById('radio' + count).checked = true
};