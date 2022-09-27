// Code your solutions in this file

function writeCards(names,event) {
    let thankYouCards=[]
    for (let i = 0; i <= writeCards.length; i++) {
      thankYouCards.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    console.log (thankYouCards);
    return  thankYouCards;
  }

  function countDown(startingNumber) {
    while (startingNumber>0){
        console.log (startingNumber);
        //startingNumber = startingNumber -1;
        startingNumber-=1

    };
    console.log (startingNumber);
   
  }