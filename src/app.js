//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

//Write your function here
function createManager(managerName, managerAge, currentTeam, trophiesWon){
  var Manager = [managerName, managerAge, currentTeam, trophiesWon]
  return Manager;
}

// Don't edit the following code
try {
  var manager = createManager(
    managerName,
    managerAge,
    currentTeam,
    trophiesWon
  );
} catch (e) {
  // do nothing - expected error
}

//Progression 2 - create a formation object and return it
var formation = [4, 4, 3];

//write your function here
function createFormation(formation){
  if(formation.length == 0){
    return null
  }
  var play = {
    defender: formation[0],
    midfield: formation[1],
    forward: formation[2]
  }
  return play
}

// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in ___ year

function filterByDebut(year){
  var filterData = players.filter(players => players.debut == year);
  return filterData;
}

//Progression 4 - Filter players that play at the position _______

function filterByPosition(position){
  var filterData = players.filter(players => players.position == position);
  return filterData;
}

//Progression 5 - Filter players that have won ______ award

function filterByAward(awardName){
  var filterData = [];
  for ( i=0; i<players.length; i++){
    for ( j=0; j<players[i].awards.length; j++){
      if(players[i].awards[j].name == awardName){
        filterData.push(players[i])
      }
    }
  }
  return filterData;
}

//Progression 6 - Filter players that won ______ award ____ times

function filterByAwardxTimes(awardName, noOfTimes){
  var filterData = [];
  var count = 0;
  for ( i=0; i<players.length; i++){
    for( j=0; j<players[i].awards.length; j++){
      if(players[i].awards[j].name == awardName){
        count++;
      }
    }
    if(count == noOfTimes){
      filterData.push(players[i]);
    }
    count = 0;
  }
  return filterData;
}

//Progression 7 - Filter players that won ______ award and belong to ______ country

function filterByAwardxCountry(awardName, country){
  var data = filterByAward(awardName);
  var filterData = data.filter(players => players.country == country);
  return filterData;
}

//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____

function filterByNoOfAwardsxTeamxAge(noOfAwards, team, age){
  var filterData = players.filter(players => (players.age < age && players.team == team && players.awards.length >= noOfAwards));
  return filterData;
}

//Progression 9 - Sort players in descending order of their age

function SortByAge() {
  for( i=0; i<players.length; i++ ){
    for( j=i+1; j<players.length; j++){
      if(players[i].age < players[j].age){
        temp = players[i];
        players[i] = players[j];
        players[j] = temp;
      }
    }
  }
}

//Progression 10 - Sort players beloging to _____ team in descending order of awards won

function FilterByTeamxSortByNoOfAwards(team){
  var count = 0;
  var filteredPlayers = [];
  for( i=0; i<players.length; i++ ){
    if(players[i].team == team){
      filteredPlayers[count++] = players[i];
    }
  }
  for( i=0; i<filteredPlayers.length; i++ ){
    for( j=i+1; j<filteredPlayers.length; j++){
      if(filteredPlayers[i].awards.length < filteredPlayers[j].awards.length){
        temp = filteredPlayers[i];
        filteredPlayers[i] = filteredPlayers[j];
        filteredPlayers[j] = temp;
      }
    }
  }
  return filteredPlayers;
}

//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names

function SortByNamexAwardxTimes(awardName, noOfTimes, country){
  var filterData = filterByAwardxTimes(awardName, noOfTimes);
  var filterTwo = filterData.filter(player => player.country == country);
  return filterTwo.sort(compare);
}
function compare(a,b){
  value = 0;
  if(a.name > b.name){
    value = 1;
  }
  else if( a.name < b.name ){
    value = -1; 
  }
  else{
    value = 0;
  }
}

//Challenge 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological order

function SortByNamexOlderThan(age){
  var sortedData = players.filter(player => player.age > age);
  return sortedData;
}