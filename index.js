function dwarfRollCall(dwarves) {
 var dwarveline = []
 for (var i=0; i<dwarves.length; i++)
 
 { dwarveline += (i+1).toString()+ ". " + dwarves[i] +" ";}
 return dwarveline;
}

function summonCaptainPlanet(planeteerCalls){
  var elements = []
  
  for (var i=0; i < planeteerCalls.length; i++){
  planeteerCalls[i] = planeteerCalls[i].toUpperCase();
  elements.push(planeteerCalls[i] + "!");}
  
  return elements
}

function longPlaneteerCalls(word) {
  var long = false;
  for (var i=0; i < word.length; i++){
    if (word[i].length > 4){
      long = true;
    }}
    return long;
  
}

function findTheCheese (food) {
  var cheese = ["cheddar", "gouda", "swiss", "camembert"]
  for (var i =0; i < food.length; i++){
    for (var x =0; x < cheese.length; x++){
      if (food[i]=== cheese[x]){
        return food[i]
      }
    }
  }
  return "no cheese!"
}
function wordsb (names){
  var startb =[]
  for (var i=0; i< names.length; i++){
    for (var j=0; j < startb.length; j++){
      
    }
}
