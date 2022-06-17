function runGame() {
    let guessString='';
    let guessNumber=0;
    let correct=false;
  let numberTries=0;

    const randomNumber=Math.random()*100;
    const randomInteger=Math.floor(randomNumber);
    const target=randomInteger+1;
  

    // const target=math.floor(math.random()*100)+1;//

    do {
         guessString=prompt('I am thinking of a number in the range 1 to 100.\n\nWhat is the number?(cai cai wo shi ji?)');
         guessNumber=+guessString;
         numberTries+=1;
         correct=checkGuess(guessNumber, target);
    }while (!correct);
  
        alert('You got it! (Dui Le!) The number was '+target+'.\n\n It took you '+ numberTries + ' tries to guess correctly. Yi Gong ' +numberTries+ ' Ci');
      }

        function checkGuess(guessNumber, target){
            let correct=false;

            if(isNaN(guessNumber)){
                alert('You have not entered a number.\n\nPlease enter a number in the 1-100 range.');
            }else if ((guessNumber<1)||(guessNumber>100)){
                alert('Please enter an interger in the 1-100 range.');
              } else if (guessNumber>target){
                  alert('Your number is too large!  (tai da le! Zai Cai!)');
              }else if(guessNumber<target){
                  alert('Your number is too small!  (tai xiao le! Zai Cai!)');
              }else {
                  correct=true;
              }
            return correct;
            }
        