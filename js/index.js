/*
*** User Story: I can start a 25 minute pomodoro, and the timer will go *** off once 25 minutes has elapsed.
*** User Story: I can reset the clock for my next pomodoro.
*** User Story: I can customize the length of each pomodoro.
=====================================================================

        TODO:

            >> Make Animations look less shit: work in progress
            >> fix CSS/LAYOUT: work in progress
            >> convert into minutes: done
            >> upload Github: done
 ====================================================================
       >> Pomo Named Variable, Ids & Function refer to the break part
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
  var timerCount = 25 * 60;
    //                  --- counts up
  $('#timerUp').click(function() {
    timerCount += 60;
   document.getElementById("timer").innerHTML = timerCount / 60;
  });
    //                  ---- counts Down
  $('#timerDown').click(function() {
    //                  prevents counter < 0
    if (timerCount >= 1) {
      timerCount -= 60;
   document.getElementById("timer").innerHTML = timerCount / 60;
    } else {
      alert("dont be lazy!")
    }
  });

    //                 **** 25 Minute Pomo Plus & Minus
  var pomoCount = 5 * 60;
    //                  ---- counts up
  $('#pomoUp').click(function() {
    pomoCount += 60;
   document.getElementById("pomoTimer").innerHTML = pomoCount / 60;
  });
    //                 --- countsdown
  $('#pomoDown').click(function() {
    if (pomoCount >= 1) {
     pomoCount -= 60;

   document.getElementById("pomoTimer").innerHTML = pomoCount / 60;
    } else {
      alert("dont do this")
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

            document.getElementById('timerStart').disabled = false;
            document.getElementById('timerUp').disabled = false;
            document.getElementById('timerDown').disabled = false;
  clearInterval(stoppingTimer)
  timerCount = 25;
  document.getElementById("timer").innerHTML = timerCount;
     timerCount = 25 * 60;
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
    console.log(pomoCount);
    } else {
      alert("Break has finsihed - Get back to work");
      clearInterval(stopping)
  };

  //                ******  RESET  the POMO button & ANIMATED BAR
  $('#resetPomoButton').click(function(){
    console.log("test");
  //                 --Enables + - and start button. Disables Reset

             document.getElementById('pomoStart').disabled = false;
             document.getElementById('pomoUp').disabled = false;
             document.getElementById('pomoDown').disabled = false;
       clearInterval(stopping)
  pomoCount = 5;
  document.getElementById("pomoTimer").innerHTML = pomoCount;
     pomoCount = 5 * 60;
  resetTweenPomo();

  });



  }
  });
