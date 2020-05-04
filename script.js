var newGradient = document.querySelector('#newGradient');
var gradient = document.querySelector('#gradient');
// var colorA = document.querySelector('#colorA');
// var colorB = document.querySelector('#colorB');
var copyGradient = document.querySelector('#copyGradient');
var colorc = document.querySelector('.colorc');
init();

function init(){

    console.log("Welcome! You can check all the colors that you have generated here.");

    generateColors();

    copybtn.addEventListener('click', function(){
        var copytext = selectText('copyGradient');
        document.execCommand("copy");
        var tooltip = document.querySelector("#myTooltip");
        tooltip.textContent = "Copied!";
        copyGradient.classList.remove('selected');
    });
    
//     copybtn.addEventListener('mouseout', function(){
//         outFunc();
//     });
    
    newGradient.addEventListener('click', function(){
        generateColors();
    });
}


function generateColors(){
    var a = randomColors();
    var b = randomColors();
    var newColors = "linear-gradient(to right,"+ a +", " + b +")";
    gradient.style.background = newColors;
    // colorA.textContent = a;
    // colorB.textContent = b;

    copyGradient.textContent = "background: linear-gradient(to right, " + a + ", " + b + ");";
    
    console.log(copyGradient.innerHTML);

    copyGradient.classList.add('selected');
}

function randomColors() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b + ")";
}

function selectText(element) {
    var doc = document,
    text = doc.getElementById(element),
    range, selection;

    if(doc.body.createTextRange){ 
        range = document.body.createTextRange();
        range.moveToElementText(text);
        range.select(); 
    }
    else if(window.getSelection){
        selection = window.getSelection();
        range = document.createRange();
        range.selectNodeContents(text);
        selection.removeAllRanges();
        selection.addRange(range);   
    }

    return range;

}
  
function outFunc() {
    var tooltip = document.querySelector("#myTooltip");
    tooltip.textContent = "Copy this color!";
}