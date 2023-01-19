/************************************************************
Implement the following in the problems/10-party-planner.js file.

Create a PartyPlanner class.
A newly instantiated instance should have its guestList property initialized to an empty array.
Add two instance methods:
a. addToGuestList(name) - add the name to the guestList
b. throwParty() - return a different string depending on the length of the guestList:
If there are no guests, return "Gotta add people to the guest list"
If there are guests in the guestList, return the guests' names. For example,
if there are two guests, return "Welcome to the party ${name1} and ${name2}".
***********************************************************/
class PartyPlanner{
	constructor(guestList=[]){
		this.guestList = guestList
	}
	addToGuestList(name){
		this.guestList.push(name)
		return
	}
	throwParty(){
		if(this.guestList.length ===0 ){return `Gotta add people to the guest list`}

		return `Welcome to the party ${this.guestList.join(' and ')}`
		// return this.guestList.forEach(ele=> `Welcome to the party ${ele}`)
		// if(this.guestList.length ===1){return `Welcome to the party ${this.guestList[0]}`}

	}
}
const party = new PartyPlanner();

console.log(party.throwParty()); // prints "Gotta add people to the guest list"

party.addToGuestList("James");
console.log(party.throwParty()); // prints "Welcome to the party James"

party.addToGuestList("Alvin");
console.log(party.throwParty()); // prints "Welcome to the party James and Alvin"
/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
	module.exports = PartyPlanner;
} catch {
	module.exports = null;
}
