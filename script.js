function randomNumber(num){
    // Get a random number 
    return Math.floor(Math.random() *num)
  }
  const responses = {
    favoritePets: ['cats', 'dogs', 'fish', 'snake', 'lizard'],
    weatherToday: ['sunny', 'rainy', 'snow', 'server weather'],
    nickNames: ['Bubba', 'Slim', 'The Dude', 'Tiger', 'Nitro']
  }
  let choices = []
  
  for (let item in responses){
    let indx = randomNumber(responses[item].length)
    switch(item){
      case 'favoritePets':
      choices.push(`Your favorite pet should be ${responses[item][indx]}.`)
      break
      case 'weatherToday':
      choices.push(`Today weather it going to be ${responses[item][indx]}.`)
      break
      case 'nickNames':
      choices.push(`I have a nickname for you, it should be ${responses[item][indx]}.`)
      break
      default:
      choices.push('Please try again, I did not understand your choice.')
    } 
  }
  function formatChoice(choice){
    const formatted = choices.join('\n')
    console.log(formatted)
  }
   formatChoice(choices);