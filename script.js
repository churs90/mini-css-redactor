var child = document.getElementsByClassName('child')[0];
var input = document.getElementsByTagName('input');
var child2 = document.getElementsByClassName('child2')[0];
var child1 = document.getElementsByClassName('child1')[0];
var clinput = document.getElementsByClassName('input')[0];
var block = document.getElementsByClassName('block')[0];

function one() {
    child2.style.borderRadius = input[0].value + 'px ' + input[2].value + 'px ' + input[4].value + 'px ' + input[6].value + 'px ';
    child1.style.borderRadius = input[2].value + 'px ' + input[0].value + 'px ' + input[6].value + 'px ' + input[4].value + 'px ';
    input[1].value = input[0].value;
    input[3].value = input[2].value;
    input[5].value = input[4].value;
    input[7].value = input[6].value;
}
function qwert() {
    clinput.classList.toggle('inputactive');
    block.classList.toggle('blockactive');
}


