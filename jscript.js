
function kolor(kolor)
{
document.bgColor=kolor;
}
function move() {
    var elem = document.getElementById("myBar");
    var width = 10;
    var id = setInterval(frame, 10);
    function frame() {
        if (width >= 100) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
            elem.innerHTML = width * 1 + '%';
        }
    }
} 
function czas(czas) {
 
 
    var date = new Date();
    var sekundy = date.getSeconds(),
        minuty = date.getMinutes(),
        godziny = date.getHours();
 
 
    if (czas == 'am' && godziny >= 12) godziny -= 12;
 
 
    document.getElementById('czas').innerHTML = 'godzina' + godziny + ' '+ minuty + ' minut ' + sekundy + 'sekund';
 
 
}
