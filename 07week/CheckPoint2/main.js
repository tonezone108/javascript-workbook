"use strict";
const arrOfPeople = [
  //intial object storing the players.
  {
    id: 2,
    name: "Charles Young",
    age: 55,
    skillSet: "welding",
    placeBorn: "Omaha, Nebraska"
  },
  {
    id: 3,
    name: "Judy Twilight",
    age: 35,
    skillSet: "fishing",
    placeBorn: "Louisville, Kentucky"
  },
  {
    id: 4,
    name: "Cynthia Doolittle",
    age: 20,
    skillSet: "tic tac toe",
    placeBorn: "Pawnee, Texas"
  },
  {
    id: 5,
    name: "John Willouby",
    age: 28,
    skillSet: "pipe fitting",
    placeBorn: "New York, New York"
  },
  {
    id: 6,
    name: "Stan Honest",
    age: 20,
    skillSet: "boom-a-rang throwing",
    placeBorn: "Perth, Australia"
  },
  {
    id: 7,
    name: "Mia Watu",
    age: 17,
    skillSet: "acrobatics",
    placeBorn: "Los Angeles, California"
  },
  {
    id: 8,
    name: "Walter Cole",
    age: 32,
    skillSet: "jump rope",
    placeBorn: "New Orleans, Louisiana"
  }
];

//following objects will be used to stored the players.
const listOfPlayers = [];
const blueTeam = [];
const redTeam = [];

//classes will be used to assign new keys and values to the people pushed into it by the called function.
//player class will add more dogeball traits as new keys and values to the person object.
class Player {
  constructor(
    canThrowBall,
    canDodgeBall,
    hasPaid,
    isHealthy,
    yearsExperience,
    id,
    name,
    age,
    skillSet,
    placeBorn
  ) {
    this.canThrowBall = canThrowBall;
    this.canDodgeBall = canDodgeBall;
    this.haspaid = hasPaid;
    this.isHealthy = isHealthy;
    this.yearsExperience = yearsExperience;
    this.id = id;
    this.name = name;
    this.age = age;
    this.skillSet = skillSet;
    this.placeBorn = placeBorn;
  }
}
// teammate will take a player and assign either red team or blue team as new key and values.
class Teammate {
  constructor(redTeam, blueTeam) {
    this.redTeam = redTeam;
    this.blueTeam = blueTeam;
  }
}

//this function will lay out all the players on the html page when called by clicking on the list players button.
const listPeopleChoices = () => {
  const listElement = document.getElementById("people");
  arrOfPeople.map(person => {
    const li = document.createElement("li");
    const button = document.createElement("button");
    button.innerHTML = "Make Player";
    button.addEventListener("click", function() {
      makePlayer(person.id);
      var clickedButton = event.target;
      var clickedLi = clickedButton.parentElement;
      clickedLi.removeChild(clickedButton);
      var clickedLiParent = clickedLi.parentElement;
      clickedLiParent.removeChild(clickedLi);
    });

    li.appendChild(
      document.createTextNode(person.name + " - " + person.skillSet)
    );
    li.appendChild(button);
    listElement.append(li);
  });
  var clickedButton = event.target;
  var clickedLi = clickedButton.parentElement;
  clickedLi.removeChild(clickedButton);
};

//this function, when called on a event set up by the make player function,
// will take the person and add new dogeball traits to its key and values by calling the player class and then push into the listofPlayers array
const addPlayer = person => {
  let newAttributes = new Array(10);

  for (let i = 0; i < newAttributes.length - 1; i++) {
    let yesno = Math.random();
    if (yesno > 0.5) {
      newAttributes[i] = true;
    } else {
      newAttributes[i] = false;
    }
  }
  newAttributes[4] = Math.round(Math.random() * 10);
  newAttributes[5] = person.id;
  newAttributes[6] = person.name;
  newAttributes[7] = person.age;
  newAttributes[8] = person.skillSet;
  newAttributes[9] = person.placeBorn;

  let newPlayer = new Player(
    newAttributes[0],
    newAttributes[1],
    newAttributes[2],
    newAttributes[3],
    newAttributes[4],
    newAttributes[5],
    newAttributes[6],
    newAttributes[7],
    newAttributes[8],
    newAttributes[9]
  );
  listOfPlayers.push(newPlayer);
  console.log(listOfPlayers);
};

//this function will take a person from the list of people and move it into the players array while moving content on the html page.
//additionally this function will call the addPlayer function to specifically move the person into the player array and add new attributes.
const makePlayer = id => {
  console.log(id);
  const listElement = document.getElementById("players");
  arrOfPeople.forEach(person => {
    if (person.id == id) {
      let whichTeam = "";
      const li = document.createElement("li");
      const buttonBlue = document.createElement("button");
      buttonBlue.innerHTML = "Make Blue Player";
      buttonBlue.addEventListener("click", function() {
        var clickedButton = event.target;
        var clickedLi = clickedButton.parentElement;
        clickedLi.removeChild(clickedButton);
        var clickedLiParent = clickedLi.parentElement;
        clickedLiParent.removeChild(clickedLi);
        whichTeam = "Blue";
        makeTeammate(person.id, whichTeam);
      });

      const buttonRed = document.createElement("button");
      buttonRed.innerHTML = "Make Red Player";
      buttonRed.addEventListener("click", function() {
        var clickedButton = event.target;
        var clickedLi = clickedButton.parentElement;
        clickedLi.removeChild(clickedButton);
        var clickedLiParent = clickedLi.parentElement;
        clickedLiParent.removeChild(clickedLi);
        whichTeam = "Red";
        makeTeammate(person.id, whichTeam);
      });
      li.appendChild(buttonBlue);
      li.appendChild(buttonRed);
      li.appendChild(
        document.createTextNode(person.name + " - " + person.skillSet)
      );
      listElement.append(li);
      addPlayer(person); //adds the person to the player array.
    }
  });
  console.log(`make Player li ${id} was clicked!`);
  console.log("list of players ", listOfPlayers);

  //create code that creats player objects and adds them to the array.
};

//This function will be called by a event set up by the makeTeammate function and call the teammate class to add team keys and values to the player object
// and push into respective arrays.
const addTeammate = (person, whichTeam) => {
  if (whichTeam == "Red") {
    console.log("we found the person");
    person.team = "Red";
    redTeam.push(person);
  } else if (whichTeam == "Blue") {
    console.log("we found the person");
    person.team = "Blue";
    blueTeam.push(person);
  }
};
const makeTeammate = (id, whichTeam) => {
  //make a function to test for blue team and red team. Without manipulating.
  if (whichTeam == "Red") {
    //make a funciton that that passes id, and whichTeam that then pushes into respective arrays and then test that. Dont forget to make test object.
    console.log("on the red team");

    listOfPlayers.forEach(person => {
      const listElement = document.getElementById("red");

      if (person.id == id) {
        const li = document.createElement("li");
        li.appendChild(
          document.createTextNode(person.name + " - " + person.skillSet)
        );
        listElement.append(li);
        console.log(redTeam);
        addTeammate(person, whichTeam);
      }
    });
  } else if (whichTeam == "Blue") {
    console.log("on the blue team");

    listOfPlayers.forEach(person => {
      const listElement = document.getElementById("blue");
      if (person.id == id) {
        const li = document.createElement("li");
        li.appendChild(
          document.createTextNode(person.name + " - " + person.skillSet)
        );
        listElement.append(li);
        console.log(blueTeam);
        addTeammate(person, whichTeam);
      }
    });
  }
};
//Some tests
if (typeof describe === "function") {
  const assert = require("assert");
  describe("makePlayer()", () => {
    let singlePerson = {
      id: 3,
      name: "Judy Twilight",
      age: 35,
      skillSet: "fishing",
      placeBorn: "Louisville, Kentucky"
    };

    it("should detect a new player", () => {
      addPlayer(singlePerson);
      assert.equal(listOfPlayers[0].id, 3);
    });
  });
  describe("makeTeamate()", () => {
    let singlePerson1 = {
      id: 3,
      name: "Judy Twilight",
      age: 35,
      skillSet: "fishing",
      placeBorn: "Louisville, Kentucky"
    };
    let singlePerson2 = {
      id: 4,
      name: "Cynthia Doolittle",
      age: 20,
      skillSet: "tic tac toe",
      placeBorn: "Pawnee, Texas"
    };
    let whichTeam1 = "Red";
    let whichTeam2 = "Blue";

    it("should detect a new temmate for red", () => {
      addTeammate(singlePerson1, whichTeam1);
      assert.equal(redTeam[0].team, "Red");
    });
    it("should detect a new temmate for blue", () => {
      addTeammate(singlePerson2, whichTeam2);
      assert.equal(blueTeam[0].team, "Blue");
    });
  });
}

// if (typeof describe === "function") {
//   describe("#pigLatin()", () => {
//     it("should translate a simple word", () => {
//       assert.equal(pigLatin("car"), "arcay");
//       assert.equal(pigLatin("dog"), "ogday");
//     });
//     it("should translate a complex word", () => {
//       assert.equal(pigLatin("create"), "eatecray");
//       assert.equal(pigLatin("valley"), "alleyvay");
//     });
//   }
// }
