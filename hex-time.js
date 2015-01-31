function startTime() {
    var today=new Date();
    var h=today.getHours();
    var m=today.getMinutes();
    var s=today.getSeconds();
    h= checkTime(h);
    m = checkTime(m);
    s = checkTime(s);
    document.body.style.backgroundColor="#"+h+""+m+""+s;
    document.getElementById('txt').innerHTML =h+":"+m+":"+s;
    var t = setTimeout(function(){startTime()},200);
}

function checkTime(i) {
    if (i<10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}
