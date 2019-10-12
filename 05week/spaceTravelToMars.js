"use strict";

let assert = require("assert");

let jobTypes = {
  pilot: "MAV",
  mechanic: "Repair Ship",
  commander: "Main Ship",
  programmer: "Any Ship!"
};

class Ship {
  constructor(name, type, ability) {
    //template that accepts info for each ship
    this.name = name;
    this.type = type;
    this.ability = ability;
    this.crew = [];
  }

  missionStatement() {
    //function taht tests weather a ship can perform a mission, it needs at least 1 crew member
    if (this.crew.length < 1) {
      //if the crew array is less than one, that means there is no crew and the ship can't take off.
      return "Can't perform a mission yet.";
    } else return this.ability;
  }
}

class CrewMember {
  constructor(name, job, specialSkill) {
    //template that accepts info through the constructor to establish a CrewMember
    this.name = name;
    this.job = job;
    this.specialSkill = specialSkill;
    this.ship = null;
  }

  enterShip(Ship) {
    //Takes in Ship class into constructor
    this.ship = Ship; //Assigns ship value from Ship Class
    console.log("I am inside enter ship", this); //console log test to show which ship crew memeber is in.
    Ship.crew.push(this); // adds crew memeber to crew array, thus inrcreasing its length.
  }
}

// Your code here

//tests
if (typeof describe === "function") {
  describe("CrewMember", function() {
    it("should have a name, a job, a specialSkill and ship upon instantiation", function() {
      var crewMember1 = new CrewMember("Rick Martinez", "pilot", "chemistry");
      assert.equal(crewMember1.name, "Rick Martinez");
      assert.equal(crewMember1.job, "pilot");
      assert.equal(crewMember1.specialSkill, "chemistry");
      assert.equal(crewMember1.ship, null);
    });

    it("can enter a ship", function() {
      let mav = new Ship("Mars Ascent Vehicle", "MAV", "Ascend into low orbit");
      let crewMember1 = new CrewMember("Rick Martinez", "pilot", "chemistry");
      crewMember1.enterShip(mav);
      assert.equal(crewMember1.ship, mav); //does crew ship match ship
      assert.equal(mav.crew.length, 1); //does crew length or crew total equal one
      assert.equal(mav.crew[0], crewMember1); //does crew equal crewmember name
    });
  });

  describe("Ship", function() {
    it("should have a name, a type, an ability and an empty crew upon instantiation", function() {
      let mav = new Ship("Mars Ascent Vehicle", "MAV", "Ascend into low orbit");
      assert.equal(mav.name, "Mars Ascent Vehicle");
      assert.equal(mav.type, "MAV");
      assert.equal(mav.ability, "Ascend into low orbit");
      assert.equal(mav.crew.length, 0);
    });

    it("can return a mission statement correctly", function() {
      let mav = new Ship("Mars Ascent Vehicle", "MAV", "Ascend into low orbit");
      let crewMember1 = new CrewMember("Rick Martinez", "pilot", "chemistry");
      let hermes = new Ship(
        "Hermes",
        "Main Ship",
        "Interplanetary Space Travel"
      );
      let crewMember2 = new CrewMember(
        "Commander Lewis",
        "commander",
        "geology"
      );
      assert.equal(mav.missionStatement(), "Can't perform a mission yet.");
      assert.equal(hermes.missionStatement(), "Can't perform a mission yet.");

      crewMember1.enterShip(mav);
      assert.equal(mav.missionStatement(), "Ascend into low orbit");

      crewMember2.enterShip(hermes);
      assert.equal(hermes.missionStatement(), "Interplanetary Space Travel");
    });
  });
}
