var mins=0;
var secs=0;
var msecs=0;
var getMin=document.getElementById("min");
var getSec=document.getElementById("sec");
var getMsec=document.getElementById("msec");
var interval;
var button;
function timer()
{
    msecs++;
    getMsec.innerHTML=msecs;
    if(msecs>=100)
    {
        secs++;
        getSec.innerHTML=secs;
        msecs=0; 
    }
    else if(secs>=60)
    {
        mins++
        getMin.innerHTML=mins;
        secs=0;  
    }
}
function start()
{
    interval=setInterval(timer,10); 
    button= document.getElementById("btn");
    button.disabled= true ;
}
function pause()
{
    clearInterval(interval);
    button.disabled= false;
}
function reset()
{
    msecs=0;
    secs=0;
    mins=0;
    getMsec.innerHTML=msecs;
    getSec.innerHTML=secs;
    getMin.innerHTML=mins;
    pause();
}


