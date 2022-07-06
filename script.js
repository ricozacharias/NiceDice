const colors = ["red", "green", "blue", "yellow", "orange", "purple"];

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function delay(milliseconds){
    return new Promise(resolve => {
        setTimeout(resolve, milliseconds);
    });
}

async function changeColor()
{
  let randColorIndex = getRandomInt(colors.length);
  let color = colors[randColorIndex];
  let textcolor = color !== "yellow" ? "white" : "black";

  // reset color and show loading
  $('h1').css('color', "white");
  $('h1').text("...");
  $('body').css('background-color', "black");
  await delay(500);

  // set new colors
  $('h1').css('color', textcolor);
  $('h1').text("Change color");
  $('body').css('background-color', color);

}

// Main
$(document).ready(function(){
  $('body').on('click', function() {
    changeColor();
  });
});

