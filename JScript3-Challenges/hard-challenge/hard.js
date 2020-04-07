// Hard Challenge

function pii(name, ssn) {
    let _name = name;
    let _ssn = ssn;
    return {
        getName() {
            return _name;
        }

    }
}
let me =pii("Kyle",123);
console.log(me.getName());