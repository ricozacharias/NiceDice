const colors = ["red", "green", "blue", "yellow", "orange"];

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function delay(milliseconds){
    return new Promise(resolve => {
        setTimeout(resolve, milliseconds);
    });
}

function changeColor()
{
  let randColorIndex = getRandomInt(colors.length-1);
  let color = colors[randColorIndex];
  let textcolor = color !== "yellow" ? "white" : "black";

  $('h1').text("...");
  $('body').css('background-color', "black");
  //await delay(500);

  $('h1').css('color', textcolor);
  $('h1').text("Change color");
  $('body').css('background-color', color);

}

// Main
$('body').on('click', function() {
  alert("click");
  changeColor();
});

console.log("loaded.");
