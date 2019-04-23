let names = ["Pavan", "Santhosh", "Shobhan"];

let employees = [...names];

console.log(employees);

function add(...attr) {
    console.log(attr);
    attr.forEach((n)=> {
        console.log(n);
        return 2+n;
    });
}

const addns = add(1,3,5,2,3,4,6);

console.log(addns);
