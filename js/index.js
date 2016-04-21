/*
*** User Story: I can start a 25 minute pomodoro, and the timer will go *** off once 25 minutes has elapsed.
*** User Story: I can reset the clock for my next pomodoro.
*** User Story: I can customize the length of each pomodoro.
=====================================================================

        TODO:

            >> Make Animations look less shit: work in progrress
            >> fix CSS/LAYOUT: work in progress
            >> convert into minutes:
            >> upload Github
            >> testign github update 2
 ====================================================================
       >> Pomo Named Variable, Ids & Function refer to the break
*/

  $(document).ready(function() {

    //                  Timer ANIMATED COUNT BAR
  function startTween(){
    TweenMax.to($("#timerFill"), timerCount, {width: 294});
  }
    //                  POMO ANIMATED COUNT BAR
  function startTweenPomo(){
    TweenMax.to($("#pomoFill"), pomoCount, {width: 294});
  }
    //                  TIMER ANIMATED RESET BAR
  function resetTween(){
    TweenMax.to($("#timerFill"), 1, {width: 0});
  }
    //                  POMO ANIMATED RESET BAR
  function resetTweenPomo(){
    TweenMax.to($("#pomoFill"), 1, {width: 0});
  }



    //                 **** 25 Minute Timer Plus & Minus
  var timerCount = 25;
    //                  --- counts up
  $('#timerUp').click(function() {
    timerCount += 1;
   document.getElementById("timer").innerHTML = timerCount;
  });
    //                  ---- counts Down
  $('#timerDown').click(function() {
    //                  prevents counter < 0
    if (timerCount >= 1) {
      timerCount -= 1;
   document.getElementById("timer").innerHTML = timerCount;
    } else {
      alert("dont be lazy!")
    }
  });

    //                 **** 25 Minute Pomo Plus & Minus
  var pomoCount = 5;
    //                  ---- counts up
  $('#pomoUp').click(function() {
    pomoCount += 1;
   document.getElementById("pomoTimer").innerHTML = pomoCount;
  });
    //                 --- countsdown
  $('#pomoDown').click(function() {
    if (pomoCount >= 1) {
      pomoCount = pomoCount - 1;
   document.getElementById("pomoTimer").innerHTML = pomoCount;
    } else {
      alert("dont mess with me boy")
    }
  });

    //                 ****** RESET the TIMER button & ANIMATED BAR
  $('#resetButton').click(function(){
    timerCount = 25;
   document.getElementById("timer").innerHTML = timerCount;

    resetTween();
  });


    //                 ***** Timer Start Button Count Down starts Interval & calls counting function
  $('#timerStart').click(function(){
//                    --Disables + - and start button. Enables Reset
           document.getElementById('resetButton').disabled = false;
           document.getElementById('timerStart').disabled = true;
           document.getElementById('timerUp').disabled = true;
           document.getElementById('timerDown').disabled = true;
          stoppingTimer = setInterval(timerSecondsDown, 1000);
    //                 --- starts automation of ANINMATED_BAR
    startTween();
   });
    //                 ****  ^--- Function that counts down  ******
  function timerSecondsDown(){
  if (timerCount >= 1) {
      document.getElementById("timer").innerHTML =  timerCount -= 1;
      } else {
        timerCount = 0;
          alert("Count Down Finished: Break time");
        clearInterval(stoppingTimer)

    };

    $('#resetButton').click(function(){
//                 --Enables + - and start button. Disables Reset
            document.getElementById('resetButton').disabled = true;
            document.getElementById('timerStart').disabled = false;
            document.getElementById('timerUp').disabled = false;
            document.getElementById('timerDown').disabled = false;
  clearInterval(stoppingTimer)
  timerCount = 25;
  document.getElementById("timer").innerHTML = timerCount;
  resetTween();
  });

  }

    //                 **** Pomo Start Button Count Down starts Interval & calls counting function
  $('#pomoStart').click(function(){
//                    --Disables + - and start button. Enables Reset
             document.getElementById('resetPomoButton').disabled = false;
             document.getElementById('pomoStart').disabled = true;
             document.getElementById('pomoUp').disabled = true;
             document.getElementById('pomoDown').disabled = true;
    stopping = setInterval(pomoSecondsDown, 1000);
    //                 --- starts automation of ANINMATED_BAR
    startTweenPomo();
   });
    //                 ****  ^--- Function that counts down  ******
  function pomoSecondsDown() {
  if (pomoCount >= 1) {
    document.getElementById("pomoTimer").innerHTML =  pomoCount -= 1;
    } else {
      alert("Break has finsihed - Get back to work");
      clearInterval(stopping)
  };

  //                ******  RESET  the POMO button & ANIMATED BAR
  $('#resetPomoButton').click(function(){
    console.log("test");
  //                 --Enables + - and start button. Disables Reset
             document.getElementById('resetPomoButton').disabled = true;
             document.getElementById('pomoStart').disabled = false;
             document.getElementById('pomoUp').disabled = false;
             document.getElementById('pomoDown').disabled = false;
       clearInterval(stopping)
  pomoCount = 5;
  document.getElementById("pomoTimer").innerHTML = pomoCount;
  resetTweenPomo();

  });



  }
  });
