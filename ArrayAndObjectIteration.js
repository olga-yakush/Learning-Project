const dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake'];
    
    function logDairy() {
        for (const dairyProduct of dairy) {
          console.log(dairyProduct);
        }
      }
      
      logDairy();



const animal = {
canJump: true
         };

const bird = Object.create(animal);

bird.canFly = true;
bird.hasFeathers = true;
  
function birdCan() {
    for (key of Object.keys(bird)) {
        console.log(key + ": " + bird[key])
    }
}

birdCan()


function animalCan() {
    for (key of Object.keys(bird)) {
        console.log(key + ": " + bird[key])
    }
    for (key of Object.keys(animal)) {
        console.log(key + ": " + animal[key])
    }
}

animalCan()

/*
function birdCan() {
    for (const [key, value] of Object.entries(bird)) {
      console.log(`${key}: ${value}`);
    }
  }
  
  birdCan();

  */

/*
  //can be checked on example.com 
  document.querySelector("h1");
  var h1=document.querySelector("h1");
  var arr=['Example Domain','First Click','Second Click','Third Click'];
  function handleClicks() {
    switch (h1.innerText) {
        case arr[0]:
            h1.innerText=arr[1];
            break;
        case arr[1]:
            h1.innerText=arr[2];
            break;
        case arr[2]:
            h1.innerText=arr[3];
            break;
        default:
            h1.innerText=arr[0];
    }
  }
  h1.addEventListener("click", handleClicks);
*/


class Animal {

}

class Dog extends Animal {
    constructor() {
        this.noise = "bark";
    }

    makeNoise() {
      return this.noise;
    }
}

class Wolf extends Dog {
    constructor() {
        super();
        this.noise = "growl";
    }
}

var result = new Wolf();
console.log(result.makeNoise());

