

var isNS = (navigator.appName == "Netscape") ? 1 : 0;
var EnableRightClick = 0;
if (isNS)
    document.captureEvents(Event.MOUSEDOWN || Event.MOUSEUP);
function mischandler() {
    if (EnableRightClick == 1) { return true; }
    else { return false; }
}
function mousehandler(e) {
    if (EnableRightClick == 1) { return true; }
    var myevent = (isNS) ? e : event;
    var eventbutton = (isNS) ? myevent.which : myevent.button;
    if ((eventbutton == 2) || (eventbutton == 3)) return false;
}
function keyhandler(e) {
    var myevent = (isNS) ? e : window.event;
    if (myevent.keyCode == 96)
        EnableRightClick = 1;
    return;
}
document.oncontextmenu = mischandler;
document.onkeypress = keyhandler;
document.onmousedown = mousehandler;
document.onmouseup = mousehandler;



function IE(e) {
    if (navigator.appName == "Microsoft Internet Explorer" && (event.button == "2" || event.button == "3")) {
        alert('UYARI BEYBI');
        return false;
    }
}
function NS(e) {
    if (document.layers || (document.getElementById && !document.all)) {
        if (e.which == "2" || e.which == "3") {
            alert('Sağtık yasak brooo<3');
            return false;
        }
    }
}
document.onmousedown = IE; document.onmouseup = NS; document.oncontextmenu = new Function("return false");

console.log("Arka taraftaki parteküller BBQ ye aittir.")



var default1 = "apoo";
var text1 = "a";
var text2 = "ap";
var text3 = "apo";
var text4 = "apoo";
var changeRate = 500; // Zaman ayarı [1000 = 1 Saniye]
var messageNumber = 0;

function changeStatus() {
    if (messageNumber == 0) {
        window.status = default1;
        document.title = default1;
    }
    else if (messageNumber == 1) {
        window.status = text1;
        document.title = text1;
    }
    else if (messageNumber == 2) {
        window.status = text2;
        document.title = text2;
    }
    else if (messageNumber == 3) {
        window.status = text3;
        document.title = text3;
    }
    else if (messageNumber == 4) {
        window.status = text4;
        document.title = text4;
        messageNumber = 0;
    }


    messageNumber++;
    setTimeout("changeStatus();", changeRate);

}

changeStatus();





$(document).ready(function(){
    $(".hamburger-btn").click(function(){
        $(".text-div").toggle("text-div-inline");
    });
});