function rollDice(){
    let goldCoins=0;
    for(let i=0; i<10; i++){
        const roll=Math.floor(Math.random()*6)+1;
      alert('You roll a '+roll+'.');
      if(roll===1){
          alert('Game over, no more rolls!  (YouXi Jie Su!)');
          break;
      }
      if(roll<5){
          continue;
      }
      alert('Congratulations (GongXi!), you win '+ roll +' gold coins! (Ni Yingle ' + roll + 'ge JinBi');
      goldCoins+=roll;
          }
          alert('You have won a total of '+ goldCoins +' gold coins! (Ni YiGong Yingle ' + roll + 'ge JinBi');
}