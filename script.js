console.log("It works");
let redCount = 1;
$(document).ready(onReady);

function onReady() {
  console.log("In onReady");
  $("#red-btn").on("click", redBut);
  $("#blue-btn").on("click", blueBut);
  $("#green-btn").on("click", greenBut);
  $("#yellow-btn").on("click", yellowBut);
  $('#blocks').on('click', '.block', removeBlock);
  $('#blocks').on("click", '.red-fill', redDecrement);
  $('#blocks').on("click", '.blue-fill', blueDecrement);
  $('#blocks').on("click", '.green-fill', greenDecrement);
  $('#blocks').on("click", '.yellow-fill', yellowDecrement);
}

let blueCount = 1;
let greenCount = 1;
let yellowCount = 1;

function removeBlock(){
    console.log('in removeBlock TEST');
    $(this).remove();
}
function redDecrement(){
    redCount--;
    render()
}
function blueDecrement(){
  blueCount--;
  render()
}
function greenDecrement(){
  greenCount--;
  render()
}
function yellowDecrement(){
  yellowCount--;
  render()
}



function redBut() {
  console.log("in redBut");
  redCount++;
  console.log(redCount);
  $('#blocks').append(('<div class= "block red-fill"></div>'))
  render()
}
function blueBut() {
  console.log("in blueBut");
  blueCount++;
  console.log(blueCount);
  $('#blocks').append(('<div class= "block blue-fill"></div>'))
  render()
}
function greenBut() {
  console.log("in greenBut");
  greenCount++;
  console.log(greenCount);
  $('#blocks').append(('<div class= "block green-fill"></div>'))
  render()
}
function yellowBut() {
  console.log("in yellowBut");
  yellowCount++;
  console.log(yellowCount);
  $('#blocks').append(('<div class= "block yellow-fill"></div>'))
  render()
}

function render(){
    let el1 = $('#red-count');
    el1.empty();
    el1.append(`${redCount}`)
    let el2 = $('#blue-count');
    el2.empty();
    el2.append(`${blueCount}`)
    let el3 = $('#green-count');
    el3.empty();
    el3.append(`${greenCount}`)
    let el4 = $('#yellow-count');
    el4.empty();
    el4.append(`${yellowCount}`)
    $('#blocks').append()
}