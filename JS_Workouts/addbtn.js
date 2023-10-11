var  count=0;
document.getElementById("d").onclick = function(){
        count -= 1 ;
        document.getElementById("countLabel").innerHTML = count ;
}

document.getElementById("r").onclick = function(){
        count=0;
        document.getElementById("countLabel").innerHTML = count ;
        
}
document.getElementById("i").onclick = function (){
        count+=1;
        document.getElementById('countLabel').innerHTML = count ;
}