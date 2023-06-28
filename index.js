flexdiv = document.getElementsByClassName("flexdiv");
let j=0;
for(i=0; i<6; i++){
    flexdiv[i].style.transform = "rotate(" + j + "deg)";
    j += 30;
}

date = new Date();
hour = date.getHours();
min = date.getMinutes();
sec = date.getSeconds();
totmin = (hour*60) + min;

arrow = document.getElementsByClassName("arrow");

arrow[0].style.transform = "rotate(" + ((totmin/2) - 180) + "deg)";
arrow[1].style.transform = "rotate(" + ((min*6) - 180) + "deg)";
arrow[2].style.transform = "rotate(" + ((sec*6) - 180) + "deg)";

function hourarr(){
    date = new Date();
    hour = date.getHours();
    min = date.getMinutes();
    totmin = (hour*60) + min;
    arrow[0].style.transform = "rotate(" + ((totmin/2) - 180) + "deg)";
}

function minarr(){
    date = new Date();
    min = date.getMinutes();
    arrow[1].style.transform = "rotate(" + ((min*6) - 180) + "deg)";
    
}

function secarr(){
    date = new Date();
    sec = date.getSeconds();
    arrow[2].style.transform = "rotate(" + ((sec*6) - 180) + "deg)";
}

function timemin(){
    setInterval(minarr, 60000);
}

function timehrr(){
    setInterval(hourarr, 60000);
}

setInterval(secarr, 1000);
setTimeout(minarr, (60000-(sec*1000)));
setTimeout(timemin, (60000-(sec*1000)));
setTimeout(hourarr, (60000-(sec*1000)));
setTimeout(timehrr, (60000-(sec*1000)));