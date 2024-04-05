/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  var FRAME_RATE = 60;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  var KEY = {
    LEFT: 37,
    RIGHT: 39,
    UP: 38,
    DOWN: 40,
    ENTER: 13,
  }
  

  // Game Item Objects

  var walker = {
    posX: 0,
    posY: 0,
    speedX: 0,
    speedY: 0,
  }

  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('keydown', handleKeyDown);                           // change 'eventType' to the type of event you want to handle

  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
    repositionGameItem()
    redrawGameItem()

  }
  
  /* 
  Called in response to events.
  */
  function handleKeyDown(event) {
    if (event.which === KEY.ENTER) {
      console.log("enter pressed")
    } else if (event.which === KEY.LEFT) {
      console.log("left pressed")
      walker.speedX = -5
    } else if (event.which === KEY.RIGHT) {
      console.log("right pressed")
      walker.speedX = 5
    } else if (event.which === KEY.UP) {
      console.log("up pressed")
      walker.speedY = -5
    } else if (event.which === KEY.DOWN) {
      console.log("down pressed")
      walker.speedY = 5
    }
  }

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  function repositionGameItem (event) {
    if (event.which === KEY.LEFT) {
      walker.posX -= speedX;
    } else if (event.which === KEY.RIGHT) {
      walker.posX += speedX;
    } else if (event.which === KEY.UP) {
      walker.posY -= speedY;
    } else if (event.which === KEY.DOWN) {
      walker.posY += speedY;
    }
  }

  function redrawGameItem (event) {
    if (event.which === KEY.LEFT) {
      $("#walker").css("left", walker.posX);
    } else if (event.which === KEY.RIGHT) {
      $("#walker").css("right", walker.posX);
    } else if (event.which === KEY.UP) {
      $("#walker").css("up", walker.posY);
    } else if (event.which === KEY.DOWN) {
      $("#walker").css("down", walker.posY);
    }
  }


  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
  
}
