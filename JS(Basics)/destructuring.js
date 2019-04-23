var person = {
    name : "Pavan",
    age : 25,
    edu : "CSE",
    place : "Chitradurga",
    address() {
        console.log(`Hai I'm ${name} and I'm from ${place}`);
    }
}

var {name:dankanaka} = person;

console.log(dankanaka);


var names = ["Pavan", "Santhosh", "Shobhan"];

var [developer, architect, testingLead] = names;

console.log(`${developer}  ${architect}  ${testingLead}`);
