
function kolor(kolor)
{
document.bgColor=kolor;
}
var menu = ["opcja1", "opcja2", "opcja3", "opcja4"];
var app = new Vue({
  el: '#app',
  data: {
    message: menu
  }
})

